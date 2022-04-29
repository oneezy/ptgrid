function setup() {

  let userinput = $("#userinput");
  $(userinput).on('keyup', changeText);

  function changeText() {
    console.log("text changed");

    let params = {
      active: true,
      currentWindow: true
    }

    
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      console.log("got tabs");
      console.log(tabs);

      // send a message to content.html
      let message = userinput.val();
      let msg = {
        txt: userinput.val()
      };
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  }
}

setup();