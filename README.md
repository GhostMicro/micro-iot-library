# 📚 GhostLibrary V1 (Centralized Hub)

**The Official Library Repository for the GhostMicro Ecosystem.**

![GhostLibrary Preview](public/preview.png)

This centralized hub provides a curated, verified, and stylized collection of Arduino/ESP32 libraries essential for GhostMicro projects. It ensures compatibility and eliminates the "hunting for drivers" phase.

## 🌟 Key Features

- **Curated Selection**: Only verified libraries that work with our `micro-iot-gen` engine.
- **Neon Glassmorphism UI**: Beautiful, futuristic interface consistent with our Design Language.
- **One-Click Download**: Direct access to `.zip` files ready for Arduino IDE.
- **Categorized**: organized by Sensors, Displays, Actuators, and Protocols.

## 🚀 Getting Started

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/gridsmicro/micro-iot-library.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```

### Usage
- Open [http://localhost:3000](http://localhost:3000).
- Browse or search for the required library (e.g., "PZEM").
- Click **Download** to get the zip file.
- Install in Arduino IDE: `Sketch > Include Library > Add .ZIP Library`.

## 📦 Included Libraries

| Category    | Library            | Purpose               |
| :---------- | :----------------- | :-------------------- |
| **Sensor**  | `Adafruit_BME280`  | Atmosphere monitoring |
| **Power**   | `PZEM-004T v3`     | Energy monitoring     |
| **Display** | `Adafruit_SSD1306` | OLED Screens          |
| **Network** | `PubSubClient`     | MQTT Communication    |
| **Data**    | `ArduinoJson 7`    | JSON Parsing (Core)   |

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + Framer Motion
- **Design**: GhostMicro Neon Glass Theme

---
*GhostMicro Corp &copy; 2026*
