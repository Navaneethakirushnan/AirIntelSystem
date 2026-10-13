function initializeNetwork() {

    updateNetwork();

    createNodeTable();

    document.querySelectorAll(".sensor")
        .forEach(sensor => {

            sensor.addEventListener("click", () => {

                const id =
                    sensor.dataset.node;

                showNode(id);

            });

        });

}


function showNode(id) {

    const node =
        getNodeData(id);

    if (!node) return;


    document.getElementById("selectedNode")
        .innerText = node.id;

    document.getElementById("selectedZone")
        .innerText = node.zone;

    document.getElementById("selectedPressure")
        .innerText =
        node.pressure.toFixed(2) + " bar";

    document.getElementById("selectedFlow")
        .innerText =
        node.flow + " L/min";

    document.getElementById("selectedDeviation")
        .innerText =
        node.deviation + "%";

}


function updateNetwork() {

    const leak =
        isLeakActive();


    document.querySelectorAll(".sensor")
        .forEach(sensor => {

            sensor.classList.remove("danger");

        });


    document.querySelectorAll(".network-zone")
        .forEach(zone => {

            zone.style.borderColor = "";
            zone.style.boxShadow = "";

        });


    if (leak) {

        const n6 =
            document.querySelector(
                '[data-node="N6"]'
            );

        if (n6) {

            n6.classList.add("danger");

        }


        const zone3 =
            document.querySelector(".zone-c");

        if (zone3) {

            zone3.style.borderColor =
                "#f87171";

            zone3.style.boxShadow =
                "0 0 20px rgba(248,113,113,.15)";

        }

    }

}


function createNodeTable() {

    const table =
        document.getElementById("nodeTable");

    if (!table) return;


    table.innerHTML = "";


    AirGuard.nodes.forEach(node => {

        const current =
            getNodeData(node.id);


        const row =
            document.createElement("tr");


        const status =
            isLeakActive() &&
            node.id === "N6"
                ? `<span class="badge badge-danger">LEAK</span>`
                : `<span class="badge badge-normal">NORMAL</span>`;


        row.innerHTML = `

            <td>${current.id}</td>

            <td>${current.zone}</td>

            <td>${current.pressure.toFixed(2)} bar</td>

            <td>${current.flow} L/min</td>

            <td>${current.deviation}%</td>

            <td>${status}</td>

        `;


        table.appendChild(row);

    });

}


function simulateNetworkLeak() {

    activateLeak();

    updateNetwork();

    createNodeTable();

}


function resetNetwork() {

    deactivateLeak();

    updateNetwork();

    createNodeTable();

}