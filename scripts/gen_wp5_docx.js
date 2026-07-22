const {
  Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle,
  TabStopType, TabStopPosition, Table, TableRow, TableCell, WidthType, ShadingType
} = require('docx');
const fs = require('fs');
const OUT = '/sessions/lucid-zen-gauss/mnt/DGCA-Conference';
const FONT = 'Times New Roman';
const r = (t, o = {}) => new TextRun({ text: t, font: FONT, size: 22, ...o });
const b = t => r(t, { bold: true });
const it = t => r(t, { italics: true });
function hrule() { return new Paragraph({ spacing: { before: 60, after: 60 }, border: { bottom: { color: '000000', space: 1, style: BorderStyle.SINGLE, size: 6 } }, children: [r('')] }); }
function sh(text) { return new Paragraph({ spacing: { before: 220, after: 100 }, keepNext: true, children: [new TextRun({ text, font: FONT, size: 22, bold: true, allCaps: true })] }); }
function sub(text){ return new Paragraph({ spacing:{before:120,after:70}, children:[b(text)] }); }
function num(n, body) { return new Paragraph({ spacing: { after: 140 }, indent: { left: 720, hanging: 720 }, tabStops: [{ type: TabStopType.LEFT, position: 720 }], children: [r(n + '\t'), ...(Array.isArray(body) ? body : [r(body)])] }); }
function letter(l, body) { return new Paragraph({ spacing: { after: 100 }, indent: { left: 1440, hanging: 480 }, tabStops: [{ type: TabStopType.LEFT, position: 1440 }], children: [r(l + ')\t'), ...(Array.isArray(body) ? body : [r(body)])] }); }
function summaryBlock(text) { return new Paragraph({ spacing: { before: 120, after: 60, line: 276 }, border: { top: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 8 }, bottom: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 8 }, left: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 12 }, right: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 12 } }, children: [r(text)] }); }

function cell(text, { w, bold = false, shade = null, align = AlignmentType.LEFT } = {}) {
  return new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: shade ? { type: ShadingType.CLEAR, color: 'auto', fill: shade } : undefined,
    margins: { top: 40, bottom: 40, left: 80, right: 80 },
    children: [new Paragraph({ alignment: align, children: [new TextRun({ text, font: FONT, size: 20, bold })] })]
  });
}
function resultsTable() {
  const W = [3300, 1900, 2100, 1560]; const total = W.reduce((a,c)=>a+c,0);
  const mkHead = (t, w, al) => new TableCell({ width: { size: w, type: WidthType.DXA }, shading: { type: ShadingType.CLEAR, color: 'auto', fill: '1F3864' }, margins: { top: 40, bottom: 40, left: 80, right: 80 }, children: [new Paragraph({ alignment: al, children: [new TextRun({ text: t, font: FONT, size: 20, bold: true, color: 'FFFFFF' })] })] });
  const header = new TableRow({ tableHeader: true, children: [ mkHead('LLM model', W[0], AlignmentType.LEFT), mkHead('No framework', W[1], AlignmentType.CENTER), mkHead('With framework', W[2], AlignmentType.CENTER), mkHead('Gain', W[3], AlignmentType.CENTER) ] });
  const rows = [
    ['gpt-4.1-2025-04-14', '16.26%', '53.61%', '+37.35%', true],
    ['gpt-4o-2024-08-06', '3.61%', '46.38%', '+42.77%', false],
    ['gpt-3.5-turbo-0125', '3.01%', '24.09%', '+21.08%', false],
    ['gpt-4.1-mini-2025-04-14', '0%', '21.08%', '+21.08%', false],
    ['gpt-4o-mini-2024-07-18', '0%', '12.65%', '+12.65%', false],
    ['gpt-4.1-nano-2025-04-14', '0%', '10.24%', '+10.24%', false],
  ].map((row, i) => new TableRow({ children: [
    cell(row[0], { w: W[0], bold: row[4], shade: row[4] ? 'DCE6F1' : (i % 2 ? 'F2F2F2' : null) }),
    cell(row[1], { w: W[1], shade: row[4] ? 'DCE6F1' : (i % 2 ? 'F2F2F2' : null), align: AlignmentType.CENTER }),
    cell(row[2], { w: W[2], bold: row[4], shade: row[4] ? 'DCE6F1' : (i % 2 ? 'F2F2F2' : null), align: AlignmentType.CENTER }),
    cell(row[3], { w: W[3], bold: row[4], shade: row[4] ? 'DCE6F1' : (i % 2 ? 'F2F2F2' : null), align: AlignmentType.CENTER }),
  ] }));
  return new Table({ columnWidths: W, width: { size: total, type: WidthType.DXA }, rows: [header, ...rows] });
}

