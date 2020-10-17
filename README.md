document.querySelectorAll("div[data-tooltip='Send message'][aria-label='Send a message to everyone']")[0]

const inputB = document.getElementsByName("chatTextInput")[0]

inputB.addEventListener('paste', function(){
    console.log("pasted something");
})


- Google Security policies and integrating firebase
- getting locations of elements
- getting image from the clipboard and sending it to firebase storage.