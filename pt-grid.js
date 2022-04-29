let iframe = `
    <iframe class="bot-iframe" frameborder="0" data-src></iframe> 

    <nav class="bot-controls">
      <a class="material-icons icon-controls bot-delete">delete</a>
      <!-- <a class="material-icons icon-controls bot-refresh">refresh</a> -->
      <!-- <a class="material-icons icon-controls bot-edit">edit</a> -->
      <a data-link target="_blank" class="material-icons icon-controls bot-launch">launch</a>
    </nav>`;


/* Data Bind
******************************************************************/
function dataBind() {
  $('.active-input [data-bind]').each(function (){
	  let input = $(this); 
    let bind = input.data("bind");
  
    // change keyup keydown mouseup mousedown paste click
    $(input).on('change ready', function() {
      $(".active [data-link='" +bind+ "']").attr( 'href', $(this).val() );
      $(".active [data-src='" +bind+ "']").attr( 'src', $(this).val() );
    });
  });

  console.log('data-bind fired');
}



/* Button
******************************************************************/
function addBOT() {
  $('.layer-button').each(function (){
    var button = $(this);
    var currentBot = button.closest('article');

    button.on('mouseover focus', function() {
      currentBot.addClass('hover-button');
    });

    button.on('mouseleave blur', function() {
      currentBot.removeClass('hover-button');
    });

    button.on('click', function() {
      currentBot.removeClass('active-button').addClass('active active-input');
      currentBot.find('input').focus();
      currentBot.find('.layer-iframe').html(iframe);
      dataBind();
      deleteBOT();
    });

  });
}


/* Inputs
******************************************************************/
function inputURL() {
  $('input').each(function (){
    var input = $(this);
    var value = input.val();
    var currentBot = input.closest('article');
    var activeBot = currentBot.hasClass('active-iframe');

    input.on('blur', function() {
      currentBot.removeClass('active active-input').addClass('active-button');
    });
    
    if (!value) {
      currentBot.removeClass('active-input').addClass('active-button');
    } 
    else if (value) {
      currentBot.removeClass('active-button').addClass('active-input');
    } 

    dataBind();
    deleteBOT();
    
  });
}



/* Create iFrame
******************************************************************/
function createIFRAME() {
  
  $('input').each(function (){
    var input = $(this);
    var currentBot = input.closest('article');

      $(input).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
          currentBot.removeClass('active-button active-input').addClass('active-iframe');
          dataBind();
          deleteBOT();
        }
      });
    
  });
}

/* Load iFrame
******************************************************************/
function loadIFRAME() {
  $('input').each(function (){
    var input = $(this);
    var value = input.val();
    var currentBot = input.closest('article');

    if(value) {
      currentBot.removeClass('active-button active-input').addClass('active-iframe');
      currentBot.find('.layer-iframe').html(iframe);
      currentBot.find("[data-link]").attr( 'href', value );
      currentBot.find("[data-src]").attr( 'src', value );
    }
    
  });
}

/* Delete Bot
******************************************************************/
function deleteBOT() {
  $('.bot-delete').each(function (){
    var deleteBOT = $(this);
    var currentBot = $(this).closest('article');

    deleteBOT.on('click', function() {
      currentBot.find('input').val('');
      currentBot.removeClass('active-iframe active-input').addClass('active-button');
      currentBot.find('.layer-iframe').html('');
    });
    
  });
}


/* Grid Blocks
******************************************************************/
function gridBLOCKS() {
  $('.grid-block').each(function (){
    var button = $(this);
    var blocks = $(this).data('blocks');
    var blockClass = 'blocks-' + blocks;
    var grid = $('.mini-bots');
    var bots = $('.mini-bots article');

    button.on('click', function() {
      button.addClass('selected');
      grid.attr('class', 'mini-bots ' + blockClass);

      if(grid.hasClass(blockClass)) {
        bots.show();
        $('.bot-' + blocks).nextAll().hide();
      } 
    });

    if(grid.hasClass(blockClass)) {
      bots.show();
      $('.bot-' + blocks).nextAll().hide();
    } 

  });
}

function toggleVIEWS() {

	$('.fab-container .main-fab').on('click', function() {
			$(this).parent().addClass('active');
	});
	$('.fab-container').on('mouseover', function() {
			$(this).addClass('active');
	});
	$('.fab-container').on('mouseout', function() {
			$(this).removeClass('active');
	});
	$('.fab-container .reveal-container .reveal-item').each(function (){
			var fabContainer = $('.fab-container');

			$(this).on('click', function() {
					fabContainer.removeClass('active');
			});
	});
}


/* Local Storage
******************************************************************/
// function saveLocalStorage() {
//   var values = [];
//   $("input").each(function (i, e) {
//       values.push(e.value);
//   });
//   localStorage.setItem('input_cache', JSON.stringify(values));
// }

// function restoreLocalStorage() {
//   var values = $.parseJSON(localStorage.getItem('input_cache'));
//   $("input").each(function (i, e) {
//       e.value = values[i];
//   });
// }


/* Run Functions...
******************************************************************/
  mdc.autoInit();
  loadIFRAME();
  addBOT();
  inputURL();
  createIFRAME();
  deleteBOT();
  gridBLOCKS();
  toggleVIEWS();


  