const children = [];
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 }, children: [new TextRun({ text: '61st Conference of Directors General of Civil Aviation', font: FONT, size: 22, bold: true })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 }, children: [new TextRun({ text: 'Asia and Pacific Regions — Kuala Lumpur, Malaysia, 2026', font: FONT, size: 22 })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 }, children: [new TextRun({ text: 'Theme: Smart Skies — Emerging Technologies for Safe, Secure, Sustainable and Efficient Aviation', font: FONT, size: 20, italics: true })] }));
children.push(hrule());
children.push(new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }], spacing: { after: 40 }, children: [b('Agenda Item 4 — Air Navigation'), b('\tDGCA61/WP/xx')] }));
children.push(new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }], spacing: { after: 60 }, children: [r(''), r('\t[Day Month] 2026')] }));
children.push(hrule());
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 240, after: 120 }, children: [new TextRun({ text: 'APPLYING ARTIFICIAL INTELLIGENCE TO NOTAM PRODUCTION: A RETRIEVAL-AUGMENTED GENERATION FRAMEWORK FOR AUTOMATED NOTAM DESCRIPTIONS', font: FONT, size: 24, bold: true })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 }, children: [new TextRun({ text: '(Presented by Indonesia)', font: FONT, size: 22, bold: true })] }));
children.push(hrule());

children.push(sh('Summary'));
children.push(summaryBlock('This paper reports applied research undertaken by AirNav Indonesia, in collaboration with Telkom University, on the use of Artificial Intelligence (AI) to assist the production of Notices to Airmen (NOTAM). The research introduces a framework that converts free-form natural language into standards-compliant NOTAM Item E text by combining a Large Language Model (LLM) with Retrieval-Augmented Generation (RAG) driven by string matching against ICAO Abbreviations and Codes (Doc 8400). Evaluated on 900 paired examples drawn from Indonesian NOTAMs, the framework raised generation accuracy from 16.26% to 53.61% for the strongest model — a 37.35 percentage-point improvement — while preserving a human-in-the-loop, standards-anchored design. The paper shares these results, discusses their implications for Aeronautical Information Management (AIM) and digitalization, and proposes regional actions. It responds to Action Items 60/21 (potential of AI to enhance aviation efficiency) and 60/22 (data-driven approach and sharing of best practices).'));
children.push(new Paragraph({ spacing: { after: 160 }, children: [it('Action by the Conference is at paragraph 6.')] }));
children.push(new Paragraph({ spacing: { after: 60 }, children: [b('References:')] }));
[
  'M. I. Alfatih, S. A. Wibowo, U. N. Wisesty, I. Aulia, M. A. Zulmi, R. I. Prasetyo, K. A. Catur, J. Hermawan, U. Azmi and R. N. Hasfrian, “A Novel Notice to Airmen Description Generator Framework Based on String Matching Retrieval Augmented Generation,” 2025 International Conference on Computing and Applied Informatics (IEEE), 2025.',
  'ICAO, Abbreviations and Codes (PANS-ABC), Doc 8400.',
  'ICAO Annex 15, Aeronautical Information Services; ICAO Doc 10066, PANS-AIM.',
  'APAC DGCA60 Action Items 60/21 (Artificial Intelligence) and 60/22 (data-driven ATM, best-practice sharing).',
  'P. Lewis et al., “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks,” 2020.',
].forEach(x => children.push(new Paragraph({ spacing: { after: 40 }, indent: { left: 480, hanging: 240 }, children: [r('–\t' + x)] })));
children.push(new Paragraph({ spacing: { before: 100, after: 40 }, children: [b('Strategic Objectives: '), r('Air Navigation Capacity and Efficiency; Safety')] }));
children.push(new Paragraph({ spacing: { after: 120 }, children: [b('Financial Implications: '), r('The research was undertaken within existing resources; the actions proposed involve knowledge-sharing within existing regional mechanisms.')] }));
children.push(hrule());

// 1 Introduction
children.push(sh('1. Introduction'));
children.push(num('1.1', 'NOTAMs (Notices to Airmen) are a vital component of the global aeronautical information system, alerting pilots, air traffic controllers and other aviation personnel to the establishment, condition or change of any facility, service, procedure or hazard that may affect flight operations. Their timely and correct production is a direct contributor to flight safety.'));
children.push(num('1.2', 'To remain concise and universally interpretable, NOTAMs are written in a rigid, highly abbreviated format governed by international rules — in particular the ICAO Abbreviations and Codes (Doc 8400). For example, the plain-language statement “a 283-metre section of taxiway H between taxiways G and E is closed due to work in progress” is encoded as “TWY H CLSD 283M BTN TWY G AND TWY E DUE TO WIP”. This shorthand enables rapid communication but is cryptic to produce: only specially trained personnel can reliably encode it, and submissions frequently require expert review to ensure regulatory compliance.'));
children.push(num('1.3', 'As traffic and the associated volume of aeronautical information grow, the manual effort of drafting and checking NOTAMs is an increasing burden on aviation authorities and a source of potential human error. Action Item 60/21 recognised the potential of AI to enhance aviation efficiency, and Action Item 60/22 encouraged a data-driven approach and the sharing of best practices. Against this background, AirNav Indonesia, with Telkom University, investigated whether modern AI could assist NOTAM production while preserving the precision and regulatory compliance that aviation safety demands. This paper reports that research and its results.'));

