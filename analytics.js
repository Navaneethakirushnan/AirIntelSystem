function initializeAnalytics() {

    updateAnalytics();

    setInterval(updateAnalytics, 2000);

}


function updateAnalytics() {

    const data =
        getSystemData();


    const dailyLoss =
        data.loss * 1440;


    const monthlyLoss =
        dailyLoss * 30;


    document.getElementById("dailyLoss")
        .innerText =
        dailyLoss.toLocaleString() +
        " L";


    document.getElementById("monthlyLoss")
        .innerText =
        monthlyLoss.toLocaleString() +
        " L";


    document.getElementById("energyValue")
        .innerText =
        data.energy.toFixed(1) +
        " kW";


    /*
        Prototype estimation only.
        The final implementation should use
        actual compressor efficiency, operating
        hours and site-specific electricity tariff.
    */

    const estimatedCost =
        data.energy * 24 * 8;


    document.getElementById("costValue")
        .innerText =
        "₹" +
        Math.round(estimatedCost) +
        " / day";


    document.getElementById("lossDisplay")
        .innerText =
        data.loss +
        " L/min";

}


function activateAnalyticsLeak() {

    activateLeak();

    updateAnalytics();

}


function resetAnalytics() {

    deactivateLeak();

    updateAnalytics();

}