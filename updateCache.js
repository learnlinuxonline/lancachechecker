/**
 * Automation Script for LanCache
 * ==============================
 * - Loads providers & domains from sites.js
 * - Checks DNS resolve for each domain
 * - Counts how many are cached
 * - Writes updated file sites.generated.js
 */

const fs = require("fs");
const dns = require("dns");
const { promisify } = require("util");

const dnsLookup = promisify(dns.lookup);

// Load cachedomains from sites.js
const { cachedomains } = require("./sites.js");

async function checkDomain(domain) {
    try {
        await dnsLookup(domain);
        return true;  // Domain resolves
    } catch (err) {
        return false; // Not resolvable
    }
}

async function updateCache() {
    console.log("🔍 Checking domains, please wait...");

    for (const [provider, data] of Object.entries(cachedomains)) {
        let cachedCount = 0;
        for (const domain of data.domains) {
            const ok = await checkDomain(domain);
            if (ok) cachedCount++;
        }
        data.cached = cachedCount;
        console.log(`✔ ${provider} => ${cachedCount}/${data.domains.length} cached`);
    }

    // Save updated version
    const output = `const cachedomains = ${JSON.stringify(cachedomains, null, 4)};\n\nmodule.exports = { cachedomains };`;
    fs.writeFileSync("sites.generated.js", output);

    console.log("\n✅ Done! Updated file written to sites.generated.js");
}

updateCache();
