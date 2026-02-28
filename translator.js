import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// These two lines are needed to fix paths in "type: module" mode
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use your API Key here
const genAI = new GoogleGenerativeAI("AIzaSyBqHPaE2sjSEGGinja2mZC5xFBe6kCQNs4");
const inputFolder = './input_java'; 
const outputFolder = './modern_output';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runScaleTest() {
    // Using the 2026 Gemini 3 Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const files = fs.readdirSync(inputFolder).filter(f => f.endsWith('.java'));

    console.log(`--- 🚀 SCALE TEST: PROCESSING ${files.length} FILES ---`);

    for (const file of files) {
        const javaCode = fs.readFileSync(path.join(inputFolder, file), 'utf8');
        
        const prompt = `Convert this Legacy Java code to clean, production-ready Node.js.
        CRITICAL RULES (Follow strictly):
        1. OUTPUT: Provide ONLY raw code. No introductory text, no "To migrate this...", and no markdown backticks.
        2. MODULE TYPE: Use ES Module syntax (import/export).
        3. DATA LAYER: Replace Java Maps/Lists with logic calling '../supabaseClient.js'.
        4. PATHING: The import MUST be: import supabase from '../supabaseClient.js';
        5. SAFETY: Wrap any 'PAYOUT_TRIGGERED' logic in a function called 'logAuditTrail()'.

        JAVA CODE TO MIGRATE:
        ${javaCode}`;
        
        try {
            const result = await model.generateContent(prompt);
            // Cleaner regex to remove markdown artifacts
            const output = result.response.text().replace(/```javascript/g, "").replace(/```/g, "").trim();
            
            fs.writeFileSync(path.join(outputFolder, file.replace('.java', '.js')), output);
            console.log(`✅ Successfully Migrated: ${file}`);

            console.log("⏳ Waiting 20 seconds to stay within Free Tier limits...");
            await sleep(20000); 

        } catch (err) {
            console.log(`❌ Error in ${file}:`, err.message);
            if (err.message.includes('429')) {
                console.log("🛑 Quota hit. Sleeping for 60 seconds...");
                await sleep(60000);
            }
        }
    }
    console.log("--- ✨ SCALE TEST COMPLETE ---");
}

runScaleTest();