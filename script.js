// Function to display device memory
function displayMemory() {
    if (navigator.deviceMemory) {
        const memory = navigator.deviceMemory; // in GB
        document.getElementById('memory').innerText = `Device Memory: ${memory} GB`;
    } else {
        document.getElementById('memory').innerText = "Device Memory: Not supported";
    }
}

// Function to display battery status
function displayBattery() {
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            const level = (battery.level * 100) + '%';
            const charging = battery.charging ? 'Charging' : 'Not Charging';
            document.getElementById('battery').innerText = `Battery Level: ${level}, Status: ${charging}`;
        });
    } else {
        document.getElementById('battery').innerText = "Battery Status: Not supported";
    }
}

// Function to display screen resolution
function displayScreenResolution() {
    const width = window.screen.width;
    const height = window.screen.height;
    document.getElementById('screen').innerText = `Screen Resolution: ${width} x ${height}`;
}

// Function to display the number of CPU cores
function displayCores() {
    const cores = navigator.hardwareConcurrency || "Not supported";
    document.getElementById('cores').innerText = `Number of CPU Cores: ${cores}`;
}

// Function to display CPU architecture
function displayArchitecture() {
    const userAgent = navigator.userAgent;
    let architecture = "Not supported";

    // Detect architecture from userAgent
    if (userAgent.includes("x86_64") || userAgent.includes("amd64")) {
        architecture = "64-bit (x86_64)";
    } else if (userAgent.includes("i686") || userAgent.includes("x86")) {
        architecture = "32-bit (x86)";
    } else if (userAgent.includes("arm64") || userAgent.includes("aarch64")) {
        architecture = "64-bit (ARM)";
    } else if (userAgent.includes("arm")) {
        architecture = "32-bit (ARM)";
    }

    document.getElementById('architecture').innerText = `CPU Architecture: ${architecture}`;
}

// Function to display the operating system
function displayOS() {
    const userAgent = navigator.userAgent;
    let os = "Not supported";

    if (userAgent.includes("Windows NT 10.0")) {
        os = "Windows 11";
    } else if (userAgent.includes("Windows NT 10")) {
        os = "Windows 10";
    } else if (userAgent.includes("Windows NT 6.3")) {
        os = "Windows 8.1";
    } else if (userAgent.includes("Windows NT 6.2")) {
        os = "Windows 8";
    } else if (userAgent.includes("Windows NT 6.1")) {
        os = "Windows 7";
    } else if (userAgent.includes("Windows NT 6.0")) {
        os = "Windows Vista";
    } else if (userAgent.includes("Windows NT 5.1") || userAgent.includes("Windows XP")) {
        os = "Windows XP";
    } else if (userAgent.includes("Mac OS X")) {
        os = "macOS";
    } else if (userAgent.includes("Linux")) {
        os = "Linux";
    } else if (userAgent.includes("Android")) {
        os = "Android";
    } else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
        os = "iOS";
    } else if (userAgent.includes("CrOS")) {
        os = "Chrome OS";
    }

    document.getElementById('os').innerText = `Operating System: ${os}`;
}

// Function to display browser information
function displayBrowser() {
    const userAgent = navigator.userAgent;
    let browser = "Not supported";

    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
        browser = "Google Chrome";
    } else if (userAgent.includes("Firefox")) {
        browser = "Mozilla Firefox";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        browser = "Apple Safari";
    } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
        browser = "Internet Explorer";
    } else if (userAgent.includes("Edg")) {
        browser = "Microsoft Edge";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        browser = "Opera";
    } else if (userAgent.includes("Vivaldi")) {
        browser = "Vivaldi";
    } else if (userAgent.includes("Brave")) {
        browser = "Brave";
    } else if (userAgent.includes("SamsungBrowser")) {
        browser = "Samsung Internet";
    } else if (userAgent.includes("Flock")) {
        browser = "Flock";
    } else if (userAgent.includes("Maxthon")) {
        browser = "Maxthon";
    } else if (userAgent.includes("QuteBrowser")) {
        browser = "QuteBrowser";
    } else if (userAgent.includes("PaleMoon")) {
        browser = "Pale Moon";
    } else if (userAgent.includes("Chromium")) {
        browser = "Chromium";
    }

    document.getElementById('browser').innerText = `Browser: ${browser}`;
}

// Function to display browser language
function displayLanguage() {
    const language = navigator.language || "Not supported";
    document.getElementById('language').innerText = `Language: ${language}`;
}

// Function to display viewport size
function displayViewport() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('viewport').innerText = `Viewport Size: ${width} x ${height}`;
}

// Function to display network connection type
function displayConnection() {
    if (navigator.connection) {
        const type = navigator.connection.effectiveType || "Not supported";
        document.getElementById('connection').innerText = `Connection Type: ${type}`;
    } else {
        document.getElementById('connection').innerText = "Connection Type: Not supported";
    }
}

// Function to display online status
function displayOnlineStatus() {
    const status = navigator.onLine ? "Online" : "Offline";
    document.getElementById('online-status').innerText = `Online Status: ${status}`;
}

// Function to display current time
function displayTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('time').innerText = `Current Time: ${currentTime}`;
}

// Function to display geolocation
function displayLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                document.getElementById('location').innerText = `Location: Latitude ${latitude}, Longitude ${longitude}`;
            },
            () => {
                document.getElementById('location').innerText = "Location: Permission denied";
            }
        );
    } else {
        document.getElementById('location').innerText = "Location: Not supported";
    }
}

// Function to display device orientation
function displayDeviceOrientation() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
            const alpha = event.alpha ? event.alpha.toFixed(2) : "Not supported";
            const beta = event.beta ? event.beta.toFixed(2) : "Not supported";
            const gamma = event.gamma ? event.gamma.toFixed(2) : "Not supported";
            document.getElementById('device-orientation').innerText = `Device Orientation: Alpha ${alpha}, Beta ${beta}, Gamma ${gamma}`;
        });
    } else {
        document.getElementById('device-orientation').innerText = "Device Orientation: Not supported";
    }
}

// Function to display user agent string
function displayUserAgent() {
    const userAgent = navigator.userAgent || "Not supported";
    document.getElementById('user-agent').innerText = `User Agent: ${userAgent}`;
}

// Function to display graphics card information (not supported in most browsers)
function displayGraphicsCard() {
    document.getElementById('graphics').innerText = "Graphics Card: Not supported";
}

// Function to display device type
function displayDeviceType() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const isTablet = /Tablet|iPad/i.test(navigator.userAgent);
    const deviceType = isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop";
    document.getElementById('device-type').innerText = `Device Type: ${deviceType}`;
}

// Function to display timezone
function displayTimezone() {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Not supported";
        document.getElementById('timezone').innerText = `Timezone: ${timezone}`;
    }

    // Function to initialize all displays
    function initializeDeviceInfo() {
        displayMemory();
        displayBattery();
        displayScreenResolution();
        displayCores();
        displayArchitecture();
        displayOS();
        displayBrowser();
        displayLanguage();
        displayViewport();
        displayConnection();
        displayOnlineStatus();
        displayTime();
        displayLocation();
        displayDeviceOrientation();
        displayUserAgent();
        displayGraphicsCard();
        displayDeviceType();
        displayTimezone();
    }

    // Call the initialization function when the document is loaded
    document.addEventListener("DOMContentLoaded", initializeDeviceInfo);