# Vi Microsystems — Website Content Extract

**Source:** https://www.vimicrosystems.com/
**Extracted:** 30 September 2026
**Purpose:** Content inventory for website rebuild
**Status:** Phase 1 complete (all main pages). Product detail pages pending — see Section 7.

---

## 1. SITE TECHNICAL PROFILE

| Item | Finding |
|---|---|
| Platform | Static hand-coded HTML (no CMS) |
| Template base | BootstrapMade theme (credited in some footers) |
| Page count | 8 main pages + ~150–400 product pages (estimate) |
| URL pattern | Product pages use the product name as the filename, with spaces, e.g. `/SCR Characteristics Trainer.html` |
| Protocol | Mixed — homepage serves HTTPS, inner pages often link to HTTP |
| SEO metadata | **Empty on every page.** `meta-description` and `meta-keywords` are blank sitewide |
| Page titles | Inconsistent — e.g. `Vi Microsystems Pvt.,Ltd.,//About`, and `Catalogues.html` is wrongly titled `//Gallery` |
| Image paths | Use Windows backslashes (`assets\img\...`) — broken convention, works only by browser tolerance |
| Alt text | Absent or generic ("Another Image", "Alternative Image") on nearly all images |

### Issues to fix in the rebuild
1. **No meta descriptions or keywords anywhere** — a significant SEO gap.
2. **Spaces in URLs** — should become hyphenated slugs (`/scr-characteristics-trainer`).
3. **Backslash image paths** — must be converted to forward slashes.
4. **Mixed HTTP/HTTPS** — force HTTPS throughout.
5. **Duplicate/wrong page titles** — Catalogues page carries the Gallery title.
6. **Contact details are inconsistent** between pages (see Section 2).
7. **Client logos repeat** — the same four logos appear several times in the carousel.
8. **Gallery text error** — the "OFFICE IV VISITS" block describes *intravenous therapy* ("intravenous treatments", "enhanced hydration and nutrient delivery"). This is clearly AI-generated filler that misread "IV" as intravenous instead of *Industrial Visit*. Must be rewritten.

---

## 2. COMPANY / CONTACT DETAILS

**Company name:** Vi Microsystems Pvt. Ltd.
**Founded:** 1986 (site variously says "37 years old" and "38 years of expertise")
**Tagline / motto:** "Design and Develop the Hardware and Software products"

**Address (primary):**
No: 75, Electronics Estate, Perungudi, Chennai-96, India

> ⚠️ Inconsistency: Courses, Academic Projects and Inplant Training footers say **"Industrial Estate"** instead of **"Electronics Estate"**. Confirm which is correct.

**Phone (general):** +91-44 2496 1842, +91-44 2496 1852
**Email (general):** sales@vimicrosystems.com

**Training/courses contact (different — appears on Courses, Academic Projects, Inplant Training):**
Email: suresh@vimicrosystems.com
Phone: +91-94440 61857

**Key facts used repeatedly across the site:**
- Three-storey building, ~20,000 sq ft, Chennai
- ~200 employees
- Departments: Sales, Service, R&D, Production, Quality Control, Finance, Purchase, Project
- R&D wing recognised by Department of Scientific & Industrial Research (DSIR), Government of India
- Over 3,000 products offered
- Siemens-approved Educational Partner for PLM software
- Founder: an educationalist and ex-Scientist from Government of India (never named on the site)

**Homepage counters (labels present, numbers not in extracted text — get from client):**
Clients · Projects · Support · Workers

---

## 3. SITEMAP

```
/
├── index.html ................... Home
├── about.html ................... About
├── Catalogues.html .............. Catalogues (18 downloadable PDFs)
├── Clients.html ................. Clients (state-wise list + logo wall)
├── Gallery.html ................. Gallery (12 photo categories)
├── contact.html ................. Contact
│
├── PRODUCTS (dropdown — 20 categories)
│   ├── Advanced Digital Drives ......... IPM_Based_Power_Module.html
│   ├── Communication Trainers .......... PAM-PPM-PWM Modulation and Demodulation Trainer.html
│   ├── Control System Trainers ......... DC Servo Motor Controller.html
│   ├── Digital Signal Processing ....... TMS320VC5416 Based DSP Trainer.html
│   ├── Embedded Technology ............. 89C51 Development Board.html
│   ├── Instrumentation Trainers ........ LEVEL CONTROL MEASUREMENT MODULE.html
│   ├── Internet of Things .............. IoT Development System.html
│   ├── Mechanical Labs ................. Four Stroke Single Cylinder Diesel Engine Trainer Rig.html
│   ├── Microprocessor & Controller ..... 8085 Microprocessor Trainer Kit.html
│   ├── PLC Application Modules ......... PLC-SIE2 with Demo Panel Training Kit.html
│   ├── Power Electronics Trainers ...... SCR Characteristics Trainer.html
│   ├── Power System Trainers ........... DC Network Analyzer.html
│   ├── Process Control Trainers ........ Multiple InputOutput Process Trainer.html
│   ├── RF Microwave Trainers ........... RF Signal Source with Detector.html
│   ├── Robotics Labs ................... 2 Axis Robotic-Matlab Trainer.html
│   ├── Smart Grid Products ............. Solar Wind 3Φ, 2KW Smart Grid.html
│   ├── Special Products ................ Flexible AC Transmission Systems.html
│   ├── VLSI Technology ................. Advanced Universal FPGA Trainer.html
│   ├── Wireless Sensor Network ......... wireless_connectivity_kit.html
│   └── Digital Twins Industry 4.0 ...... DIGITAL TWINS INDUSTRY4.0.html
│
└── SERVICES (dropdown — 3 pages)
    ├── Acadamic projects.html .......... Academic Projects [note: "Acadamic" is misspelt in the URL]
    ├── Inplant Training.html ........... Inplant / Internship Training
    └── Courses.html .................... Courses

ORPHANED / LINKED-BUT-NOT-IN-NAV:
    ├── Value Added Certification Courses.html  (linked from homepage banner + Inplant page)
    ├── Smart Grid Simulator.html
    ├── Level Process Controller.html
    ├── WHEATSTONE BRIDGE.html
    ├── Transmission Line Trainer.html
    ├── 6 Axis Robotic Trainer.html
    ├── Microcontroller Based Distance Impedance Relay Trainer.html
    ├── Three phase Flying Capacitor 5 level inverter power module.html
    └── services.html  (linked from About page, may be a dead link — verify)
```

**Navigation structure to carry across:**
Home · About · Products (20-item dropdown) · Catalogues · Clients · Services (3-item dropdown) · Gallery · Contact

---

## 4. PAGE-BY-PAGE CONTENT

### 4.1 HOME (`index.html`)

**Hero heading:**
> Established in 1986, with a prime motto to "Design and Develop the Hardware and Software products"

**Hero sub-text:**
> This organization was established to keep in tune with the developing technologies in the field of Electrical, Electronics, Instrumentation, Mechanical, Chemical etc.

**Stat counters:** Clients · Projects · Support · Workers

**Promo banner:**
> "Enroll in top Summer Value Added Certification Courses and gain valuable industry certifications this season."
> → links to `Value Added Certification Courses.html`

**Three service cards:**

| Card | Copy |
|---|---|
| **Academic Projects** | We "Vi Microsystems Pvt. Ltd.," is a 37 years old Software & Embedded Development organization. We are offering Excellent Projects for Colleges / Industry oriented |
| **Inplant / Internship Training** | Modern Technical training in industry is an integral part of engineering education development it aims at providing the technical knowledge / skills required for an industrial operations. |
| **Courses** | We are conducting the course program in the different areas. The objective of this Course is to impart a solid understanding of the role of design and development of embedded system / VLSI / Power electronics and instrumentation applications |

**About Us block:**
> Vi Microsystems Pvt. Ltd., established in 1986, with a prime motto to "Design and Develop the Hardware and Software products" is headed by an educationalist and Ex-Scientist from Government of India, with the enormous experience gained in Research & Development.

