const pptxgen = require('pptxgenjs');
const OUT = '/sessions/lucid-zen-gauss/mnt/DGCA-Conference';
const decks = require('./deck_data.js');

const HEAD = 'Cambria';
const BODY = 'Calibri';

function build(deck) {
  const p = new pptxgen();
  p.defineLayout({ name: 'W', width: 13.333, height: 7.5 });
  p.layout = 'W';
  const C = deck.palette; // {dark, mid, light, accent, ink}
  const W = 13.333, H = 7.5;

  // ---------- TITLE ----------
  let s = p.addSlide();
  s.background = { color: C.dark };
  // motif: concentric circle top-right
  s.addShape(p.ShapeType.ellipse, { x: 9.6, y: -2.2, w: 6.2, h: 6.2, fill: { color: C.mid, transparency: 60 }, line: { type: 'none' } });
  s.addShape(p.ShapeType.ellipse, { x: 10.8, y: -1.1, w: 3.8, h: 3.8, fill: { color: C.accent, transparency: 45 }, line: { type: 'none' } });
  s.addText('61st APAC DGCA CONFERENCE  ·  KUALA LUMPUR, MALAYSIA  ·  2026', { x: 0.7, y: 0.6, w: 11, h: 0.4, fontFace: BODY, fontSize: 12, color: C.light, charSpacing: 2, bold: true });
  s.addText(deck.agenda, { x: 0.7, y: 1.15, w: 10, h: 0.4, fontFace: BODY, fontSize: 13, color: C.accent, bold: true });
  s.addText(deck.title, { x: 0.7, y: 2.0, w: 11.4, h: 2.4, fontFace: HEAD, fontSize: 34, bold: true, color: 'FFFFFF', lineSpacingMultiple: 1.02 });
  s.addText(deck.subtitle, { x: 0.7, y: 4.5, w: 11.2, h: 0.9, fontFace: BODY, fontSize: 17, italics: true, color: C.light });
  s.addShape(p.ShapeType.line, { x: 0.75, y: 5.85, w: 3.2, h: 0, line: { color: C.accent, width: 2.5 } });
  s.addText('Presented by Indonesia  ·  AirNav Indonesia (Perum LPPNPI)', { x: 0.7, y: 6.05, w: 11, h: 0.5, fontFace: BODY, fontSize: 15, color: 'FFFFFF', bold: true });
  s.addText('Theme: Smart Skies — Emerging Technologies for Safe, Secure, Sustainable and Efficient Aviation', { x: 0.7, y: 6.7, w: 11.8, h: 0.4, fontFace: BODY, fontSize: 11, color: C.light });

  // ---------- helper: content header ----------
  function header(sl, kicker, ttl) {
    sl.background = { color: 'FFFFFF' };
    sl.addText(kicker, { x: 0.7, y: 0.5, w: 11, h: 0.35, fontFace: BODY, fontSize: 12, bold: true, color: C.mid, charSpacing: 2 });
    sl.addText(ttl, { x: 0.7, y: 0.85, w: 11.9, h: 0.9, fontFace: HEAD, fontSize: 28, bold: true, color: C.dark });
  }

  // ---------- CONTEXT slide ----------
  s = p.addSlide();
  header(s, 'THE MANDATE', deck.context.title);
  s.addText(deck.context.intro, { x: 0.7, y: 1.95, w: 7.0, h: 3.6, fontFace: BODY, fontSize: 15, color: '333333', lineSpacingMultiple: 1.25, valign: 'top' });
  // action item quote card (right)
  s.addShape(p.ShapeType.roundRect, { x: 8.05, y: 1.95, w: 4.55, h: 4.4, rectRadius: 0.12, fill: { color: C.dark }, line: { type: 'none' }, shadow: { type: 'outer', color: '888888', blur: 8, offset: 3, angle: 90, opacity: 0.35 } });
  s.addText(deck.context.aiLabel, { x: 8.35, y: 2.2, w: 4.0, h: 0.5, fontFace: BODY, fontSize: 13, bold: true, color: C.accent, charSpacing: 1 });
  s.addText(deck.context.aiText, { x: 8.35, y: 2.75, w: 3.95, h: 3.4, fontFace: BODY, fontSize: 13.5, italics: true, color: 'FFFFFF', lineSpacingMultiple: 1.22, valign: 'top' });

  // ---------- CARD slides ----------
  deck.cardSlides.forEach(cs => {
    const sl = p.addSlide();
    header(sl, cs.kicker, cs.title);
    const items = cs.cards;
    const n = items.length;
    const cols = n <= 3 ? n : Math.ceil(n / 2);
    const rows = n <= 3 ? 1 : 2;
    const gx = 0.35, gy = 0.35;
    const startY = 2.05;
    const availW = 11.9, availH = 4.9;
    const cw = (availW - gx * (cols - 1)) / cols;
    const ch = (availH - gy * (rows - 1)) / rows;
    items.forEach((it, i) => {
      const r = Math.floor(i / cols), c = i % cols;
      const x = 0.7 + c * (cw + gx);
      const y = startY + r * (ch + gy);
      sl.addShape(p.ShapeType.roundRect, { x, y, w: cw, h: ch, rectRadius: 0.08, fill: { color: 'F4F6F8' }, line: { color: 'E2E8EE', width: 1 } });
      // number circle
      sl.addShape(p.ShapeType.ellipse, { x: x + 0.28, y: y + 0.28, w: 0.6, h: 0.6, fill: { color: C.mid }, line: { type: 'none' } });
      sl.addText(String(i + 1), { x: x + 0.28, y: y + 0.28, w: 0.6, h: 0.6, align: 'center', valign: 'middle', fontFace: HEAD, fontSize: 18, bold: true, color: 'FFFFFF' });
      sl.addText(it.title, { x: x + 1.05, y: y + 0.28, w: cw - 1.3, h: 0.7, fontFace: HEAD, fontSize: 15.5, bold: true, color: C.dark, valign: 'middle' });
      sl.addText(it.body, { x: x + 0.32, y: y + 1.08, w: cw - 0.62, h: ch - 1.3, fontFace: BODY, fontSize: 12.5, color: '3A4652', lineSpacingMultiple: 1.16, valign: 'top' });
    });
  });

  // ---------- ACTION slide ----------
  s = p.addSlide();
  s.background = { color: C.dark };
  s.addText('ACTION BY THE CONFERENCE', { x: 0.7, y: 0.55, w: 11, h: 0.4, fontFace: BODY, fontSize: 12, bold: true, color: C.accent, charSpacing: 2 });
  s.addText('The Conference is invited to:', { x: 0.7, y: 0.95, w: 11.9, h: 0.7, fontFace: HEAD, fontSize: 26, bold: true, color: 'FFFFFF' });
  const acts = deck.actions;
  let ay = 1.95;
  const rowH = (6.5 - 1.95) / acts.length;
  acts.forEach((a, i) => {
    s.addShape(p.ShapeType.ellipse, { x: 0.7, y: ay + 0.05, w: 0.5, h: 0.5, fill: { color: C.accent }, line: { type: 'none' } });
    s.addText(String.fromCharCode(97 + i), { x: 0.7, y: ay + 0.05, w: 0.5, h: 0.5, align: 'center', valign: 'middle', fontFace: HEAD, fontSize: 15, bold: true, color: C.dark });
    s.addText(a, { x: 1.4, y: ay - 0.04, w: 11.2, h: rowH, fontFace: BODY, fontSize: 14, color: 'FFFFFF', valign: 'top', lineSpacingMultiple: 1.12 });
    ay += rowH;
  });

  // ---------- CLOSING ----------
  s = p.addSlide();
  s.background = { color: C.dark };
  s.addShape(p.ShapeType.ellipse, { x: -2.0, y: 3.6, w: 6.2, h: 6.2, fill: { color: C.mid, transparency: 55 }, line: { type: 'none' } });
  s.addText(deck.closing, { x: 1.0, y: 2.4, w: 11.3, h: 2.4, fontFace: HEAD, fontSize: 26, bold: true, color: 'FFFFFF', lineSpacingMultiple: 1.1, italics: true });
  s.addShape(p.ShapeType.line, { x: 1.05, y: 5.0, w: 3.0, h: 0, line: { color: C.accent, width: 2.5 } });
  s.addText('Terima kasih  ·  Thank you', { x: 1.0, y: 5.2, w: 10, h: 0.6, fontFace: BODY, fontSize: 18, bold: true, color: C.light });
  s.addText('AirNav Indonesia  ·  61st APAC DGCA Conference, Kuala Lumpur 2026', { x: 1.0, y: 5.85, w: 11, h: 0.4, fontFace: BODY, fontSize: 12, color: C.light });

  return p.writeFile({ fileName: `${OUT}/${deck.file}.pptx` });
}

(async () => {
  for (const d of decks) { await build(d); console.log('wrote', d.file + '.pptx'); }
})();
