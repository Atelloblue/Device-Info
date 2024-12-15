// Function to display device memory (in GB)
function displayMemory() {
    // Check if the device supports the `navigator.deviceMemory` API
    if (navigator.deviceMemory !== undefined) {
        const memory = navigator.deviceMemory; // in GB

        // Ensure that the memory is a valid positive number
        if (typeof memory === 'number' && memory > 0) {
            document.getElementById('memory').innerText = `Device Memory: ${memory} GB`;
        } else {
            document.getElementById('memory').innerText = "Device Memory: Invalid data";
        }
    } else {
        // If the `navigator.deviceMemory` API is not supported, display a fallback message
        document.getElementById('memory').innerText = "Device Memory: Not Supported";
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

// Detect architecture and device type from userAgent
function displayArchitecture() {
    const userAgent = navigator.userAgent.toLowerCase();
    let architecture = "Unknown";

    // Check for iOS devices (iPad, iPhone, iPod)
    if (userAgent.includes("ipad")) {
        if (userAgent.includes("arm64")) {
            if (userAgent.includes("m2")) {
                architecture = "64-bit (Apple Silicon M2, iPad)";
            } else if (userAgent.includes("m1")) {
                architecture = "64-bit (Apple Silicon M1, iPad)";
            } else {
                architecture = "64-bit (ARM, iPad)";
            }
        } else {
            architecture = "32-bit (ARM, iPad)";
        }
    } 
    else if (userAgent.includes("iphone") || userAgent.includes("ipod")) {
        if (userAgent.includes("arm64")) {
            architecture = "64-bit (ARM, Apple iOS)";
        } else {
            architecture = "32-bit (ARM, Apple iOS)";
        }
    }
    // Check for macOS devices (MacBook, Mac, iMac, Mac Mini, etc.)
    else if (userAgent.includes("macintosh")) {
        if (userAgent.includes("arm64")) {
            if (userAgent.includes("m1")) {
                architecture = "64-bit (Apple Silicon M1)";
            } else if (userAgent.includes("m2")) {
                architecture = "64-bit (Apple Silicon M2)";
            } else {
                architecture = "64-bit (Apple Silicon)";
            }
        } else if (userAgent.includes("intel")) {
            architecture = "64-bit (Intel x86)";
        }
    }
    // Check for Intel processors
    else if (userAgent.includes("intel")) {
        if (userAgent.includes("x86_64") || userAgent.includes("amd64")) {
            architecture = "64-bit (Intel x86)";
        } else if (userAgent.includes("i3")) {
            architecture = "64-bit (Intel i3)";
        } else if (userAgent.includes("i5")) {
            architecture = "64-bit (Intel i5)";
        } else if (userAgent.includes("i7")) {
            architecture = "64-bit (Intel i7)";
        } else if (userAgent.includes("i9")) {
            architecture = "64-bit (Intel i9)";
        } else if (userAgent.includes("pentium")) {
            architecture = "32-bit (Intel Pentium)";
        } else if (userAgent.includes("atom")) {
            architecture = "32-bit (Intel Atom)";
        } else {
            architecture = "32-bit (Intel CPU)";
        }
    }
    // Check for AMD processors
    else if (userAgent.includes("amd")) {
        if (userAgent.includes("ryzen")) {
            architecture = "64-bit (AMD Ryzen)";
        } else if (userAgent.includes("athlon")) {
            architecture = "32-bit (AMD Athlon)";
        } else if (userAgent.includes("x86_64") || userAgent.includes("amd64")) {
            architecture = "64-bit (AMD x86)";
        } else if (userAgent.includes("fx")) {
            architecture = "64-bit (AMD FX)";
        } else if (userAgent.includes("opteron")) {
            architecture = "64-bit (AMD Opteron)";
        } else {
            architecture = "32-bit (AMD CPU)";
        }
    }
    // Check for other ARM-based architectures
    else if (userAgent.includes("arm64") || userAgent.includes("aarch64")) {
        architecture = "64-bit (ARM)";
    } else if (userAgent.includes("arm")) {
        architecture = "32-bit (ARM)";
    }
    // Check for other architecture types
    else if (userAgent.includes("powerpc")) {
        architecture = "64-bit (PowerPC)";
    } else if (userAgent.includes("sparc")) {
        architecture = "64-bit (SPARC)";
    }

    return architecture;
}

// Usage example
document.getElementById('architecture').innerText = `Architecture: ${displayArchitecture()}`;

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

// Function to display graphics card information (limited support)
function displayGraphicsCard() {
    let graphicsInfo = "Graphics Card: Not supported";

    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
                const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                graphicsInfo = `Graphics Card: ${vendor} ${renderer}`;
            } else {
                graphicsInfo = "Graphics Card: WebGL supported, but specific info not available";
            }
        } else {
            graphicsInfo = "Graphics Card: WebGL not supported";
        }
    } catch (e) {
        graphicsInfo = "Graphics Card: Not supported (error accessing WebGL)";
    }

    document.getElementById('graphics').innerText = graphicsInfo;
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

let lastTime = 0;
let fps = 0;
let frameCount = 0;

// Function to display battery information
function displayBatteryInfo() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then((battery) => {
            function updateBatteryInfo() {
                const level = (battery.level * 100).toFixed(0) + "%";
                const charging = battery.charging ? "Yes" : "No";
                const chargingTime = battery.chargingTime === Infinity ? "Not charging" : battery.chargingTime + " seconds";
                const dischargingTime = battery.dischargingTime === Infinity ? "N/A" : battery.dischargingTime + " seconds";

                document.getElementById('battery-info').innerText = 
                    `Battery Level: ${level}\nCharging: ${charging}\nCharging Time: ${chargingTime}\nDischarging Time: ${dischargingTime}`;
            }

            // Initial update
            updateBatteryInfo();

            // Update info when battery status changes
            battery.addEventListener('levelchange', updateBatteryInfo);
            battery.addEventListener('chargingchange', updateBatteryInfo);
            battery.addEventListener('chargingtimechange', updateBatteryInfo);
            battery.addEventListener('dischargingtimechange', updateBatteryInfo);
        });
    } else {
        document.getElementById('battery-info').innerText = "Battery Level: Not supported";
    }
}

// Function to initialize all displays
function initializeDeviceInfo() {
    displayMemory();
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
    displayGraphicsCard();
    displayDeviceType();
    displayTimezone();
    displayBatteryInfo();
}

// Update device information every few milliseconds
setInterval(initializeDeviceInfo, 100);

// Call the function once initially to populate data immediately
initializeDeviceInfo();
