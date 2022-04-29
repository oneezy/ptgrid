
/* Add class to body depending on URL
**********************************************/
function urlClasses() {
    switch (window.location.pathname) {
        case '/monitoring':         $('body').addClass('page-monitoring'); break;
        case '/possible-buys-log':  $('body').addClass('page-possible-buys-log'); break;
        case '/pairs-log':          $('body').addClass('page-pairs-log'); break;
        case '/dca-log':            $('body').addClass('page-dca-log'); break;
        case '/pending-log':        $('body').addClass('page-pending-log'); break;
        case '/buy-log':            $('body').addClass('page-buy-log'); break;
        case '/sales-log':          $('body').addClass('page-sales-log'); break;
        case '/dust-log':           $('body').addClass('page-dust-log'); break;
        case '/api-logs':           $('body').addClass('page-api-logs'); break;
        case '/config':             $('body').addClass('page-config'); break;
        case '/login':              $('body').addClass('page-login'); break;
        case '/logout':             $('body').addClass('page-logout'); break;
        case '/setup':              $('body').addClass('page-setup'); break;
        case '/changePassword':     $('body').addClass('page-changepassword'); break;
    }
}


/* Add bot to Profit Trailer
**********************************************/
function addBot() {
	$('body').append(bot);
}

/* Add unordered list (dev)
**********************************************/
function addList() {
	$('.container-fluid').prepend(list);
}

/* Update all values 
**********************************************/
function dataUpdate() {
  $('[data-update]').each(function (){
    var dataUPDATE = $(this).data("update");
    
      $(this).html($(dataUPDATE).text());
      removeDash();
      badgeClass();
  	
  });
}


/* Remove Dash
**********************************************/
function removeDash() {
    $('.folder-bot .bot-settings .title-container .title:contains("_")').each(function(){
        $(this).html($(this).html().split("_").join(" "));
    });
}

/* Add classes per use case
**********************************************/
function botClasses() {
    var bot = $(".footer .footer-link .full-text").text();
    var toast = $("#toast-container");
    var LEDyellow = $(".led-yellow-blink");
    var LEDgreen = $("#dv2LastUpdatedOn");
    var exchange = $("#apiExchange").text();
    var market = $("#apiMarket").text();
    var settings = $("#nSelectedConfig").text();

    // Bot
    if (bot == "ProfitTrailer") {
        $('.folder-bot').addClass('bot-profittrailer');
    } else {
        // Silence is golden.
    }

    // Status
    if ((toast.length >= 1) && (LEDgreen.css('display') == 'none') && (LEDyellow.css('display') == 'block')) {
        $('.folder-bot').removeClass('bot-on').addClass('bot-off');
    } else {
        // Silence is golden.
    }

    // Settings
    if ((settings.includes("Franken_Strategy")) || (settings.includes("Double_Cross")) || (settings.includes("Monte_Carlo"))) {
        $('.folder-bot').removeClass('settings-normal settings-bull').addClass('settings-bear');
    } else if ((settings.includes("El_Dorado")) || (settings.includes("El_Toro")) || (settings.includes("Old_Faithful"))) { 
        $('.folder-bot').removeClass('settings-bear settings-bull').addClass('settings-normal');
    } else if ((settings.includes("Jobbing_The_Market")) || (settings.includes("Golden_Cross")) || (settings.includes("Spanish_Cross"))) { 
        $('.folder-bot').removeClass('settings-normal settings-bear').addClass('settings-bull');
    } else {
        // Silence is golden.
    }

    // Market
    if (market == "BTC") {
        $('.folder-bot').addClass('market-btc');
    } else if (market == "ETH") {
        $('.folder-bot').addClass('market-eth');
    } else if (market == "LTC") {
        $('.folder-bot').addClass('market-ltc');
    } else if (market == "USDT") {
        $('.folder-bot').addClass('market-usdt');
    } else {
        // Silence is golden.
    }

    // exchange
    if (exchange == "BITTREX") {
        $('.folder-bot').addClass('exchange-bittrex');
    } else if (exchange == "BINANCE") {
        $('.folder-bot').addClass('exchange-binance');
    } else if (exchange == "POLONIEX") {
        $('.folder-bot').addClass('exchange-poloniex');
    } else if (exchange == "HUOBI") {
        $('.folder-bot').addClass('exchange-huobi');
    } else if (exchange == "KUCOIN") {
        $('.folder-bot').addClass('exchange-kucoin');
    } else {
        // Silence is golden.
    }

    // Profit Up/ Profit Down classes
    $('.folder-bot .bot-stats .fiat-price').each(function (){
        var price = $(this).text();
        var priceNum = parseFloat(price);

        if (priceNum <= 0) {
            $(this).closest('.bot-stat').removeClass('profitup').addClass('profitdown');

        } else if (priceNum >= 0) {
            $(this).closest('.bot-stat').removeClass('profitdown').addClass('profitup');
            
        } else {
            // Silence is golden.
        }
    });

}


/* Total Profit
**********************************************/
function totalProfit() {
    var startBalanceBTC      = parseFloat( $("#mStartBalance").text() );
    var totalCurrentValueBTC = parseFloat( $("#mTotalCurrentVal").text() );

    var startBalanceUSD = $("#mTPVUSDValue").text();
    var totalCurrentValueUSD = $("#mTCVUSDValue").text();

    var startBalanceUSDparsed = startBalanceUSD.replace(/\,/g,'');
        startBalanceUSDparsed = parseFloat(startBalanceUSDparsed);

    var totalCurrentValueUSDparsed = totalCurrentValueUSD.replace(/\,/g,'');
        totalCurrentValueUSDparsed = parseFloat(totalCurrentValueUSDparsed);

    var profitBTC       = (totalCurrentValueBTC - startBalanceBTC).toFixed(8);
    var profitUSD       = (totalCurrentValueUSDparsed - startBalanceUSDparsed).toFixed(2);
    var profitPERCENT   = ((profitBTC / startBalanceBTC) * 100).toFixed(2);

    $('#totalProfitMarketPrice').html(profitBTC);
    $('#totalProfitFiatPrice').html(profitUSD);
    $('#totalProfitPercentage').html(profitPERCENT);
}

/* Convert to number
**********************************************/
function stringToNumber() {
    var startBalanceBTC       = parseFloat( $("#mTotalCurrentVal").text() );
    var startBalanceBTCparsed = startBalanceBTC.toFixed(4);

    $('#botTotalCurrentValue').html(startBalanceBTCparsed);
}


/* Create "Active" class
**********************************************/
function activeClass() {
    $('.folder-bot .bot-stats .fiat-price').each(function (){
        var price = $(this);
        
        $(price).on('DOMSubtreeModified', price, function() { 
            $(this).addClass('active');

            setTimeout(function(){
                $(price).removeClass('active');
            },500);
        });
    });
}


/* Create "Active" class
**********************************************/
function badgeClass() {
    
    $('.folder-bot .bot-info .item.bot-badge').each(function (){
        var badge = $(this).text();
        var badgeNum = parseFloat(badge);

        if (badgeNum == 0) {
            $(this).addClass('inactive');

        } else if (badgeNum >= 0) {
            $(this).removeClass('inactive');
            
        } else {
            // Silence is golden.
        }
    });
}


/* Auto Update
**********************************************/
$(document).ready(function() {
    urlClasses();
    addBot();
    // addList();
    // activeClass();

    dataUpdate();
    stringToNumber();
    totalProfit();
    botClasses();

    setInterval(dataUpdate, 1000);
    setInterval(stringToNumber, 1000);
    setInterval(totalProfit, 1000);
    setInterval(botClasses, 1000);
});
