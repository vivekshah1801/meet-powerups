console.log("content mutation script loaded")

var dom_observer = new MutationObserver(function(mutations) {
    mutations.forEach(mutation=>{
        if (mutation && (mutation.type == "childList") && (mutation.addedNodes.length == 1) && (mutation.removedNodes.length==0) && mutation.addedNodes[0].tagName=="DIV")
        {
            let node = mutation.addedNodes[0];
            if(node)
            {            
                // console.log(node)
                if(node.dataset.senderName)
                {
                    textnode = node.querySelector("[data-message-text]")
                    console.log(textnode.dataset.messageText)
                }
                else if(node.dataset.messageText)
                {
                    console.log(node.dataset.messageText)
                }
            }
        }
    })
});

var container = document.documentElement || document.body;
var config = { childList: true, subtree:true };

dom_observer.observe(container, config);