Three accordion items:
1. **Organization** — This organization was established to keep in tune with the developing technologies in the field of Electrical, Electronics, Instrumentation, Mechanical, Chemical etc.,
2. **The Company has its own massive three-story building** — The Company has its own massive three-story building with a built in area of about 20,000 square feet in Chennai. The company has an effective work force of about 200 people working in various departments such as Sales, Service, R&D, Production, Quality Control, Finance, Purchase, Project etc. Each department is well equipped with Engineers and highly qualified Professionals working to achieve the objectives of the organization.
3. **Various Departments** — The company has also its own R&D wing recognized by Department of Scientific & Industrial Research, Government of India. By increasing its operations multifold the company has provided employment to more people in its various different departments.

**"Our Products" featured grid (6 items):**

| Product | Description |
|---|---|
| Internet of Things (IoT) | The IoT System includes Sensors, Gateways and Different types of Wireless based End Devices. |
| Smart Grid Simulator | Smart Grid Simulator is a convenient solution for studying the basic Architecture and the Real-Time Operation of Smart Grid. |
| Flexible AC Transmission Systems | Three phase FACTS help the students to get insight of FACTS operation in Real-time by enhancing their understanding through various experiments. |
| IPM Based Power Module | Power Module is designed for Motor control Applications up to 3 HP by using IGBT & DIODE Technology Based IPM. |
| PAM-PPM-PWM Modulation and Demodulation Trainer | PAM-PPM-PWM is the basic pulse modulation techniques. This trainer provides complete setup to the students for performing Experiments on these techniques. They can study Sampling, Pulse Modulation & Signal reconstruction process. Separate circuits are provided for each Technique. |
| Solar Wind 3Φ, 2KW Smart Grid | This consists of 2 Microgrids of 2000 watts and 1000 watts of power generation connected to a main Power Grid with all the components needed to convert a traditional Grid to a Smart Grid so that many experiments can be conducted on this "Smart Grid." |

**Secondary product highlights (4 items with spec bullets):**

**SCR Characteristics Trainer**
- Basic static characteristics study trainer.
- LM723 based variable DC power supply (0-30V) for SCR Vak.
- LM723 based variable DC power supply (0-12V) for gate voltage of all devices.
- Separate section for SCR/TRIAC characteristics.

**DC Network Analyzer** — *This module is used to study DC Transmission line.*
- Here we provide the bi-polar Transmission Line.
- Simulated long, medium & short distribution lines selectable by patching in various lengths of DC Transmission line.
- Two bi-polar DC generator sources with ON/OFF control and voltage regulator potentiometer.

**RF Signal Source with Detector**
- 25 to 6000MHz RF synthesized signal generator.
- Programmable attenuator 5, 10, 20, 30dBm up to 1.5GHz.
- 40 x 2 LCD Display to show the frequency of the RF signal and RF signal level.
- Output level: 0dBm +/-2dB up to 1GHz, -5dBm +/-2dB up to 3GHz, -10dBm +/-3dB up to 6GHz.

**Advanced Universal FPGA Trainer**
> The universal FPGA trainer consists of a main board with many peripherals like USB Device, Ethernet, Serial ports, Parallel Port, VGA port, Graphics LCD, Switches, LED, ADC, etc. This motherboard has 4 high-speed connectors for plugging in daughter boards, which contain the FPGA from any manufacturer. Separately, 2 high-speed 100-pin connectors are provided for hardware expansion as plug-in boards.

**Product carousel (6 items):**

| Product | Description |
|---|---|
| Level Process Controller | A RF capacitance Level Transmitter is used to sense the tank level. An Industrial standard electro pneumatic converter is used to control the control valve. |
| Wheatstone Bridge | This trainer is designed to study the working principle of the bridge and to find the unknown values of Medium resistances (5Ω-100KΩ) |
| Wireless Connectivity Kit | A Powerful Wireless Connectivity board is designed based on Sitara AM335X Cortex-A8 for detailed and combined study of different Wireless Communications. |
| Transmission Line Trainer | This trainer is designed for study of co-oxial cable characteristics like Impedance measurement, VSWR measurement etc., |
| 6 Axis Robotic Trainer | This kit is very useful to learn the concept and working. For experienced people, this kit helps to make new ideas. This kit is used to study the ROBO characteristics of arm movement. Each axis has one stepper motor. |
| Microcontroller Based Distance Impedance Relay Trainer | It consists of many components: i. Transmission line module ii. Voltage and current signal conditioners iii. Distance Relay iv. Multifunction Meters |

**Closing block:**
> ### Vi Microsystems Pvt. Ltd.,
> The company has also its own R&D wing recognized by Department of Scientific & Industrial Research, Government of India. By increasing its operations multifold the company has provided employment to more people in its various different departments.
> [Contact us]

---

### 4.2 ABOUT (`about.html`)

**Page heading:** About Us
**Sub-heading:** Established in 1986, with a prime motto to "Design and Develop the Hardware and Software products"

**Main body (3 paragraphs):**

> Vi Microsystems Pvt. Ltd., established in 1986, is a leading firm specializing in the design and development of cutting-edge hardware and software products. Led by a former Government of India scientist and educationalist with extensive R&D experience, the company is dedicated to advancing technologies across various sectors, including Electrical, Electronics, Instrumentation, Mechanical, and Chemical engineering.

> Located in Chennai, Vi Microsystems operates from a state-of-the-art three-story facility spanning approximately 20,000 square feet. With a skilled workforce of around 200 employees, the company excels in departments such as Sales, Service, R&D, Production, Quality Control, Finance, Purchase, and Project Management. Each department is staffed with highly qualified professionals committed to achieving the company's objectives.

> Vi Microsystems also boasts its own R&D wing, recognized by the Department of Scientific & Industrial Research, Government of India. The company's expanded operations have created numerous job opportunities across its diverse departments, reflecting its ongoing growth and innovation in the industry.

**Accordion items** (note: headings and body text are mismatched in the original — the heading of each says one thing and the body says another. Worth fixing.)

1. *Heading:* The Company has its own massive three-story building
   *Body:* This organization was established to keep in tune with the developing technologies in the field of Electrical, Electronics, Instrumentation, Mechanical, Chemical etc.,
2. *Heading:* The Company building with a built in area of about 20,000 square feet in Chennai
   *Body:* The company has an effective work force of about 200 people working in various departments such as Sales, Service, R&D, Production, Quality Control, Finance, Purchase, Project etc
3. *Heading:* Each department is well equipped with Engineers and highly qualified Professionals working to achieve the objectives of the organization.
   *Body:* The company has also its own R&D wing recognized by Department of Scientific & Industrial Research, Government of India. By increasing its operations multifold the company has provided employment to more people in its various different departments.

**Sales & Service block:**
> A team of experienced engineers offers services & after sales supports to our Educational Customers, at an affordable cost. Our service engineers are stationed at various sales & service offices located throughout India, to offer the best & quick service & support

**Mission:**
> Our mission is to be an engaging and effective partner to our customers by providing reliable and engaging solutions in the areas of advanced manufacturing and automation technologies. We shall deliver quality products and services to achieve customer delight in advanced manufacturing technologies by innovating design, manufacturing, marketing and through continuous improvement Awards and Recognition

**Research & Development:**
> Vi Microsystems Pvt. Ltd., has started with the motivation of "Designing & Manufacturing Technical Education Laboratory Equipment" as indigenous. Offering more than 3000 enriched products in the stream of Computer Science, Electrical, Electronics, Information Technology, Mechanical, Mechatronics, Instrumentation etc.,.
>
> The R&D Department recognized by Department of Scientific & Industrial Research, Government of India. The Challenging Technologies are handling by the R&D Department to produce the new products.
>
> Vi Microsystems Pvt. Ltd., progressing in technological field since last three decades by young professionals. We have approved by Siemens as an Educational Partner to their PLM software and other products.

