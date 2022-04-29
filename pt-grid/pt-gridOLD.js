

/* Save Bot
******************************************************************/
function saveBOT1() {
  $('button').on('click', function() {
    var value = $('#bot1').val();
  
    chrome.storage.sync.set({'bot1': value}, function() { 
      console.log('Bot 1 Saved!'); 
      setTimeout(addBOT, 1000);
    });
  });
}

/* Restore Bot
******************************************************************/
function restoreBOT1() {
  var input = $('#bot1');
  chrome.storage.sync.get('bot1', function(data) { 
    $(input).val(data.bot1); 
    setTimeout(addBOT, 1000);
  });
}

/* Add Bot
******************************************************************/
function addBOT() {
  $('button').each(function (){
    var button  = $(this);
    var value   = $(this).siblings("input").val();
    var bot 	  = `<iframe src="${value}" frameborder="0"></iframe>`;

    button.on('click', function() {
      $(this).closest('article').append(bot);
    });
  });
}

/* Load Bot
******************************************************************/
function loadBOTS() {
  $('input').each(function (){
    var value = $(this).val();
    var bot 	= `<iframe src="${value}" frameborder="0"></iframe>`;
    
    $(this).closest('article').append(bot);
  });
}

restoreBOT1();
saveBOT1();



setTimeout(loadBOTS, 1000);
