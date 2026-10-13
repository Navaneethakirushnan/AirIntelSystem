let detectionChart;


function initializeDetection() {

    updateDetection();

    createDetectionChart();

    setInterval(updateDetection, 2000);

}


function updateDetection() {

    const data =
        getSystemData();


    document.getElementById("dPressure")
        .innerText =
        data.pressure.toFixed(2) +
        " bar";


    document.getElementById("dFlow")
        .innerText =
        Math.round(data.flow) +
        " L/min";


    document.getElementById("dScore")
        .innerText =
        data.anomaly +
        " / 100";


    if (isLeakActive()) {

        document.getElementById("detectionStatus")
            .innerText =
            "LEAKAGE DETECTED";

        document.getElementById("detectionStatus")
            .className =
            "status-value red";


        document.getElementById("dLocation")
            .innerText =
            "ZONE 03 · NODE N6";


        document.getElementById("dIndicator")
            .innerText =
            "● HIGH";

        document.getElementById("dIndicator")
            .className =
            "status-value red";


        document.getElementById("dExplanation")
            .innerText =
            "Pressure-flow behaviour has deviated " +
            "from the normal baseline. Neighbouring " +
            "nodes remain closer to expected values, " +
            "narrowing the probable leakage region to N6.";

    } else {

        document.getElementById("detectionStatus")
            .innerText =
            "NO LEAKAGE DETECTED";

        document.getElementById("detectionStatus")
            .className =
            "status-value green";


        document.getElementById("dLocation")
            .innerText =
            "—";


        document.getElementById("dIndicator")
            .innerText =
            "● NORMAL";

        document.getElementById("dIndicator")
            .className =
            "status-value green";


        document.getElementById("dExplanation")
            .innerText =
            "Sensor measurements are consistent " +
            "with the normal operating baseline.";

    }

}


function createDetectionChart() {

    const canvas =
        document.getElementById("detectionChart");

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


    detectionChart =
        new Chart(canvas, {

            type: "line",

            data: {

                labels,

                datasets: [

                    {
                        label: "Pressure",
                        data: pressure,
                        borderWidth: 2,
                        tension: .35,
                        yAxisID: "p"
                    },

                    {
                        label: "Flow",
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


    setInterval(updateDetectionChart, 2000);

}


function updateDetectionChart() {

    if (!detectionChart) return;


    const data =
        getSystemData();


    const pressure =
        isLeakActive()
            ? data.pressure
            : 7.15 + Math.random() * .1;


    const flow =
        isLeakActive()
            ? data.flow
            : 475 + Math.random() * 20;


    detectionChart.data.labels.push(
        detectionChart.data.labels.length + 1
    );

    detectionChart.data.datasets[0]
        .data.push(pressure);

    detectionChart.data.datasets[1]
        .data.push(flow);


    if (detectionChart.data.labels.length > 20) {

        detectionChart.data.labels.shift();

        detectionChart.data.datasets[0]
            .data.shift();

        detectionChart.data.datasets[1]
            .data.shift();

    }


    detectionChart.update();

}


function runDetection() {

    activateLeak();

    updateDetection();

}


function resetDetection() {

    deactivateLeak();

    updateDetection();

}