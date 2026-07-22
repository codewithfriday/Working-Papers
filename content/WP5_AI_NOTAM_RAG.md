# WP5 — APPLYING AI TO NOTAM PRODUCTION (RAG FRAMEWORK)

**61st APAC DGCA Conference, Kuala Lumpur, Malaysia, 2026 — Agenda Item 4 (Air Navigation)**
**(Presented by Indonesia)**

Source: M. I. Alfatih, S. A. Wibowo, U. N. Wisesty, I. Aulia, M. A. Zulmi, R. I. Prasetyo, K. A. Catur, J. Hermawan, U. Azmi, R. N. Hasfrian, "A Novel Notice to Airmen Description Generator Framework Based on String Matching Retrieval Augmented Generation," 2025 International Conference on Computing and Applied Informatics (IEEE), 2025.

## Key points captured for the working paper

- **Problem:** NOTAM Item E must be encoded in rigid ICAO Doc 8400 abbreviations (e.g. "RWY 06/24 CLSD DUE TO WIP"). Cryptic to produce; needs trained staff and expert review; growing volume = workload + human-error risk.
- **Approach:** RAG pipeline pairing an LLM with retrieval of authoritative abbreviation expansions from ICAO Doc 8400. Retrieval uses **character-level string matching (indel distance)** + **fuzzy multi-gram matching** (robust to typos/concatenations like "TWYH"→"TWY"; n-gram window for multi-word synonyms). Prompt = fixed system prompt + user free-text + retrieved abbreviation context. **No fine-tuning needed** — knowledge supplied at inference time.
- **Dataset:** 900 paired free-text/NOTAM examples from Indonesian NOTAMs; rewritten by 50+ Indonesian aviation-authority personnel. 28 common abbreviations (top 5: RWY, WIP, U/S, CLSD, FREQ).
- **Results (exact-match accuracy, with framework):** gpt-4.1 **53.61%** (vs 16.26% baseline, +37.35pp); gpt-4o 46.38% (vs 3.61%); gpt-3.5-turbo 24.09% (vs 3.01%); gpt-4.1-mini 21.08%; gpt-4o-mini 12.65%; gpt-4.1-nano 10.24%. Framework improved every model.
- **Qualitative:** correct / partially correct / wrong. Partially-correct = right meaning, non-standard wording ("TAXIWAY B CLOSED DUE TO WORK IN PROGRESS" vs "TWY B CLSD DUE TO WIP") → counted wrong under strict criterion. Bigger models handle structure + abbreviations better.
- **Positioning:** human-in-the-loop decision support, not autonomous issuance; anchored to authoritative standard; assess within SMS.
- **Limitations / future work:** Item E only (not full NOTAM); OpenAI models only.
- **DGCA mapping:** Action Item 60/21 (AI for efficiency), 60/22 (data-driven, best-practice sharing); supports AIM digitalization; 60/13 (responsible regulation of complex tech).
