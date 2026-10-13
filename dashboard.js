let dashboardChart;


function startDashboard() {

    updateDashboard();

    createDashboardChart();

    setInterval(updateDashboard, 2000);

}


function updateDashboard() {

    const data = getSystemData();


    document.getElementById("pressureValue")
        .innerText =
        data.pressure.toFixed(2);


    document.getElementById("flowValue")
        .innerText =
        Math.round(data.flow);


    document.getElementById("lossValue")
        .innerText =
        data.loss;


    document.getElementById("anomalyValue")
        .innerText =
        data.anomaly + " / 100";


    const status =
        document.getElementById("systemStatus");


    if (isLeakActive()) {

        status.innerText = "LEAK DETECTED";
        status.className = "kpi-value red";

        document.getElementById("statusSub")
            .innerText =
            "Zone 03 · Node N6";

    } else {

        status.innerText = "NORMAL";
        status.className = "kpi-value green";

        document.getElementById("statusSub")
            .innerText =
            "All monitored zones normal";

    }

}


function createDashboardChart() {

    const canvas =
        document.getElementById("dashboardChart");

    if (!canvas) return;


    const labels = [];
    const pressure = [];
    const flow = [];


    for (let i = 0; i < 20; i++) {

        labels.push(i + 1);

        pressure.push(
            7.15 + Math.random() * .1
        );

        flow.push(
            475 + Math.random() * 20
        );

    }


    dashboardChart =
        new Chart(canvas, {

            type: "line",

            data: {

                labels,

                datasets: [

                    {
                        label: "Pressure (bar)",
                        data: pressure,
                        borderWidth: 2,
                        tension: .35,
                        yAxisID: "p"
                    },

                    {
                        label: "Flow (L/min)",
                        data: flow,
                        borderWidth: 2,
                        tension: .35,
                        yAxisID: "f"
                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                scales: {

                    x: {
                        ticks: {
                            color: "#687482"
                        },
                        grid: {
                            color: "#151c24"
                        }
                    },

                    p: {

                        position: "left",

                        min: 6.5,
                        max: 7.6,

                        ticks: {
                            color: "#687482"
                        },

                        grid: {
                            color: "#151c24"
                        }

                    },

                    f: {

                        position: "right",

                        min: 350,
                        max: 650,

                        ticks: {
                            color: "#687482"
                        },

                        grid: {
                            drawOnChartArea: false
                        }

                    }

                }

            }

        });


    setInterval(updateDashboardChart, 2000);

}


function updateDashboardChart() {

    if (!dashboardChart) return;


    const data = getSystemData();

    const pressure =
        isLeakActive()
            ? data.pressure
            : 7.15 + Math.random() * .1;

    const flow =
        isLeakActive()
            ? data.flow
            : 475 + Math.random() * 20;


    dashboardChart.data.labels.push(
        dashboardChart.data.labels.length + 1
    );

    dashboardChart.data.datasets[0]
        .data.push(pressure);

    dashboardChart.data.datasets[1]
        .data.push(flow);


    if (dashboardChart.data.labels.length > 20) {

        dashboardChart.data.labels.shift();

        dashboardChart.data.datasets[0]
            .data.shift();

        dashboardChart.data.datasets[1]
            .data.shift();

    }


    dashboardChart.update();

}


function triggerDashboardLeak() {

    activateLeak();

    updateDashboard();

}


function resetDashboard() {

    deactivateLeak();

    updateDashboard();

}