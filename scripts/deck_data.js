module.exports = [
// ===== DECK 1: SWIM / FF-ICE / TBO =====
{
  file: 'DGCA61_Deck_SWIM_FFICE_TBO',
  agenda: 'Agenda Item 4 — Air Navigation',
  palette: { dark: '21295C', mid: '065A82', light: 'CBD9E6', accent: '3FC1C9' },
  title: 'Advancing SWIM-Enabled FF-ICE and Trajectory Based Operations',
  subtitle: 'The Indonesian experience in building the information backbone for a seamless Asia/Pacific sky',
  context: {
    title: 'Responding to Action Item 60/20',
    intro: 'The 60th DGCA Conference set the Asia/Pacific SWIM implementation timeframe at 2024–2030 and recognised SWIM as the enabler for the regional ATFM network and for future operations — FF-ICE and TBO.\n\nIndonesia manages the Jakarta and Makassar FIRs, among the busiest oceanic and continental flows in the region. The efficiency of these flows depends on States sharing a common, trajectory-centric picture of demand. Harmonised, interoperable implementation is therefore not optional — it is the precondition for region-wide benefit.',
    aiLabel: 'ACTION ITEM 60/20',
    aiText: '"SWIM is an enabler for current operations, such as the regional ATFM network, and future operations, e.g. FF-ICE, TBO … SWIM implementation harmonised across the region is crucial to achieve region-wide benefits." — APAC DGCA60',
  },
  cardSlides: [
    { kicker: 'ONE CONNECTED TRANSFORMATION', title: 'Three layers, one journey',
      cards: [
        { title: 'SWIM — the backbone', body: 'Governed, service-oriented information sharing replaces fragmented point-to-point exchange. Common exchange models, a service registry and shared infrastructure let aeronautical, MET, flight, flow and surveillance data be reused as services.' },
        { title: 'FF-ICE — the flight object', body: 'A structured, machine-readable flight object exchanged over SWIM replaces the legacy 2012 flight plan — enabling collaborative planning, validation and trajectory negotiation before and during flight.' },
        { title: 'TBO — the outcome', body: 'The four-dimensional trajectory (4DT) becomes the single shared reference, managed collaboratively across ANSPs, airspace users and airports — delivering fuel, emissions and capacity gains.' },
      ] },
    { kicker: 'INDONESIA IN ACTION', title: 'What AirNav Indonesia has done',
      cards: [
        { title: 'FF-ICE/R1 technical trial', body: 'Participated in the APAC FF-ICE/R1 trial hosted by VATM in Hanoi (May 2025) with ~60 regional ANSP experts, and supported the follow-on laboratory demonstration — hands-on experience of filing, validation and planning services.' },
        { title: 'TBO Pathfinder Project', body: 'Engaged in the APAC Flight TBO Pathfinder Project, advancing TBO through concrete city-pair and cross-border demonstrations rather than theory alone — targeting long, multi-FIR flows where gains aggregate.' },
        { title: 'National SWIM roadmap', body: 'Sequencing a national roadmap to the 2024–2030 timeframe: aligning AIM/MET data to ICAO models, standing up a service registry and governance, and staging connection to regional SWIM nodes.' },
        { title: 'Lessons learned', body: 'The hard problems are practical, not conceptual: data quality, common time references, harmonised message implementation, and legacy flight-data systems consuming a structured flight object.' },
      ] },
  ],
  actions: [
    'note Indonesia’s progress in SWIM, FF-ICE and TBO and its role in the APAC TBO Pathfinder Project and FF-ICE/R1 trial;',
    'encourage States to sequence national SWIM roadmaps to 2024–2030 — governance and data quality before application services;',
    'encourage participation in regional FF-ICE/TBO trials and pathfinder demonstrations as low-cost ways to converge implementations;',
    'invite States to share roadmaps, trial findings and lessons learned through the ICAO APAC Regional Office; and',
    'urge the APAC Regional Office to sustain the cadence of SWIM/FF-ICE/TBO seminars, workshops and trials toward 2030.',
  ],
  closing: 'SWIM, FF-ICE and TBO are one transformation, not three projects. Indonesia is committed to harmonised, interoperable delivery within the APAC 2024–2030 timeframe.',
},
// ===== DECK 2: DATA ANALYTICS & AI =====
{
  file: 'DGCA61_Deck_Data_Analytics_AI',
  agenda: 'Agenda Item 4 — Air Navigation',
  palette: { dark: '013A40', mid: '028090', light: 'BCE6DE', accent: '02C39A' },
  title: 'A Data-Driven Approach to Air Traffic Management',
  subtitle: 'Analytics capability, common regional KPIs, and the responsible use of Artificial Intelligence',
  context: {
    title: 'Responding to Action Items 60/22 and 60/21',
    intro: 'Action Item 60/22 called on States to adopt a data-driven approach in ATM, develop regional KPIs, enhance analytics, promote governed data sharing, and participate in the ICAO APAC Data Analytics Group (DAG). Action Item 60/21 recognised the potential of AI to enhance efficiency and performance.\n\nThe efficiency of the regional network cannot be managed without measuring it consistently. Divergent national metrics prevent like-for-like comparison and make it impossible to target investment where it delivers the greatest regional benefit. A shared performance language is the precondition for a seamless ATM system.',
    aiLabel: 'ACTION ITEM 60/22',
    aiText: '"… adopt a data-driven approach in ATM, develop regional KPIs, enhance analytics capabilities, promote data sharing with strong governance, and participate in the ICAO APAC Data Analytics Group (DAG)." — APAC DGCA60',
  },
  cardSlides: [
    { kicker: 'FROM DATA TO PERFORMANCE', title: 'Building the capability',
      cards: [
        { title: 'Anchored in ICAO’s framework', body: 'Measurement follows Doc 9883 and the GANP performance component — safety, capacity, efficiency, flexibility, predictability and environment. Raw surveillance and flight data become KPIs comparable over time and across FIRs.' },
        { title: 'Governance first', body: 'Analytical value is set by data governance. Without clear definitions, quality controls, common time references and metadata, analytics produce numbers that cannot be trusted or compared. Governance is the first deliverable, not an afterthought.' },
        { title: 'Comparable regional KPIs', body: 'The priority is not more metrics but comparable ones: a compact set — horizontal/vertical flight efficiency, ATFM delay, predictability — computed the same way by every State under the DAG.' },
      ] },
    { kicker: 'RESPONSIBLE AI IN ATM', title: 'Augmenting the controller, not replacing them',
      cards: [
        { title: 'Where AI helps', body: 'Demand and delay prediction, trajectory and flow optimisation, MET nowcasting, conflict-risk and anomaly detection in surveillance data — as decision-support that augments the human controller.' },
        { title: 'Guardrails', body: 'Models must be transparent, explainable and validated; training data representative and governed; human oversight and accountability preserved; and any operational use assessed within the SMS before deployment.' },
        { title: 'Aligned to ICAO', body: 'This safety-first, human-centred approach aligns with emerging ICAO guidance on AI in aviation and with Action Item 60/13 on harmonising the regulation of complex technologies including AI.' },
        { title: 'Shared, governed data', body: 'Regional benefit is unlocked only when data is shared across FIR boundaries under trusted governance — SWIM as the technical vehicle, the DAG as the institutional one. Indonesia offers data, methods and tooling.' },
      ] },
  ],
  actions: [
    'note Indonesia’s progress in data-driven ATM — performance measurement, analytics governance and AI decision-support;',
    'encourage States to prioritise data governance — definitions, quality controls and metadata — as the foundation of analytics;',
    'encourage adoption of a compact set of harmonised regional KPIs through the ICAO APAC Data Analytics Group;',
    'encourage responsible AI in ATM — transparency, validation, human oversight and SMS assessment before operational use; and',
    'invite States to participate in and contribute data, methods and tooling to the ICAO APAC Data Analytics Group.',
  ],
  closing: 'Governed data enables comparable KPIs; comparable KPIs provide the trusted foundation on which AI decision-support can be safely built.',
},
// ===== DECK 3: GNSS RFI =====
{
  file: 'DGCA61_Deck_GNSS_RFI_Resilience',
  agenda: 'Agenda Item 4 — Air Navigation',
  palette: { dark: '4A0E12', mid: '990011', light: 'F0C9CC', accent: 'F2A81D' },
  title: 'Building Navigation Resilience Against GNSS RFI',
  subtitle: 'Detection, mitigation and Minimum Operational Networks across an archipelagic sky',
  context: {
    title: 'Responding to Action Items 60/23 and 60/18',
    intro: 'GNSS Radio Frequency Interference — jamming (signal denial) and spoofing (position deception) — is one of the most significant emerging threats to civil aviation navigation. A single source can affect many aircraft across wide areas and cross FIR boundaries, making the threat inherently regional.\n\nAction Item 60/23 urged States to implement detection and mitigation, share events and best practices, and ensure Minimum Operational Networks and multi-layered resilience. Indonesia manages the Jakarta and Makassar FIRs across a vast archipelagic and oceanic airspace, and has established procedures and coordination to preserve safe operations.',
    aiLabel: 'ACTION ITEM 60/23',
    aiText: '"… implement GNSS RFI detection and mitigation systems … formulate and implement strategies ensuring Minimum Operational Networks (MONs) and invest in multi-layered navigational resilience." — APAC DGCA60',
  },
  cardSlides: [
    { kicker: 'DEFENCE IN DEPTH', title: 'Four layers of resilience',
      cards: [
        { title: 'Detection', body: 'Procedures aligned to ICAO, applied across all ATS units. Controllers recognise position/surveillance discrepancies; pilots report cockpit anomalies; every event is documented. Low-cost, immediately deployable, highly transferable.' },
        { title: 'Minimum Operational Network', body: 'GNSS is never a single point of failure. On detection, controllers apply radar vectoring and transition to conventional aids — VOR, DME, ILS. A rationalised MON is a deliberate resilience investment, not a legacy cost.' },
        { title: 'Spectrum coordination', body: 'RFI is also a spectrum problem. AirNav coordinates with the national regulator through the Balmon spectrum monitoring centre for geolocation, tracking and enforcement against interference sources.' },
        { title: 'Regional sharing', body: 'Because interference crosses borders, no State acts alone. Indonesia supports the APAC GNSS/Datalink Disruption Ad Hoc Group, timely event sharing and harmonised reporting so regional data is comparable and actionable.' },
      ] },
  ],
  actions: [
    'note Indonesia’s experience detecting and mitigating GNSS RFI and maintaining multi-layered resilience across its FIRs;',
    'encourage layered detection — controller training, independent surveillance and structured pilot/ATC reporting;',
    'encourage retaining a rationalised MON of conventional aids (VOR/DME/ILS) and collaborating on coverage toward a regional MON;',
    'encourage a formal ANSP–spectrum-authority coordination mechanism for geolocation and enforcement; and',
    'urge active participation in the APAC GNSS/Datalink Disruption Ad Hoc Group with harmonised RFI event reporting.',
  ],
  closing: 'Resilience is built by layering — trained detection, a maintained MON, a bridge to spectrum authorities, and regional sharing. Indonesia has implemented all four.',
},
// ===== DECK 4: SMS =====
{
  file: 'DGCA61_Deck_Predictive_SMS',
  agenda: 'Agenda Item 3 — Aviation Safety',
  palette: { dark: '1E2761', mid: '3A4EA1', light: 'CADCFC', accent: 'F4B740' },
  title: 'From Reactive to Predictive: Strengthening SMS',
  subtitle: 'Data analytics, positive safety culture and regional data sharing',
  context: {
    title: 'Responding to Action Items 60/8, 60/3 and 60/4',
    intro: 'As traffic grows and the system becomes more complex, learning only from accidents after they occur is no longer sufficient. ICAO Annex 19 and the GASP call for safety management to mature from reactive, through proactive, to predictive — identifying and mitigating hazards before they result in occurrences.\n\nAction Item 60/8 encouraged predictive tools and regular performance reviews; 60/3 encouraged the Regional Data Sharing Initiative; 60/4 encouraged Positive Safety Culture as a safety enabler. AirNav Indonesia operates an approved SMS within Indonesia’s SSP and is strengthening its data capability, reporting culture and regional collaboration.',
    aiLabel: 'ACTION ITEM 60/8',
    aiText: '"… share best practices and innovative tools … enhance technical cooperation in civil-military data integration … consider the adoption of predictive tools and regular performance reviews." — APAC DGCA60',
  },
  cardSlides: [
    { kicker: 'THREE FOUNDATIONS', title: 'What makes SMS predictive',
      cards: [
        { title: 'Quality safety data', body: 'Predictive management depends on systematic collection and analysis of data from many sources — mandatory and voluntary reports, operational and surveillance data, normal-operations monitoring — to spot precursors before incidents.' },
        { title: 'Positive safety culture', body: 'Predictive tools fail without data; data depends on reporting; reporting depends on culture. Just-culture principles, confidential channels and regular engagement keep the reporting stream rich and honest.' },
        { title: 'Regional data sharing', body: 'Regional risks — runway safety, airspace infringement, CFIT precursors — are best understood from pooled, de-identified data. Indonesia supports the Regional Data Sharing Initiative and RASG-APAC/APRAST.' },
      ] },
    { kicker: 'PUTTING IT TO WORK', title: 'Oversight, integration and the data link',
      cards: [
        { title: 'Performance-based oversight', body: 'Moving to regular, data-informed safety reviews using Safety Performance Indicators (SPIs) and targets (SPTs) aligned to Annex 19 — directing resources to the areas of greatest risk.' },
        { title: 'Civil–military integration', body: 'In an archipelagic airspace with significant military activity, national civil-military coordination and data-sharing protocols add real safety value, per Action Items 60/8(b) and 60/16.' },
        { title: 'The same data discipline', body: 'Predictive safety draws on the same governance, quality and sharing discipline as ATM performance analytics (60/21, 60/22) — safety and efficiency data are two views of one asset.' },
      ] },
  ],
  actions: [
    'note Indonesia’s progress advancing its SMS toward predictive safety management;',
    'encourage States to build the safety-data foundation — common definitions, quality and governed integration;',
    'encourage investment in Positive Safety Culture and just-culture reporting as the indispensable enabler of SMS;',
    'encourage regular, data-informed safety performance reviews using SPIs/SPTs aligned to Annex 19; and',
    'urge participation in the Regional Data Sharing Initiative and national civil-military safety data-sharing mechanisms.',
  ],
  closing: 'Predictive safety rests on three foundations: quality data, a culture that generates it, and regional sharing that multiplies its value.',
},
];
