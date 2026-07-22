const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, TabStopType, TabStopPosition
} = require('docx');
const fs = require('fs');

const OUT = '/sessions/lucid-zen-gauss/mnt/DGCA-Conference';
const FONT = 'Times New Roman';
function run(text, opts = {}) { return new TextRun({ text, font: FONT, size: 22, ...opts }); }
function bold(t){ return run(t,{bold:true}); }
function ital(t){ return run(t,{italics:true}); }
function hrule() {
  return new Paragraph({ spacing: { before: 60, after: 60 },
    border: { bottom: { color: '000000', space: 1, style: BorderStyle.SINGLE, size: 6 } },
    children: [run('')] });
}
function headerLine(left, right) {
  return new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    spacing: { after: 40 }, children: [run(left, { bold: true }), run('\t' + right, {bold:true})] });
}
function sectionHeading(text) {
  return new Paragraph({ spacing: { before: 220, after: 100 }, keepNext: true,
    children: [new TextRun({ text, font: FONT, size: 22, bold: true, allCaps: true })] });
}
function numPara(num, body) {
  return new Paragraph({ spacing: { after: 140 }, indent: { left: 720, hanging: 720 },
    tabStops: [{ type: TabStopType.LEFT, position: 720 }],
    children: [run(num + '\t'), ...(Array.isArray(body) ? body : [run(body)])] });
}
function subItem(letter, body) {
  return new Paragraph({ spacing: { after: 100 }, indent: { left: 1440, hanging: 480 },
    tabStops: [{ type: TabStopType.LEFT, position: 1440 }],
    children: [run(letter + ')\t'), ...(Array.isArray(body) ? body : [run(body)])] });
}
function romanItem(rn, body) {
  return new Paragraph({ spacing: { after: 80 }, indent: { left: 2160, hanging: 480 },
    tabStops: [{ type: TabStopType.LEFT, position: 2160 }],
    children: [run(rn + '.\t'), run(body)] });
}
function summaryBlock(text) {
  return new Paragraph({ spacing: { before: 120, after: 60, line: 276 },
    border: {
      top: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 8 },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 8 },
      left: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 12 },
      right: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 12 },
    }, children: [run(text)] });
}

function buildDoc(wp) {
  const children = [];
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 },
    children: [new TextRun({ text: wp.meetingLine1, font: FONT, size: 22, bold: true })] }));
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 },
    children: [new TextRun({ text: wp.meetingLine2, font: FONT, size: 22 })] }));
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 },
    children: [new TextRun({ text: wp.theme, font: FONT, size: 20, italics: true })] }));
  children.push(hrule());
  children.push(headerLine(wp.agenda, wp.wpno));
  children.push(new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    spacing: { after: 60 }, children: [run(''), run('\t' + wp.date)] }));
  children.push(hrule());
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 240, after: 120 },
    children: [new TextRun({ text: wp.title, font: FONT, size: 24, bold: true })] }));
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 },
    children: [new TextRun({ text: '(Presented by ' + wp.presenter + ')', font: FONT, size: 22, bold: true })] }));
  children.push(hrule());
  children.push(sectionHeading('Summary'));
  children.push(summaryBlock(wp.summary));
  children.push(new Paragraph({ spacing: { after: 160 }, children: [ital(wp.actionRef)] }));
  children.push(new Paragraph({ spacing: { after: 60 }, children: [bold('References:')] }));
  wp.references.forEach(r => children.push(new Paragraph({ spacing: { after: 40 },
    indent: { left: 480, hanging: 240 }, children: [run('–\t' + r)] })));
  children.push(new Paragraph({ spacing: { before: 100, after: 40 },
    children: [bold('Strategic Objectives: '), run(wp.strategic)] }));
  children.push(new Paragraph({ spacing: { after: 120 },
    children: [bold('Financial Implications: '), run(wp.financial)] }));
  children.push(hrule());
  wp.sections.forEach(sec => {
    children.push(sectionHeading(sec.heading));
    sec.items.forEach(it => {
      if (it.letter) children.push(subItem(it.letter, it.text));
      else if (it.roman) children.push(romanItem(it.roman, it.text));
      else if (it.sh) children.push(new Paragraph({ spacing:{before:120, after:80}, children:[bold(it.sh)] }));
      else children.push(numPara(it.num, it.text));
    });
  });
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 240 },
    children: [run('— END —', { bold: true })] }));
  return new Document({ creator: 'AirNav Indonesia',
    styles: { default: { document: { run: { font: FONT, size: 22 } } } },
    sections: [{ properties: { page: { size: { width: 12240, height: 15840 },
      margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } }, children }] });
}

const wps = require('./wp_data.js');
(async () => {
  for (const wp of wps) {
    const doc = buildDoc(wp);
    const buf = await Packer.toBuffer(doc);
    fs.writeFileSync(`${OUT}/${wp.file}.docx`, buf);
    console.log('wrote', wp.file + '.docx');
  }
})();
