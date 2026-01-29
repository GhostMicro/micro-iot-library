export interface TutorialSection {
    title: string;
    content: string;
}

export interface Project {
    slug: string;
    name: string;
    description: string;
    category: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    requirements: string[];
    components: string[];
    instructions: string[];
    sections?: TutorialSection[];
    code?: string;
    diagramUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        slug: 'esp32-web-server-outputs',
        name: 'ESP32 Web Server: Control Outputs',
        description: 'Learn how to build a simple web server with the ESP32 to control GPIOs from anywhere in your local network.',
        category: 'Web Server',
        difficulty: 'Beginner',
        requirements: ['ESP32 Add-on in Arduino IDE', 'Basic understanding of HTML/CSS'],
        components: ['ESP32 DevKit', '2x LEDs', '2x 220 Ohm Resistors', 'Breadboard', 'Jumper Wires'],
        instructions: [
            'Connect the LEDs to GPIO 26 and 27 through resistors.',
            'Copy the provided code to your Arduino IDE.',
            'Enter your WiFi credentials.',
            'Upload the code and open the Serial Monitor to find the IP address.'
        ],
        sections: [
            {
                title: 'Project Overview',
                content: 'This project creates a web server that hosts a simple web page. When you click buttons on the page, the ESP32 receives the request and toggles the state of the connected LEDs.'
            },
            {
                title: 'How it Works',
                content: 'The ESP32 uses the WiFi.h library to connect to your network. It then listens for incoming HTTP requests on port 80. When a client (like your phone or computer) connects, it serves a string containing HTML code.'
            }
        ],
        code: `#include <WiFi.h>

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

WiFiServer server(80);

void setup() {
  Serial.begin(115200);
  pinMode(26, OUTPUT);
  pinMode(27, OUTPUT);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) { delay(500); }
  server.begin();
}

void loop() {
  WiFiClient client = server.available();
  if (client) {
    // Handle HTTP requests here
  }
}`
    },
    {
        slug: 'esp32-dht-web-server',
        name: 'ESP32 DHT Web Server: Temp & Humidity',
        description: 'Monitor your environment in real-time. This project shows temperature and humidity readings on a web page.',
        category: 'Sensors',
        difficulty: 'Beginner',
        requirements: ['DHT Sensor Library', 'Adafruit Unified Sensor Library'],
        components: ['ESP32', 'DHT11 or DHT22', '10k Ohm Resistor'],
        instructions: [
            'Connect DHT DATA pin to GPIO 4.',
            'Install the required libraries in Arduino IDE.',
            'Upload the sketch and navigate to the IP address displayed.'
        ],
        sections: [
            {
                title: 'Hardware Setup',
                content: 'Connect the VCC to 3.3V, GND to GND, and Data pin to GPIO 4. If using a DHT22 without a built-in resistor, add a 10k resistor between VCC and Data.'
            }
        ],
        code: `#include "DHT.h"
#define DHTPIN 4
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  dht.begin();
}`
    },
    {
        slug: 'esp32-mqtt-adafruit-io',
        name: 'ESP32 MQTT: Connect to Adafruit IO',
        description: 'Send sensor data to the cloud using MQTT. Learn how to integrate ESP32 with Adafruit IO dashboards.',
        category: 'Cloud/IoT',
        difficulty: 'Intermediate',
        requirements: ['Adafruit IO Account', 'Adafruit MQTT Library'],
        components: ['ESP32', 'Any sensor (e.g., Potentiometer)'],
        instructions: [
            'Create an account on Adafruit IO.',
            'Create a new feed and dashboard.',
            'Configure your AIO Key and Username in the code.',
            'Publish data every 10 seconds.'
        ],
        sections: [
            {
                title: 'MQTT Protocol',
                content: 'MQTT is a lightweight messaging protocol for small sensors and mobile devices, optimized for high-latency or unreliable networks.'
            }
        ]
    },
    {
        slug: 'esp32-deep-sleep-timer',
        name: 'ESP32 Deep Sleep: Power Management',
        description: 'Optimize power consumption by putting the ESP32 into deep sleep and waking it up with a timer.',
        category: 'Power Management',
        difficulty: 'Intermediate',
        requirements: ['ESP32 Power consumption basics'],
        components: ['ESP32', 'Multimeter (optional for testing)'],
        instructions: [
            'Define the sleep duration in microseconds.',
            'Call the deep sleep function in your loop.',
            'Observe the low power state using a multimeter.'
        ],
        sections: [
            {
                title: 'Why Deep Sleep?',
                content: 'In deep sleep mode, the ESP32 consumes only a few microamps, making it ideal for battery-powered IoT nodes.'
            }
        ],
        code: `#define uS_TO_S_FACTOR 1000000ULL
#define TIME_TO_SLEEP  5 

void setup(){
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  esp_deep_sleep_start();
}`
    },
    {
        slug: 'esp32-esp-now-intro',
        name: 'ESP-NOW: Peer-to-Peer Communication',
        description: 'Communicate between two ESP32 boards without the need for a WiFi router.',
        category: 'Communication',
        difficulty: 'Intermediate',
        requirements: ['Two ESP32 boards'],
        components: ['2x ESP32'],
        instructions: [
            'Find the MAC address of the receiver.',
            'Configure the sender with the receivers MAC address.',
            'Register callback functions for sending/receiving.'
        ],
        sections: [
            {
                title: 'What is ESP-NOW?',
                content: 'ESP-NOW is a connectionless communication protocol developed by Espressif that enables short packet transmission between ESP boards.'
            }
        ]
    },
    {
        slug: 'esp32-cam-surveillance',
        name: 'ESP32-CAM: Video Streaming Server',
        description: 'Turn your ESP32-CAM into a surveillance camera with a web interface for real-time video streaming.',
        category: 'Video',
        difficulty: 'Advanced',
        requirements: ['ESP32-CAM Board', 'FTDI Programmer'],
        components: ['ESP32-CAM', 'FTDI Adapter', 'Female-to-Female Jumpers'],
        instructions: [
            'Connect ESP32-CAM to FTDI (VCC to 5V, GND to GND, TX to RX, RX to TX).',
            'Select "AI Thinker ESP32-CAM" in Board Manager.',
            'GPIO 0 must be connected to GND for flashing.',
            'Remove GPIO 0 from GND after uploading to run.'
        ],
        sections: [
            {
                title: 'Camera Configuration',
                content: 'The ESP32-CAM has a specialized library "esp_camera.h" that handles the initialization and frame capture from the OV2640 module.'
            }
        ]
    },
    {
        slug: 'esp32-lora-long-range',
        name: 'ESP32 LoRa: Long Range Communication',
        description: 'Send data over kilometers with low power using LoRa transceivers (RFM95/SX1276).',
        category: 'Communication',
        difficulty: 'Advanced',
        requirements: ['2x LoRa Modules', 'LoRa Library'],
        components: ['2x ESP32', '2x RFM95 Modules', '2x Antennas'],
        instructions: [
            'Wire the RFM95 to ESP32 SPI pins (SCK, MISO, MOSI, CS).',
            'Connect NSS, RST, and DIO0 pins.',
            'Ensure you use the correct frequency (e.g., 433MHz or 868MHz).'
        ],
        sections: [
            {
                title: 'LoRa Modulation',
                content: 'LoRa (Long Range) is a spread spectrum modulation technique derived from chirp spread spectrum (CSS) technology.'
            }
        ]
    },
    {
        slug: 'esp32-ble-server-scanner',
        name: 'ESP32 BLE: Scanner and Client',
        description: 'Discover nearby Bluetooth Low Energy devices and read their services.',
        category: 'Communication',
        difficulty: 'Intermediate',
        requirements: ['BLE Basics'],
        components: ['ESP32'],
        instructions: [
            'Initialize the BLE device name.',
            'Start the BLE scan.',
            'Identify services by UUID.'
        ],
        sections: [
            {
                title: 'BLE vs Classic',
                content: 'BLE is designed for low power consumption, while maintaining a similar communication range to Classic Bluetooth.'
            }
        ]
    },
    {
        slug: 'esp32-spiffs-data-logging',
        name: 'ESP32 SPIFFS: Logging Data to Flash',
        description: 'Store sensor readings and configuration files directly on the ESP32 internal flash memory.',
        category: 'Data Storage',
        difficulty: 'Intermediate',
        requirements: ['SPIFFS Library (deprecated in some versions, transition to LittleFS advised)'],
        components: ['ESP32'],
        instructions: [
            'Mount the SPIFFS filesystem.',
            'Open files in write/append mode to log data.',
            'Read files back to process logged information.'
        ],
        sections: [
            {
                title: 'Flash Memory',
                content: 'SPIFFS allows you to use the flash memory like a standard file system with folders and files.'
            }
        ]
    },
    {
        slug: 'esp32-littlefs-web-interface',
        name: 'ESP32 LittleFS: Web Form and Config',
        description: 'Create a web server where you can input settings that persist after a reboot using LittleFS.',
        category: 'Web Server',
        difficulty: 'Advanced',
        requirements: ['LittleFS for ESP32', 'ESPAsyncWebServer'],
        components: ['ESP32'],
        instructions: [
            'Create an index.html file saved in the LittleFS partition.',
            'Use GET/POST requests to send form data to the ESP32.',
            'Save parameters to a JSON or text file.'
        ],
        sections: [
            {
                title: 'Why LittleFS?',
                content: 'LittleFS is a small, fail-safe filesystem designed for microcontrollers, replacing the older SPIFFS.'
            }
        ]
    },
    {
        slug: 'esp32-fauxmo-alexa',
        name: 'ESP32 Alexa Control: Voice Automation',
        description: 'Control your lights and appliances with Alexa voice commands without using external clouds.',
        category: 'Home Automation',
        difficulty: 'Advanced',
        requirements: ['fauxmoESP Library', 'Amazon Alexa Device'],
        components: ['ESP32', 'Relay Module'],
        instructions: [
            'Add virtual devices in the code.',
            'Discover devices using the Alexa App or "Alexa, discover devices".',
            'Control via voice command: "Alexa, turn on the light".'
        ],
        sections: [
            {
                title: 'Local Emulation',
                content: 'fauxmoESP emulates a Belkin WeMo device, allowing local control from Amazon Alexa.'
            }
        ]
    },
    {
        slug: 'esp32-google-assistant-ifttt',
        name: 'ESP32 Google Assistant: via IFTTT',
        description: 'Connect Google Assistant to your ESP32 through IFTTT and Webhooks for global control.',
        category: 'Home Automation',
        difficulty: 'Intermediate',
        requirements: ['IFTTT Account', 'Google Home App'],
        components: ['ESP32'],
        instructions: [
            'Setup IFTTT with Google Assistant as the trigger.',
            'Use Webhooks as the action to send a request to your ESP32 (requires DDNS or Port Forwarding).',
            'Alternatively, use MQTT for a more reliable cloud connection.'
        ]
    },
    {
        slug: 'esp32-pir-motion-notifier',
        name: 'ESP32 PIR: Motion Email Notifier',
        description: 'Build a security system that sends an email notification when motion is detected.',
        category: 'Security',
        difficulty: 'Intermediate',
        requirements: ['ESP Mail Client Library', 'SMTP Account'],
        components: ['ESP32', 'PIR Motion Sensor', 'LED for status'],
        instructions: [
            'Wire PIR OUT to GPIO 13.',
            'Setup an SMTP server (like Gmail App Password).',
            'Configure the ESP32 to send an email on high signal from PIR.'
        ]
    },
    {
        slug: 'esp32-rfid-entry-system',
        name: 'ESP32 RFID: NFC Entry System',
        description: 'Control access to your room or office using RFID tags and an electronic strike.',
        category: 'Security',
        difficulty: 'Intermediate',
        requirements: ['MFRC522 Library'],
        components: ['ESP32', 'MFRC522 RFID Module', 'Electronic Lock/Relay'],
        instructions: [
            'Connect MFRC522 via SPI (SS: 5, RST: 22).',
            'Read the UID of your tags.',
            'Compare UID with a whitelist to trigger the relay.'
        ]
    },
    {
        slug: 'esp32-ble-environmental-beacon',
        name: 'ESP32 BLE: Environmental Beacon',
        description: 'Broadcast sensor data (Temp/Humidity) via BLE advertising packets without active connection.',
        category: 'Sensors',
        difficulty: 'Advanced',
        requirements: ['BLE Advertising knowledge'],
        components: ['ESP32', 'BME280 Sensor'],
        instructions: [
            'Gather BME280 data.',
            'Encode data into the BLE advertising payload.',
            'Scan with a mobile app (e.g., nRF Connect) to see live data.'
        ]
    }
];
