// chrome.runtime.onMessage.addListener(function (
//   request,
//   sender,
//   senderResponse
// ) {
//   console.log(request);
//   senderResponse({ popup: request, content: "hi there" });
// });

chrome.runtime.sendMessage({
  url: window.location.href,
  msg: "Hello",
});
