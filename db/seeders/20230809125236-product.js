"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        seller_id: 1,
        seller_discount_id: 2,
        title: "Wharedale Speaker",
        price: 250,
        description:
          "WH-S8EThe WH-S8E Subwoofer is an excellent choice to add to your home cinema surround sound system. Whether it’s an upgrade of an existing subwoofer or a new addition to your home cinema system, you can be sure of a stunning, fully-featured system. This super powerful WH-S8E subwoofer is specifically designed to provide an immersive listening experience from both music and movies.When used In conjunction with your existing speakers you will experience all the natural, surround sound action that 5.1 channel soundtracks feature. The result is a breathtaking natural sound performance; irrespective of the components you choose. Compactly sized, it can be placed at the front, the rear, or at the sides of your listening room and can be discreetly hidden away beside a sofa if desired.",
        categoryId: 1,
        quantity: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 2,
        seller_discount_id: 3,
        title: "Apple HomePod",
        price: 397,
        description:
          "Premium, immersive, high-fidelity audio⦁ Powerful high-excursion woofer delivers deep, rich bass⦁ Five beamforming tweeters for clear, detailed highs⦁ Advanced computational audio delivers room-filling sound⦁ Spatial Audio for big sound all around1⦁ Create a stereo pair with two HomePod speakers for more immersive listening4⦁ Connect one HomePod speaker or a stereo pair with Apple TV for rich hometheater audio5⦁ Works seamlessly with Apple devices; hold iPhone close to HomePod tohand off audio2⦁ Siri is the family’s intelligent assistant, helping with everyday tasks⦁ Home hub to connect and control smart home accessories3⦁ Designed from the ground up to be private and secure Audio Technology: 4-inch high-excursion woofer Array of five horn-loaded tweeters, each tweeter with its own neodymium magnet. Internal low-frequency calibration microphone for automatic bass correction, Advanced computational audio with system sensing for real-time tuning, Room sensing, Spatial Audio with Dolby Atmos for music and video, Four-microphone design for far-field Siri, Multiroom audio with AirPlay, Stereo pair capable",
        categoryId: 1,
        quantity: 25,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 3,
        seller_discount_id: 1,
        title: "SanDisk® Extreme Portable SSD E61 1TB",
        price: 185,
        description:
          "Product details of SanDisk® Extreme Portable SSD E61, SDSSDE61, IP55-rated for water- and dust-resistance, Storage Capacity: Up to 4TB, USB 3.1 Type-C Interface, Up to 1050 MB/s Read Speeds, USB Powered, Supports 128-Bit AES Encryption, Formatted as exFAT, compatible with Windows & Mac OS, 5-year warranty",
        categoryId: 1,
        quantity: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 4,
        seller_discount_id: 2,
        title: "ASUS Prime X570-P/CSM AMD AM4 Mainboard",
        price: 395,
        description:
          "Product details of (ALLSTARS: We Are Back Promo) ASUS Prime X570-P/CSM AMD AM4 Mainboard (Warranty 3years with Avertek). AMD AM4 ATX motherboard with PCIe 4.0, 12 DrMOS power stages, DDR4 4400MHz, dual M.2, HDMI, SATA 6Gb/s, USB 3.2 Gen 2 and Aura Sync RGB header. AMD AM4 socket: Ready for AMD Ryzen™ 5000 Series/ 4000 G-Series/ 3000 Series/ 3000 G-Series/ 2000 Series/ 2000 G-Series desktop processors. Enhanced power solution: 8+4 DrMOS power stages, ProCool connectors, alloy chokes and durable capacitors for stable power delivery. Industry-leading cooling options: Comprehensive controls for fans and AIO pump, via Fan Xpert 4 or the acclaimed UEFI. ASUS OptiMem: Careful routing of traces and vias to preserve signal integrity for improved memory overclocking. Next-gen connectivity: Supreme flexibility with PCIe 4.0, dual M.2, USB 3.2 Gen 2 ports. Aura Sync RGB header: Synchronize RGB header with a vast portfolio of compatible PC gear, including next-gen addressable RGB strips. Dressed in a professional attire, the Prime X570 series cater to users with serious pursuits in mind, who prefer to put their Ryzen™ processors to more productive use. Prime X570, known for its all-around specs and ASUS signature features, includes a wide range of tuning options for accessible performance. Hosting the latest Ryzen processor with increased number of cores and bandwidth, the Prime X570 series is ready for action with stable power, intuitive cooling and flexible transfer options. It provides all the fundamentals to increase your everyday productivity. Power delivery enhancements: The 3rd Gen AMD Ryzen™ processors boast more cores and bandwidth, demanding more power than typical desktop CPUs. Prime X570-P is geared up for the demands of these high-core-count processors, offering a stable power to ensure optimal performance. The Prime X570 series feature software and firmware controls that make performance accessible to anyone. Prime X570 series also include options allowing you to personalize your build, and helping you to tune your rig to perform the way you want it. Media-acclaimed UEFI BIOS: The UEFI BIOS is an early waypoint on any PC-building journey, and Prime X570-P offers one of the best in the business. Armoury Crate: Armoury Crate is a new software utility designed to give you centralized control of supported products. From a single intuitive interface, Armoury Crate allows you easily customize RGB lighting and effects for every compatible device in your arsenal. The software also provides control of settings for ASUS product, including keyboard and mouse preferences. Armoury Crate even features dedicated product registration and highlight to help you stay in touch with the ASUS community. Aura Sync RGB headers: Outshine the competition. A well-tuned enthusiast system deserves a matching aesthetic. ASUS Aura Sync offers full lighting connected via the motherboard's RGB headers, with a variety of functional presets for external LED strips.* And it can all be synced with an ever-growing portfolio of Aura-capable ASUS hardware. Addressable Gen 2 RGB header: Prime X570-P's Addressable Gen 2 RGB header is now capable of detecting the number of LEDs on second-gen addressable RGB devices, allowing the software to automatically tailor lighting effects to specific devices. The new headers also offer backward-compatibility with existing Aura RGB gear. Brighten Up Your Build: LED-illuminated control for PCH. Built-in LED lighting options illuminate your build in a variety of eye-catching styles. Dimensions ( W x H x L ) : 32 x 27 x 5",
        categoryId: 1,
        quantity: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 5,
        seller_discount_id: null,
        title: "[Bundle of 5] Plain Mouse Pad with Colour Border 25 x 21cm",
        price: 35,
        description:
          "Plain Mouse Pad with Colour BorderSize: 25 x 21cmRandom Colour will be given",
        categoryId: 1,
        quantity: 35,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 6,
        seller_discount_id: 3,
        title: "Iphone 14 pro max 512 GB",
        price: 2500,
        description:
          "Product details of Apple iPhone 14 Pro Max Ceramic Shield front, Textured matte glass back, Stainless steel design. Super Retina XDR display, 6.7‑inch (diagonal) all‑screen OLED display, 2796‑by‑1290-pixel resolution at 460 ppi, Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529, A16 Bionic chip, 48MP Main: 24 mm, ƒ/1.78 aperture, second-generation sensor-shift optical image stabilization, seven‑element lens, 100% Focus Pixels, 12MP Ultra Wide: 13 mm, ƒ/2.2 aperture and 120° field of view, six‑element lens, 100% Focus Pixels, 12MP 2x Telephoto (enabled by quad-pixel sensor): 48 mm, ƒ/1.78 aperture, second-generation sensor-shift optical image stabilization, seven‑element lens, 100% Focus Pixels, 12MP 3x Telephoto: 77 mm, ƒ/2.8 aperture, optical image stabilization, six-element lens, 3x optical zoom in, 2x optical zoom out; 6x optical zoom range; digital zoom up to 15x",
        categoryId: 2,
        quantity: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 7,
        seller_discount_id: 2,
        title: "Apple 10.2-inch iPad Wi-Fi + Cellular (9th generation)",
        price: 795,
        description:
          "NETWORK Technology, GSM / HSPA / LTE. Launch announced 2021, September 14, released 2021, September 24. BODY  Dimensions 250.6 x 174.1 x 7.5 mm (9.87 x 6.85 x 0.30 in), Weight 487 g (Wi-Fi) / 498 g (LTE) (1.07 lb), Build Glass front, aluminum back, aluminum frame, SIM        Nano-SIM and eSIM. Stylus support (1st gen only). DISPLAY Type Retina IPS LCD, 500 nits (typ), Size 10.2 inches, 322.2 cm2 (~73.8% screen-to-body ratio). Resolution 1620 x 2160 pixels, 4:3 ratio (~265 ppi density). Protection Scratch-resistant glass, oleophobic coating. PLATFORM OS iPadOS 15, up to iPadOS 15.7, upgradable to iPadOS 16.5, Chipset Apple A13 Bionic (7 nm+), CPU Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder), Apple GPU (4-core graphics). MEMORY Card slot No Internal 64GB 3GB RAM, 256GB 3GB RAM, MAIN CAMERA  Single 8 MP, f/2.4, 31mm (standard), 1.12µm, AF features, HDR, panorama. Video 1080p@25/30fps, 720p@120fps; gyro-EIS, SELFIE CAMERA  Single  12 MP, f/2.4, 122˚ (ultrawide), features HDR Video 1080p@25/30/60fps, gyro-EIS, SOUND  Loudspeaker  Yes, with stereo speakers, 3.5mm jack, Yes COMMS WLAN Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot, Bluetooth  4.2, A2DP, EDR, LE, Positioning GPS, GLONASS (Wi‑Fi + Cellular model only), NFC No, Radio No, USB Lightning, USB 2.0; magnetic connector, FEATURES  Sensors Fingerprint (front-mounted), accelerometer, gyro, compass, barometer. BATTERY        Type        Li-Ion, non-removable 8557 mAh (32.4 Wh), MISC        Colors        Silver, Space Gray, Models        A2603, A2604. Price  About 430 EUR. TESTS        Performance        AnTuTu: 617292(v9), GeekBench: 3124 (v5.1) GFXBench: 44fps (ES 3.1 onscreen), Display, Contrast ratio: 1123:1 (nominal), Camera        Photo / Video,Loudspeaker        -29.4 LUFS (Average)",
        categoryId: 2,
        quantity: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 1,
        seller_discount_id: 3,
        title:
          "Sony Singapore ILCE- 7CL / A7C Alpha E-mount Compact Full Frame Camera, with Kit Lens SEL2860",
        price: 2799,
        description:
          "Product details of Sony Singapore ILCE- 7CL / A7C Alpha E-mount Compact Full Frame Camera, with Kit Lens SEL2860. The α7C is the smallest and lightest full-frame camera with optical in-body image stabilisation. Breakthroughs in mechanical packaging and structural design bring no-compromise full-frame camera performance for powerfully simple still and movie content creation. The world’s smallest and lightest compact body, with no-compromise full-frame camera performance, Powerful BIONZ X™ image processing for spectacular image quality Advanced AF performance and functions, High-resolution 4K movies and a wealth of expression-expanding movie functions, Operability and reliability for comfortable and confident shooting, LENS E-mount  IMAGE SENSOR 3:2, RECORDING (STILL IMAGES) JPEG (DCF Ver. 2.0, Exif Ver.2.32, MPF Baseline compliant), RAW (Sony ARW 2.3 format), RECORDING (MOVIE) XAVC S, RECORDING SYSTEM Yes , NOISE REDUCTION Long exposure NR: On/Off, available at shutter speeds longer than 1 sec., High ISO NR: Normal / Low / Off, WHITE BALANCE Auto / Daylight / Shade / Cloudy / Incandescent / Fluorescent / Flash / Underwater / Color Temperature (2500 to 9900K) & color filter / Custom FOCUS Fast Hybrid AF (phase-detection AF / contrast-detection AF), EXPOSURE 1200-zone evaluative metering, VIEWFINDER 1.0 cm (0.39 type) electronic viewfinder (XGA OLED), LCD SCREEN 7.5cm (3.0-type) type TFT. OTHER FEATURES - SHUTTER Electronically-controlled, vertical-traverse, focal-plane type, IMAGE STABILIZATION Image Sensor-Shift mechanism with 5-axis compensation (Compensation depends on lens specifications), FLASH CONTROL - DRIVE Single Shooting, Continuous shooting (Hi+/Hi/Mid/Lo selectable), Self-timer, Self-timer (Cont.), Bracket: Single, Bracket: Cont., White Balance bracket, DRO bracket, PLAYBACK Yes, INTERFACE Mass-storage / MTP AUDIO Built-in, stereo, PRINT Exif Print, Print Image Matching III, DPOF setting, CUSTOM FUNCTION Custom key settings, Programmable Setting (Body 3 sets /memory card 4 sets), My Dial Settings, My Menu, Reg Cust Shoot Set, LENS COMPENSATION Peripheral Shading, Chromatic berration, Distortion, POWER One rechargeable battery pack NP-FZ100, OTHERS 32 - 104 degrees F / 0 - 40 degrees C, SIZE & WEIGHT Approx. 509 g / Approx. 1lb 2.0 oz (Body Only: Approx. 424 g / Approx. 0 lb 15.0 oz) ",
        categoryId: 2,
        quantity: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 2,
        seller_discount_id: 3,
        title:
          "PS5 Digital Console / Controller Bundle - SINGAPORE Playstation",
        price: 730,
        description:
          "Brand New Console.Latest CFI-1218B model. Official Playstation Singapore Warrantied Console With Playstation Singapore Hologram Sticker. 12 Months warranty by Playstation Singapore Service Center. Register online for EXTRA 90 days warranty on the console. NOT IMPORTED , ETC Japan/Korea/US/UK which is not covered by Singapore Distributor. Bundle Includes : 1. 1 X Playstation 5 Digital Edition CFI-1218B, 2. As Below Option : A. 2 X PS5 Dualsense Wireless Controller (2 X White), B. 2 X PS5 Dualsense Wireless Controller (1 X White , 1 X Cosmic Red), C. 2 X PS5 Dualsense Wireless Controller (1 X White , 1 X Galactic Purple), D. 2 X PS5 Dualsense Wireless Controller  (1 X White , 1 X Starlight Blue), E. 2 X PS5 Dualsense Wireless Controller (1 X White , 1 X Nova Pink), F. 2 X PS5 Dualsense Wireless Controller (1 X White , 1 X Black), G. 2 X PS5 Dualsense Wireless Controller (1 X White , 1 X Grey Camoflague), H. 1 X PS5 Dualsense Wireless Controller (White), ** 1 Year Playstation Singapore Warranty For All Controllers & Accessories.  3. 1 X HDMI Cable, 4. 1 X 3 Pin AC Power Cord, 5. 1 X USB Charging Cable, 6. 1 X Base Stand With Screw",
        categoryId: 2,
        quantity: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 3,
        seller_discount_id: null,
        title:
          "TP Link Tapo C210 CCTV IP Camera 1080P Home Security WiFi TPLink TP-Link",
        price: 12.5,
        description:
          "Ultra-High-Definition Video: Records every image in crystal-clear 3MP definition, Pan and Tilt: 360º horizontal range, Advanced Night Vision: Provides a visual distance of up to 30 ft, Motion Detection and Notifications: Notifies you when the camera detects movement, Sound and Light Alarm: Trigger light and sound effects to frighten away unwanted visitors. Two-Way Audio: Enables communication through a built-in microphone and speaker, Safe Storage: Locally stores up to 256 GB on a microSD card, equal to 512 hours (21 days) of footage. (Based on laboratory conditions), Voice Control: Free Up Your Hands with Voice Control: Works with the Google Assistant and Amazon Alexa. (Google Assistant and Amazon Alexa are not available in all languages and countries)",
        categoryId: 2,
        quantity: 34,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 4,
        seller_discount_id: 1,
        title:
          "PHIILIPS 32 inch SLIM LED HD Ready TV 32PHT5678/98 | Pixel Plus HD | 3 Year Local Warranty ",
        price: 239,
        description:
          "Ultra-High-Definition Video: Records every image in crystal-clear 3MP definition, Pan and Tilt: 360º horizontal range, Advanced Night Vision: Provides a visual distance of up to 30 ft, Motion Detection and Notifications: Notifies you when the camera detects movement, Sound and Light Alarm: Trigger light and sound effects to frighten away unwanted visitors. Two-Way Audio: Enables communication through a built-in microphone and speaker, Safe Storage: Locally stores up to 256 GB on a microSD card, equal to 512 hours (21 days) of footage. (Based on laboratory conditions), Voice Control: Free Up Your Hands with Voice Control: Works with the Google Assistant and Amazon Alexa. (Google Assistant and Amazon Alexa are not available in all languages and countries)",
        categoryId: 3,
        quantity: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 5,
        seller_discount_id: 3,
        title:
          "Denon AVC-X3700H 9.2 Channel 8K Ultra HD Receiver with Wifi and HEOS",
        price: 1299,
        description:
          "High-performance discrete 9-channel amplifier: Delivers a powerful 180W per channel to provide a trusted, precise and dynamic Denon sound experience. Full 8K/60Hz and 4K/120Hz support and upscaling: With the latest HDMI support, enjoy 8K quality video from your 8K source devices. One 8K input and two outputs allow for 8K/60Hz and 4K/120Hz pass-through. 8K upscaling is available on all 7 HDMI inputs. The latest in HDMI support: With 7 advanced HDMI inputs and 3 HDMI outputs with full HDCP 2.3 support, connect to all your favourite media devices and output up to three displays. Enjoy your favourite 3D audio formats: Enjoy immersive, 3D audio from sources like Dolby Atmos, Dolby Atmos Height Virtualization, DTS:X, and DTS Virtual:X. IMAX Enhanced Technology: Deliver a true IMAX theatre experience at home. Enhanced Audio Return Channel (eARC) HDMI support: Through the main HDMI output, connect your TV with eARC HDMI support to allow uncompressed and object-based audio formats like Dolby Atmos and DTS:X directly from your smart TV app to your AV amplifier. The latest in video compatibility: The latest HDR format support including HDR10, HDR10+ (New in 2020), HLG, Dolby Vision, as well as Dynamic HDR (New in 2020) to provide the greatest picture quality for brightness, clarity and contrast. The next generation in movie immersion: With 8K/60Hz pass-through and upscaling, Dynamic HDR and Quick Media Switching (QMS), enjoy crystal clear and smoothest picture in the highest quality available. The latest in gaming experiences: With 4K/120Hz pass-through, Variable Refresh Rate (VRR), Auto Low Latency Mode (ALLM) and Quick Frame Transport (QFT), enjoy your gaming experience with amazing imaging, as well as reduced lag and latency. Works with your favourite voice services: Use your voice to control the AVC-X3700H and wireless music services hands-free with Amazon Alexa, Google Assistant and Apple Siri. New DSP for more processing power: With 11.2ch max audio processing, connect an external power amplifier to the AVC-X3700H to power two extra channels to enjoy a 11.2ch home theatre setup. Wireless streaming from the most popular music services: Enjoy all of your favourite music services like Spotify, TuneIn Internet Radio, Amazon Music HD, TIDAL, Deezer and more. The AVC-X3700H also lets you enjoy your music via AirPlay 2, letting you stream your favourite tracks from Apple Music. “Roon Tested” Certified: Get more out of your digital music library with searchable, surfable information about your favourite artists and songs. Find lyrics, concert dates, photos, bios, reviews and more. Subscription required. Phono input: With the included phono input, the AVC-X3700H lets you connect your turntable and play vinyl records. Enjoy your collection with exceptional quality and sound. Dual subwoofer outputs: Smooths out low frequencies for better bass dispersion. HEOS Built-in wireless multi-room music streaming technology: Listen from any room for a connected, whole-home audio experience. The AVC-X3700H also works with the newly introduced Denon Home speakers to let you enjoy a whole-home audio experience. High-resolution audio streaming for Hi-Fi enthusiasts: Enjoy your favourite Hi-Res quality file playback with FLAC, ALAC, and WAV support, as well as DSD 2.8/5.6MHz.  All Zone TV audio: Play the audio from your TV to another zone, without losing fully discrete surround sound in the main zone. Built-in Bluetooth and Wi-Fi with 2.4GHz/5GHz dual band support: Solid wireless network connectivity even in congested environments. Bluetooth audio transmitter: Enjoy your favourite audio through your Bluetooth headphones late at night or with your family member who is hearing impaired. This feature supports Bluetooth-only playback as well as simultaneous playback with connected speakers. Award-winning Denon Setup Assistant and graphical user interface: Easy and intuitive out-of-box setup experience. Audyssey MultEQ XT32, Dynamic Volume, Dynamic EQ, LFC and Sub EQ HT: Delivers the ultimate equalization for your individual room including subwoofer EQ. Smart TV connectivity: Control the Denon AVC-X3700H with your TV remote via HDMI CEC. Custom install ready: The Denon AVC-X3700H features external control and IP control capabilities for easy customization and compatibility with third-party integration solutions. 12V Trigger output: Connect a device such as a projector and operate on standby power. Amazing audio built on 110-years of innovation: Denon is the defining audio company of Japan. Founded in 1910, we enable the moments that matter through the relentless pursuit of quality, innovation and audio performance.",
        categoryId: 3,
        quantity: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 6,
        seller_discount_id: 1,
        title: "Kith Smokeless BBQ Grill SBG-KC-B1 (Knob Control)",
        price: 189,
        description:
          "99.9% SMOKE-FREE BARBECUE - Enjoy zero smoke for your everyday barbecue session. ADJUSTABLE SWING ARM 120° - Quick way to pause grilling while allowing safe access to your food. PATENTED AUTO-ROTATE GRILL PAN 360° - Even grilling while having your food within reach on your dining table. PATENTED INFRARED HEATING TECHNOLOGY - Heat that penetrates quickly and effectively while retaining the juices, flavour & nutrients. UNIQUE GRILL PAN DESIGN - Non-stick, detachable & dishwasher-safe for easy & hassle-free cleaning. The grill pan is specially designed for unwanted grease/oil to flow down effortlessly to the oil tray. DIAL CONTROL KNOBS - Provide quick and easy control over cooking temperature and time. GRILLING / COOLING FAN - Circulate air around food which gives a very even heat. Auto-activated to cool down the unit after grilling. MULTIPLE ACCESSORIES AVAILABLE - Offers options to play and adjust to your grilling needs.",
        categoryId: 3,
        quantity: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 7,
        seller_discount_id: 3,
        title: "Dyson V12 Detect ™ Slim Fluffy Cordless Vacuum Cleaner",
        price: 959,
        description:
          "The lightest cordless vacuum with 150AW of powerful suction. Laser reveals microscopic dust. Automatically adapts suction power.  Scientific proof of a deep clean. Machine highlights. Laser detects the particles you can’t normally see. A precisely-angled laser makes invisible dust visible on hard floors – so you don’t miss anything. Measures microscopic dust particles A piezo sensor continuously sizes and counts dust particles – automatically increasing suction power when needed. Scientific proof of a deep clean. The LCD screen shows what’s been sucked up, displaying real-time scientific proof of a deep clean. Core technologies.  Dyson Hyperdymium™ motor. Powerful, lightweight digital motor spins up to 125,000rpm to suck up microscopic dust and large debris. Root Cyclone™ technology. 11 root cyclones generate centrifugal forces of up to 100,000g to capture dust and debris from the airflow, so there’s no loss of suction. Energy-dense battery. Each Click-in battery provides up to 60 minutes of fade-free power to clean here, there and everywhere around your home. Multi-stage filtration. Dyson’s fully-sealed filtration traps 99.97% of microscopic particles and allergens as small as 0.3 microns – and expels cleaner air. Carbon fibre filaments. Black anti-static carbon fibre filaments to extract fine dust from hard floors.",
        categoryId: 3,
        quantity: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 1,
        seller_discount_id: null,
        title:
          "Yangzi Dehumidifier with 800ml Water Tank/Local 3 Months SG Warranty",
        price: 30.9,
        description:
          "Noise reduction and Ultra-quite with less than 30db. Suitable for pregnant women, babies and senior citizens. Keep the air clean and remove moisture. One button switch, simple as plug and play. Dehumidifying covers up to 20 square feet. Incredible feature and design. Compact, and lots of details. Built-in Smart Chip to prevent water from over flowing and prevent power from over voltage. Removable Water Tank to pour away the moisture collected. Water tank capacity of 800ml",
        categoryId: 3,
        quantity: 25,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 2,
        seller_discount_id: 1,
        title: "Jurlique Herbal Recovery Signature Serum 50mL",
        price: 153,
        description:
          "Revitalises radiance and helps reduce the appearance of dullness. Ultra concentrated with advanced absorption technology for faster results. Softens the appearance of fine lines and wrinkles.",
        categoryId: 4,
        quantity: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 3,
        seller_discount_id: null,
        title:
          "Schwarzkopf BC BONACURE Oil Miracle Brazilnut Pulp Treatment - 500ML",
        price: 37.9,
        description:
          "Indulging oil care regime for all hair types, even colour-treated. Highly nourishing formula has superb moisturising benefits as well as anti-oxidative properties. Innovative Argan powder particles gently remove impurities for healthy-looking hair and brilliant shine.",
        categoryId: 4,
        quantity: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 4,
        seller_discount_id: null,
        title: "DENIM Shaving Foam Black",
        price: 4.7,
        description:
          "Denim Black is made for the bold and the confident. The unmistakably intense and woody accord of Patchouli, Sandalwood And Cedar represent masculinity, while Amber, Labdanum And Oakmoss balances the composition with warm sensual tones. Denim Black is a timeless classic.",
        categoryId: 4,
        quantity: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 5,
        seller_discount_id: null,
        title: "Swisse Ultiboost Glucosamine + Chondroitin 90 Tabs",
        price: 59.8,
        description:
          "Swisse Ultiboost Glucosamine + Chondroitin is a supplement that contains Glucosamine, Chondroitin, ginger and other nutrients to support healthy joints.BenefitsSwisse Ultiboost Glucosamine + Chondroitin contains glucosamine, chondroitin, ginger and other nutrients to support healthy joints. Swisse Ultiboost Glucosamine + Chondroitin supports:Joint Health: Glucosamine for healthy joints and cartilage.Cartilage Health: Chondroitin is important for the healthy cartilage.Bone Health: Manganese contributes to the maintenance of normal bones.DirectionsDIRECTIONS FOR USE:Take three tablets daily with or immediately after meal, or as directed by a healthcare professional.WARNINGS:If you have concerns or questions, ask the advice of your healthcare professional to determine if this health supplement is right for you. Ingredients derived from shellfish.Key IngredientsGlucosamine sulfate sodium chloride, Sodium chondroitin sulfate (Bovine), Anti-caking agents (Microcrystalline cellulose, Silicon dioxide, Magnesium stearate), Calcium ascorbate dihydrate, Bulking agent (Croscarmellose sodium), Coating (Stabilizer (Polyvinyl alcohol), Colours (Titanium dioxide, Iron oxide black), Bulking agent (Macrogol), Anti-caking agent (Talc), Glazing agent (Carnauba wax)), Thickener (Acacia), Stabilizer (Povidone), Manganese gluconate, Copper gluconate, Zingiber officinale rhizome extract.",
        categoryId: 4,
        quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 6,
        seller_discount_id: 1,
        title:
          "HUGO BOSS Fragrances BOSS Bottled Eau de Parfum for Men (BOSS Bottled Eau de Parfum 100ml) ",
        price: 179,
        description:
          "Invite him to dive into summer with this season’s BOSS Bottled Eau de Toilette gift set for men. Inspired by clear waters and chilled beach vibes, this refreshing, sun-dappled BOSS Bottled gift set transports the wearer to a summer paradise where they can relax in the refreshing shade of palm trees. Vibrant and sensual, this men's Eau de Toilette exudes sophistication. Balanced by a fresh and fruity top note, its warm floral heart blends geranium with a dash of clove. The base note is decidedly masculine: a vibrating harmony of sandalwood, cedar and vetiver. The BOSS man is primed to succeed – focused, determined and ambitious. His daily preparation rituals, of which BOSS Bottled Eau de Toilette is an integral part, are key to his personal quest for success. BOSS Bottled Deodorant Spray keeps odour at bay while adding a subtle final layer of the line's distinctive scent. ",
        categoryId: 4,
        quantity: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 7,
        seller_discount_id: null,
        title: "Pampers Diaper Premium Care Taped L - 42Pcs x 3 (Bundle of 3)",
        price: 58.45,
        description:
          "Cloud-like breathable system which has 10,000 micro holes through new improved tape and top/backsheet to keep the circulation of fresh air. It helps to prevent stuffiness and improves comfort. This can help to protect your baby's skin from diaper rash.",
        categoryId: 5,
        quantity: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 1,
        seller_discount_id: null,
        title:
          "Similac Gain Kid 5MO Stage 4 Pre-school Milk Powder Formula 1.8 KG (3 Years Onwards)",
        price: 72.8,
        description:
          "NEW Similac Gain with a unique blend of 5-MOs; contain IMMUNIFY Ingredient that supports your child’s immunity. An EyeQ Plus nutrition system, now enhanced with Gangliosides also contains Natural Vitamin E, Lutein; and DHA that supports brain and eye development. Similac® Gain contains no sucrose, no palm oil and is GMO free. IMMUNIFY ingredients (Vitamin A, B6, B12, C, D, Copper, Folic Acid, Iron, Selenium and Zinc) Support normal immune system function.",
        categoryId: 5,
        quantity: 25,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 2,
        seller_discount_id: 2,
        title:
          "iBaby Monitor M8 - Award Winning WiFi Baby Monitor, Smart Baby Care System ",
        price: 296,
        description:
          "2K High Definition Video. Moonlight Projector. Installation Under 60 Seconds.  Dual-Band Wi-Fi Router Support 2.4 / 5 GHz ( no Mesh ). Temperature and Humidity Sensor. Play In-App Lullabies or Record Your Voice. Connect To iTunes & Play Your Favorite Songs. Sound and Motion Alert Timeline. 360º Pan and 90º Tilt. Wall mounting kits included.  Motion and Sound Alert Notifications. Unlimited Users Can Access and View.",
        categoryId: 5,
        quantity: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 3,
        seller_discount_id: 3,
        title: "Lamborghini Kids Electric Car",
        price: 229,
        description:
          "Lamborghini Kids Electric Car RC toy car. RC Vehicles & Batteries >RC Vehicles. Recommended Age: 2-8 years.",
        categoryId: 5,
        quantity: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 4,
        seller_discount_id: null,
        title: "3 In 1 Tumbler Stacking Hand Rattles Baby Toy With Music",
        price: 13.9,
        description:
          "👶🏻🧸🎶 Introducing our 3 In 1 Tumbler Stacking Hand Rattles Baby Toy With Music! 🌟 This versatile baby toy is a hand rattle, tumbler, and stacking toy all in one, and it even comes with music! 🤹‍♀️ With 3 ways to play, this toy will help exercise your baby's hand-eye coordination and improve their cognitive skills. 🎨 Designed with aesthetic color matching, this toy will also aid in color cognition enlightenment. 🎶 Let your baby enjoy endless hours of fun with our 3 In 1 Tumbler Stacking Hand Rattles Baby Toy With Music!",
        categoryId: 5,
        quantity: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 5,
        seller_discount_id: 2,
        title: "Jinro is Back Korean Soju | 360ml x 20s",
        price: 172,
        description:
          "THE WORLD’S BEST-SELLING SPIRIT BRAND. Since Jinro Soju was established in 1924, it has consistently been hailed as the #1 brand of soju in Korea. Over the past 17 years, it has also maintained its position as the best-selling spirit brand in the world! JINRO IS BACK @ 16.5% ABV JINRO's sensuous classic is back, delivering doses of nostalgia through its signature taste and vintage design.Savour HITEJINRO's heritage with this clean, mild soju with 16.9%alcohol content, packaged in a light blue bottle and silver cap.",
        categoryId: 6,
        quantity: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 6,
        seller_discount_id: null,
        title: "Tasti Nut Peanut Butter and Salted Caramel - by Optimo Foods",
        price: 7.85,
        description:
          "Here at Tasti we are very proud of our snacking range. Whether you're after a fruity morsel, or perhaps something baked to have with a cuppa or if you're just nuts about nuts, we have a delicious snack for you and the whole clan. And they're all made with naturally delicious ingredients. Ingredients -  Peanut (33 - percent) (Roasted Peanuts, Peanut Butter (6 - percent), Peanut Flour), Glucose, Cereals (Oats, Rice Pops (Rice, Sugar, Salt, Malt Barley Extract)), Vegetable Oil, Milk Choc Compound (11 - percent) (Sugar, Vegetable Oil, Milk Solids, Cocoa Powder, Emulsifiers (Soy Lecithin, 492), Natural Flavour), Sugar, Humectant (Glycerol), Natural Flavour, Salt (0.5 - percent), Emulsifier (Soy Lecithin), Caramelised Sugar. Storage Guidelines - Store in a cool,dry place.",
        categoryId: 6,
        quantity: 200,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 7,
        seller_discount_id: 1,
        title: "ACANA GRASS FED LAMB 11.4kg",
        price: 148.5,
        description:
          "ACANA Singles Grass-Fed Lamb. Limited ingredient doesn’t mean less meat. ACANA Singles Grass-Fed Lamb is loaded with 50% quality lamb ingredients in 50% WholePrey ratios, complemented with tasty, whole Red Delicious apples, providing your dog with the protein and nutrients they need in order to stay happy, healthy, and strong.FormulaRich in Animal Protein: Rich in protein from a single animal source, with no peas or plant-protein isolatesWholePrey For Dogs: WholePrey ratios of meat, organs, and cartilage deliver nutrients that help dogs feel their bestCirculation & Immune Support: Enriched with taurine and essential vitamins and minerals for circulatory and immune system health.IngredientsRaw grass-fed lamb (18%), lamb meat meal (18%), whole green peas, whole red lentils,raw lamb liver (4%), lamb fat (4%), fresh Red Delicious apples, whole garbanzo beans, whole green lentils, whole yellow peas, raw lambtripe (2%), raw lamb kidney (2%), dried lamb cartilage (2%), lentil fibre, marine algae (pure and sustainable source of DHA and EPA), fresh whole butternut squash, fresh whole pumpkin, dried brown kelp, freeze-dried lamb liver (0.1%), salt, fresh whole cranberries, fresh whole blueberries, chicory root, turmeric root, milk thistle, burdock root, lavender, marshmallow root, rosehips.Supplements: Vitamin D, Vitamin E, zinc proteinate, calcium pantothenate, copper chelate, taurine.ACANA Grass-Fed Lamb is formulated to meet the nutritional levels established by FEDIAF for All Life Stages, except for growth of large size dogs.FactsBreed Size: All Breeds Life Stage: All Stages Special Diet: By-Product Free, Grain FreeProtein: Lamb.",
        categoryId: 6,
        quantity: 40,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 1,
        seller_discount_id: null,
        title: "TP 706 Bleach 3.5L",
        price: 3.5,
        description:
          "Laundry Usage: For white and Colour-fast cotton and linen, white nylon and rayonRemoval of Stubborn Stains: Fruit juices, Wine, Coffee, Tea, Chocolate, Vegetables, Flowers, Grass, Blood and Medicine stainsUse as Disinfectant, Deodoriser or Stain Remover. For household surfaces such as bath tubs, basins, sinks, porcelain tiles, utensils enamel ware and dish cloth.",
        categoryId: 6,
        quantity: 200,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 2,
        seller_discount_id: null,
        title:
          "Kleenex Ultra Soft Cottony Clean Toilet Tissue 30 Rolls Plus Free Wet Toilet Tissue Flushable Wipes 40 Sheets",
        price: 20.45,
        description:
          "Kleenex toilet tissue offers ultra softness and strength with 3-ply thick sheets. Designed with our consumers in mind and developed with advanced technology using 100 percent virgin fibers. Each sheet gives a comforting sensation of softness, helping to ensure the best in gentle, family hygiene care. Secifically crafted CleanWeave design on each sheet helps remove dirt for a thorough clean. Woven with cotton extract, Kleenex Clean Care Toilet Tissue provides a luxurious soft touch to feel comfortably clean. The feeling of CLEAN that makes you feel brand new everyday. FREE Kleenex Ultra Soft Moist Toilet Tissue, designed to remove unseen dirt and help reduce odours. Its gentle formulation is suitable for sensitive skin. Use with Kleenex Ultra Soft Toilet Tissue for cleaner and fresher feeling, anytime, anywhere. Storage Guidelines - Store in cool dry place.",
        categoryId: 6,
        quantity: 120,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 3,
        seller_discount_id: 1,
        title:
          "Solid wood bookcase bookshelf bookcabinet non-pollution pure natural shelf simple modern storage cabinets oak bookcase storage",
        price: 103.2,
        description:
          "Quality solid wood: heightening base support design, waterproof moisture-proof, effectively prevent mildew. Multi-layer storage: reasonable planning and storage, making the home orderly. Loan-bearing strong: thick material, stable without shaking, practical and beautiful. Safe: no paint smell, safe and non-toxic.",
        categoryId: 7,
        quantity: 43,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 4,
        seller_discount_id: 3,
        title: "Char-Broil Performance 580 Charcoal BBQ Grill",
        price: 440,
        description:
          "ASSEMBLED DIMENSION: 122(H) x 112(W) x 74(L) (cm). PACKAGING DIMENSION: 74(H) x 42(W) x 58(L) (cm). 580 square inches surface. Adjustable height control pan CrankAdjustable Fire Grate. Large Ash Drawer Side Shelf. Temp Gauge Lid. Standard Wheels.",
        categoryId: 7,
        quantity: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 5,
        seller_discount_id: null,
        title: "Wardrobe organiser Clothes container wardrobe storage box",
        price: 8.2,
        description:
          "Wardrobe Organiser Storage Box for clothes, bed sheet, books. High capacity, thick material, washable, wear-resistant and durable. Suitable for a variety of wardrobes. Can be folded and stored when not in use. Make our clothes neater, easier to find, save space and time. Material: Fabric & PP. Color: Grey/Beige. Without cover/ with cover. Extra Large: 47x34x21cm.",
        categoryId: 7,
        quantity: 50,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 6,
        seller_discount_id: null,
        title: "Leopard 36 Inch Ironing Board",
        price: 25.9,
        description: "Ironing Board With Extendable Metal Holder.",
        categoryId: 7,
        quantity: 49,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 7,
        seller_discount_id: null,
        title: "SHIORA Lemongrass Reed Diffuser (Lemongrass)",
        price: 14.7,
        description:
          "A powerful citrus scent that repels most household pests. Our Lemongrass infusion is specially blended to transform a space instantly into a Balinese villa, transporting the environment into the lush, green forests of Ubud. Relieve anxiety and stress - Refresh and renew - Natural insect repellent. The only aromatherapy that you need.",
        categoryId: 7,
        quantity: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 1,
        seller_discount_id: null,
        title: "MUJI Ladies Complete Seamless Boy Shorts",
        price: 14.9,
        description:
          "Materials: Modal 45%, Nylon 39%, Elastane (UK) /Spandex (US) 16%. Country of Origin: Thailand.",
        categoryId: 8,
        quantity: 35,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 2,
        seller_discount_id: null,
        title: "Nike Women's Sporstwear Boxy T-Shirt - Black (Free Size)",
        price: 44.5,
        description:
          "Product details of Nike Women's Sporstwear Boxy T-Shirt - Black. STYLE COLOR: DX7933-010. Women's APPAREL DIVISION NIKE SPORTSWEAR.  Black.  Nike Women's Sporstwear Boxy T-Shirt - Black. Elevate your style—and those around you—in this soft cotton tee. Relaxed without feeling too big, its boxy fit is shorter than our oversized tops but still roomyr a relaxed look and feel. Midweight cotton fabric feels soft and slightly textured. Roomy fit with slightly dropped shoulders provides relaxed look without feeling too big. 100% cotton. Printed graphics. Machine wash. Imported.",
        categoryId: 8,
        quantity: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 3,
        seller_discount_id: null,
        title:
          "OMAX SG ♥ Handbag/Oxford Cloth Dumpling Bag/Dumpling Bag/Nylon Bag (Yellow)",
        price: 19,
        description:
          "Product details of OMAX SG Handbag/Oxford Cloth Dumpling Bag/Dumpling Bag/Nylon Bag. Brand: OMAX. Materials: Nylon. P/N : OX1702243. Colours : Black/Blue/Dark Blue/Dark Red/Rose Red/Purple/Yellow/Coffee/Orange Size: L30*H23*W12cm. Style : Shoulder Bag. Delivery Note : Large Size and Small size Bag to ship directly from oversea store to Buyer door step , take 7 to10 working days.",
        categoryId: 8,
        quantity: 43,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 4,
        seller_discount_id: null,
        title: "MUJI Ladies UV Cut Zip Up Hoody (XL)",
        price: 36,
        description:
          "Product details of MUJI Ladies UV Cut Zip Up Hoody. Materials: Polyester100%. Country of Origin: Vietnam.",
        categoryId: 8,
        quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 5,
        seller_discount_id: null,
        title:
          "Eyouth 1062 women casual pants wide leg high waist culottes pants (Free Size)",
        price: 12,
        description:
          "Bottom: EY1062. Materials: Cotton and elastic, Stretchable. Waist 72-82cm, Hip102cm, Length: 86cm.",
        categoryId: 8,
        quantity: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 6,
        seller_discount_id: null,
        title:
          "Short Sleeve Tee Dri-fit Heather Unisex HF Casual | Homewear | Comfy Tee | Activewear | Sports (Black)",
        price: 12,
        description:
          "A cooling tee that is quick dry, cool and comfortable due to its two-way air circulation function. A versatile fabric, its colour and shape remains intact after washing. With excellent elasticity, it is also soft and ultra-smooth, providing extreme comfort. Its ultra-lightweight material quickly emits heat generated in exercise and wicks the sweat away so your body stays cool! It also protects your skin with its UV protection that blocks 98.7% of UV rays. Suitable for all seasons(all weather sports, weight training, cycling, surfing, yoga and more). Size: Please read our size chart carefully before ordering. Style: Casual / Regular Fit / Asian Fit. Colour: Blue, Turquoise, Grey, Ash Purple, Dark Teal, Navy. Pattern Type: Heather.Type: Drifit Tee. Fit: Elasticated fit. Composition: Polyester-Spandex Blend. Fabric: Stretchable (8% Spandex)",
        categoryId: 9,
        quantity: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 7,
        seller_discount_id: null,
        title:
          "PAR3 Golf Polo Tshirts Stripes Designs with Anti Odor Technology, Breathable & Lightweight Materials (Red)",
        price: 32,
        description:
          "Product details of PAR3 Golf Polo Tshirts Stripes Designs with Anti Odor Technology, Breathable & Lightweight Materials.  Premium Quality Dri Fit Material – fabric are made of polyester and spandex perfectly design for any outdoor activity be it in golfing, leisure time or night out activity. With Odor Control Technology- it has moisture absorbing technology that ensures you will stay cool, dry and non-sticky and comfy during any activity.  Breathable and Light Weight – Our PAR3 Polo Tshirts are great choice for your leisure time, comfortable enough be it in golf course or pair with pants for night out.  Elegant Design – it has refresh classic look. with stripes designs that gives you elegant and classic style.",
        categoryId: 9,
        quantity: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 1,
        seller_discount_id: null,
        title: "Premium Chino Pants (Brown)",
        price: 19,
        description:
          "Brand: Florella. 2 Colours: Khaki Brown / Green. Premium Chino Pants. Stretchable / Slim Fit-Cut. (Sizes: 27 to 44inches)",
        categoryId: 9,
        quantity: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 2,
        seller_discount_id: null,
        title: "Weinbrenner Men Slip-On Shoes 851X288",
        price: 54,
        description:
          "Product details of Weinbrenner Men Slip-On Shoes 851X288. Weinbrenner has created durable footwear for both adventure and leisure time, no matter if you hike through forests or concrete jungles. Resistant and fresh footwear offered for lovers of the outdoors. Sneakers are primarily designed for sports and other physical activities. It is now used for everyday wear to refresh your casual look with a fashionable pair of sneakers. Size: UK (7,8,9,10) - Indicate in description",
        categoryId: 9,
        quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 3,
        seller_discount_id: null,
        title:
          "BYFORD 1PC MEN'S WOVEN LONG PANTS | COTTON BLEND | BML957699AS1",
        price: 18,
        description:
          "Product details of BYFORD 1PC MEN'S WOVEN LONG PANTS | COTTON BLEND | BML957699AS1.(Size: L and XL) Waist - L: 96 to 91 cm.  XL: 94 to 99 cm.  Seam (Waist to Bottom)  L: 104cm. XL: 106cm.",
        categoryId: 9,
        quantity: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 4,
        seller_discount_id: 2,
        title: "Orient Ray 2 Blue Dial Mens Automatic Divers Watch AA02005D",
        price: 288,
        description:
          "Product details of Orient Ray 2 Blue Dial Mens Automatic Divers Watch AA02005D.  We Have a Physical Watch Retail Shop.  All Products are Brand New in Box. Orient comes with 2Year International Warranty *Brand New with Tags and Complete SetDiameter 41.5mmNow $295- ORIENT SELF WINDING MOVEMENT - MINERAL GLASS - DAY & DATE FUNCTION - 200M WATER RESISTANT. Specifications of Orient Ray 2 Blue Dial Mens Automatic Divers Watch AA02005D BrandOrientSKU231650886_SGAMZ-355399526Dial GlassMineral GlassFeatureDepth Measurement,Date,Luminous,Shock ResistantMovement.  Type:AutomaticWatch.  Strap:MaterialStainless, SteelModelAA02005DMovement.  Country OriginJapan. Watch's water resistance200mWhat’s in the box -1 X ORIENT BLUE RAY AA02005D WATCH WITH ORIGINALS TAGS - 1 X ORIENT ORIGINAL GIFT BOX - 1 X ORIENT INSTRUCTIONS MANUAL - 1 X ORIENT WARRANTY BOOKLET - 1 X HOUR BOUTIQUE OFFICIAL RECEIPT.",
        categoryId: 10,
        quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 5,
        seller_discount_id: 1,
        title:
          "Titan Raga White Dial With Silver Metal Strap Women's Watch 2608SM01",
        price: 110,
        description:
          "Product details of Titan Raga White Dial With Silver Metal Strap Women's Watch 2608SM01. Wear white and take your class to heights. Titan Raga Viva collection features this white dial analog timepiece which is sure to become your pick just by a mere sight at it. Encased carefully in a round metal case is the gleaming white dial with steel metallic strap having jewellary clasp for the perfect beautiful fit. The watch shows the time with metal applique indices placed at five-minute intervals and three plain hands. Crafted with elegance for women of substance, the lovely strap of the watch also serves as a fashionable and fitting Bracelet. It is 3 ATM water resistant and scratchproof, taking away all the reasons from you to not own it instantly. Dial Color: White, Case Shape: Round, Dial Glass Material: Mineral. Band Color: Silver, Band Material: Metal. Watch Movement Type: Quartz, Watch Display Type: Analog. Case Material: Brass, Case Diameter: 29 millimeters. Water Resistance Depth: 30 meters 2 years manufacturer warranty on manufacturing defects.",
        categoryId: 10,
        quantity: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 6,
        seller_discount_id: 3,
        title: "Mido Multifort M Chronometer M0384311109700",
        price: 1920,
        description:
          "Product details of Mido Multifort M Chronometer M0384311109700. The Multifort M Chronometer with a movement tested and certified by the COSC (Contrôle Officiel Suisse des Chronomètres). This model is distinguished by its exceptional quality – well beyond the standards. Its Caliber 80, with a power reserve of up to 80 hours, is equipped with a silicon hairspring, an imperturbable factor of accuracy. The characteristic round indexes, lined with beige Super-LumiNova®, offer optimal readability against the darker background, vertical satin-brushed and graduated. Water-resistant up to 100 m and equipped with a bracelet that offers the convenience of changing in one click, without instruments. 10 bar (100 m / 330 ft) with screwed crown. 5 Years of Warranty. Gent, Multifort, Water resistance, Warranty, Gender, Collection, Modele No. M038.431.11.097.00.",
        categoryId: 10,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        seller_id: 7,
        seller_discount_id: 3,
        title: "Mido Baroncelli M0413072201600",
        price: 2090,
        description:
          "Product details of Mido Baroncelli M0413072201600.The Baroncelli Tonneau Lady is a delightful model with feminine curves. Faithful to the subtle, understated design of the Baroncelli Heritage family, the rim of the case is adorned with double gadroons and frames an extremely pure white grained dial set with 12 diamonds. It is fitted with an automatic movement. 2 years International Warranty. Material:Stainless steel with rose gold PVD coating. Dimension30.50 mm X 35.00 mm. Between lugs:16.00 mm. Water-resistance:3 bar (30 m / 100 ft).Crystal:Sapphire crystal. Case height:7.45 mm. Transparent caseback.Dial set with 12 diamonds (0.045 ct).Dial colour:White. Hour Markers:Diamonds. Stainless steel with rose gold PVD coating. Specifications of Mido Baroncelli M0413072201600. BrandMidoSKU1105160862_SGAMZ-4267342835Watch Strap MaterialStainless SteelMovement Country OriginSwitzerlandCase ShapeTonneauModelM0413072201600Movement TypeAutomaticWater Resistant30mDial GlassSapphire Glass",
        categoryId: 10,
        quantity: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("categories");
  },
};