// 2 Background
children.push(sh('2. Background: the NOTAM production challenge'));
children.push(num('2.1', 'A NOTAM is composed of standard items — Q (qualifier), A (location), B and C (start and end validity), D (optional timing) and E (the free-text description). Item E carries the operational substance of the notice and is the item that must be encoded in ICAO-standard abbreviations. This research focuses specifically on the automated generation of Item E.'));
children.push(num('2.2', 'The core difficulty is that Item E phrasing differs sharply from ordinary language. The same operational meaning can be expressed in many free-form ways, yet only one tightly codified form is acceptable — for instance the inputs “Runway 06/24 is closed due to work in progress” and “Work in progress at runway 06/24, so it is closed” must both yield “RWY 06/24 CLSD DUE TO WIP”. Encoding therefore requires knowledge of numerous abbreviations, aeronautical terms and context, which a general-purpose language model does not reliably possess.'));
children.push(num('2.3', 'General LLMs, trained on broad text, tend to miss the specialised vocabulary and may “hallucinate” incorrect expansions or omit details. A key insight of the research is that the missing ingredient is not raw language ability but authoritative domain knowledge supplied at the moment of generation.'));

// 3 Framework
children.push(sh('3. The proposed framework'));
children.push(sub('Retrieval-Augmented Generation anchored to ICAO Doc 8400'));
children.push(num('3.1', 'The framework couples an LLM with Retrieval-Augmented Generation (RAG). Before generating output, the system retrieves the authoritative abbreviation expansions and codes relevant to the user’s input from official ICAO Doc 8400 material, and conditions the LLM’s output on that retrieved context. This anchors the generated NOTAM to ground-truth reference data rather than to the model’s imperfect recollection, greatly increasing reliability.'));
children.push(sub('String matching rather than semantic similarity'));
children.push(num('3.2', 'Unlike typical RAG systems that retrieve by semantic similarity, this framework retrieves by character-level string matching using indel (insertion–deletion) distance, complemented by fuzzy multi-gram matching. This choice is deliberate: the task is to match specific words and their exact abbreviations, and to remain robust to the minor spelling shifts, concatenations and typos common in NOTAM practice (for example recovering “TWY” from “TWYH”). An n-gram sliding window captures multi-word synonyms (such as the Indonesian “landasan pacu” for “runway”).'));
children.push(sub('Prompt construction'));
children.push(num('3.3', 'Each inference assembles a structured prompt with three parts: a fixed system prompt that instructs the model to convert free-form language into a rule-compliant NOTAM description; the user’s free-form input; and the abbreviation context retrieved for that input. The fixed instruction ensures consistency, while the variable context injects the precise domain knowledge required. Crucially, this approach requires no costly fine-tuning or retraining of the LLM — it supplies knowledge at inference time, making it efficient and readily reproducible.'));

// 4 Results
children.push(sh('4. Experimental results'));
children.push(num('4.1', 'A dataset of 900 paired examples was compiled from NOTAMs previously issued in Indonesia. More than 50 personnel of the Indonesian aviation authority, directly involved in day-to-day NOTAM operations, rewrote each NOTAM into free-form natural language, producing authentic free-text / NOTAM pairs. Analysis identified 28 commonly occurring abbreviations, the five most frequent being RWY, WIP, U/S, CLSD and FREQ.'));
children.push(num('4.2', 'Six OpenAI models were evaluated with and without the framework, scoring a generated Item E as correct only when it matched the ground truth exactly — a strict criterion appropriate to the zero-tolerance nature of operational NOTAMs. The framework improved accuracy substantially for every model tested, as summarised below.'));
children.push(new Paragraph({ spacing: { before: 60, after: 60 }, children: [it('Table 1 — Item E generation accuracy, with and without the framework')] }));
children.push(resultsTable());
children.push(new Paragraph({ spacing: { before: 120, after: 140 }, indent: { left: 720, hanging: 720 }, tabStops: [{ type: TabStopType.LEFT, position: 720 }], children: [r('4.3\t'), r('The strongest model (gpt-4.1) reached 53.61% exact-match accuracy with the framework against 16.26% without it, a gain of 37.35 percentage points; gpt-4o improved from 3.61% to 46.38%. The results confirm two findings: first, that general LLMs alone lack the specialised knowledge to produce compliant NOTAMs; and second, that supplying authoritative context through retrieval closes much of that gap without any model retraining. Higher-capacity models benefited most, indicating that both reasoning capacity and injected domain knowledge matter.')] }));
children.push(num('4.4', 'Qualitative analysis grouped outputs as correct, partially correct or wrong. Partially correct outputs preserved the structure but used non-standard wording (for example “TAXIWAY B CLOSED DUE TO WORK IN PROGRESS” instead of “TWY B CLSD DUE TO WIP”) — understandable to a human but non-compliant, and therefore counted as errors under the strict criterion. Smaller models struggled with both structure and abbreviation usage, reinforcing that strict, standardised formats demand sufficient model capacity together with retrieved domain knowledge.'));

