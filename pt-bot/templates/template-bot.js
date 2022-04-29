const bot = `
<article class="current folder-bot">

<!-- BOT INFO
█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<section class="bot-info">
    <div class="item folder-tab">
        <span class="item bot-name" data-update=".footer .footer-link .full-text">--</span>

        <span class="item bot-badge buylog-number" data-update="#topPossibleBuyLogLength">--</span>
        <span class="item bot-badge pairslog-number" data-update="#topPairsLogLength">--</span>
        <span class="item bot-badge dcalog-number" data-update="#topDcLogLength">--</span>
        <span class="item bot-badge salelog-number" data-update="#topSalesLogLength">--</span>
    </div>
    
    <div class="item bot-data">
        <div class="folder-icon icon-exchange">
            <span data-update="#apiExchange">--</span>
            <span>-</span>
            <span data-update="#apiMarket">--</span>
        </div>
        <div class="folder-icon icon-time" data-update="#dvUptime">--</div>
    </div>
</section>

<!-- BOT STATS
█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<section class="bot-stats">

    <!-- TOTAL CURRENT VALUE
    ███████████████████████████████████████████████████ -->
    <div class="current-value folder-icon icon-market">
        <span id="botTotalCurrentValue" class="market-price market-btc">--</span>
        <span class="fiat-price" data-update="#mTCVUSDValue">--</span>
        <span class="stat-text">Total Current Value</span>
    </div>

    <!-- TOTAL CURRENT PROFIT
    ███████████████████████████████████████████████████ -->
    <div class="total-stats bot-stat">
        <span id="totalProfitFiatPrice" class="fiat-price">--</span>
        <span id="totalProfitPercentage" class="percentage-price folder-icon icon-arrow">--</span>
        <span>
            <span class="stat-text">Total Profit</span>
            <span class="stat-trades" data-update="#topSalesLogLength">--</span>
        </span>
    </div>
    
    <!-- PROFIT STATS
    ███████████████████████████████████████████████████ -->
    <div class="profit-stats">
        <p class="bot-stat folder-icon icon-arrow">
            <span class="stat-wrapper">
                <span class="fiat-price" data-update="#mTodayProfitUSDValue">--</span>
                <span class="market-price market-btc percentage-price" data-update="#mTodayProfitPercent">--</span>
            </span>
            <span class="stat-wrapper">
                <span class="stat-text">Profit Today</span>
                <span class="stat-trades" data-update="#topPossibleBuyLogLength">--</span>
            </span>
        </p>
        <p class="bot-stat folder-icon icon-arrow">
            <span class="stat-wrapper">
                <span class="fiat-price" data-update="#mYesterdayProfitUSDValue">--</span>
                <span class="market-price market-btc percentage-price" data-update="#mYesterdayProfitPercent">--</span>
            </span>
            <span class="stat-wrapper">
                <span class="stat-text">Profit Yesterday</span>
                <span class="stat-trades" data-update="#topPairsLogLength">--</span>
            </span>
        </p>
        <p class="bot-stat folder-icon icon-arrow">
            <span class="stat-wrapper">
                <span class="fiat-price" data-update="#mLastWeekProfitUSDValue">--</span>
                <span class="market-price market-btc percentage-price" data-update="#mLastWeekProfitPercent">--</span>
            </span>
            <span class="stat-wrapper">
                <span class="stat-text">Profit Last 7 Days</span>
                <span class="stat-trades" data-update="#topDcLogLength">--</span>
            </span>
        </p>
    </div>

</section>

<!-- BOT SETTINGS
█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<section class="bot-settings">
    
    <!-- graphic -->
    <i class="folder-icon icon-settings"></i>
    
    <!-- title -->
    <section class="title-container">
        <div class="title">
            <h3 data-update="#nSelectedConfig"></h3>
            <div class="settings-type"></div>
        </div> 
        <div class="graph">
            <i class="meter"></i>
        </div>
    </section>
    
    <!-- percent -->
    <!-- <b class="percent">0</b> -->
</section>


</article>`;