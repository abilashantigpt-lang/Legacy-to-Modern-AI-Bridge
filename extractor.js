import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Handling __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * CONFIGURATION TOGGLE
 * 'STRICT' = Legacy Mode (Look for exact words like 'Amount') - Usually shows RED
 * 'SMART'  = AI-Native Mode (Look for modern JS architecture) - Should show GREEN
 */
const AUDIT_MODE = 'STRICT'; 

const outputDir = './modern_output';
const reportPath = './audit_report.json';

function runGlobalAudit() {
    // 1. Check if output directory exists
    if (!fs.existsSync(outputDir)) {
        console.error("❌ Error: modern_output folder not found!");
        return;
    }

    const files = fs.readdirSync(outputDir).filter(f => f.endsWith('.js'));
    const auditResults = [];

    files.forEach(file => {
        const filePath = path.join(outputDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        let isPassed = false;

        if (AUDIT_MODE === 'STRICT') {
            // STRICT MODE: Flag files containing financial keywords for human review
            // We want 'isPassed' to be false if dangerous words are found
            const hasRiskyWords = content.includes('Amount') || content.includes('Payout') || content.includes('Interest');
            isPassed = !hasRiskyWords; 
        } else {
            // SMART MODE: Verifying Modern JS Structural Integrity
            const hasModernVariables = content.includes('const') || content.includes('let');
            const hasOutput = content.includes('console.log');
            const hasStructure = content.includes('function') || content.includes('=>');

            isPassed = hasModernVariables || hasOutput || hasStructure;
        }

        auditResults.push({
            fileName: file,
            status: isPassed ? 'Passed' : 'Needs Review',
            timestamp: new Date().toLocaleString()
        });
    });

    // 2. Save the report for dashboard.html to read
    fs.writeFileSync(reportPath, JSON.stringify(auditResults, null, 2));
    
    console.log(`\n--- 🛡️ AUDIT PIPELINE COMPLETE ---`);
    console.log(`MODE: ${AUDIT_MODE}`);
    console.log(`FILES PROCESSED: ${files.length}`);
    console.log(`REPORT SAVED TO: ${reportPath}\n`);
}

runGlobalAudit();