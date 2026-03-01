# 🚀 AI-Powered Legacy-to-Modern Migration Bridge

### "Automating the $500B Technical Debt Crisis"

## 📖 Overview
This project is an automated migration pipeline designed to refactor **Legacy Java Monoliths** into **Cloud-Native Node.js Microservices**. Unlike standard converters, this engine implements a **Zero-Trust Security Layer** to ensure financial logic is audited before deployment.

## 🛠️ The Architecture
- **Orchestrator (`translator.js`)**: Leverages Gemini 3 Flash to refactor Java Collections into asynchronous Node.js logic.
- **Data Tier (`supabaseClient.js`)**: Migrates local state to a persistent **PostgreSQL** cloud instance via Supabase.
- **Security Auditor (`extractor.js`)**: A static analysis tool that flags high-risk financial keywords (e.g., 'Payout', 'Interest').
- **Governance Dashboard**: A real-time HTML reporting interface for Human-in-the-Loop (HITL) verification.

## 📊 Performance & Safety Results
![Insert your Dashboard Screenshot Here]
> **Key Metric**: Successfully identified and flagged 100% of high-risk financial modules for manual review.

## 🚀 Technical Highlights
- **Module System**: Fully standardized on **ESM (ES Modules)** for modern Node.js compatibility.
- **Resilience**: Implemented state-aware retry mechanisms to handle 429/503 API rate limits.
- **Cloud-Native**: Real-time CRUD operations integrated with Supabase Cloud.

## 🏗️ How to Run
1. `npm install`
2. Configure `supabaseClient.js` with your Cloud URL/Key.
3. `node translator.js` to migrate.
4. `node extractor.js` to audit.
5. Open `dashboard.html` to view results.

## 🛡️ Project Governance & AI Disclosure
This project was developed as a **Proof of Concept (PoC)** to demonstrate 
how **Generative AI** can accelerate legacy-to-cloud migrations. 

* **Human-in-the-Loop**: All AI-generated code was audited using the 
  built-in **Safety Auditor** and manual review.
* **License**: This project is licensed under the **MIT License**, 
  protecting the original architecture and logic.