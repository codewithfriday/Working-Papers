const pptxgen = require('pptxgenjs');
const OUT = '/sessions/lucid-zen-gauss/mnt/DGCA-Conference';
const HEAD = 'Cambria', BODY = 'Calibri';
// Palette: deep indigo / violet for an AI theme
const C = { dark: '241B47', mid: '5B3FA6', light: 'D8CBF0', accent: '2ED8B6' };

const p = new pptxgen();
p.defineLayout({ name: 'W', width: 13.333, height: 7.5 });
p.layout = 'W';

function header(sl, kicker, ttl) {
  sl.background = { color: 'FFFFFF' };
  sl.addText(kicker, { x: 0.7, y: 0.5, w: 11.9, h: 0.35, fontFace: BODY, fontSize: 12, bold: true, color: C.mid, charSpacing: 2 });
  sl.addText(ttl, { x: 0.7, y: 0.85, w: 11.9, h: 0.9, fontFace: HEAD, fontSize: 27, bold: true, color: C.dark });
}

// ---------- TITLE ----------
let s = p.addSlide();
s.background = { color: C.dark };
s.addShape(p.ShapeType.ellipse, { x: 9.8, y: -2.3, w: 6.4, h: 6.4, fill: { color: C.mid, transparency: 55 }, line: { type: 'none' } });
s.addShape(p.ShapeType.ellipse, { x: 11.0, y: -1.1, w: 3.8, h: 3.8, fill: { color: C.accent, transparency: 55 }, line: { type: 'none' } });
s.addText('61st APAC DGCA CONFERENCE  ·  KUALA LUMPUR, MALAYSIA  ·  2026', { x: 0.7, y: 0.6, w: 11, h: 0.4, fontFace: BODY, fontSize: 12, color: C.light, charSpacing: 2, bold: true });
s.addText('Agenda Item 4 — Air Navigation', { x: 0.7, y: 1.15, w: 10, h: 0.4, fontFace: BODY, fontSize: 13, color: C.accent, bold: true });
s.addText('Applying Artificial Intelligence to NOTAM Production', { x: 0.7, y: 1.95, w: 11.6, h: 1.5, fontFace: HEAD, fontSize: 36, bold: true, color: 'FFFFFF', lineSpacingMultiple: 1.02 });
s.addText('A Retrieval-Augmented Generation framework for automated, standards-compliant NOTAM descriptions', { x: 0.7, y: 3.65, w: 11.4, h: 0.9, fontFace: BODY, fontSize: 17, italics: true, color: C.light });
s.addShape(p.ShapeType.line, { x: 0.75, y: 5.55, w: 3.2, h: 0, line: { color: C.accent, width: 2.5 } });
s.addText('Presented by Indonesia  ·  AirNav Indonesia with Telkom University', { x: 0.7, y: 5.75, w: 11.6, h: 0.5, fontFace: BODY, fontSize: 15, color: 'FFFFFF', bold: true });
s.addText('Based on research published at the 2025 IEEE International Conference on Computing and Applied Informatics', { x: 0.7, y: 6.35, w: 11.8, h: 0.4, fontFace: BODY, fontSize: 11, color: C.light });

