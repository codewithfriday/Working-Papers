# AirNav Indonesia — Working Papers for the 61st APAC DGCA Conference

Draft ICAO-style working papers and accompanying presentations prepared by **AirNav Indonesia (Perum LPPNPI)** for the **61st Conference of Directors General of Civil Aviation, Asia and Pacific Regions** (Kuala Lumpur, Malaysia, 2026).

**Conference theme:** *Smart Skies — Emerging Technologies for Safe, Secure, Sustainable and Efficient Aviation.*

Each paper responds to specific Action Items arising from the **60th APAC DGCA Conference** (Sendai, Japan, 28 July – 1 August 2025) and puts forward Indonesia's progress and proposed regional actions in areas where AirNav Indonesia is well advanced: TBO, FF-ICE, SWIM, Data Analytics, GNSS RFI mitigation, and Safety Management Systems.

---

## The four working papers

| # | Working paper | Agenda item | Responds to DGCA60 Action Items | Files |
|---|---------------|-------------|--------------------------------|-------|
| 1 | **Advancing SWIM-Enabled FF-ICE and Trajectory Based Operations** | Item 4 — Air Navigation | 60/20 (SWIM 2024–2030; FF-ICE, TBO); supports 60/45 | `DGCA61_WP_SWIM_FFICE_TBO.docx` · `DGCA61_Deck_SWIM_FFICE_TBO.pptx` |
| 2 | **A Data-Driven Approach to ATM: Analytics, Regional KPIs and Responsible AI** | Item 4 — Air Navigation | 60/22 (data-driven ATM, KPIs, DAG); 60/21 (AI); 60/13 | `DGCA61_WP_Data_Analytics_AI.docx` · `DGCA61_Deck_Data_Analytics_AI.pptx` |
| 3 | **Building Navigation Resilience Against GNSS RFI** | Item 4 — Air Navigation | 60/23 (RFI detection/mitigation, MON); 60/18 | `DGCA61_WP_GNSS_RFI_Resilience.docx` · `DGCA61_Deck_GNSS_RFI_Resilience.pptx` |
| 4 | **From Reactive to Predictive: Strengthening SMS** | Item 3 — Aviation Safety | 60/8 (predictive SMS); 60/3 (data sharing); 60/4 (safety culture); 60/16 | `DGCA61_WP_Predictive_SMS.docx` · `DGCA61_Deck_Predictive_SMS.pptx` |
| 5 | **Applying AI to NOTAM Production (RAG framework)** | Item 4 — Air Navigation | 60/21 (AI for efficiency); 60/22 (data-driven, best-practice sharing); 60/13 | `DGCA61_WP_AI_NOTAM_Generation.docx` · `DGCA61_Deck_AI_NOTAM_Generation.pptx` |

Working paper 5 is based on peer-reviewed research by AirNav Indonesia and Telkom University — *"A Novel Notice to Airmen Description Generator Framework Based on String Matching Retrieval Augmented Generation"* (2025 IEEE International Conference on Computing and Applied Informatics) — and includes an accuracy results table and a results chart in its deck.

Each working paper follows the standard ICAO structure: **Summary**, **References**, **1. Introduction**, **2. Discussion**, **3. Conclusion**, and **4. Action by the Conference**.

---

## Repository structure

```
.
├── README.md                              This file
├── DGCA61_WP_SWIM_FFICE_TBO.docx          Working paper 1 (Word)
├── DGCA61_WP_Data_Analytics_AI.docx       Working paper 2 (Word)
├── DGCA61_WP_GNSS_RFI_Resilience.docx     Working paper 3 (Word)
├── DGCA61_WP_Predictive_SMS.docx          Working paper 4 (Word)
├── DGCA61_Deck_SWIM_FFICE_TBO.pptx        Presentation 1 (PowerPoint)
├── DGCA61_Deck_Data_Analytics_AI.pptx     Presentation 2 (PowerPoint)
├── DGCA61_Deck_GNSS_RFI_Resilience.pptx   Presentation 3 (PowerPoint)
├── DGCA61_Deck_Predictive_SMS.pptx        Presentation 4 (PowerPoint)
├── DGCA61_WP_AI_NOTAM_Generation.docx     Working paper 5 (Word)
├── DGCA61_Deck_AI_NOTAM_Generation.pptx   Presentation 5 (PowerPoint)
└── content/                               Editable Markdown source drafts of each paper
```

---

## How the topics were selected

All 60 Action Items from DGCA60 were reviewed and matched against AirNav Indonesia's most advanced capability areas. Six capabilities mapped onto distinct Action Items and were consolidated into four papers to minimise overlap and align cleanly with the conference agenda:

- **SWIM + FF-ICE + TBO** form one connected transformation (SWIM is the backbone, FF-ICE the collaborative flight object, TBO the operational outcome) → **Paper 1**, Action Item 60/20.
- **Data Analytics + AI** share the same data-governance foundation → **Paper 2**, Action Items 60/22 and 60/21.
- **GNSS RFI** is a distinct navigation-resilience topic → **Paper 3**, Action Items 60/23 and 60/18.
- **SMS** is a distinct safety topic, and draws on the same data discipline as Paper 2 → **Paper 4**, Action Items 60/8, 60/3 and 60/4.

---

## Before submission — checklist

These are **drafts for internal review**. Please complete the following before formal submission to the ICAO APAC Regional Office:

- [ ] Replace the placeholder working-paper numbers (`DGCA61/WP/xx`) once assigned by the Secretariat.
- [ ] Replace the placeholder date (`[Day Month] 2026`).
- [ ] Review all quantitative and programme-specific claims against AirNav Indonesia's actual figures and current status.
- [ ] Confirm co-sponsorship (if any) and update the "Presented by" line accordingly.
- [ ] Legal/management clearance per AirNav Indonesia's internal review process.

---

## Editing the source

The `content/` folder holds the Markdown drafts used to generate the Word documents. To regenerate the `.docx`/`.pptx` deliverables from source data, the generator scripts (`gen_docx.js`, `gen_pptx.js` with their `*_data.js` inputs) use the `docx` and `pptxgenjs` Node libraries.

---

*Prepared by AirNav Indonesia (Perum LPPNPI). For the 61st APAC DGCA Conference, Kuala Lumpur, Malaysia, 2026.*