**Naan Mudhalvan Scheme — PCB Design Faculty Development Programme, AY 2024–25**
(This block repeats on About, Courses, Academic Projects, Inplant Training and Gallery — make it a reusable component.)

| College | Location |
|---|---|
| CIT Sandwich Polytechnic College | Coimbatore |
| Dhanalakshmi Srinivasan Polytechnic College | Perambalur |
| Government Polytechnic College | Nagercoil |
| CSI Polytechnic College | Salem |
| Government Polytechnic College | Madurai |
| Periyar Centenary Polytechnic College | Thanjavur |
| Venkateswara Polytechnic College | Pudukottai |

---

### 4.3 CATALOGUES (`Catalogues.html`)

**Heading:** Our Catalogues / OUR PRODUCTS CATALOGUES

**Intro:**
> Vi Microsystems Pvt. Ltd., established in 1986, with a prime motto to "Design and Develop the Hardware and Software products" is headed by an educationalist and Ex-Scientist from Government of India, with the enormous experience gained in Research & Development.

**18 downloadable PDF catalogues** — see Section 6 for all PDF links.

| # | Catalogue | Description |
|---|---|---|
| 1 | **Advanced Special R&D Products** | Advanced special R&D products are pioneering innovations that emerge from cutting-edge research and development. These products leverage the latest technologies and materials to address complex challenges or introduce groundbreaking solutions. They often involve sophisticated systems or processes, such as quantum computing, advanced biotech tools, or smart materials, pushing the boundaries of current capabilities. Designed for specialized applications or high-impact areas, these products exemplify the forefront of technological and scientific progress. |
| 2 | **Innovation Products for Electric Vehicles** | Innovation products for electric vehicles (EVs) encompass advanced technologies designed to enhance performance, efficiency, and user experience. These include high-capacity batteries for longer range, rapid-charging systems, and sophisticated energy management software. Additionally, innovations like regenerative braking, advanced powertrains, and improved thermal management systems contribute to making EVs more practical and appealing. These advancements drive the evolution of electric mobility, aiming for greater sustainability and convenience in transportation. |
| 3 | **IoT Development Solution** | IoT (Internet of Things) development solutions involve creating interconnected systems that enable devices to communicate and share data over the internet. These solutions typically include sensors, cloud computing, and data analytics to enhance automation, efficiency, and user experience across various applications, such as smart homes, industrial automation, and healthcare. By integrating devices and systems, IoT solutions enable real-time monitoring, control, and optimization, driving innovation in diverse sectors. |
| 4 | **Products for ML / AI & Embedded Boards** | Products for ML/AI and embedded boards include hardware and software designed to support machine learning (ML) and artificial intelligence (AI) applications. ML/AI products encompass algorithms and platforms for tasks like data analysis and predictive modeling, while embedded boards are compact, versatile computing devices that integrate these AI capabilities into various applications, from smart sensors to robotics. Together, they enable advanced processing and real-time decision-making in diverse technology environments. |
| 5 | **MATLAB FOC & DTC Based Induction Motor Drive Trainer** | MATLAB FOC & DTC-based induction motor drive trainers are educational tools that use MATLAB software to simulate and control induction motor drives using Field-Oriented Control (FOC) and Direct Torque Control (DTC) techniques. These trainers help students and engineers understand and implement advanced motor control strategies, offering hands-on experience with simulation, real-time control, and performance analysis for optimizing motor efficiency and dynamics. |
| 6 | **Advanced Solar Wind Grid Connected 3-Phase, 2KW Smart Grid** | The ADVANCED SOLAR WIND GRID CONNECTED 3PHASE, 2KW SMART GRID system is designed to integrate solar and wind energy sources into a three-phase electrical grid. Its purpose is to generate renewable energy, optimize power use, and provide a stable, efficient power supply. The "smart grid" aspect ensures advanced management and integration of the power generated, improving energy efficiency and reliability. |
| 7 | **Siemens DCS with Simulation** | Siemens DCS (Distributed Control System) with Simulation is used for managing and automating industrial processes. The simulation component allows for testing and optimizing control strategies, system performance, and operational scenarios in a virtual environment before deployment. This helps improve efficiency, reduce risks, and ensure reliable operations in real-world applications. |
| 8 | **Digital Twin Experimental Setup for Paint Industry & Smart Agri** | A Digital Twin Experimental Setup for the paint industry and smart agriculture creates virtual models of real-world systems. In the paint industry, it helps simulate and optimize manufacturing processes and product quality. For smart agriculture, it models farm operations, enabling precise monitoring and management of crops and resources. This technology enhances efficiency, reduces costs, and improves decision-making by providing real-time insights and predictive analytics. |
| 9 | **Intelligent 3VA2 MCCB Trainer** | Advancing digitalization and automation are creating new challenges in electrical power distribution. Systems and components must be integration-capable, communicative, and completely flexible to reliably protect electrical systems against faults and failure. This Powerful components 3VA2 MCCB molded case circuit breakers ensure the necessary safety and flexibility in digital environments. The system offers the best preconditions for machine and switchgear manufacturers. This Trainer enables the students to exercise all features of this powerful Circuit Breaker. |
| 10 | **MATLAB FOC & DTC Based Three-Φ Induction Motor Drive Trainer** | Our MATLAB-based trainer for three-phase induction motor drives features advanced FOC (Field-Oriented Control) and DTC (Direct Torque Control) techniques, providing hands-on experience with sophisticated motor control strategies. Enhance your understanding of motor control with our MATLAB FOC and DTC based three-phase induction motor drive trainer, designed to offer practical insights into cutting-edge drive technologies and their real-world applications. |
| 11 | **PLC & IoT Based Multi-Protocol Trainer** | This project focuses on integrating the Siemens S7-1500 PLC, Siemens S7-1200 PLC, Siemens IoT 2050 Gateway, Opta PLC, and Arduino board using the Modbus TCP protocol for Industrial IoT applications. This setup will enhance operational efficiency, enable real-time monitoring and control, and support advanced data analytics for improved decision-making. |
| 12 | **Configurable DC-DC Converter Study Trainer (VSMPS-13A-14)** | A µc Based Bi-Directional Discrete Configurable DC-DC Converter to study various DC-DC Topology by configuring the MOSFET Switch, DIODE and inductors with provision for Patching the Circuit by students for the maximum hands-on experience for the students. It consists of following 8 Discrete Modules. |
| 13 | **1.5 KW Hybrid DQ Axis Inverter** | Upgrade your energy system with the 1.5 KW Hybrid DQ AXIS Inverter, designed for optimal efficiency and flexibility. This hybrid inverter seamlessly integrates solar and grid power, enhancing energy savings and independence. With a user-friendly interface and advanced safety features, it ensures reliable, eco-friendly performance. Ideal for both residential and commercial use, the 1.5 KW Hybrid DQ AXIS Inverter delivers high efficiency and durability, making it the perfect choice for modern energy management. |
| 14 | **MATLAB Based IGBT/MIPM, SiC, GaN — DC/AC/BLDC/PMSM/SR Motor Trainer** | Unlock the potential of power electronics and motor control with our MATLAB-based trainer. Designed for IGBT, MIPM, SiC, and GaN technologies, as well as AC Motors, BLDC Motors, PMSM, and SR Motors, our system offers unparalleled simulation and modeling capabilities. Ideal for engineers, educators, and students, this trainer leverages MATLAB and Simulink to provide hands-on experience and in-depth analysis of power semiconductor devices and motor control systems. Enhance your understanding and practical skills in the latest power electronics and motor technology with our cutting-edge educational tool. |
| 15 | **9 DSP, FPGA & Real Time Controllers for Basic & Advanced Drives Lab** | Explore our cutting-edge 9 DSP (Digital Signal Processor), FPGA (Field-Programmable Gate Array), and real-time controllers lab, tailored for both basic and advanced drives applications. This state-of-the-art lab provides hands-on experience with digital signal processing, FPGA-based design, and real-time control systems. Ideal for engineers and students, our facility enhances skills in drive technology, embedded systems, and control algorithms, offering practical insights into real-time control and hardware implementation. |
| 16 | **2 KW DFIG Setup with IGBT Based Converter-Inverter System** | Experience advanced wind energy technology with our 2 kW Doubly Fed Induction Generator (DFIG) setup, featuring a 1GPT-based converter-inverter system. This cutting-edge system provides efficient power conversion and control for renewable energy applications. The DFIG setup integrates seamlessly with the 1GPT-based converter-inverter, optimizing performance and enhancing energy efficiency. Ideal for researchers and engineers, this setup offers hands-on experience with wind power generation, power electronics, and renewable energy systems. |
| 17 | **Proposal for Industrial IoT Based Daily Plant with Industry 4.0, Digital Twin, VR & AR** | Revolutionize your plant with our Industrial IoT-based solution featuring Industry 4.0, Digital Twin, and VR/AR technologies. Monitor operations in real-time with IoT sensors, simulate processes with a Digital Twin, and enhance training and maintenance with VR and AR. Boost efficiency and innovation in your smart factory with our integrated, cutting-edge technology. |
| 18 | **DSP Processor Based Data Acquisition System (VDAS-02)** | Upgrade to the VDAS-02, a DSP processor-based data acquisition system that delivers high-precision data collection and real-time analysis. Ideal for industrial and research applications, it offers reliable performance and accuracy with advanced Digital Signal Processing. |