// ---------- PROBLEM ----------
s = p.addSlide();
header(s, 'THE PROBLEM', 'NOTAMs are vital — and cryptic to produce');
s.addText([
  { text: 'NOTAMs alert pilots and controllers to hazards and changes affecting flight safety. Item E — the description — must be encoded in rigid ICAO Doc 8400 abbreviations.', options: { paraSpaceAfter: 12, breakLine: true } },
  { text: 'Only trained staff can reliably encode it; submissions often need expert review. Growing traffic means growing workload and human-error risk.', options: { breakLine: false } },
], { x: 0.7, y: 1.95, w: 6.9, h: 3.6, fontFace: BODY, fontSize: 15, color: '333333', lineSpacingMultiple: 1.25, valign: 'top' });
// example transformation card
s.addShape(p.ShapeType.roundRect, { x: 7.9, y: 1.95, w: 4.7, h: 3.9, rectRadius: 0.1, fill: { color: 'F3F0FB' }, line: { color: 'E0D8F2', width: 1 } });
s.addText('PLAIN LANGUAGE', { x: 8.2, y: 2.2, w: 4.1, h: 0.35, fontFace: BODY, fontSize: 11, bold: true, color: C.mid, charSpacing: 1 });
s.addText('“Runway 06/24 is closed due to work in progress”', { x: 8.2, y: 2.55, w: 4.1, h: 0.9, fontFace: BODY, fontSize: 14, italics: true, color: '333333' });
s.addShape(p.ShapeType.chevron, { x: 9.9, y: 3.55, w: 0.7, h: 0.45, fill: { color: C.accent }, line: { type: 'none' } });
s.addText('NOTAM ITEM E', { x: 8.2, y: 4.15, w: 4.1, h: 0.35, fontFace: BODY, fontSize: 11, bold: true, color: C.mid, charSpacing: 1 });
s.addText('RWY 06/24 CLSD DUE TO WIP', { x: 8.2, y: 4.5, w: 4.1, h: 0.7, fontFace: 'Courier New', fontSize: 15, bold: true, color: C.dark });

// ---------- APPROACH ----------
s = p.addSlide();
header(s, 'THE APPROACH', 'Retrieval-Augmented Generation, anchored to ICAO Doc 8400');
const cards = [
  { t: 'LLM + retrieval', b: 'Before generating, the system retrieves authoritative abbreviation expansions from ICAO Doc 8400 and conditions the model on them — anchoring output to ground truth, not the model’s memory.' },
  { t: 'String matching', b: 'Retrieval uses character-level indel distance + fuzzy multi-gram matching — robust to typos and concatenations (recovering “TWY” from “TWYH”), with an n-gram window for multi-word synonyms.' },
  { t: 'No retraining', b: 'A fixed system prompt + user input + retrieved context is assembled at inference time. Knowledge is injected on the fly — no costly fine-tuning, making it efficient and reproducible.' },
];
cards.forEach((c, i) => {
  const x = 0.7 + i * (3.97 + 0.35);
  s.addShape(p.ShapeType.roundRect, { x, y: 2.1, w: 3.97, h: 4.5, rectRadius: 0.08, fill: { color: 'F7F5FC' }, line: { color: 'E4DCF4', width: 1 } });
  s.addShape(p.ShapeType.ellipse, { x: x + 0.3, y: 2.4, w: 0.62, h: 0.62, fill: { color: C.mid }, line: { type: 'none' } });
  s.addText(String(i + 1), { x: x + 0.3, y: 2.4, w: 0.62, h: 0.62, align: 'center', valign: 'middle', fontFace: HEAD, fontSize: 18, bold: true, color: 'FFFFFF' });
  s.addText(c.t, { x: x + 1.05, y: 2.42, w: 2.7, h: 0.62, fontFace: HEAD, fontSize: 16, bold: true, color: C.dark, valign: 'middle' });
  s.addText(c.b, { x: x + 0.32, y: 3.25, w: 3.35, h: 3.1, fontFace: BODY, fontSize: 13, color: '3A4652', lineSpacingMultiple: 1.2, valign: 'top' });
});

