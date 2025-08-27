/**
 * LanCache Providers & Domains
 * ============================
 * এখানে সব provider এর নাম, description এবং domain list থাকবে।
 * প্রতিটা provider এর জন্য:
 *   - description: সংক্ষিপ্ত বিবরণ
 *   - domains: কোন কোন host/domain cache হবে
 *   - cached: কয়টা domain বর্তমানে cache হয়েছে
 */

const cachedomains = {
    arenanet: {
        description: "CDN for Guild Wars, HoT",
        domains: [
            "assetcdn.101.arenanetworks.com",
            "assetcdn.102.arenanetworks.com",
            "assetcdn.103.arenanetworks.com"
        ],
        cached: 3
    },

    blizzard: {
        description: "CDN for Blizzard / Battle.net",
        domains: [
            "dist.blizzard.com",
            "dist.blizzard.com.edgesuite.net",
            "blizzard.vo.llnwd.net",
            "blzddist1-a.akamaihd.net",
            "blzddist2-a.akamaihd.net",
            "blzddist3-a.akamaihd.net",
            "level3.blizzard.com",
            "nydus.battle.net",
            "cdn.blizzard.com"
        ],
        cached: 7
    },

    bsg: {
        description: "Battle State Games (Escape from Tarkov)",
        domains: [
            "cdn-11.eft-store.com",
            "cl-453343cd.gcdn.co"
        ],
        cached: 2
    },

    cityofheroes: {
        description: "City of Heroes (Homecoming)",
        domains: [
            "cdn-na1.homecomingservers.com",
            "cdn-na2.homecomingservers.com",
            "cdn-na3.homecomingservers.com",
            "cdn-eu1.homecomingservers.com"
        ],
        cached: 4
    },

    epicgames: {
        description: "CDN for Epic Games / Unreal Engine",
        domains: [
            "cdn1.epicgames.com",
            "cdn.unrealengine.com",
            "cdn1.unrealengine.com",
            "cdn2.unrealengine.com",
            "cdn3.unrealengine.com",
            "download.epicgames.com",
            "download2.epicgames.com",
            "download3.epicgames.com",
            "download4.epicgames.com",
            "epicgames-download1.akamaized.net",
            "fastly-download.epicgames.com"
        ],
        cached: 9
    },

    nintendo: {
        description: "Nintendo consoles & download servers",
        domains: [
            "ccs.cdn.wup.shop.nintendo.net",
            "ccs.cdn.wup.shop.nintendo.net.edgesuite.net",
            "geisha-wup.cdn.nintendo.net",
            "geisha-wup.cdn.nintendo.net.edgekey.net",
            "idbe-wup.cdn.nintendo.net",
            "idbe-wup.cdn.nintendo.net.edgekey.net",
            "ecs-lp1.hac.shop.nintendo.net",
            "receive-lp1.dg.srv.nintendo.net"
        ],
        cached: 6
    },

    steam: {
        description: "Valve Steam platform",
        domains: [
            "lancache.steamcontent.com"
        ],
        cached: 1
    },

    xboxlive: {
        description: "Xbox Live CDN",
        domains: [
            "assets1.xboxlive.com",
            "assets2.xboxlive.com",
            "xbox-mbr.xboxlive.com",
            "assets1.xboxlive.com.nsatc.net",
            "xvcf1.xboxlive.com",
            "xvcf2.xboxlive.com",
            "d1.xboxlive.com"
        ],
        cached: 6
    },

    ubuntu: {
        description: "Ubuntu Linux archive",
        domains: [
            "archive.ubuntu.com"
        ],
        cached: 1
    },

    kali: {
        description: "Kali Linux repositories",
        domains: [
            "http.kali.org",
            "kali.cs.nycu.edu.tw"
        ],
        cached: 2
    },

    proxmox: {
        description: "Proxmox repositories",
        domains: [
            "download.proxmox.com",
            "download.cdn.proxmox.com",
            "in.as.cdn.proxmox.com"
        ],
        cached: 3
    }
};
