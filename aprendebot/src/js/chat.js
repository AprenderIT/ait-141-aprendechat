var isShowed = false;
function openForm() {
  if(this.isShowed){
    document.getElementById("myForm").style.display = "none";
    document.getElementById("dialog").style.display = "block";
    this.isShowed = false;
  } else{
    document.getElementById("myForm").style.display = "block";
    document.getElementById("dialog").style.display = "none";
    this.isShowed = true;
  }
}
window.WebChat = window.WebChat || {};
  let styleOptions = {
    hideSendBox: false,
    hideUploadButton: true,
    accent: '#292C63'
  };
  const store = window.WebChat.createStore(
    {},
    ({ dispatch }) => next => action => {
        var elmnt = document.getElementById("content");
        return next(action);
    }
  );
  const directLine = window.WebChat.createDirectLine({
    token: "[YOUR-TOKEN-HERE]",
    webSocket: false
  });
  directLine
    .postActivity({
      from: { id: "USER_ID", name: "USER_NAME" },
      name: "requestWelcomeDialog",
      type: "event",
      value: "token"
    })
    .subscribe(rest=>{
    });
 
  window.WebChat.renderWebChat(
    {
       directLine: directLine,
       store,
       userID: "USER_ID",
       styleOptions,
    },
    document.getElementById('webchat')
 );