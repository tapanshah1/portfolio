export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "ios" | "macos" | "mdm" | "architecture" | "open-source";
  categoryLabel: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  techStack: string[];
  iconName: string;
  appStoreUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  isFeatured: boolean;
  metrics?: string;
  architectureDiagram?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Expert" | "Advanced" | "Proficient";
    icon: string;
    description: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Tapan Shah",
  role: "iOS Team Lead | Senior Software Engineer (iOS & Systems)",
  tagline: "10+ Years Experience in Swift, SwiftUI, Objective-C, Go, MicroMDM & iOS Systems",
  bio: "Senior iOS Team Lead and Apple Platform Specialist with over 10 years of experience building high-performance iOS applications, macOS child monitoring engines, and network system engines. Specializing in Swift 6, SwiftUI, Objective-C, Core ML on-device model loading, ReplayKit Screen Broadcast Extensions, Go (Golang / Go-Mobile SOCKS5 Proxy), MicroMDM Server (https://github.com/micromdm/micromdm), CommonCrypto AES-128 Cryptography, iOS Supervised MDM (cfgutil), Network Extensions (Packet Tunnel, DoH DNS), Apple Screen Time API, and Author of open-source Swift packages (SwiftOSLogger & BarcodeScanner).",
  location: "Ahmedabad, Gujarat, India",
  phone: "+91 84606 77879",
  email: "tapanshah1992@gmail.com",
  github: "https://github.com/tapanshah1",
  linkedin: "https://www.linkedin.com/in/tapan-shah-ba455678",
  appStore: "https://apps.apple.com/us/app/kidsnanny-parental-control/id6446271738",
  resumeUrl: "/Tapan_Shah_Resume_3.pdf",
  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Current Role", value: "iOS Team Lead" },
    { label: "App Store Apps", value: "KidsNanny & Browsely" },
    { label: "MDM Server Core", value: "MicroMDM & Supervised" }
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "team-lead-vartit",
    role: "iOS Team Lead",
    company: "Vartit Technology Pvt Ltd",
    period: "2023-03 – Present",
    location: "Gujarat, India",
    summary: "Leading the native mobile & system engineering team, setting technical direction, guiding team productivity, and delivering flagship iOS Parental Control, MicroMDM Server integrations, macOS C++ Universal Binary child monitoring engines, Go SOCKS5 Proxy engines, Supervised MDM, and Screen Time applications on the App Store.",
    bulletPoints: [
      "Spearheaded KidsNanny Parental Control (App Store ID: 6446271738) and Browsely NSFW Blocker (App Store ID: 6761761765) integrating Network Extensions, Go-Mobile SOCKS5 Proxy, and Screen Time API.",
      "Engineered CommonCrypto (CCCrypt / AES-128) string & file encryption modules with PKCS7 padding for secure payload transfer and cross-platform Java/Swift crypto interop.",
      "Architected enterprise iOS MDM infrastructure utilizing MicroMDM Server (https://github.com/micromdm/micromdm) for APNS profile payload delivery, SCEP certificate issuing, and OTA device enrollment.",
      "Engineered on-device Core ML model loading and Vision framework image classification pipelines for real-time NSFW content detection and image blurring.",
      "Built iOS ReplayKit Screen Broadcast Extension (RPBroadcastSampleHandler) for real-time live screen screening and monitoring.",
      "Architected macOS C++ Universal Binary child monitoring engine (x86_64 + arm64) supporting real-time WebRTC audio/video streaming, RtAudio capture, and gloox XMPP messaging.",
      "Engineered Go-Mobile (goproxy) SOCKS5 packet forwarder in Go (Golang), seamlessly reading IP packets from iOS NEPacketTunnelProvider, routing through Go proxy, and writing response packets back to the tunnel.",
      "Mentored engineering team members in Swift 6, Go, SwiftUI, Objective-C, Core ML, and iOS Network Extensions, reducing crash rates and optimizing performance."
    ],
    technologies: ["Swift 5/6", "CommonCrypto AES-128", "MicroMDM", "Go (Golang)", "Go-Mobile", "SwiftUI", "Objective-C", "C++", "WebRTC", "iOS MDM", "Network Extension", "App Store Connect"],
    isCurrent: true
  },
  {
    id: "senior-engineer-vartit",
    role: "Senior Software Engineer",
    company: "Vartit Technology",
    period: "2021-07 – 2023-03",
    location: "Gujarat, India",
    summary: "Senior developer leading complex technical feature implementations, iOS Network Extension integrations, desktop agents, and developer mentorship.",
    bulletPoints: [
      "Mentored junior developers, fostering professional growth and accelerating overall team velocity.",
      "Enhanced app functionality by identifying and resolving complex technical, memory management, and thread synchronization issues.",
      "Managed multiple iOS & macOS projects simultaneously while maintaining strict deadlines and code quality standards.",
      "Authored technical documentation for mobile and system development workflows, facilitating seamless team onboarding."
    ],
    technologies: ["Swift", "Objective-C", "C++", "UIKit", "MVVM", "Core Data", "RESTful APIs", "CocoaPods", "SPM", "GitLab"]
  },
  {
    id: "ios-engineer-vartit",
    role: "iOS Software Engineer",
    company: "Vartit Technology Pvt Ltd",
    period: "2015-09 – 2021-07",
    location: "Gujarat, India",
    summary: "Core iOS developer designing adaptive UI layouts, integrating Web Services, and shipping published apps on the App Store.",
    bulletPoints: [
      "Engineered Private Message Box iOS app (App Store ID: 907028613) using XMPPFramework (https://github.com/robbiehanson/XMPPFramework) for real-time messaging, Objective-C, Swift, custom table view cells, and encrypted SQLite storage.",
      "Streamlined iOS app development processes by implementing efficient coding practices and cross-team collaboration.",
      "Coordinated with QA teams to rigorously test applications before deployment, minimizing post-launch issues.",
      "Designed adaptive UI layouts catering to various screen sizes for consistent user experience across iPhone and iPad.",
      "Maintained a portfolio of 3+ successfully published applications available on the official Apple App Store."
    ],
    technologies: ["XMPPFramework", "XMPP Protocol", "Objective-C", "Swift", "UIKit", "Core Graphics", "Core Animation", "SQLite", "Firebase", "App Store Submission"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Computer Application (MCA)",
    field: "Computer And Information Sciences",
    institution: "Kalol Institute of Management",
    period: "2012 – 2015",
    location: "Ahmedabad, Gujarat"
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    field: "Commerce",
    institution: "C C Sheth Commerce College, Navgujarat Campus",
    period: "2009 – 2012",
    location: "Ahmedabad, Gujarat"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ios-supervised-mdm",
    title: "iOS Supervised Device & MicroMDM Suite",
    subtitle: "MicroMDM Server Integration & Apple cfgutil Supervision",
    category: "mdm",
    categoryLabel: "iOS MDM & Supervision",
    description: "Automated iOS device supervision and enterprise MDM server infrastructure built with MicroMDM (https://github.com/micromdm/micromdm), Apple Configurator CLI (`cfgutil`), and Java/Gradle backend.",
    fullDescription: "Designed for enterprise iOS management, this suite integrates MicroMDM Server (open-source Go-based Apple MDM) for OTA device enrollment, APNS push notifications, SCEP identity certificates, and payload profile distribution, paired with Apple Configurator CLI (`cfgutil`) for supervised device onboarding.",
    highlights: [
      "Deployed and configured MicroMDM Server (https://github.com/micromdm/micromdm) for APNS push notification profile commands",
      "Automated supervised mode enrollment using Apple Configurator CLI (`cfgutil`) scripts",
      "Built Java/Gradle management server orchestrating device provisioning, usbmuxd communication, and restriction profiles",
      "Configured SCEP certificate issuing, signed profile payloads, and zero-touch enterprise onboarding"
    ],
    techStack: ["MicroMDM Server", "Go (Golang)", "Apple cfgutil CLI", "iOS Supervision", "APNS / SCEP", "Java / Gradle", "MDM Profiles"],
    iconName: "Cpu",
    githubUrl: "https://github.com/micromdm/micromdm",
    isFeatured: true,
    metrics: "MicroMDM Server & Supervised Enrollment",
    architectureDiagram: [
      "Supervised Device Provisioning: Apple Configurator / cfgutil CLI pairs device via USB/OTA",
      "MicroMDM Go Server: Generates APNS push payloads & issues SCEP identity certificates",
      "APNS Gateway Dispatch: Delivers real-time profile commands over Apple Push Notification Service",
      "Device Management Enforcer: Applies restrictions, web content filtering, and application policies"
    ]
  },
  {
    id: "kids-protect-ios",
    title: "KidsNanny Parental Control iOS App",
    subtitle: "App Store Published • Core ML, ReplayKit & DoH DNS",
    category: "ios",
    categoryLabel: "iOS Parental Control & VPN",
    description: "Native iOS child safety application published on the App Store featuring Core ML image scanning, ReplayKit Screen Broadcast Extension, Network Extension packet tunneling, DNS over HTTPS (DoH) filtering, and Live Activity status HUD.",
    fullDescription: "KidsNanny Parental Control (App Store ID: 6446271738) is an enterprise-grade parental control application built using Swift and Network Extensions. It provides real-time web content filtering, Core ML on-device image scanning, ReplayKit Screen Broadcast Extension (`KidsNannyBroadcast`) for live screen screening, child device pairing routines, PIN security lockouts, and Live Activity status reporting.",
    highlights: [
      "Built custom Core ML model loading engine for real-time on-device image scanning and content classification",
      "Implemented iOS ReplayKit Screen Broadcast Extension (RPBroadcastSampleHandler) for live screen screening and monitoring",
      "Engineered custom iOS Network Extension packet tunnel & DoH (DNS over HTTPS) filtering provider",
      "Integrated child device pairing routines with Go-mobile (goproxy) SOCKS5 forwarder"
    ],
    techStack: ["Swift", "Core ML", "ReplayKit", "Go (Golang)", "Network Extension", "DoH DNS", "Packet Tunnel", "Live Activities"],
    iconName: "ShieldCheck",
    appStoreUrl: "https://apps.apple.com/us/app/kidsnanny-parental-control/id6446271738",
    isFeatured: true,
    metrics: "Live App Store App (ID: 6446271738)",
    architectureDiagram: [
      "SwiftUI Client & ActivityKit: Main app UI & Live Activity status HUD",
      "NEPacketTunnelProvider Extension: Intercepts raw device IPv4/IPv6 packet stream",
      "Go-Mobile (goproxy) Forwarder: Low-overhead socket bridging & DoH DNS resolver",
      "ReplayKit Broadcast Extension: RPBroadcastSampleHandler feeds screen frames to Vision framework",
      "Core ML Model Classifier: On-device classification triggering instant screen/content blur"
    ]
  },
  {
    id: "mac-parental-monitoring-engine",
    title: "macOS Child Safety & Monitoring Engine",
    subtitle: "C++ Universal Binary (Intel & Apple Silicon) & WebRTC Engine",
    category: "macos",
    categoryLabel: "macOS C++ & WebRTC Engine",
    description: "High-performance C++ and Objective-C macOS child monitoring engine delivering real-time WebRTC audio/video streaming, RtAudio capture, and gloox XMPP client.",
    fullDescription: "This macOS child protection and monitoring solution is a system-level application built with C++ and Objective-C compiled as a Universal Binary (Intel x86_64 + Apple Silicon arm64). It features pre-built universal WebRTC static libraries, 48kHz RtAudio capture, gloox XMPP messaging, SQLiteCpp persistence, CommonCrypto AES-128 file encryption, and automated DMG release scripts.",
    highlights: [
      "Built Universal Binary (x86_64 + arm64) compiling natively for both Intel and Apple Silicon Macs without Rosetta translation",
      "Integrated CommonCrypto (CCCrypt / AES-128) file & string encryption module for secure data transfer",
      "Integrated 918MB universal WebRTC static engine, RtAudio 48kHz audio capture, and gloox XMPP messaging",
      "Designed automated CMake release script building custom installer bundle and DMG output for deployment"
    ],
    techStack: ["C++", "Objective-C", "CommonCrypto AES-128", "WebRTC", "CMake", "Universal Binary", "RtAudio", "SQLiteCpp", "gloox XMPP"],
    iconName: "Terminal",
    isFeatured: true,
    metrics: "Native Intel & M1/M2/M3 Universal Binary",
    architectureDiagram: [
      "Universal Binary Engine (arm64/x86_64): Dual-architecture native C++ binary execution",
      "RtAudio Audio Engine: Low-latency 48kHz system audio capture pipeline",
      "WebRTC Engine: Dual-slice static library for real-time peer-to-peer video/audio streaming",
      "gloox XMPP Client: Encrypted background telemetry & remote signal dispatch",
      "CommonCrypto AES-128: CCCrypt file chunk encryption before writing to SQLiteCpp database"
    ]
  },
  {
    id: "browsely-nsfw-blocker",
    title: "Browsely - NSFW Content Blocker App",
    subtitle: "App Store Published • Core ML & Real-Time Image Blurring",
    category: "ios",
    categoryLabel: "iOS Applications",
    description: "Published safe browser iOS application featuring Core ML image scanning, real-time NSFW image blurring, XHR/script injection, and adult content filtering.",
    fullDescription: "Browsely (App Store ID: 6761761765) is a high-performance iOS browser and content filter app. It uses script injection, web view cache control, Vision framework, and on-device Core ML model loading to dynamically detect and blur adult content before rendering.",
    highlights: [
      "Engineered real-time image blurring and DOM script injection engine for WKWebView",
      "Integrated on-device Core ML model loading for high-accuracy image content classification",
      "Built XHR/cache interception layer preventing bypass of restricted web domains"
    ],
    techStack: ["Swift", "Core ML", "Vision Framework", "SwiftUI", "WKWebView", "Script Injection", "XHR Interception"],
    iconName: "ShieldCheck",
    appStoreUrl: "https://apps.apple.com/in/app/browsely/id6761761765",
    isFeatured: true,
    metrics: "Live App Store App (ID: 6761761765)",
    architectureDiagram: [
      "WKWebView Injection Engine: Intercepts DOM creation & XHR network requests",
      "DOM Script Injector: Analyzes image tags & dynamic canvas elements",
      "Vision & Core ML Pipeline: On-device classification scoring image safety",
      "CoreImage Gaussian Blur: Dynamic CSS/CoreImage blur applied over unsafe media"
    ]
  },
  {
    id: "desktop-app-guard",
    title: "KidsNanny Desktop Protection Agent",
    subtitle: "Electron, C++ Native Modules & AI Image Blurring",
    category: "architecture",
    categoryLabel: "Desktop & C++ Native Modules",
    description: "Cross-platform desktop application for macOS and Windows featuring native C++ network interception, AI content detection, and SQLCipher storage.",
    fullDescription: "A desktop child protection agent built with Electron, C++ native modules, and Node.js. It features real-time browser URL monitoring, HTTPS interception, local AI vision models for blurring objectionable images, and crash-recovery daemons.",
    highlights: [
      "Built native C++ bindings (binding.gyp) for HTTPS interception, DNS proxying, and domain redirection",
      "Integrated ONNX Runtime local AI computer vision model for real-time image blurring and screen scanning",
      "Implemented SQLCipher encrypted database, crash recovery watchdog daemon, and launchd supervision"
    ],
    techStack: ["Electron", "Node.js", "C++ Native Modules", "SQLCipher", "ONNX AI Vision", "DNS Proxy", "macOS launchd"],
    iconName: "Terminal",
    isFeatured: true,
    metrics: "Cross-Platform macOS & Windows Agent",
    architectureDiagram: [
      "Electron Core Shell: Node.js main process orchestrating sub-daemons",
      "C++ Native Module (binding.gyp): Low-level socket hooks & HTTPS domain inspection",
      "ONNX AI Vision Model: Local machine learning computer vision for desktop screen scanning",
      "SQLCipher Vault & Watchdog: Encrypted SQLite storage guarded by launchd recovery daemon"
    ]
  },
  {
    id: "gomobile-proxy-engine",
    title: "Go-Mobile SOCKS5 Proxy Packet Engine",
    subtitle: "Go (Golang) SOCKS5 Forwarder for iOS Packet Tunnel",
    category: "architecture",
    categoryLabel: "Go Network Engine & iOS VPN",
    description: "High-performance SOCKS5 proxy engine written in Go (Golang) and integrated with iOS NEPacketTunnelProvider via Go-Mobile framework.",
    fullDescription: "Built in Go (Golang), this cross-compiled binary (`goproxy`) binds with native iOS Network Extensions. It intercepts IP packets directly from the `NEPacketTunnelProvider`, forwards TCP/UDP traffic through the Go SOCKS5 proxy engine, and writes returned response packets back to the packet tunnel interface.",
    highlights: [
      "Cross-compiled Go static framework (`greeter.xcframework`) using Go-Mobile toolchain",
      "Designed low-latency SOCKS5 proxy forwarder handling concurrent TCP/UDP socket streams",
      "Direct packet read/write bridge between Swift NEPacketTunnelProvider and Go proxy core"
    ],
    techStack: ["Go (Golang)", "Go-Mobile", "SOCKS5 Proxy", "iOS NEPacketTunnelProvider", "Swift", "TCP/UDP Sockets"],
    iconName: "Terminal",
    isFeatured: true,
    metrics: "High-Throughput Go SOCKS5 Forwarder",
    architectureDiagram: [
      "Swift NEPacketTunnelProvider: Intercepts raw IPv4/IPv6 packet buffers from iOS kernel",
      "C-Go Bridge (greeter.xcframework): Passes memory pointers directly to Go runtime",
      "Go SOCKS5 Proxy Core (goproxy): Multi-threaded goroutines multiplexing TCP/UDP streams",
      "TUN Writer: Flushes processed response packets back into iOS network tunnel interface"
    ]
  },
  {
    id: "swift-os-logger",
    title: "SwiftOSLogger Package",
    subtitle: "Unified Apple os_log Logging Framework • Open Source",
    category: "open-source",
    categoryLabel: "Open Source Package",
    description: "High-performance logging framework for Apple platforms built on Apple's unified logging system (`os.Logger`). Directs logs to unified logging, console, and thread-safe rotating log files.",
    fullDescription: "SwiftOSLogger is an open-source Swift Package and XCFramework designed for iOS 15+, macOS 12+, tvOS 15+, watchOS 8+, and visionOS 1+. It supports 7 log levels (trace to critical), custom LogLevel definitions, thread-safe background file rotation (by size, line count, and max file count), JSON Lines (`JSONLogFormatter`) & text formatting, privacy masking (`.public`, `.private`), and `Loggable` class protocol conformance with zero third-party dependencies.",
    highlights: [
      "Thread-safe architecture with background queue file rotation, header diagnostics, and memory caps",
      "Destinations: Unified Logging (`OSLogDestination`), Console (`ConsoleDestination`), and Files (`FileDestination`)",
      "Supports iOS 15+, macOS 12+, tvOS 15+, watchOS 8+, visionOS 1+, Xcode 15+, Swift 5.9 & Swift 6 strict concurrency",
      "One-command static XCFramework build script producing multi-architecture slices and SPM checksums"
    ],
    techStack: ["Swift 5.9 / 6", "os_log / Logger", "SPM", "XCFramework", "JSON Lines", "Concurrency", "Apple Platforms"],
    iconName: "FileCode",
    githubUrl: "https://github.com/tapanshah1/SwiftOSLogger.git",
    isFeatured: true,
    metrics: "Swift 6 Ready SPM & XCFramework",
    architectureDiagram: [
      "Unified Logger API: Structured log entries with 7 severity levels & privacy masking",
      "Async Dispatch Queue: Dispatches log messages off the main UI thread without UI stutters",
      "Multi-Destination Dispatcher: Simultaneous delivery to os_log, stdout console, and rotating files",
      "Rotating File Engine: Auto-rotates files based on byte size, line count, and max retention"
    ]
  },
  {
    id: "barcode-scanner-swift",
    title: "BarcodeScanner Camera Framework",
    subtitle: "Pure SwiftUI AVFoundation Barcode & QR Scanner • Open Source",
    category: "open-source",
    categoryLabel: "Open Source Package",
    description: "Drop-in, animated barcode & QR code scanner for SwiftUI on iOS 15+ and macOS 13+ built on AVFoundation with zero third-party dependencies.",
    fullDescription: "BarcodeScanner is a multiplatform SwiftUI camera framework supporting 19 barcode symbologies (QR, EAN-13, Data Matrix, PDF417, etc.). Features 2 scanning styles (Viewfinder & Live Outline Detection), 3 scan modes (Single, Bulk with tray, Continuous), auto-zoom for small codes, pinch-to-zoom, tap-to-focus, haptics, and an optional Apple Intelligence add-on (`BarcodeScannerIntelligence`) using Vision and on-device Foundation Models.",
    highlights: [
      "Pure SwiftUI UI on native AVFoundation camera pipeline (~1–70 µs per frame at 60 fps)",
      "Supports 19 symbologies with automatic auto-zoom for small codes (iPhone 13 Pro+) and live tracking boxes following real code outlines",
      "Optional Apple Intelligence add-on (`BarcodeScannerIntelligence`) reading product labels with Vision & on-device Foundation Models",
      "Built-in localizations for 6 languages (EN, ES, FR, DE, JA, ZH) with library evolution binary XCFramework support"
    ],
    techStack: ["Swift", "SwiftUI", "AVFoundation", "Vision Framework", "Apple Intelligence", "SPM", "XCFramework"],
    iconName: "Layers",
    githubUrl: "https://github.com/tapanshah1/BarcodeScanner.git",
    isFeatured: false,
    metrics: "19 Symbologies & SwiftUI AVFoundation",
    architectureDiagram: [
      "AVCaptureSession Engine: 60 FPS video frame output configured for multi-symbology scanning",
      "Vision Metadata Processor: Scans 19 symbology formats in ~1–70 µs per frame",
      "Pure SwiftUI Viewfinder: Animated tracking boxes dynamically bounding physical codes",
      "Apple Intelligence Foundation Models: Optional OCR & product label breakdown engine"
    ]
  },
  {
    id: "psb-ios-vault",
    title: "Private Message Box iOS App",
    subtitle: "App Store Published • XMPP Protocol, Encrypted Vault & Real-Time Messaging",
    category: "ios",
    categoryLabel: "iOS Application & XMPP",
    description: "Published iOS privacy app featuring real-time XMPP messaging using XMPPFramework (https://github.com/robbiehanson/XMPPFramework), contact vault, custom XIB/cell renderers, and SQLite encryption.",
    fullDescription: "Private Message Box (App Store ID: 907028613) is an Objective-C and Swift hybrid iOS application powered by XMPPFramework (https://github.com/robbiehanson/XMPPFramework) for real-time chat signaling, message stanzas, presence updates, and socket management. It manages encrypted local messages (`privatemsg.sqlite`), custom media message bubbles, secret contact management, and StoreKit In-App Purchases.",
    highlights: [
      "Integrated XMPPFramework (https://github.com/robbiehanson/XMPPFramework) for real-time chat, stanza parsing, roster management, and auto-reconnection",
      "Objective-C & Swift hybrid codebase managing local encrypted SQLite database (privatemsg.sqlite)",
      "Custom audio, image, and memoji cell renderers with In-App Purchase subscription management",
      "Integrated Reachability, AFNetworking, Core Animation, and App Store Connect release workflows"
    ],
    techStack: ["XMPPFramework", "XMPP Protocol", "Objective-C", "Swift", "SQLite Encryption", "UIKit", "In-App Purchases", "AFNetworking"],
    iconName: "CreditCard",
    appStoreUrl: "https://apps.apple.com/us/app/private-message-box/id907028613",
    githubUrl: "https://github.com/robbiehanson/XMPPFramework",
    isFeatured: false,
    metrics: "Live App Store App (ID: 907028613)",
    architectureDiagram: [
      "XMPP Stream Manager: Manages TCP socket connection, SASL auth, and TLS encryption via XMPPFramework",
      "Stanza Dispatcher & Roster Handler: Parses incoming chat stanzas, presence updates, and typing notifications",
      "Encrypted SQLite Vault: AES-encrypted local storage for contact messages & secret logs (privatemsg.sqlite)",
      "UIKit Media Renderers: Custom bubble views for audio, image, and text messages"
    ]
  },
  {
    id: "apple-receipt-validator",
    title: "Apple & Google In-App Payment Receipt Validator",
    subtitle: "App Store Server Notifications v2 & JWS Signature Verification",
    category: "architecture",
    categoryLabel: "Payment Server & Cryptography",
    description: "Backend payment receipt and subscription validation suite handling real-time App Store Server Notifications v2, JWS signature verification, and Google Play Store v2 subscription webhooks.",
    fullDescription: "Enterprise payment validation service built with Java/Gradle and CommonCrypto/Java cryptography. It processes signed JSON Web Signatures (JWS) from Apple's App Store Server Notifications v2, parses x5c certificate chains to verify Apple Root CA trust, and maintains synchronous user subscription entitlement states across iOS and Android.",
    highlights: [
      "Engineered real-time JWS signature verification for App Store Server Notifications v2",
      "Implemented certificate chain validation parsing x5c headers against official Apple Root CA",
      "Cross-platform synchronization handling both App Store subscriptions and Google Play Store v2 API notifications"
    ],
    techStack: ["Java / Gradle", "JWS Signatures", "App Store Server v2", "CommonCrypto", "Apple Root CA", "Google Play API"],
    iconName: "KeyRound",
    isFeatured: false,
    metrics: "App Store Server Notifications v2 & JWS",
    architectureDiagram: [
      "App Store Server Webhook: Receives HTTPS notifications for renewals, refunds, and upgrades",
      "JWS Header & x5c Parser: Extracts public certificates & verifies signature against Apple Root CA",
      "Entitlement Evaluator: Determines subscription access window & auto-renewable status",
      "Database Sync Engine: Updates entitlement table and pushes APNS entitlement sync to client device"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages & Open Source",
    description: "Core programming languages, compilers, and open-source packages",
    skills: [
      { name: "Swift (5.9 / 6)", level: "Expert", icon: "Code2", description: "Author of SwiftOSLogger & BarcodeScanner SPM packages, Swift 6 concurrency, XCFrameworks" },
      { name: "Core ML & Vision Framework", level: "Expert", icon: "Cpu", description: "On-device Core ML model loading (.mlmodelc), Vision image classification, real-time NSFW scanning" },
      { name: "Go (Golang) & Go-Mobile", level: "Expert", icon: "Terminal", description: "Go-Mobile framework binding, goproxy SOCKS5 forwarder, MicroMDM server (https://github.com/micromdm/micromdm)" },
      { name: "Objective-C & C / C++", level: "Expert", icon: "FileCode", description: "Legacy refactoring, CMake Universal Binaries (x86_64/arm64), C++ native modules" },
      { name: "C# & .NET Framework 4.5", level: "Proficient", icon: "Terminal", description: "Windows desktop application development basics, C# utilities, Win32 integrations" },
      { name: "Java / JavaFX & Gradle", level: "Advanced", icon: "Terminal", description: "Apple payment receipt validator, iOS supervision tools, Gradle scripts" }
    ]
  },
  {
    category: "Native iOS & Network Architecture",
    description: "Apple system APIs, security, WebRTC, and networking frameworks",
    skills: [
      { name: "MicroMDM Server & Supervised iOS", level: "Expert", icon: "Cpu", description: "MicroMDM server (https://github.com/micromdm/micromdm), Apple cfgutil CLI automation, APNS payloads, SCEP enrollment" },
      { name: "iOS Network Extensions & Go Proxy", level: "Expert", icon: "ShieldCheck", description: "Packet Tunnel Provider, SOCKS5 packet forwarder, lwIP, DNS over HTTPS (DoH), Content Filter Extension" },
      { name: "ReplayKit & Screen Broadcast Extensions", level: "Expert", icon: "Zap", description: "RPBroadcastSampleHandler, KidsNannyBroadcast target for real-time live screen screening" },
      { name: "macOS C++ Universal Binary Engines", level: "Expert", icon: "Cpu", description: "WebRTC real-time streaming, RtAudio capture, gloox XMPP, SQLiteCpp, CMake" },
      { name: "AVFoundation & Vision Framework", level: "Expert", icon: "Smartphone", description: "BarcodeScanner camera pipeline, 19 symbologies, Apple Intelligence Foundation Models" },
      { name: "Screen Time API & FamilyControls", level: "Expert", icon: "Smartphone", description: "DeviceActivityMonitor, DeviceActivityReport, ManagedSettings, ShieldAction" },
      { name: "XMPPFramework & Real-Time Chat", level: "Expert", icon: "ShieldCheck", description: "XMPPFramework (https://github.com/robbiehanson/XMPPFramework) for iOS real-time chat, stanza stream parsing, roster management, SASL auth & auto-reconnect" },
      { name: "Live Activities & WKWebView", level: "Expert", icon: "Zap", description: "ActivityKit, UserNotifications extension, WKWebView script injection & XHR caching" }
    ]
  },
  {
    category: "Security, Cryptography & Payments",
    description: "Encryption, In-App Payment validation, unified logging, and cryptography",
    skills: [
      { name: "CommonCrypto & AES-128 Cryptography", level: "Expert", icon: "KeyRound", description: "CCCrypt / CCCryptor AES-128 string & file encryption, PKCS7 padding, Base64, Java/Swift crypto interop" },
      { name: "Apple Unified Logging (os_log)", level: "Expert", icon: "FileCode", description: "SwiftOSLogger framework author, rotating file destinations, JSON Lines, privacy masking" },
      { name: "Apple Payment Receipt Validation", level: "Expert", icon: "KeyRound", description: "App Store Server Notifications v2, JWS signature verification, Google Play v2 subscriptions" },
      { name: "SQLite, FMDB & SQLCipher", level: "Expert", icon: "Terminal", description: "Encrypted database storage, multithreaded queries, migration scripts" },
      { name: "Keychain & Secure Enclave", level: "Expert", icon: "KeyRound", description: "Biometrics (Face ID / Touch ID), KeychainAccess, Secure Enclave keys" }
    ]
  },
  {
    category: "Tools, IDEs & CI/CD Pipelines",
    description: "Development environments, build automation, and release tools",
    skills: [
      { name: "IDEs & Development Environments", level: "Expert", icon: "Wrench", description: "Xcode, IntelliJ IDEA, Visual Studio Code (VS Code), Eclipse, Visual Studio" },
      { name: "Inno Setup 5 & Installers", level: "Advanced", icon: "Package", description: "Gradle + Inno Setup 5 automation generating self-contained .exe & .msi installer packages" },
      { name: "App Store Connect & TestFlight", level: "Expert", icon: "CloudUpload", description: "End-to-end release lifecycle management, App Store policy compliance" },
      { name: "Xcode, CMake & SPM", level: "Expert", icon: "Package", description: "Multi-target dependency management, custom framework binaries, CMake scripts" },
      { name: "Instruments & Debug Gauges", level: "Expert", icon: "Wrench", description: "Time Profiler, Allocations, memory leak resolution, 60 FPS UI polish" }
    ]
  }
];