> ⚠️ **Link errors on this page:** Catalogue #6 (Advanced Solar Wind) links to the *Siemens DCS* PDF, and #7 (Siemens DCS) links to the *Advanced Solar Wind* PDF. The two are swapped. Also, #10 links to `4 types of 3Q INVERTER.pdf`, which may be the wrong file.

---

### 4.4 CLIENTS (`Clients.html`)

**Heading:** Our Clients are / Our Clients Us

**Intro:**
> Vi Microsystems Pvt. Ltd., established in 1986 with the prime motto to "Design and Develop Hardware and Software Products," is headed by an educationalist and former scientist from the Government of India, bringing extensive experience in Research & Development.

**Trust block:**
> At Vi Microsystems Pvt. Ltd., we pride ourselves on building long-lasting relationships with our clients, who trust us for delivering innovative solutions and exceptional service. Our commitment to excellence has earned us the loyalty of a diverse clientele across various industries. We understand the unique needs of each client, providing tailored solutions that not only meet their current challenges but also position them for future success. Our dedication to quality, timely delivery, and cutting-edge technology ensures that our clients always receive the best results.

**Client list — state-wise (full):**

**Andaman & Nicobar** — B.R. Ambedkar Government Polytechnic College (Port Blair)

**Assam** — National Institute of Technology Silchar (Silchar)

**Bihar** — National Institute of Technology Patna (Patna) · Indian Institute of Technology Patna (Patna)

**Chhattisgarh** — National Institute of Technology Raipur (Raipur)

**West Bengal** — Jadavpur University (Kolkata) · National Institute of Technology Durgapur (Durgapur) · Kalyani Engineering College (Kalyani) · Jadavpur Government Engineering College (Jalpaiguri)

**Uttarakhand** — DIT University (Dehradun) · National Institute of Technology Uttarakhand *(listed twice)*

**Uttar Pradesh** — Indian Institute of Technology (BHU), Varanasi · Banaras Hindu University (Varanasi) · Motilal Nehru National Institute of Technology (Allahabad) · Aligarh Muslim University (Aligarh) · CSJM University (Kanpur) · Institute of Technology (Lucknow) · National Skill Training Institute (Kanpur) · National Skill Trainers Institute NSTI (Dehradun)

**Tripura** — National Institute of Technology Agartala (Agartala)

**Tamil Nadu** — Madras Institute of Technology (MIT) Campus, Chennai · Bharat Electronics Ltd (Chennai) · Government Polytechnic College (Thiruvarur) · Government College of Technology (Coimbatore) · Government Industrial Training Institute ITI (Chennai) · Indian Institute of Information Technology (Tiruchirappalli) · Indian Institute of Technology (Chennai) · Government Arts College (Trichy) · University College of Engineering (Nagercoil) · VOC College of Engineering (Thoothukudi) · Government Arts College (Salem) · Thanthai Periyar Government Institute of Technology (Vellore) · Government Arts College (Tirunelveli) · University College of Engineering (Ramanathapuram) · Government Industrial Training Institute (Thiruvannamalai) · Government College of Engineering (Srirangam) · Government College of Engineering (Dharmapuri) · University College of Engineering (Villupuram)

**Telangana** — Kakatiya Institute of Technology & Science (Warangal) · National Skill Training Institute (Hyderabad) · National Institute of Technology (Warangal) · JNTUH University College of Engineering (Jagtial)

**Sikkim** — Sikkim Professional University (Gangtok) · Advanced Technical Training Centre (Sikkim)

**Rajasthan** — Indian Institute of Technology (Jodhpur) · JK Lakshmipat University (Jaipur) · University Engineering College (Kota) · Government Engineering College (Jhalawar) · College of Technology and Engineering (Udaipur) · Central Electronics Engineering Research Institute (Pilani) · University College of Engineering and Technology (Bikaner)

**Punjab** — Dr. B.R. Ambedkar National Institute of Technology (Jalandhar) · Punjab Engineering College (Chandigarh) · Advanced Training Institute (Ludhiana)

**Orissa** — Government Polytechnic College (Sambalpur) · S.K.D.A.V Government Polytechnic College (Rourkela) · National Institute of Technology (Rourkela) · Indian Institute of Technology IIT (Bhubaneswar) · Indira Gandhi Institute of Technology (Sarang) · Directorate of Technical Education & Training, Orissa *(listed twice)*

**New Delhi** — Indian Institute of Technology · National Institute of Technology · National Physical Laboratory

**Nagaland** — National Institute of Technology

**Meghalaya** — National Institute of Technology

**Manipur** — National Institute of Electronics & Information Technology (Imphal)

**Maharashtra** — Government College of Engineering (Chandrapur) · Indian Institute of Information Technology (Nagpur) · Government Polytechnic Jalgaon (Jalgaon)

**Madhya Pradesh** — Maulana Azad National Institute of Technology (Bhopal)

**Kerala** — Government Engineering College (Wayanad) · Indian Naval Academy (Kannur) · National Institute of Technology (Calicut)

**Karnataka** — Indian Institute of Science (Bengaluru) · University of Mysore (Hassan) · University of Visvesvaraya College of Engineering (Bengaluru)

