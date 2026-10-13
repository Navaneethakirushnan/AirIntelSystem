
# AirGuard | Compressed Air Intelligent System

**An industrial monitoring prototype for compressed-air leak detection, localization, and energy-loss estimation.**

AirGuard is a web-based prototype designed to help manufacturing plants understand compressed-air system behaviour, identify probable leakage regions, estimate abnormal air loss, and prioritize maintenance inspections.

## The Problem

Compressed-air systems are widely used in manufacturing, but undetected leaks can waste energy, increase electricity costs, and place additional workload on compressors. Manual inspections and periodic maintenance may not always identify the most significant leaks quickly.

## Our Solution

AirGuard presents a centralized monitoring dashboard that visualizes system pressure, network flow, estimated air loss, anomaly scores, and probable leak locations.

The goal is to help maintenance teams make more informed decisions by connecting leak detection with estimated impact and inspection priorities.

## Key Features

- **Dashboard:** Overview of system pressure, network flow, estimated air loss, and system status.
- **Network Monitoring:** Visual representation of four factory zones and eight monitoring nodes.
- **Leak Detection:** Demonstration of abnormal conditions and probable leakage localization.
- **Analytics:** Visualization of pressure and flow behaviour.
- **Alerts:** Interface for presenting detected abnormalities.
- **Simulation:** Test the dashboard using simulated leak conditions.

## Monitoring Architecture

The prototype represents a compressed-air distribution network with four zones:

| Zone | Factory Area | Monitoring Nodes |
|---|---|---|
| Zone 01 | Production | N1, N2 |
| Zone 02 | Assembly | N3, N4 |
| Zone 03 | Packaging | N5, N6 |
| Zone 04 | Utilities | N7, N8 |

The dashboard demonstrates how distributed monitoring nodes could help narrow down a probable leakage region.

## Technology Stack

- HTML5
- CSS3
- JavaScript
- Chart.js

## Getting Started

### Run Locally

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Navigate through the Dashboard, Network, Detection, Analytics, and Alerts pages.
5. Use the simulation controls to explore the prototype.

### Project Structure

```text
AirGuard/
├── index.html
├── network.html
├── detection.html
├── analytics.html
├── alerts.html
├── style.css
├── data.js
├── dashboard.js
├── network.js
├── detection.js
└── analytics.js
```

*The file list above represents the expected project structure; retain any additional files present in your actual repository.*

## Current Status

AirGuard is a functional web-based prototype demonstrating an approach to compressed-air monitoring and leakage localization.

The displayed measurements and leak conditions may be simulated. Physical sensor integration, industrial validation, and verified energy-savings measurements are not claimed as completed features.

## Future Scope

- Integration with pressure, flow, and ultrasonic sensors.
- Real-time data acquisition from industrial equipment.
- Improved anomaly detection and leakage localization.
- Estimation of energy and financial losses.
- Maintenance prioritization based on estimated impact.
- Validation in real manufacturing environments.

## Intended Impact

AirGuard aims to support more efficient compressed-air management, reduce avoidable energy waste, and help manufacturing teams make data-informed maintenance decisions.

**Focus Areas:** Industrial Automation · Energy Efficiency · Predictive Maintenance · Sustainability

---

*AirGuard is a prototype developed to explore intelligent compressed-air monitoring and leak management.*