// ---------- RESULTS (chart) ----------
s = p.addSlide();
header(s, 'THE RESULTS', 'The framework improved accuracy for every model');
const models = ['gpt-4.1', 'gpt-4o', 'gpt-3.5-turbo', 'gpt-4.1-mini', 'gpt-4o-mini', 'gpt-4.1-nano'];
const noFw = [16.26, 3.61, 3.01, 0, 0, 0];
const withFw = [53.61, 46.38, 24.09, 21.08, 12.65, 10.24];
s.addChart(p.ChartType.bar, [
  { name: 'Without framework', labels: models, values: noFw },
  { name: 'With framework', labels: models, values: withFw },
], {
  x: 0.7, y: 2.0, w: 7.7, h: 4.9, barDir: 'col', barGrouping: 'clustered',
  chartColors: ['B9AEDD', C.mid], showLegend: true, legendPos: 'b', legendFontFace: BODY, legendFontSize: 11,
  showValue: true, dataLabelPosition: 'outEnd', dataLabelFontFace: BODY, dataLabelFontSize: 9, dataLabelColor: '444444', dataLabelFormatCode: '0.0"%"',
  catAxisLabelColor: '444444', catAxisLabelFontFace: BODY, catAxisLabelFontSize: 10, catAxisLabelRotate: 30,
  valAxisLabelColor: '888888', valAxisLabelFontFace: BODY, valAxisLabelFontSize: 10, valAxisMaxVal: 60, valAxisMinVal: 0,
  valGridLine: { color: 'EEEEEE', size: 1 }, catGridLine: { style: 'none' }, valAxisTitle: 'Exact-match accuracy (%)', showValAxisTitle: true, valAxisTitleFontSize: 11, valAxisTitleFontFace: BODY,
});
// callout
s.addShape(p.ShapeType.roundRect, { x: 8.75, y: 2.3, w: 3.85, h: 2.15, rectRadius: 0.1, fill: { color: C.dark }, line: { type: 'none' } });
s.addText('53.61%', { x: 8.75, y: 2.5, w: 3.85, h: 0.9, align: 'center', fontFace: HEAD, fontSize: 44, bold: true, color: C.accent });
s.addText('best accuracy (gpt-4.1) — up from 16.26% without the framework', { x: 9.0, y: 3.5, w: 3.35, h: 0.85, align: 'center', fontFace: BODY, fontSize: 12.5, color: 'FFFFFF' });
s.addShape(p.ShapeType.roundRect, { x: 8.75, y: 4.65, w: 3.85, h: 2.25, rectRadius: 0.1, fill: { color: 'F3F0FB' }, line: { color: 'E0D8F2', width: 1 } });
s.addText('+37.35 pts', { x: 8.75, y: 4.85, w: 3.85, h: 0.7, align: 'center', fontFace: HEAD, fontSize: 30, bold: true, color: C.mid });
s.addText('improvement for the strongest model. Evaluated on 900 free-text / NOTAM pairs from Indonesian operations (exact-match criterion).', { x: 9.0, y: 5.5, w: 3.35, h: 1.3, align: 'center', fontFace: BODY, fontSize: 12, color: '3A4652', valign: 'top' });

// ---------- IMPLICATIONS ----------
s = p.addSlide();
header(s, 'WHY IT MATTERS', 'Implications for the region');
const imp = [
  { t: 'Efficiency & workload', b: 'Reduced drafting effort and faster turnaround for aeronautical information services, with lower risk of human coding error.' },
  { t: 'Accessibility', b: 'Makes compliant drafting achievable for staff who are not deeply specialised in NOTAM codification — a foundation for AIM digitalization.' },
  { t: 'Human-in-the-loop', b: 'Decision-support, not autonomous issuance. The trained officer and existing review process remain central; deployment assessed within the SMS.' },
  { t: 'Standards-anchored AI', b: 'A concrete, low-cost model for Action Items 60/21 (AI) and 60/22 (data-driven, best-practice sharing) — anchored to ICAO Doc 8400.' },
];
imp.forEach((c, i) => {
  const col = i % 2, row = Math.floor(i / 2);
  const x = 0.7 + col * (5.95 + 0.3), y = 2.05 + row * (2.35 + 0.3);
  s.addShape(p.ShapeType.roundRect, { x, y, w: 5.95, h: 2.35, rectRadius: 0.08, fill: { color: 'F7F5FC' }, line: { color: 'E4DCF4', width: 1 } });
  s.addShape(p.ShapeType.ellipse, { x: x + 0.3, y: y + 0.32, w: 0.55, h: 0.55, fill: { color: C.accent }, line: { type: 'none' } });
  s.addText(String(i + 1), { x: x + 0.3, y: y + 0.32, w: 0.55, h: 0.55, align: 'center', valign: 'middle', fontFace: HEAD, fontSize: 16, bold: true, color: C.dark });
  s.addText(c.t, { x: x + 1.0, y: y + 0.34, w: 4.7, h: 0.5, fontFace: HEAD, fontSize: 16, bold: true, color: C.dark, valign: 'middle' });
  s.addText(c.b, { x: x + 0.32, y: y + 1.02, w: 5.3, h: 1.2, fontFace: BODY, fontSize: 12.5, color: '3A4652', lineSpacingMultiple: 1.16, valign: 'top' });
});