**Jharkhand** — *(⚠️ data error: the three entries under Jharkhand are a duplicate of Karnataka's — IISc Bengaluru, University of Mysore Hassan, UVCE Bengaluru. The real Jharkhand entry is most likely IIT Dhanbad / ISM. Confirm with client.)*

**Jammu & Kashmir** — University of Jammu (Jammu)

**Himachal Pradesh** — National Institute of Technology (Hamirpur) · Indian Institute of Technology (Mandi) · National Institute of Technology Hamirpur *(listed twice)*

**Haryana** — Central University of Haryana · J.C. Bose University of Science & Technology (Faridabad) · National Institute of Technology (Kurukshetra) · Bharat Electronics Limited (Haryana)

**Gujarat** — Sardar Vallabhbhai National Institute of Technology (Surat) *(listed twice)* · ⚠️ *"Indian Institute of Technology, Hyderabad" is listed under Gujarat — wrong state*

**Goa** — Indian Institute of Technology (Goa) *(listed twice)* · Government of Goa

**Andhra Pradesh** — ⚠️ *"Indian Institute of Technology, Telangana" listed twice under Andhra Pradesh — wrong state* · National Institute of Technology (Andhra Pradesh)

> ⚠️ **This page needs a data clean-up before rebuild.** There are duplicate entries, at least three institutions filed under the wrong state, and a whole state (Jharkhand) whose entries are copy-pasted from another. Ask the client for a clean master list.

**Client logo wall:** ~50 logo images, with the first eight repeating twice in the carousel loop. See Section 6.

---

### 4.5 SERVICES → ACADEMIC PROJECTS (`Acadamic projects.html`)

**Heading:** Our Academic Projects

**Intro:**
> Vi Microsystems Pvt. Ltd., with 38 years of expertise in software and embedded development, is a trusted name in delivering innovative and industry-relevant projects and training solutions. Our extensive portfolio includes real-time and IEEE projects tailored for B.E. students specializing in EEE, ECE, EIE, and CSC engineering, as well as M.E. students focusing on Embedded Systems, Power Electronics and Drives, VLSI, and diploma students. We also cater to research scholars with advanced projects that push the boundaries of current technology. Our projects incorporate the latest technological advancements, providing hands-on experience that bridges the gap between theoretical knowledge and practical application. Additionally, we offer comprehensive training sessions that equip students and professionals with the skills needed to excel in their respective fields. By partnering with us, you gain access to state-of-the-art resources and expert guidance that enhance learning outcomes and prepare you for real-world challenges.

**Pull quote:**
> "In the respective fields and innovative. This will definitely helps the students in a better way and a stepping-stone for their future, placements in industries and companies."

**Featured project cards (10):**

| Project | Short description |
|---|---|
| PIR Based Home Automation | Our PIR-based home automation technology uses advanced motion sensors to create a responsive living space, automating essential functions for increased convenience and security. |
| IoT Liquid Level Monitoring System | Our innovative IoT liquid level monitoring system integrates cutting-edge technology to deliver real-time insights and automated notifications, enhancing reliability and efficiency in fluid management. |
| Wireless EV Charging | Our innovative wireless EV charging solution enables automatic, cable-free power transfer, making electric vehicle charging simpler and more convenient while reducing wear and tear on connectors. |
| ATmega Microcontroller Based Commercial Power | We specialize in commercial power systems using ATmega microcontrollers to enhance energy efficiency and real-time power monitoring. Our ATmega microcontroller-based controllers offer customizable power management features for industrial and commercial power systems, ensuring reliable operation and accurate data processing. |
| Solar Based Forest Fire Alerting System Using Wireless Sensor Network | Our solar-based forest fire alerting system leverages cutting-edge wireless sensor network technology to provide real-time fire detection and monitoring in remote forest areas. This innovative system utilizes solar power to ensure continuous operation without relying on external power sources. |
| Smart Helmet for Driver Safety | Our Smart Helmet for Driver Safety project enhances road safety with features like GPS tracking, accident detection, and hands-free communication. Designed to prevent accidents and enable quick emergency alerts, it's ideal for motorcyclists in high-risk jobs like delivery services. |
| Improving Driving Safety for Insomnia Patients | A Continuous ECG Signal Monitoring System with Real-Time Drowsiness Detection. Uses continuous ECG monitoring to detect real-time drowsiness by tracking heart activity. It helps prevent accidents by identifying early signs of fatigue. |
| Smart Door Lock Using Internet of Things | Our Smart Door Lock project leverages IoT technology to enhance security with remote locking and unlocking via a smartphone app. Features like keyless entry, automatic locking, and access monitoring provide convenience and peace of mind for modern smart homes. |
| Smart Parking Using Internet of Things | Our Smart Parking project utilizes IoT technology to enhance urban parking management. With sensors that monitor space availability in real time, users can quickly find parking spots via a mobile app, reducing search time and traffic congestion. The system also features automated payment options and data analytics for optimizing space usage. |
| LPG Gas Using Internet of Things | Our LPG Gas project employs IoT technology to enhance safety and efficiency in gas management. This innovative system includes smart gas sensors that monitor LPG levels in real time and send alerts to users via a mobile app when levels are low or if a leak is detected. |

**Also featured:** Noorul Islam Centre for Higher Education (NICHE) — *"has established itself as a beacon of collaborative learning, drawing upon the best practices from around the globe to foster innovation and creativity."*

**Detailed project domain sections** (long-form copy exists on the live page for each — IoT, Embedded System, Wireless Technology, PLC & SCADA, Power Electronics, PIR Home Automation, ATmega Commercial Power, Solar Forest Fire, Smart Helmet, Insomnia/ECG, Smart Door Lock, Smart Parking, LPG Gas, Mini Projects, Java J2EE/J2SE, Web Design PHP/Python).

**Modules covered — Internet of Things:**
Linux OS · C Programming · Python Scripting · Wi-Fi & Bluetooth Configuration · Firebase Google Cloud

**Modules covered — Embedded System:**
Introduction to Embedded System · Overview of Processor & Controller · Embedded C Programming Compiler · Input/Output Interfacing · LCD & 7-Segment Interfacing · Sensor Interfacing · Temperature, IR, Smoke, LDR, Humidity & Accelerometer

---

### 4.6 SERVICES → INPLANT / INTERNSHIP TRAINING (`Inplant Training.html`)

**Heading:** Our Inplant / Internship Training

**Intro:** *(same 38-years boilerplate as Academic Projects)*

**Hands-on training domains:**
Embedded System · Internet of Things (IoT) · Artificial Intelligence (AI) Based Embedded Application · Basic Electronics (Simulation & Hardware) · PCB Design with Fabrication · Wireless Solution · Web Designing

**Supporting copy:**
> Modern Technical training in industry is an integral part of engineering education development it aims at providing the technical knowledge / skills required for an industrial operations. This type of knowledge creation for students is generated through industrial training and research. As such, in the world today there is a strong demand from industry for engineers who have specific training in new technologies. Such graduates are needed now in order to plan, design, install and maintain the many new technological systems that are going into service all around the world in order to capitalize these demands. We provide practical Training for Pupils in our industry.

**Controllers used for Embedded and IoT:**
Arduino Family · ESP8266 and ESP32 · Raspberry Pi Pico · Raspberry Pi 5 · STM32 Family

**Languages and cloud used:**
Embedded C Language · Python and MicroPython · HTML, CSS · ThingSpeak IoT Cloud · Firebase Google Cloud · Blynk Cloud

**Additional sections:**
- **Power Generation** — Our comprehensive services include design, installation, and maintenance of advanced power generation systems that utilize a range of technologies, from renewable energy sources such as solar and wind to traditional fossil fuels. We specialize in custom power generation systems for industrial, commercial, and residential applications...
- **Raspberry Pi Pico Based Alcohol Detection and Engine for Vehicle**
- **Google Assistant Controlled Smart Automation System for Home & Industry**
- **Password Based Circuit Breaker Using Embedded Controller**
- **Smart Helmet for Driver Safety**
- **Improving Driving Safety for Insomnia Patients (ECG monitoring)**

*(Full long-form copy for each is on the live page.)*

**Internship programme highlights (carousel copy):**
1. Join our internship program to work on embedded board projects, where you'll gain practical experience in designing, programming, and troubleshooting embedded systems, preparing you for hands-on roles in technology development.
2. As part of the program, interns will receive hands-on training in various programming languages and tools used in embedded systems development. You'll have the chance to learn about hardware-software integration, and will be encouraged to explore innovative solutions to common engineering challenges.
3. Collaboration is a key aspect of our program. You'll work alongside a diverse team of professionals, learning how to communicate effectively and contribute to group projects.
4. Our internship program offers a unique opportunity to dive deep into the world of embedded systems. Participants will engage in real-world projects that cover the entire lifecycle of embedded board design, from initial concept through to final testing.
5. Additionally, our internship program emphasizes the importance of troubleshooting and debugging. Interns will gain experience in identifying and resolving issues that arise during the development process.

---

### 4.7 SERVICES → COURSES (`Courses.html`)

**Heading:** Our Providing Courses

**Intro:** *(same 38-years boilerplate)*

**Course list with descriptions:**

| Course | Description |
|---|---|
| **Internet of Things (IoT)** | For our academic project, we are utilizing the Raspberry Pi 3 to develop an Internet of Things (IoT) solution that integrates smart office automation. This project involves setting up sensors and actuators connected to the Raspberry Pi to monitor and control various office environments, such as lighting, temperature, and security systems, enhancing efficiency and data-driven decision-making within the workspace. |
| **Embedded System** | Developing an embedded system using the 89C51 microcontroller to address a specific real-world application. The 89C51, an 8-bit microcontroller from the 8051 family, was selected for its robust performance and versatile features. The project involved designing a system that integrates various sensors and actuators to achieve real-time data monitoring and control, programmed in C with attention to optimizing memory usage and processing efficiency. |
| **Artificial Intelligence (AI) Based Embedded Application** | We offer comprehensive AI courses tailored to equip professionals and enthusiasts with cutting-edge skills in artificial intelligence. Our AI training programs cover a wide range of topics, from machine learning fundamentals to advanced AI applications. Participants will gain hands-on experience with AI-based embedded systems, learning how to implement AI algorithms for real-world solutions. Our courses include practical sessions on developing voice-controlled smart devices, predictive analytics, and intelligent security systems. |
| **Basic Electronics (Simulation & Hardware)** | Our electronics training covers essential concepts, from circuit design and component functions to practical hardware assembly and troubleshooting. With our simulation tools, students can experiment with virtual circuits and analyze their behavior before moving on to real-world applications. Our hands-on approach includes working with breadboards, soldering techniques, and microcontrollers to build and test physical circuits. |
| **PCB Design with Fabrication** | Our PCB design services include creating detailed, high-quality circuit board layouts using the latest software tools. Our PCB fabrication process encompasses everything from prototype development to full-scale production, using advanced techniques and high-quality materials to produce durable, efficient boards. |
| **Wireless Solution** | Our expertise in wireless technology covers a broad range of services, including wireless network design, IoT connectivity, and custom wireless system integration. Whether you need robust Wi-Fi solutions, reliable Bluetooth connectivity, or advanced cellular network integration, we provide tailored solutions that ensure seamless and efficient performance. |
| **PCB Design** | When it comes to PCB design, printed circuit boards are the backbone of modern electronics. With expertise in multilayer PCBs, high-speed PCB design, and flexible circuit boards, we cater to a wide range of applications. Whether you need custom PCB prototypes or production-ready designs, our team excels in electronic design automation (EDA) tools. |
| **Web Design (PHP, Python)** | We used PHP for server-side scripting and Python for backend logic to build a dynamic website. PHP managed database interactions and form handling, while Python supported data processing. The project involved creating a responsive user interface and integrating key features. |

**Footer course listings** (linked from every page footer — all point to `Courses.html`):

*Our Courses:* Internet of Things Based on Raspberry Pi3 · Embedded System · ARM Cortex M4 with MATLAB / C Programming · PLC & SCADA · Wireless Technology · MATLAB Simulink · Power Electronics · VLSI / FPGA

*Development Courses:* Web Designing Using HTML, CSS, PHP · C Programming · Python Programming

> Note: the footer lists 8 courses + 3 development courses, but the Courses page itself lists 8 different ones. These two lists don't match. Reconcile with the client.

**Workshop / campus interview copy:**
> Our workshop and campus interviews offer students essential skills for career success. Join us to learn resume writing, interview techniques, and effective communication. These sessions connect you directly with top employers, providing a platform to showcase your talents and secure job opportunities.

---

### 4.8 GALLERY (`Gallery.html`)

**Heading:** Our Gallery
**Section heading:** Honorable Proud Moments

**"Our Key Moments" body copy:**
> Vi Microsystems Pvt. Ltd. has been a pioneer in the field of hardware and software solutions since its inception in 1986. Based in Chennai, we specialize in the design and development of advanced technologies across multiple engineering disciplines, including Electrical Engineering, Electronics, Instrumentation, Mechanical Engineering, and Chemical Engineering.
>
> Our state-of-the-art facility, spanning 20,000 square feet over three floors, is home to a dedicated team of approximately 200 skilled professionals. We pride ourselves on our robust departments including Sales, Service, Research and Development (R&D), Production, Quality Control, Finance, Purchasing, and Project Management. Each department is staffed by experts committed to driving innovation and achieving excellence in their respective fields.
>
> Vi Microsystems is recognized by the Department of Scientific & Industrial Research, Government of India, for our extensive R&D efforts. Our commitment to technological advancement and innovation is reflected in our growing operations and the significant number of job opportunities we provide across various sectors.
>
> Our continued success is driven by our dedication to advancing cutting-edge technologies and fostering growth within the engineering sector.

**Gallery categories (12):**

| # | Category | Notes |
|---|---|---|
| 1 | Honorable Proud Moments | 8 images of the MD; the captions are near-identical boilerplate repeated 8 times — needs rewriting |
| 2 | Office IV Visits | 7 images. ⚠️ **Caption is wrong** — describes intravenous therapy. Should describe *Industrial Visits*. |
| 3 | Naan Mudhalvan Schemes Visits | 7 images (the polytechnic colleges) |
| 4 | Visits of our Managing Director | 8 images |
| 5 | Our Campus & Placement Interviews | 11 images |
| 6 | Our Course & Workshops | 4 images |
| 7 | Our Inplant/Internship Training & Courses | 3 images |
| 8 | Instrumentation & Process Control | 5 images |
| 9 | Real Time Application: IoT Based Drip Irrigation System | 6 images |
| 10 | PLC & IoT Based Multi-Protocol Trainer | 8 images |
| 11 | Empowering Office Staff with Workshops Tailored for College Students | 9 images (one duplicated) |
| 12 | R&D Products Trainers | 9 images |
| 13 | Power Electronics Trainers | 8 images |
| 14 | Innovative Technologies for Safety and Efficiency | 8 images |
| 15 | CAD Design: Shaping the Future of Office Spaces | 10 images |
| 16 | Industry 4.0 & Digital Twin | 8 images |

**Selected category copy:**

- **Naan Mudhalvan Schemes Visits** — The Naan Mudhalvan schemes are designed to empower individuals by providing essential skills and training for career advancement. In our office, we actively promote these initiatives to enhance employability and foster entrepreneurship. By participating in the Naan Mudhalvan programs, individuals gain access to various skill development courses tailored to meet industry demands.
- **Instrumentation & Process Control** — The Instrumentation and Process Control department focuses on teaching the principles and technologies used to monitor and control industrial processes. Students learn to measure key variables such as temperature, pressure, flow, and level using instruments like thermocouples, pressure transducers, and flow meters. The curriculum covers fundamental control strategies, including PID controllers, which adjust systems based on real-time data.
- **IoT Based Drip Irrigation System** — The IoT-Based Drip Irrigation System is an advanced, smart farming solution that leverages Internet of Things (IoT) technology to optimize water usage and improve agricultural productivity. By integrating soil moisture sensors, temperature, and humidity monitoring, the system enables real-time data collection and analysis. This data-driven approach allows for automated irrigation control, ensuring that crops receive the right amount of water at the right time.
- **PLC & IoT Based Multi-Protocol Trainer** — An advanced educational platform designed to teach industrial automation and IoT integration. It combines Programmable Logic Controllers (PLCs) with various communication protocols such as Modbus, CAN, Profibus, and MQTT, offering a versatile learning experience.
- **Industry 4.0 & Digital Twin** — Our advanced Industry 4.0 solution integrates DCS, PLC, and IoT2050 technology across six plants, driving smarter and more efficient operations. Through Digital Twin technology, we create virtual replicas of physical assets, enabling real-time monitoring and predictive insights. By incorporating VR and AR, plant operators gain immersive, interactive control for better decision-making and system optimization.
- **CAD Design** — At the forefront of innovation, CAD design is revolutionizing how office spaces are planned, created, and optimized. With cutting-edge software and advanced technology, CAD enables architects and designers to craft efficient, functional, and visually appealing office layouts.
- **R&D Products Trainers** — Our R&D product training program is designed to equip teams with the essential skills and knowledge needed to drive innovation and successfully develop new products. Through a hands-on approach, we cover the entire R&D lifecycle — from market research and concept development to design, prototyping, testing, and commercialization.
- **Power Electronics Trainers** — Our Power Electronics training program provides in-depth knowledge and hands-on experience in the design, operation, and application of electronic systems that manage electrical power. Covers power converters, inverters, rectifiers, and motor drives.

---

### 4.9 CONTACT (`contact.html`)

**Contact block (appears on every page):**

- **Location:** No: 75, Electronics Estate, Perungudi, Chennai-96, India
- **Email:** sales@vimicrosystems.com
- **Call:** +91-44 2496 1842, 2496 1852

**Contact form fields:** Name · E-mail · Comment · Captcha (image-based) · Send button

> Note: the existing captcha is a static background image — not a real captcha. Replace with reCAPTCHA or similar in the rebuild.

---

## 5. SAMPLE PRODUCT PAGE STRUCTURE

Product pages follow one consistent template. Example — **SCR Characteristics Trainer**:

```
Breadcrumb:  Home > [Product Name]
Tab strip:   [sibling products in the same category, as horizontal links]
Product title
Product image
Product description paragraph
"SPECIFICATIONS :" heading
Bulleted specification list
Footer
```

**Full example content:**

> ### SCR Characteristics Trainer
>
> SCR Characteristics Trainer offers an in-depth exploration of Silicon Controlled Rectifiers, providing comprehensive training on their operation, electrical characteristics, practical applications, and troubleshooting techniques. Ideal for engineers and technicians, this trainer equips users with essential skills to optimize and maintain SCR systems efficiently.
>
> **SPECIFICATIONS:**
> - Basic static characteristics study trainer.
> - LM723 based variable DC power supply (0-30V) for SCR Vak.
> - LM723 based variable DC power supply (0-12V) for gate voltage of all devices.
> - Separate section for SCR/TRIAC characteristics.
> - Separate section for IGBT/MOSFET characteristics.
> - Two nos. fixed load resistor for all devices.
> - Four nos. potentiometer to vary all voltages.
> - LED indication for all power supply.
> - Three nos. digital multimeter for measurement of device parameters.
> - For Diac external power supply to the provided.

**Siblings within "Power Electronics Trainers" category** (from the tab strip):
SCR Characteristics Trainer · SCR VI Characteristics Study Trainer · Single Phase Bridge Firing Circuit · Single Phase Cyclo Converter · Three Phase Cyclo Converter · DC to DC Converter Study Trainer

> **Implication for the rebuild:** every category has a tab strip listing its siblings. Crawling one page per category reveals that category's full product list. This is how the remaining product inventory can be enumerated (see Section 7).

---

## 6. IMAGE & ASSET INVENTORY

> ⚠️ **Path warning:** the site uses Windows backslashes in image paths (`assets\img\...`). Browsers tolerate this, but any download script must URL-encode them. Spaces in filenames also need encoding (`%20`).

### 6.1 Brand assets
| Asset | URL |
|---|---|
| Logo (icon) | `https://www.vimicrosystems.com/assets/img/logosy.png` |
| Logo (with name) | `https://www.vimicrosystems.com/assets/img/Office logo with name/vimicro (2).png` |
| Building photo | `https://www.vimicrosystems.com/assets/img/vi_build.png` |
| Hero illustration | `https://www.vimicrosystems.com/assets/img/hero-img.svg` |
| Captcha background | `https://www.vimicrosystems.com/assets/img/client logos/captcha background images.jpeg` |

### 6.2 Product images (homepage)
| Product | URL |
|---|---|
| IoT | `/assets/img/homeproducts/IOT.png` |
| Smart Grid Simulator | `/assets/img/homeproducts/SGS.jpg` |
| FACTS | `/assets/img/homeproducts/fact.jpg` |
| IPM Power Module | `/assets/img/homeproducts/ipm.jpg` |
| PAM-PPM-PWM Trainer | `/assets/img/homeproducts/vct01.jpg` |
| Solar Wind 2KW Smart Grid | `/assets/img/homeproducts/2kw.jpg` |
| SCR (large) | `/assets/img/SCR IMAGE.png` |
| SCR (product page) | `/assets/img/homeproducts/scr.png` |
| DC Network Analyzer | `/assets/img/homeproducts/dcn.jpg` |
| RF Signal Source | `/assets/img/homeproducts/RFSS.jpg` |
| FPGA Trainer | `/assets/img/homeproducts/vvsm09.jpg` |
| Level Process Controller | `/assets/img/homeslide/lpc.png` |
| Wheatstone Bridge | `/assets/img/homeslide/vwb.png` |
| Wireless Connectivity Kit | `/assets/img/homeslide/wck.png` |
| Transmission Line Trainer | `/assets/img/homeslide/TLT.png` |
| 6 Axis Robotic Trainer | `/assets/img/homeslide/6axis.png` |
| Distance Impedance Relay | `/assets/img/homeslide/dir.png` |
| IoT (About page) | `/assets/img/team/IOT.png` |
| Smart Grid (About page) | `/assets/img/smart.png` |
| FACTS (Inplant page) | `/assets/img/team/fact.png` |

### 6.3 Catalogue PDFs (18 — high priority, these are real assets)
| Catalogue | PDF URL (prefix with `https://www.vimicrosystems.com/`) |
|---|---|
| Advanced Special R&D Products | `assets/img/MODIFIED_FINAL_special_R&D_Catalogue.pdf` |
| Innovation Products for EV | `assets/img/2 nnew  new - E_Vechicle_catloque.pdf` |
| IoT Development Solution | `assets/img/iot-development solution.pdf` |
| ML/AI & Embedded Boards | `assets/img/embadded boards.pdf` |
| 3-Phase FOC, DTC Catalogue | `assets/img/3 PH FOC,DTC cataloque.pdf` |
| Siemens DCS with Simulation | `assets/img/siemens dcs with simulation.pdf` |
| Advanced Solar Wind Grid & Smart Grid | `assets/img/Advanced solar wind grind&smart grid.pdf` |
| Digital Twin | `assets/img/Digital Twin (1).pdf` |
| Digital Twin — Paint Industry & Smart Agri | `assets/img/1Digital twin Experimental set up for paint Industry Smart Agri-2.pdf` |
| 3VA2 MCCB Trainer | `assets/img/3VA2 MCCB Trainer catalog2.pdf` |
| 4 Types of 3Φ Inverter | `assets/img/4 types of 3Q INVERTER.pdf` |
| PLC & IoT Multi-Protocol Trainer | `assets/img/PLC (2)-20240902104738.pdf` |
| Configurable DC-DC Converter | `assets/img/Analog digital config DC DC Converter - Catalogue.pdf` |
| 1.5KW Hybrid PQ-DQ Inverter | `assets/img/pq-dq inverter - modified.pdf` |
| MATLAB IGBT/MIPM, SiC | `assets/img/matlab based IGBTMIPM,SIC.pdf` |
| 9 Real Time Controllers (DSP, FPGA) | `assets/img/9 real time controllers (DSP,FPGA).pdf` |
| 2KW DFIG Setup with IGBT | `assets/img/2kw dfig setup with 1 gbt.pdf` |
| AR-VR Catalogue | `assets/img/AR-VR CATALOGUE.pdf` |
| VDAS-02 (3 pages) | `assets/img/vdas-02 (3 pages).pdf` |

### 6.4 Catalogue thumbnails
`assets/img/modifes R and D.png` · `Innovation product for EV.png` · `iot-development solution.png` · `embedded boards.png` · `3 PH FOC,DTC cataloque.png` · `siemens dcs with simulation.png` · `Avanced solar wind grid and smart grid.png` · `Digital Twins scrn.PNG` · `3va2.png` · `1'3 phase ipm inverter.png` · `plc&iot based multiprotocal trainer.png` · `DC-DC converter study trainer.png` · `1.5 KW hybrid dq axis inverter.png` · `matlab based 1gbt.png` · `9 dsp , fpga ,dic.png` · `2kw dfig setup with 1 gbt.png` · `AR - VR catalogue.png` · `vdas-02.png`

### 6.5 Client logos (~50, folder: `assets/img/client logos/`)
Named files: `nits clg in asam-Photoroom.png` · `nit in raipur-Photoroom.png` · `nit in durgapur-Photoroom.png` · `nit clg patna-Photoroom.png` · `kalyani colloge in kalyani-Photoroom.png` · `jadavapur university in kolkata-Photoroom.png` · `iit clg patna-Photoroom.png` · `BR clg logo( andhaman)-Photoroom.png`

Numbered files: `logo 9.png` · `Logo 11.png` · `Logo12.png` · `logo13.png` · `logo15.png` · `logo16.png` · `logo17.png` · `logo 21.png` · `logo 22.jpeg` · `logo 23.png` · `logo 24.png` · `logo 25.png` · `logo 26.png` · `logo 27.jpg` · `logo 28.png` · `logo 29.png` · `logo 30.png` · `logo 31.png` · `logo32.jpg` · `logo33.png` · `logo 34.jpg` · `logo 36.jpg` · `logo36.png` · `logo 37.png` · `logo37.png` · `logo 38.jpg` · `logo38.png` · `logo 40.png` · `logo 41.png` · `logo 42.webp` · `logo 43.png` · `logo 44.webp` · `logo 45.png` · `logo 46.png` · `logo 48.png` · `logo 49.png` · `logo 50.png`

> ⚠️ The numbered logos have no alt text, so there's no way to tell which institution each belongs to from the code alone. **Ask the client for a logo–institution mapping**, or these can't be labelled properly in the rebuild.

### 6.6 Naan Mudhalvan college photos (`assets/img/`)
`CIT Coimbatore.jpg` · `Dhanalakshmi Srinivasan  Perambalur.jpg` · `GPT Nagercoil.jpg` · `CSI Salem.jpg` · `GPT Madurai.jpg` · `Periyar centenary Thanjavure.jpg` · `Venkatesvara pudukottai.jpg`

### 6.7 Gallery folders
| Folder | Contents |
|---|---|
| `assets/img/` (root) | MD visit photos: `Md sir visit 3.PNG`, `md sir visits1.png`, `md sir visits2.png`, `md sir visits 3.PNG`, `Md sir visits3.png`, `md sir visits4.jpeg`, `md sir visit.PNG`, `md sir visits 2.PNG`, `MD(iv visit).jpeg`, `iv visit 1.jpeg`, `iv visit 5.jpeg` |
| `assets/img/office iv visits nowdays/` | WhatsApp images dated 2024-12-23 |
| `assets/img/placement & Workshop images/` | `placement1–3.jpeg`, `interview1–7.jpeg`, `workshop 1.jpeg`, `workshop2–4.jpg`, `MSPVL Polytechnic College Placement Drive.PNG`, `AMET University [photoutils.com] (2).jpeg`, `GPT Aranthangi.jpg` |
| `assets/img/INSTUMENTATION & PROCESS CONTROL/` | 5 images (note: folder name is misspelt "INSTUMENTATION") |
| `assets/img/IOT DEPT/` | 6 images including `IOT Testing.jpg` |
| `assets/img/DEPT OF PLC/` | 8 images (several `-removebg-preview.png`) |
| `assets/img/Dept of R&D/` | 9 images |
| `assets/img/Power electronics dpt/bg removed img/` | 8 images |
| `assets/img/INNOVATIVE TECHNOLOGIES FOR SAFETY AND EFFICIENCY.../` | 8 images |
| `assets/img/CAD DESIGNS/` | 10 images |
| `assets/img/(Dept)industry 4.0 digital twins/` | 8 images (`siemens1–6.PNG`, `seimens2.PNG`, `md sir visits4.jpeg`) |
| `assets/img/Empowering Office Staff with Workshops.../` | 9 images |
| `assets/img/nagercoil branch projrcts/` | Project images: Smart helmet, Insomnia ECG, Smart Door Lock, Smartparking, LPG Gas (note: folder name misspelt "projrcts") |
| `assets/img/catalogues for courses/without prices/` | `cate4.png`, `cate5.png`, 3 WhatsApp images dated 2024-10-18 |

### 6.8 Academic project images (`assets/img/`)
`PIR Bases Home Automation.png` · `IOT_Liquid_Level_Monitoring_System.png` · `Wireless EV Charging.png` · `ATMEGA Microcontroller based Commercial Power Saver.png` · `SOLAR BASED FOREST FIRE ALERTING SYSTEM USING WIRELESS SENSOR NETWORK.png` · `WORKSHOP.jpg` · `VIT .jpg` · `GPT.jpg`

> ⚠️ **Image quality caution:** many filenames indicate WhatsApp-sourced images and background-removal tools (`-Photoroom`, `-removebg-preview`, `[photoutils.com]`). These are already compressed and will look poor if scaled up. **Request original high-resolution files from the client** before the rebuild.

---

## 7. WHAT'S STILL TO DO

### Product detail pages — not yet extracted
The Products dropdown has **20 categories**, and each category page carries a tab strip listing its sibling products. Power Electronics alone shows 6. The company claims **3,000+ products**, though only a fraction appear to have live pages — likely 150–400.

**To complete the extraction, the next step is:**
1. Fetch each of the 20 category landing pages to read its tab strip → produces the full product URL list.
2. Fetch each product page → title, description, specification bullets, image URL.

All product pages use the same template (Section 5), so this is mechanical.

### Questions for the client before the rebuild
1. **Homepage counter numbers** — how many Clients / Projects / Support / Workers?
2. **Correct address** — "Electronics Estate" or "Industrial Estate"?
3. **Clean client list** — the current one has duplicates and wrong-state entries (Section 4.4).
4. **Logo-to-institution mapping** — the numbered logo files are unlabelled.
5. **Original high-res images** — especially the logo and product photos.
6. **Founder / MD name** — referred to throughout but never named.
7. **Which footer course list is correct** — the footer's or the Courses page's?
8. **Is `services.html` live** — linked from About, may be dead.
9. **Product page inventory** — is there an internal product master list? Would save crawling.
10. **Catalogue PDF swap** — items 6 and 7 link to each other's PDFs.

### Content rewrites recommended
- **Gallery "Office IV Visits"** — currently describes intravenous therapy. Must be rewritten as Industrial Visits.
- **MD gallery captions** — the same paragraph repeated eight times with minor variation.
- **About accordion** — headings and body text don't match each other.
- **"37 years" vs "38 years"** — pick one, or better, compute from 1986.
- **Meta descriptions** — none exist; write one per page.
- **Alt text** — none exists; write for every image.

---

## 8. RECOMMENDED REBUILD STRUCTURE

```
/                           Home
/about                      About (merge Mission, R&D, Sales & Service)
/products                   Product landing — 20 category cards
/products/[category]        Category page with product grid
/products/[category]/[slug] Product detail
/catalogues                 18 PDF downloads
/clients                    Cleaned state-wise list + logo wall
/services                   Services landing
/services/academic-projects
/services/inplant-training
/services/courses
/gallery                    16 categories, filterable
/contact                    Form + map + details
```

**Reusable components to build once:**
- Header with mega-menu (Products 20-item, Services 3-item)
- Footer (contact block + product list + course lists)
- Contact form block (appears on every page currently)
- Naan Mudhalvan college strip (repeats on 5 pages)
- Stat counter bar (Clients / Projects / Support / Workers)
- Sales & Service + Mission + R&D block (repeats on 4 pages)
- Product card, gallery category block, client logo carousel

---

*Extracted from the live site on 30 September 2026. Content is the property of Vi Microsystems Pvt. Ltd. Confirm reuse rights with the client, particularly for images, before the rebuild.*
