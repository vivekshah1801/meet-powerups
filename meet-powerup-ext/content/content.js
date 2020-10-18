console.log("content script loaded")
var health = "All Okay"

setUpFirebase()

const body = document.getElementsByTagName("body")[0]
body.addEventListener('paste', function(pasteEvent){
    if (pasteEvent.target.matches("textarea"))
    {
        handlePasteEvent(pasteEvent)
    }
})

// ***************
// ***Functions***
// ***************

function getMeetingCode(){
    if (window.location.host == "meet.google.com")
        return window.location.pathname.substring(1)
    return ""
}

function setUpFirebase(){
    // firebase config here
    var firebaseConfig = {
        //populate firebase config with your own credentials
    };
    

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics()
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL
}

function handlePasteEvent(pasteEvent){
    if(pasteEvent && pasteEvent.clipboardData && pasteEvent.clipboardData.items)
    {
        const clipitems = pasteEvent.clipboardData.items
        for(i=0;i<clipitems.length;i++)
        {
            if(clipitems[i].type.indexOf("image")!=-1)
            {
                let chatinputbox = document.getElementsByName("chatTextInput")[0]
                chatinputbox && (chatinputbox.value = "Image Uploading")
                // let submitButton = document.querySelectorAll("div[data-tooltip='Send message'][aria-label='Send a message to everyone']")[0]       
                // submitButton && (submitButton.ariaDisabled = true)
                handlePastedImage(clipitems[i].getAsFile())
                // submitButton && (submitButton.ariaDisabled = false)
                break
            }
        }
    }
}

function handlePastedImage(imageFile){
    // get data URL in console
    // console.log("Size:",imageFile.size)
    // const URL = window.URL || window.webkitURL
    // let img = new Image()
    // img.src = URL.createObjectURL(imageFile)
    // img.addEventListener('load',function(){
    //     console.log("datavov")
    // })

    // Uplaod to firebase
    let ref = firebase.storage().ref()
    let firebase_storage_path = "000-0000-000"
    let meetingCode = getMeetingCode()
    if (meetingCode != "")
        firebase_storage_path = meetingCode
    let timeAsFileId = Date.now()
    firebase_storage_path = firebase_storage_path + "/" + timeAsFileId + ".png"

    ref.child(firebase_storage_path).put(imageFile)
    .then(function(snapshot) {
        snapshot.ref.getDownloadURL()
        .then(firebaseFilePath=>{
            let payload = firebaseFilePath // getJSONPayload(firebaseFilePath)
            // console.log(payload)
            sendInChat(payload)
        })
    })
    .catch(error=>{
        console.log(error)
    });
}

function getJSONPayload(firebaseFilePath)
{
    let payload = {}
    payload["identity"] = "Meet-Powerups"
    payload["type"] = "png"
    payload["path"] = firebaseFilePath
    return payload
}

function sendInChat(payload){
    let chatinputbox = document.getElementsByName("chatTextInput")[0]
    if (chatinputbox){
        chatinputbox.value = payload
        let submitButton = document.querySelectorAll("div[data-tooltip='Send message'][aria-label='Send a message to everyone']")[0]       
        submitButton && submitButton.click()
    }
}