// ---------- ACTION ----------
s = p.addSlide();
s.background = { color: C.dark };
s.addText('ACTION BY THE CONFERENCE', { x: 0.7, y: 0.55, w: 11, h: 0.4, fontFace: BODY, fontSize: 12, bold: true, color: C.accent, charSpacing: 2 });
s.addText('The Conference is invited to:', { x: 0.7, y: 0.95, w: 11.9, h: 0.7, fontFace: HEAD, fontSize: 26, bold: true, color: 'FFFFFF' });
const acts = [
  'note the research by AirNav Indonesia and Telkom University applying RAG to automated NOTAM description generation, and the significant accuracy gains reported;',
  'recognise this as a concrete, low-cost example of the AI opportunity (Action Item 60/21) and the data-driven, best-practice-sharing approach (60/22);',
  'encourage States to explore AI decision-support for AIM that keeps authoritative standards and human validation central, assessed within the SMS;',
  'invite States to share datasets, methods and lessons learned on AI for AIM through the ICAO APAC Data Analytics Group and relevant AIM fora; and',
  'encourage ICAO and States to consider the implications of AI-assisted NOTAM production for future guidance on AIS digitalization.',
];
let ay = 1.95; const rowH = (6.6 - 1.95) / acts.length;
acts.forEach((a, i) => {
  s.addShape(p.ShapeType.ellipse, { x: 0.7, y: ay + 0.05, w: 0.5, h: 0.5, fill: { color: C.accent }, line: { type: 'none' } });
  s.addText(String.fromCharCode(97 + i), { x: 0.7, y: ay + 0.05, w: 0.5, h: 0.5, align: 'center', valign: 'middle', fontFace: HEAD, fontSize: 15, bold: true, color: C.dark });
  s.addText(a, { x: 1.4, y: ay - 0.02, w: 11.2, h: rowH, fontFace: BODY, fontSize: 13.5, color: 'FFFFFF', valign: 'top', lineSpacingMultiple: 1.1 });
  ay += rowH;
});

// ---------- CLOSING ----------
s = p.addSlide();
s.background = { color: C.dark };
s.addShape(p.ShapeType.ellipse, { x: -2.0, y: 3.6, w: 6.2, h: 6.2, fill: { color: C.mid, transparency: 55 }, line: { type: 'none' } });
s.addText('AI, applied with domain knowledge and human oversight, can meaningfully assist the production of standards-compliant NOTAMs.', { x: 1.0, y: 2.3, w: 11.3, h: 2.2, fontFace: HEAD, fontSize: 25, bold: true, color: 'FFFFFF', italics: true, lineSpacingMultiple: 1.12 });
s.addShape(p.ShapeType.line, { x: 1.05, y: 4.9, w: 3.0, h: 0, line: { color: C.accent, width: 2.5 } });
s.addText('Terima kasih  ·  Thank you', { x: 1.0, y: 5.1, w: 10, h: 0.6, fontFace: BODY, fontSize: 18, bold: true, color: C.light });
s.addText('AirNav Indonesia & Telkom University  ·  61st APAC DGCA Conference, Kuala Lumpur 2026', { x: 1.0, y: 5.75, w: 11.5, h: 0.4, fontFace: BODY, fontSize: 12, color: C.light });

p.writeFile({ fileName: `${OUT}/DGCA61_Deck_AI_NOTAM_Generation.pptx` }).then(() => console.log('wrote DGCA61_Deck_AI_NOTAM_Generation.pptx'));
