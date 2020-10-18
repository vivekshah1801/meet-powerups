console.log("content mutation script loaded")

var dom_observer = new MutationObserver(function(mutations) {
    mutations.forEach(mutation=>{
        if (mutation && (mutation.type == "childList") && (mutation.addedNodes.length == 1) && (mutation.removedNodes.length==0) && mutation.addedNodes[0].tagName=="DIV")
        {
            let node = mutation.addedNodes[0];
            if(node)
            {            
                // if(node.dataset.senderName)
                // {
                //     textnode = node.querySelector("[data-message-text]")
                //     console.log(textnode.dataset.messageText)
                // }
                // else if(node.dataset.messageText)
                // {
                //     console.log(node.dataset.messageText)
                // }

                if(node.dataset.senderName){
                    node = node.querySelector("[data-message-text]")
                }
                
                if(node.dataset && node.dataset.messageText)
                {
                    message = node.dataset.messageText
                    console.log(message)
                    if (message!=""
                        && 
                        (
                            message.startsWith("https://firebasestorage.googleapis.com")
                            || message.endsWith(".png") 
                            || message.endsWith(".jpg")
                            || message.endsWith(".jpeg")
                            || message.endsWith(".webp")
                        )
                    ){
                        a = document.createElement("a")
                        a.href = message
                        a.target = "_blank"
                        img = document.createElement("img")
                        img.alt = message
                        img.src = message
                        img.style = "width:300px !important"
                        a.appendChild(img)
                        node.parentNode.replaceChild(a, node)
                    }
                }
            }
        }
    })
});

var container = document.documentElement || document.body;
var config = { childList: true, subtree:true };

dom_observer.observe(container, config);

