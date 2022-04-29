const list = `
<ul class="bot-data">
    
    <!-- BOT INFO
    █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
    <li class="bot-info-text">
        <strong>Bot Name</strong>
        <span data-update=".footer .footer-link .full-text">--</span>
    </li>
    <li class="bot-info-text">
        <strong>Bot Version</strong>
        <span data-update="#mVersion">--</span>
    </li>
    <li class="bot-info-text">
        <strong>Exchange</strong>
        <span data-update="#apiExchange">--</span>
    </li>
    <li class="bot-info-text">
        <strong>Market</strong>
        <span data-update="#apiMarket">--</span>
    </li>
    <li class="separator bot-info-text">
        <strong>Up Time</strong>
        <span data-update="#dvUptime">--</span>
    </li>

    
    <!-- BOT PAGES
    █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
    <li class="bot-info-text">
        <strong>Possible Buy Log</strong>
        <span data-update="#topPossibleBuyLogLength">--</span>
    </li>
    <li class="bot-info-text">
        <strong>Pairs</strong>
        <span data-update="#topPairsLogLength">--</span>
    </li>
    <li class="bot-info-text">
        <strong>DCA</strong>
        <span data-update="#topDcLogLength">--</span>
    </li>
    <li class="bot-info-text">
        <strong>Pending</strong>
        <span data-update="#topPendingLogLength">--</span>
    </li>
    <li class="bot-info-text">
        <strong>Buy</strong>
        <span data-update="#topBuyLogLength">--</span>
    </li>
    <li class="bot-info-text">
        <strong>Sales</strong>
        <span data-update="#topSalesLogLength">--</span>
    </li>
    <li class="separator bot-info-text">
        <strong>Dust</strong>
        <span data-update="#topDustLogLength">--</span>
    </li>

    <!-- START BALANCE
    █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
    <li class="start-balance-text">
        <strong>Start Balance (Ƀ)</strong>
        <span data-update="#mStartBalance">--</span>
    </li>
    <li class="separator start-balance-text">
        <strong>Start Balance ($)</strong>
        <span data-update="#mTPVUSDValue">--</span>
    </li>


    <!-- CURRENT VALUE
    █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
    <li class="current-value-text">
        <strong>Total Current Value (Ƀ)</strong>
        <span data-update="#mTotalCurrentVal">--</span>
    </li>
    <li class="separator current-value-text">
        <strong>Total Current Value ($)</strong>
        <span data-update="#mTCVUSDValue">--</span>
    </li>


    <!-- TOTAL PROFIT
    █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
    <li class="total-profit-text">
        <strong>Total Profit (Ƀ)</strong>
        <span id="totalProfitMarketPrice">--</span>
    </li>
    <li class="total-profit-text">
        <strong>Total Profit ($)</strong>
        <span id="totalProfitFiatPrice">--</span>
    </li>
    <li class="separator total-profit-text">
        <strong>Total Profit (%)</strong>
        <span id="totalProfitPercentage">--</span>
    </li>


    <!-- PROFIT STATS
    █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
    <li class="profit-stats-text">
        <strong>Todays Profit ($)</strong>
        <span data-update="#mTodayProfitUSDValue">--</span>
    </li>
    <li class="profit-stats-text">
        <strong>Todays Profit (%)</strong>
        <span data-update="#mTodayProfitPercent">--</span>
    </li>
    <li class="profit-stats-text">
        <strong>Yesterdays Profit ($)</strong>
        <span data-update="#mYesterdayProfitUSDValue">--</span>
    </li>
    <li class="profit-stats-text">
        <strong>Yesterdays Profit (%)</strong>
        <span data-update="#mYesterdayProfitPercent">--</span>
    </li>
    <li class="profit-stats-text">
        <strong>Last 7 Days Profit ($)</strong>
        <span data-update="#mLastWeekProfitUSDValue">--</span>
    </li>
    <li class="separator profit-stats-text">
        <strong>Last 7 Days Profit (%)</strong>
        <span data-update="#mLastWeekProfitPercent">--</span>
    </li>

    <!-- BOT SETTINGS
    █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
    <li class="configuration-text">
        <strong>Settings</strong>
        <span data-update="#nSelectedConfig"></span>
    </li>
</ul>
`;