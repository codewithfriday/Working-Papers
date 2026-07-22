const MEET1 = '61st Conference of Directors General of Civil Aviation';
const MEET2 = 'Asia and Pacific Regions — Kuala Lumpur, Malaysia, 2026';
const THEME = 'Theme: Smart Skies — Emerging Technologies for Safe, Secure, Sustainable and Efficient Aviation';
const DATE = '[Day Month] 2026';
const base = { meetingLine1: MEET1, meetingLine2: MEET2, theme: THEME, date: DATE,
  presenter: 'Indonesia', financial: 'Activities in this paper are to be undertaken within existing resources.' };

module.exports = [
// ============ WP1 ============
Object.assign({}, base, {
  file: 'DGCA61_WP_SWIM_FFICE_TBO',
  agenda: 'Agenda Item 4 — Air Navigation',
  wpno: 'DGCA61/WP/xx',
  strategic: 'Air Navigation Capacity and Efficiency',
  title: 'ADVANCING SWIM-ENABLED FF-ICE AND TRAJECTORY BASED OPERATIONS IN THE ASIA/PACIFIC REGION: THE INDONESIAN EXPERIENCE',
  summary: 'This paper reports Indonesia’s progress in implementing System Wide Information Management (SWIM), Flight and Flow Information for a Collaborative Environment (FF-ICE) and Trajectory Based Operations (TBO), and shares practical lessons from AirNav Indonesia’s participation in the APAC TBO Pathfinder Project and the FF-ICE/R1 technical trial. It responds directly to Action Item 60/20 arising from the 60th DGCA Conference, which set the Asia/Pacific SWIM implementation timeframe at 2024–2030 and identified SWIM as the enabler for FF-ICE and TBO. The paper proposes concrete regional actions to accelerate harmonised, interoperable deployment.',
  actionRef: 'Action by the Conference is at paragraph 4.',
  references: [
    'APAC DGCA60 Action Item 60/20 (SWIM implementation 2024–2030; FF-ICE, TBO)',
    'ICAO Doc 9965, Manual on FF-ICE; ICAO Doc 10039, Manual on SWIM Concept',
    'ICAO Global Air Navigation Plan (GANP), 7th Edition — ASBU threads FICE, SWIM, TBO',
    'APAC Seamless ANS Plan; APANPIRG conclusions on SWIM',
    'APAC Flight Trajectory Based Operations (TBO) Pathfinder Project',
  ],
  sections: [
    { heading: '1. Introduction', items: [
      { num: '1.1', text: 'The 60th DGCA Conference, through Action Item 60/20, noted that APANPIRG has set the Asia/Pacific SWIM implementation timeframe at 2024–2030, and acknowledged that SWIM is an enabler for current operations such as the regional ATFM network and for future operations such as FF-ICE and TBO. The Conference emphasised that SWIM implementation harmonised across the region is crucial to achieving region-wide benefits, and encouraged States to jointly build a regional and global information interoperability framework.' },
      { num: '1.2', text: 'Indonesia manages one of the largest and fastest-growing airspace systems in the Asia/Pacific region, comprising the Jakarta and Ujung Pandang (Makassar) Flight Information Regions and a network of busy oceanic and continental traffic flows connecting South-East Asia, Australasia and the wider Pacific. The efficiency of these flows is directly dependent on the ability of States to share a common, trajectory-centric picture of demand.' },
      { num: '1.3', text: 'AirNav Indonesia (Perum LPPNPI), as the national air navigation services provider, has adopted SWIM, FF-ICE and TBO as strategic priorities aligned to the ICAO Global Air Navigation Plan (GANP) Aviation System Block Upgrade (ASBU) threads and the APAC Seamless ANS Plan. This paper reports Indonesia’s progress and offers the region a set of practical, low-cost actions to sustain momentum toward the 2030 milestone.' },
    ]},
    { heading: '2. Discussion', items: [
      { sh: 'SWIM as the foundational enabler' },
      { num: '2.1', text: 'SWIM replaces fragmented, point-to-point message exchange with governed, service-oriented information sharing built on common standards (information exchange models, a service registry and a shared infrastructure). Indonesia’s approach treats SWIM not as a single system but as a governance and interoperability layer, allowing the progressive on-boarding of aeronautical (AIM), meteorological (MET), flight and flow, and surveillance information as reusable services.' },
      { num: '2.2', text: 'AirNav Indonesia is developing a national SWIM roadmap sequenced to the APAC 2024–2030 timeframe, prioritising: alignment of aeronautical and MET data to ICAO exchange models; establishment of a service registry and information governance regime; and staged connection to regional SWIM nodes to support the ASEAN and Bay of Bengal ATFM collaborations. The key lesson is that governance, data quality and a shared information reference model must mature before application-layer services deliver benefits.' },
      { sh: 'FF-ICE — from filing to a collaborative flight object' },
      { num: '2.3', text: 'FF-ICE shifts flight planning from the legacy 2012 flight plan format to a structured, machine-readable flight object exchanged over SWIM, enabling collaborative planning, validation and trajectory negotiation before and during flight. Indonesia participated in the APAC FF-ICE/Release 1 (FF-ICE/R1) technical trial hosted by VATM in Hanoi (May 2025), together with some 60 experts from regional ANSPs, and supported the subsequent FF-ICE/R1 laboratory demonstration. This engagement gave AirNav Indonesia direct, hands-on experience of filing, validation and planning services, message exchange patterns, and the practical interoperability challenges of aligning national systems to the FF-ICE provisions of ICAO Doc 9965.' },
      { num: '2.4', text: 'The trial confirmed that the greatest near-term obstacles are not conceptual but practical: consistency of data quality, common time references, harmonised message implementation, and the readiness of legacy flight data processing systems to consume a structured flight object. These findings are directly transferable to other APAC States preparing for FF-ICE.' },
      { sh: 'TBO — the operational goal' },
      { num: '2.5', text: 'TBO uses the four-dimensional trajectory (4DT) — the flight’s path in space and time — as the single shared reference for planning and executing a flight, managed collaboratively across ANSPs, airspace users and airports. AirNav Indonesia is engaged in the APAC Flight Trajectory Based Operations (TBO) Pathfinder Project, which advances TBO through concrete city-pair and cross-border demonstrations rather than theory alone.' },
      { num: '2.6', text: 'Indonesia’s assessment is that TBO delivers its greatest benefits on long, multi-FIR flows where small per-flight trajectory improvements aggregate into significant fuel, emissions and capacity gains. This aligns TBO squarely with the environmental objectives of Action Item 60/45 (ANS role in emissions reduction) and reinforces that air navigation modernisation and decarbonisation are mutually reinforcing.' },
      { sh: 'Harmonisation and interoperability' },
      { num: '2.7', text: 'The central risk to the 2024–2030 timeframe is fragmentation: States progressing at different speeds and adopting divergent interpretations of common standards, producing islands of capability that cannot interoperate. Indonesia’s experience in the FF-ICE trial demonstrates the value of shared laboratory environments and pathfinder demonstrations as low-cost mechanisms to converge implementations before national investment is committed.' },
      { num: '2.8', text: 'Indonesia therefore supports strengthening the regional cadence of SWIM/FF-ICE/TBO seminars, trials and pathfinder activities coordinated by the ICAO APAC Regional Office, and offers to share its national roadmap, trial findings and lessons learned as a contribution to regional capacity building.' },
    ]},
    { heading: '3. Conclusion', items: [
      { num: '3.1', text: 'SWIM, FF-ICE and TBO are a single connected transformation, not three separate projects: SWIM provides the information backbone, FF-ICE provides the collaborative flight object, and TBO is the operational outcome. Indonesia has made tangible progress across all three and is committed to harmonised, interoperable implementation within the APAC 2024–2030 timeframe.' },
    ]},
    { heading: '4. Action by the Conference', items: [
      { num: '4.1', text: 'The Conference is invited to:' },
      { letter: 'a', text: 'note the progress reported by Indonesia in implementing SWIM, FF-ICE and TBO, and its participation in the APAC TBO Pathfinder Project and FF-ICE/R1 technical trial;' },
      { letter: 'b', text: 'encourage States/Administrations to sequence national SWIM roadmaps to the APAC 2024–2030 timeframe, prioritising information governance, data quality and adoption of ICAO exchange models before application-layer services;' },
      { letter: 'c', text: 'encourage States/Administrations to participate in regional FF-ICE/TBO trials, laboratory demonstrations and pathfinder activities as low-cost means of converging implementations and reducing investment risk;' },
      { letter: 'd', text: 'invite States/Administrations to share national roadmaps, trial findings and lessons learned through the ICAO APAC Regional Office; and' },
      { letter: 'e', text: 'urge the ICAO APAC Regional Office to sustain the cadence of SWIM/FF-ICE/TBO seminars, workshops and trials to safeguard regional harmonisation toward the 2030 milestone.' },
    ]},
  ],
}),
// ============ WP2 ============
Object.assign({}, base, {
  file: 'DGCA61_WP_Data_Analytics_AI',
  agenda: 'Agenda Item 4 — Air Navigation',
  wpno: 'DGCA61/WP/xx',
  strategic: 'Air Navigation Capacity and Efficiency; Safety',
  title: 'A DATA-DRIVEN APPROACH TO AIR TRAFFIC MANAGEMENT: DEVELOPING ANALYTICS CAPABILITY, REGIONAL KPIs AND THE RESPONSIBLE USE OF ARTIFICIAL INTELLIGENCE',
  summary: 'This paper shares Indonesia’s experience building a data-driven air traffic management (ATM) capability — performance measurement, analytics governance and the responsible application of artificial intelligence (AI) — and proposes practical steps to strengthen regional data sharing and common key performance indicators (KPIs). It responds to Action Item 60/22 (data-driven ATM, regional KPIs, analytics and the ICAO APAC Data Analytics Group) and Action Item 60/21 (potential of AI to enhance aviation efficiency), and connects both to the environmental and safety objectives of the Conference.',
  actionRef: 'Action by the Conference is at paragraph 4.',
  references: [
    'APAC DGCA60 Action Items 60/21 (AI) and 60/22 (data-driven ATM, regional KPIs, DAG)',
    'ICAO Doc 9883, Manual on Global Performance of the Air Navigation System',
    'ICAO GANP (7th Edition) Performance Framework and KPIs; ICAO APAC Data Analytics Group (DAG)',
    'ICAO guidance on the use of Artificial Intelligence in aviation',
  ],
  sections: [
    { heading: '1. Introduction', items: [
      { num: '1.1', text: 'Action Item 60/22 encouraged States/Administrations to adopt a data-driven approach in ATM, develop regional KPIs, enhance analytics capabilities, promote data sharing with strong governance, and participate in the ICAO APAC Data Analytics Group (DAG). Action Item 60/21 recognised the potential of AI to enhance aviation efficiency and performance and encouraged the sharing of best practices.' },
      { num: '1.2', text: 'The efficiency of the Asia/Pacific network cannot be managed without measuring it consistently. Divergent national metrics prevent like-for-like comparison, obscure the true drivers of delay and inefficiency, and make it impossible to target scarce investment where it delivers the greatest regional benefit. A shared performance language is a precondition for a seamless regional ATM system.' },
      { num: '1.3', text: 'AirNav Indonesia has invested in operational data infrastructure — surveillance, flight data, flow and meteorological data — and has begun converting that data into performance intelligence to support both strategic planning and day-of-operations decision-making. This paper shares that experience and proposes practical steps to accelerate regional progress.' },
    ]},
    { heading: '2. Discussion', items: [
      { sh: 'From data to a performance-based air navigation system' },
      { num: '2.1', text: 'Indonesia’s programme is anchored in the ICAO performance framework (Doc 9883 and the GANP performance component), which defines Key Performance Areas including safety, capacity, efficiency, flexibility, predictability and environment. AirNav Indonesia measures flight efficiency against nominal and filed routes, level-off and continuous descent/climb performance, ATFM delay, and airspace/airport throughput, translating raw surveillance and flight data into KPIs that are comparable over time and, critically, comparable across FIRs.' },
      { num: '2.2', text: 'A recurring lesson is that data governance determines analytical value. Without clear definitions, data quality controls, common time references and metadata, analytics produce numbers that cannot be trusted or compared. Indonesia therefore treats governance — definitions, lineage, quality assurance and access control — as the first deliverable of any analytics programme, not an afterthought.' },
      { sh: 'Regional KPIs and comparability' },
      { num: '2.3', text: 'Indonesia strongly supports the development of a compact set of harmonised regional KPIs under the ICAO APAC DAG, computed from agreed data sources using agreed methods. The priority is not more metrics but comparable metrics: a small number of well-defined indicators (for example horizontal and vertical flight efficiency, ATFM delay and predictability) that every State computes the same way. This directly supports evidence-based prioritisation of airspace enhancements, and provides the measurement basis for the environmental gains sought under Action Item 60/45.' },
      { sh: 'Responsible use of Artificial Intelligence' },
      { num: '2.4', text: 'AI and machine learning offer significant potential in ATM: demand and delay prediction, trajectory and flow optimisation, meteorological nowcasting, conflict-risk detection and anomaly detection in surveillance data. Indonesia is exploring AI as a decision-support capability that augments — but does not replace — the human controller and the established safety framework.' },
      { num: '2.5', text: 'Indonesia’s position is that AI in ATM must be introduced responsibly: models must be transparent, explainable and validated; training data must be representative and governed; human oversight and clear accountability must be preserved; and any operational use must be assessed within the Safety Management System before deployment. This safety-first, human-centred approach aligns with emerging ICAO guidance on AI in aviation and with Action Item 60/13 on harmonising regulation of complex technologies including AI.' },
      { sh: 'Data sharing with strong governance' },
      { num: '2.6', text: 'The regional benefit of analytics is unlocked only when data is shared across FIR boundaries under a trusted governance regime. Indonesia supports SWIM (see companion paper on SWIM/FF-ICE/TBO) as the technical vehicle for governed data sharing, and the DAG as the institutional vehicle for methodological harmonisation. Indonesia offers to contribute data, methods and analytical tooling to DAG activities and to participate in regional benchmarking exercises.' },
    ]},
    { heading: '3. Conclusion', items: [
      { num: '3.1', text: 'A data-driven ATM system, common regional KPIs and the responsible use of AI are mutually reinforcing: shared, governed data enables comparable performance measurement, which in turn provides the trusted foundation on which AI decision-support can be safely built. Indonesia is committed to advancing all three through the ICAO APAC Data Analytics Group.' },
    ]},
    { heading: '4. Action by the Conference', items: [
      { num: '4.1', text: 'The Conference is invited to:' },
      { letter: 'a', text: 'note Indonesia’s progress in building a data-driven ATM capability and its experience with performance measurement, analytics governance and AI decision-support;' },
      { letter: 'b', text: 'encourage States/Administrations to prioritise data governance — common definitions, quality controls and metadata — as the foundation of any analytics programme;' },
      { letter: 'c', text: 'encourage States/Administrations to adopt a compact set of harmonised regional KPIs developed through the ICAO APAC Data Analytics Group, computed using agreed data sources and methods;' },
      { letter: 'd', text: 'encourage States/Administrations to apply AI in ATM responsibly, ensuring transparency, validation, human oversight and assessment within the Safety Management System before operational use; and' },
      { letter: 'e', text: 'invite States/Administrations to actively participate in and contribute data, methods and tooling to the ICAO APAC Data Analytics Group.' },
    ]},
  ],
}),
// ============ WP3 ============
Object.assign({}, base, {
  file: 'DGCA61_WP_GNSS_RFI_Resilience',
  agenda: 'Agenda Item 4 — Air Navigation',
  wpno: 'DGCA61/WP/xx',
  strategic: 'Safety; Air Navigation Capacity and Efficiency',
  title: 'BUILDING NAVIGATION RESILIENCE AGAINST GNSS RADIO FREQUENCY INTERFERENCE: DETECTION, MITIGATION AND MINIMUM OPERATIONAL NETWORKS',
  summary: 'This paper shares Indonesia’s operational experience in detecting and mitigating Global Navigation Satellite System (GNSS) Radio Frequency Interference (RFI), maintaining a resilient Minimum Operational Network (MON) of conventional navigation aids, and coordinating with national spectrum authorities. It responds to Action Item 60/23 (GNSS RFI detection, mitigation, information sharing and MON) and Action Item 60/18 (GNSS and datalink disruption and operational resilience), and proposes practical regional actions to strengthen multi-layered navigational resilience.',
  actionRef: 'Action by the Conference is at paragraph 4.',
  references: [
    'APAC DGCA60 Action Items 60/23 (GNSS RFI) and 60/18 (GNSS/datalink disruption resilience)',
    'ICAO Annex 10, Aeronautical Telecommunications; ICAO Doc 9849, GNSS Manual',
    'ICAO/regional guidance on GNSS RFI detection, reporting and mitigation; ICAO APAC Procedures for GNSS and Datalink Disruption Ad Hoc Group',
    'ICAO Assembly Resolutions and State Letters on harmful interference to GNSS',
  ],
  sections: [
    { heading: '1. Introduction', items: [
      { num: '1.1', text: 'GNSS RFI — encompassing both jamming (denial of signal) and spoofing (deception of position, navigation and timing) — has become one of the most significant emerging threats to civil aviation navigation. Action Item 60/23 recognised the increasing risk of GNSS RFI, highlighted the essential role of conventional navigation aids in contingency planning, and urged States to implement detection and mitigation systems, share events and best practices, and formulate strategies ensuring Minimum Operational Networks (MONs) and multi-layered navigational resilience. Action Item 60/18 reinforced the importance of operational resilience and participation in the regional GNSS and Datalink Disruption Ad Hoc Group.' },
      { num: '1.2', text: 'As civil aviation has become increasingly dependent on GNSS for navigation, surveillance and timing, RFI events have grown in frequency and sophistication worldwide, including in and adjacent to the Asia/Pacific region. A single interference source can affect multiple aircraft across wide areas and cross FIR boundaries, making the threat inherently regional and requiring a coordinated response.' },
      { num: '1.3', text: 'Indonesia, managing the Jakarta and Ujung Pandang (Makassar) Flight Information Regions across a vast archipelagic and oceanic airspace, has established operational procedures and coordination mechanisms to detect, respond to and mitigate GNSS RFI while preserving safe operations. This paper shares that experience.' },
    ]},
    { heading: '2. Discussion', items: [
      { sh: 'Detection and reporting' },
      { num: '2.1', text: 'AirNav Indonesia has established GNSS RFI handling procedures aligned to ICAO standards and applied consistently across all air traffic service units. Detection relies on multiple complementary layers: air traffic controllers are trained to recognise discrepancies between aircraft-reported position and independent surveillance (radar/multilateration); pilots report navigation anomalies observed in the cockpit; and events are systematically documented. This human-and-surveillance detection layer is low-cost, immediately deployable and highly transferable to other States.' },
      { num: '2.2', text: 'On detection, controllers coordinate directly with affected aircraft, pass information to adjacent ATC units and neighbouring FIRs, and report incidents to the Directorate General of Civil Aviation. Consistent, structured reporting is essential both for immediate safety and for building the regional evidence base needed to characterise the threat.' },
      { sh: 'Mitigation and the Minimum Operational Network (MON)' },
      { num: '2.3', text: 'Indonesia’s mitigation strategy rests on multi-layered navigational resilience — the principle that GNSS must never be a single point of failure. When GNSS RFI is detected, controllers provide direct navigation assistance through radar vectoring and support a transition to conventional terrestrial navigation aids (VOR, DME and ILS) to ensure safe en-route, approach and landing operations. Retaining and maintaining a rationalised network of conventional aids as a MON is therefore a deliberate resilience investment, not a legacy cost.' },
      { num: '2.4', text: 'Indonesia supports the regional objective of collaborating to share the coverage of ground navigation aids to establish a regional MON, so that resilience is planned across FIR boundaries rather than State-by-State, avoiding gaps at the margins of national coverage.' },
      { sh: 'Coordination with spectrum authorities' },
      { num: '2.5', text: 'GNSS RFI is fundamentally a spectrum-management problem as well as an aviation problem. AirNav Indonesia coordinates with the national spectrum regulator (the Ministry of Communication and Digital Affairs) through the Radio Frequency Spectrum Monitoring Centre (Balmon) for geolocation, tracking and enforcement action against interference sources. Indonesia’s experience underscores that effective mitigation requires an institutional bridge between the ANSP and the national spectrum authority — a mechanism that every State can establish and that materially strengthens the ability to locate and shut down interference sources.' },
      { sh: 'Regional information sharing and resilience' },
      { num: '2.6', text: 'Because interference crosses borders, no State can characterise or counter the threat alone. Indonesia supports active participation in the ICAO APAC Procedures for GNSS and Datalink Disruption Ad Hoc Group, timely sharing of RFI events and mitigation best practices, and the development of harmonised reporting so that regional data is comparable and actionable. Indonesia offers to share its procedures, controller training approach and its ANSP–spectrum-authority coordination model as a regional contribution.' },
    ]},
    { heading: '3. Conclusion', items: [
      { num: '3.1', text: 'Resilience against GNSS RFI is achieved not by any single measure but by layering them: trained human and surveillance-based detection, a maintained MON of conventional navigation aids, an institutional bridge to spectrum authorities, and regional information sharing. Indonesia has implemented all four layers and is committed to strengthening regional, multi-layered navigational resilience.' },
    ]},
    { heading: '4. Action by the Conference', items: [
      { num: '4.1', text: 'The Conference is invited to:' },
      { letter: 'a', text: 'note Indonesia’s operational experience in detecting and mitigating GNSS RFI and maintaining multi-layered navigational resilience across its FIRs;' },
      { letter: 'b', text: 'encourage States/Administrations to implement layered GNSS RFI detection combining controller training, independent surveillance and structured pilot/ATC reporting;' },
      { letter: 'c', text: 'encourage States/Administrations to retain and maintain a rationalised Minimum Operational Network of conventional navigation aids (VOR/DME/ILS) as a deliberate resilience investment, and to collaborate on sharing ground-aid coverage toward a regional MON;' },
      { letter: 'd', text: 'encourage States/Administrations to establish a formal coordination mechanism between the ANSP and the national spectrum authority for geolocation and enforcement against interference sources; and' },
      { letter: 'e', text: 'urge States/Administrations to participate actively in the ICAO APAC Procedures for GNSS and Datalink Disruption Ad Hoc Group and to share RFI events and mitigation best practices using harmonised reporting.' },
    ]},
  ],
}),
// ============ WP4 ============
Object.assign({}, base, {
  file: 'DGCA61_WP_Predictive_SMS',
  agenda: 'Agenda Item 3 — Aviation Safety',
  wpno: 'DGCA61/WP/xx',
  strategic: 'Safety',
  title: 'FROM REACTIVE TO PREDICTIVE: STRENGTHENING SMS THROUGH DATA ANALYTICS, POSITIVE SAFETY CULTURE AND REGIONAL DATA SHARING',
  summary: 'This paper shares Indonesia’s experience advancing its Safety Management System (SMS) from a reactive and proactive posture toward predictive safety management, using safety data analytics, a positive safety culture and participation in regional data sharing. It responds to Action Item 60/8 (effective SSP/SMS implementation, predictive tools and performance reviews), Action Item 60/3 (Regional Data Sharing Initiative) and Action Item 60/4 (Positive Safety Culture), and proposes practical regional actions to raise the level of SMS effectiveness across the Asia/Pacific region.',
  actionRef: 'Action by the Conference is at paragraph 4.',
  references: [
    'APAC DGCA60 Action Items 60/8 (SSP/SMS, predictive tools), 60/3 (Regional Data Sharing Initiative) and 60/4 (Positive Safety Culture)',
    'ICAO Annex 19, Safety Management; ICAO Doc 9859, Safety Management Manual (SMM), 4th Edition',
    'ICAO Global Aviation Safety Plan (GASP) and APAC eGASP goals',
    'RASG-APAC and APRAST work programmes; Regional Safety Data Sharing initiatives',
  ],
  sections: [
    { heading: '1. Introduction', items: [
      { num: '1.1', text: 'Action Item 60/8 acknowledged the challenges in implementing State Safety Programmes (SSP) and Safety Management Systems (SMS) effectively, and encouraged States to share best practices and innovative tools, enhance civil-military data integration, and consider the adoption of predictive tools and regular performance reviews. Action Item 60/3 encouraged participation in the Regional Data Sharing Initiative, and Action Item 60/4 encouraged the implementation of a Positive Safety Culture as a safety enabler.' },
      { num: '1.2', text: 'As traffic in the Asia/Pacific region grows and the system becomes more complex, the historical safety model — learning from accidents and incidents after they occur — is no longer sufficient on its own. ICAO Annex 19 and the Global Aviation Safety Plan (GASP) call for the progressive maturation of safety management from reactive, through proactive, to predictive: identifying and mitigating hazards before they result in occurrences.' },
      { num: '1.3', text: 'AirNav Indonesia, as a certified air navigation services provider operating under an approved SMS within Indonesia’s SSP, has been strengthening its safety data capability, its reporting culture and its participation in regional safety collaboration. This paper shares that experience and offers practical actions for the region.' },
    ]},
    { heading: '2. Discussion', items: [
      { sh: 'Toward predictive safety management' },
      { num: '2.1', text: 'Predictive safety management depends on the systematic collection, integration and analysis of safety data from many sources — mandatory and voluntary occurrence reports, operational and surveillance data, and normal-operations monitoring. AirNav Indonesia is building the data foundation and analytical methods to identify precursors and emerging risk patterns before they manifest as incidents, supporting the shift from counting past events to anticipating future ones.' },
      { num: '2.2', text: 'A key lesson is that predictive capability is only as good as the data feeding it. This links safety management directly to the data-governance and analytics themes elsewhere on the Conference agenda (Action Items 60/21 and 60/22): the same discipline of common definitions, data quality and governed sharing that underpins ATM performance analytics also underpins predictive safety.' },
      { sh: 'Positive Safety Culture as the enabler' },
      { num: '2.3', text: 'Predictive tools fail without data, and data depends on reporting, and reporting depends on culture. Indonesia’s experience confirms that a Positive Safety Culture — in which personnel report hazards and errors without fear of inappropriate blame, within a fair and just framework — is the indispensable enabler of an effective SMS. AirNav Indonesia invests in just-culture principles, confidential reporting channels, and regular, planned engagement with operational personnel, so that the reporting stream on which analytics depends remains rich and honest.' },
      { num: '2.4', text: 'Indonesia supports Action Item 60/4 and offers to share its practical experience in building and sustaining a reporting culture, including the engagement mechanisms with controllers and technical staff that keep voluntary reporting healthy.' },
      { sh: 'Performance-based safety oversight' },
      { num: '2.5', text: 'Indonesia is moving toward regular, data-informed safety performance reviews using Safety Performance Indicators (SPIs) and targets (SPTs) aligned to Annex 19 and the SMM. This enables both the State and the service provider to monitor whether safety risk is actually being controlled, and to direct resources to the areas of greatest risk — the regular performance reviews called for in Action Item 60/8.' },
      { sh: 'Civil–military data integration and regional data sharing' },
      { num: '2.6', text: 'Action Item 60/8(b) highlighted civil-military data integration, and Action Items 60/3 and 60/16 the value of data sharing. In an archipelagic airspace with significant military activity, Indonesia recognises the safety value of civil-military coordination and data sharing, and supports the establishment of national mechanisms and protocols for this purpose. At regional level, Indonesia supports the Regional Data Sharing Initiative and the work of RASG-APAC/APRAST, on the principle that regional risks — runway safety, airspace infringement, controlled flight toward terrain precursors — are best understood from pooled, de-identified data.' },
    ]},
    { heading: '3. Conclusion', items: [
      { num: '3.1', text: 'The maturation of SMS from reactive to predictive rests on three interdependent foundations: quality safety data, a positive reporting culture that generates that data, and regional sharing that multiplies its value. Indonesia is advancing on all three and is committed to contributing to a stronger, data-driven regional safety system.' },
    ]},
    { heading: '4. Action by the Conference', items: [
      { num: '4.1', text: 'The Conference is invited to:' },
      { letter: 'a', text: 'note Indonesia’s progress in advancing its SMS toward predictive safety management, and its experience with safety data analytics, positive safety culture and safety performance monitoring;' },
      { letter: 'b', text: 'encourage States/Administrations to build the safety-data foundation — common definitions, data quality and governed integration — required for predictive safety management;' },
      { letter: 'c', text: 'encourage States/Administrations to invest in a Positive Safety Culture and just-culture reporting frameworks as the indispensable enabler of an effective SMS, and to share best practices under Action Item 60/4;' },
      { letter: 'd', text: 'encourage States/Administrations to adopt regular, data-informed safety performance reviews using SPIs/SPTs aligned to ICAO Annex 19; and' },
      { letter: 'e', text: 'urge States/Administrations to participate in the Regional Data Sharing Initiative and to establish national civil-military safety data-sharing mechanisms, contributing to the work of RASG-APAC/APRAST.' },
    ]},
  ],
}),
];
