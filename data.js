const AirGuard = {

    normal: {
        pressure: 7.20,
        flow: 482,
        loss: 0,
        anomaly: 8,
        energy: 0
    },

    leak: {
        pressure: 6.82,
        flow: 592,
        loss: 105,
        anomaly: 89,
        energy: 2.4,
        zone: "ZONE 03",
        node: "N6"
    },

    nodes: [
        {
            id: "N1",
            zone: "ZONE 01",
            pressure: 7.30,
            flow: 118,
            deviation: 2
        },
        {
            id: "N2",
            zone: "ZONE 01",
            pressure: 7.20,
            flow: 121,
            deviation: 3
        },
        {
            id: "N3",
            zone: "ZONE 02",
            pressure: 7.20,
            flow: 119,
            deviation: 2
        },
        {
            id: "N4",
            zone: "ZONE 02",
            pressure: 7.30,
            flow: 124,
            deviation: 4
        },
        {
            id: "N5",
            zone: "ZONE 03",
            pressure: 7.20,
            flow: 116,
            deviation: 3
        },
        {
            id: "N6",
            zone: "ZONE 03",
            pressure: 7.20,
            flow: 120,
            deviation: 2
        },
        {
            id: "N7",
            zone: "ZONE 04",
            pressure: 7.30,
            flow: 123,
            deviation: 3
        },
        {
            id: "N8",
            zone: "ZONE 04",
            pressure: 7.20,
            flow: 122,
            deviation: 2
        }
    ]
};


/*
    Shared state using browser localStorage.
    This allows every page to know whether
    the prototype is currently simulating a leak.
*/

function isLeakActive() {

    return localStorage.getItem("airguardLeak") === "true";

}


function activateLeak() {

    localStorage.setItem("airguardLeak", "true");

}


function deactivateLeak() {

    localStorage.setItem("airguardLeak", "false");

}


function getSystemData() {

    if (isLeakActive()) {

        return {
            ...AirGuard.leak
        };

    }

    return {
        ...AirGuard.normal
    };

}


function getNodeData(nodeId) {

    const node =
        AirGuard.nodes.find(
            n => n.id === nodeId
        );

    if (!node) return null;

    const result = {
        ...node
    };

    if (isLeakActive() && nodeId === "N6") {

        result.pressure = 6.72;
        result.flow = 178;
        result.deviation = 43;

    }

    return result;

}