// 5 Discussion
children.push(sh('5. Discussion and regional relevance'));
children.push(num('5.1', 'The research demonstrates a practical, safety-conscious pattern for applying AI in aeronautical information management: keep the human expert and the authoritative standard (Doc 8400) at the centre, and use retrieval to anchor the model to ground truth rather than trusting it to remember. This is a concrete, low-cost, reproducible instance of the AI opportunity recognised in Action Item 60/21, and of the data-driven, best-practice-sharing approach encouraged in Action Item 60/22.'));
children.push(num('5.2', 'The potential operational benefits are directly relevant across the region: reduced drafting workload for aeronautical information services, faster turnaround, a lower risk of human coding error, and a more accessible drafting process for staff who are not deeply specialised in NOTAM codification. As a decision-support aid — not an autonomous issuer — the framework complements, and does not replace, the trained officer and the existing review process.'));
children.push(num('5.3', 'Consistent with a responsible approach to AI (and with Action Item 60/13 on harmonising the regulation of complex technologies), Indonesia stresses that any operational deployment must retain human validation, be assessed within the Safety Management System, and remain anchored to current, authoritative aeronautical data. The exact-match evaluation used in this study reflects the discipline required: in operational NOTAMs, “nearly correct” is not acceptable.'));
children.push(num('5.4', 'The study is an initial step. It addresses Item E only; a system generating complete NOTAMs (all items) is future work. Evaluation was limited to the OpenAI model family, and broader model coverage and richer metrics are natural extensions. Indonesia offers to share its approach, dataset design and lessons learned with interested States and through the ICAO APAC Data Analytics Group and relevant AIM fora.'));

// 6 Conclusion & Action
children.push(sh('6. Conclusion'));
children.push(num('6.1', 'AI, applied with domain knowledge and human oversight, can meaningfully assist the production of standards-compliant NOTAMs. By combining an LLM with retrieval anchored to ICAO Doc 8400, AirNav Indonesia and Telkom University achieved large accuracy gains without model retraining, pointing toward more efficient and reliable aeronautical information management. Indonesia offers this research as a regional contribution and a foundation for further collaboration.'));
children.push(sh('7. Action by the Conference'));
children.push(num('7.1', 'The Conference is invited to:'));
children.push(letter('a', 'note the research by AirNav Indonesia and Telkom University applying Retrieval-Augmented Generation to the automated production of NOTAM descriptions, and the significant accuracy gains reported;'));
children.push(letter('b', 'recognise this as a concrete, low-cost example of the AI opportunity in Action Item 60/21 and the data-driven, best-practice-sharing approach in Action Item 60/22;'));
children.push(letter('c', 'encourage States/Administrations to explore AI decision-support for aeronautical information management that keeps authoritative standards (e.g. ICAO Doc 8400) and human validation at the centre, assessed within the Safety Management System;'));
children.push(letter('d', 'invite States/Administrations to share datasets, methods and lessons learned on AI for AIM through the ICAO APAC Data Analytics Group and relevant AIM fora; and'));
children.push(letter('e', 'encourage ICAO and States to consider the implications of AI-assisted NOTAM production for future guidance on the digitalization of aeronautical information services.'));

children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 240 }, children: [r('— END —', { bold: true })] }));

const doc = new Document({ creator: 'AirNav Indonesia', styles: { default: { document: { run: { font: FONT, size: 22 } } } }, sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } }, children }] });
Packer.toBuffer(doc).then(buf => { fs.writeFileSync(`${OUT}/DGCA61_WP_AI_NOTAM_Generation.docx`, buf); console.log('wrote DGCA61_WP_AI_NOTAM_Generation.docx'); });
