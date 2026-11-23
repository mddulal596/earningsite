// এখানে সাইটের নাম, তথ্য এবং আপনার রেফারেল লিংকগুলো যুক্ত করা হয়েছে
const earningSites = [
    {
        name: "FaucetPay",
        category: "faucet",
        subCategory: "WALLET & EARN",
        iconText: "FP",
        iconBg: "#1E88E5",
        badge1: { text: "Trusted", type: "orange", icon: "fa-shield-halved" },
        badge2: { text: "TOP", type: "contest", icon: "fa-circle" },
        tagline: "RECEIVE INSTANT CRYPTO PAYMENTS",
        highlight: "Microwallet & Earnings Platform",
        features: [
            "PTC, Offerwall, Surveys, Games",
            "Instant crypto payouts & faucet list"
        ],
        metaLabel: "WITHDRAW TO:",
        metaValue: "Crypto Wallet",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "brown",
        url: "https://faucetpay.io/r/541045"
    },
    {
        name: "Exmacoin",
        category: "faucet",
        subCategory: "FAUCET & PTC",
        iconText: "E",
        iconBg: "#1877F2",
        badge1: { text: "Trusted", type: "orange", icon: "fa-shield-halved" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "COMPLETE TASKS & RECEIVE REWARDS",
        highlight: "Claim Faucet, watch videos to earn!",
        features: [
            "PTC ads - Offers - Videos - Slinks",
            "Withdraw from just $0.01 - Instant"
        ],
        metaLabel: "WITHDRAW TO:",
        metaValue: "FaucetPay",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "brown",
        url: "https://exmacoin.com/?r=mddulalhosen0"
    },
    {
        name: "FireFaucet",
        category: "faucet",
        subCategory: "FAUCET & PTC",
        iconText: "F",
        iconBg: "#212F3D",
        badge1: { text: "TOP", type: "orange", icon: "fa-fire" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "WEEKLY $100 ACTIVITY CONTEST LIVE!",
        highlight: "Auto Faucet - Earn Automatically!",
        features: [
            "PTC ads - Offers - Slinks - Tasks",
            "Boost your level and earn more!"
        ],
        metaLabel: "PAYMENT PROOF:",
        metaValue: "+ $30",
        metaIcon: "fa-coins",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://firefaucet.win/ref/417972?s=mddulal596"
    },
    {
        name: "VieFaucet",
        category: "faucet",
        subCategory: "FAUCET & PTC",
        iconText: "VF",
        iconBg: "#16A085",
        badge1: { text: "TOP", type: "orange", icon: "fa-fire" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "HIGHEST FAUCET CLAIM REWARDS!",
        highlight: "Claim faucet every 4 minutes!",
        features: [
            "View ads & complete shortlinks",
            "Daily bonus, challenges & offers"
        ],
        metaLabel: "WITHDRAW TO:",
        metaValue: "FaucetPay",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://viefaucet.com?r=662650f146e395ce252b194e"
    },
    {
        name: "RewardJoy",
        category: "offers",
        subCategory: "PTC & OFFERS",
        iconText: "RJ",
        iconBg: "#E67E22",
        badge1: { text: "HOT", type: "orange", icon: "fa-fire" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "5 CONTESTS • $12,000 TOTAL PRIZES",
        highlight: "Get up to $150 per offer - Join!",
        features: [
            "Earn up to $0.03 per PTC ad view",
            "LVL up & boost reward up to 15%"
        ],
        metaLabel: "WITHDRAW TO:",
        metaValue: "FaucetPay",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://www.rewardjoy.com/?r=mddulalhosen6"
    },
    {
        name: "Rewards Official Bot",
        category: "offers",
        subCategory: "TELEGRAM BOT",
        iconText: "TG",
        iconBg: "#0088CC",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "EARN REWARDS ON TELEGRAM!",
        highlight: "Complete simple bot tasks & bonuses",
        features: [
            "Fast task verification & updates",
            "Direct Telegram bot access"
        ],
        metaLabel: "PLATFORM:",
        metaValue: "Telegram",
        metaIcon: "fa-paper-plane",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://t.me/rewardsofficials_bot"
    },
    {
        name: "Feyorra",
        category: "faucet",
        subCategory: "FAUCET & EARN",
        iconText: "FY",
        iconBg: "#8E44AD",
        badge1: { text: "Trusted", type: "orange", icon: "fa-shield-halved" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "CLAIM FREE CRYPTO FAUCET!",
        highlight: "Earn crypto with faucet & tasks",
        features: [
            "Easy claims & quick rewards",
            "Multiple earning options available"
        ],
        metaLabel: "WITHDRAW TO:",
        metaValue: "Crypto / FP",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://feyorra.top/?r=764701"
    },
    {
        name: "EarnFreeCoin",
        category: "faucet",
        subCategory: "FAUCET & PTC",
        iconText: "EF",
        iconBg: "#27AE60",
        badge1: { text: "TOP", type: "orange", icon: "fa-fire" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "EARN FREE COINS EVERY DAY!",
        highlight: "Faucet claims, PTC & shortlinks",
        features: [
            "Low minimum withdrawal limit",
            "Bonus rewards for active users"
        ],
        metaLabel: "WITHDRAW TO:",
        metaValue: "Crypto / FP",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://earnfreecoin.com/ref/9HKE54"
    },
    {
        name: "LTCLux",
        category: "faucet",
        subCategory: "LTC FAUCET",
        iconText: "LL",
        iconBg: "#345D9D",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "CLAIM FREE LITECOIN (LTC)!",
        highlight: "Hourly LTC faucet & bonus rolls",
        features: [
            "Verify email & claim bonus rolls",
            "Multiply your rewards easily"
        ],
        metaLabel: "CLAIMABLE:",
        metaValue: "Free LTC",
        metaIcon: "fa-coins",
        btnIcon: "fa-gift",
        btnStyle: "dark",
        url: "https://ltclux.io/?ref=mddulal596"
    },
    {
        name: "LTCPool",
        category: "faucet",
        subCategory: "LTC EARNING",
        iconText: "LP",
        iconBg: "#2980B9",
        badge1: { text: "Trusted", type: "orange", icon: "fa-shield-halved" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "LITECOIN REWARDS & TASKS!",
        highlight: "Earn LTC through claims & offers",
        features: [
            "Smooth interface & fast payouts",
            "Referral commission rewards"
        ],
        metaLabel: "REWARD IN:",
        metaValue: "Litecoin (LTC)",
        metaIcon: "fa-coins",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://ltcpool.io/?ref=2N5PWMRG"
    },
    {
        name: "FaucetArena",
        category: "faucet",
        subCategory: "FAUCET & GAMES",
        iconText: "FA",
        iconBg: "#C0392B",
        badge1: { text: "TOP", type: "orange", icon: "fa-fire" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "FAUCET, PTC & MINI GAMES!",
        highlight: "Claim rewards & complete tasks",
        features: [
            "PTC ads, offers & daily bonuses",
            "Simple and fast earning system"
        ],
        metaLabel: "WITHDRAW TO:",
        metaValue: "FaucetPay",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://faucetarena.com/signup?ref=75354ead"
    },
    {
        name: "LTCMiner",
        category: "watch",
        subCategory: "LTC MINING",
        iconText: "LM",
        iconBg: "#1B4F72",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "LITECOIN MINING & REWARDS!",
        highlight: "Start earning LTC effortlessly",
        features: [
            "Track your LTC balance easily",
            "Bonus & referral opportunities"
        ],
        metaLabel: "COIN:",
        metaValue: "Litecoin (LTC)",
        metaIcon: "fa-coins",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://ltcminer.com/831970"
    },
    {
        name: "DropDoge",
        category: "faucet",
        subCategory: "DOGE FAUCET",
        iconText: "DD",
        iconBg: "#BA9F33",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "CLAIM FREE DOGECOIN (DOGE)!",
        highlight: "Hourly Doge faucet & bonus rolls",
        features: [
            "Boost rewards with points & rolls",
            "Regular claims & contests"
        ],
        metaLabel: "CLAIMABLE:",
        metaValue: "Free DOGE",
        metaIcon: "fa-coins",
        btnIcon: "fa-gift",
        btnStyle: "dark",
        url: "https://dropdoge.io/?ref=mddulalhosen0"
    },
    {
        name: "PepeLux",
        category: "faucet",
        subCategory: "PEPE FAUCET",
        iconText: "PL",
        iconBg: "#2E7D32",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "CLAIM FREE PEPE TOKENS!",
        highlight: "Faucet claims & bonus rolls",
        features: [
            "Verify email & get bonus rolls",
            "Multiply rewards up to high tiers"
        ],
        metaLabel: "CLAIMABLE:",
        metaValue: "Free PEPE",
        metaIcon: "fa-coins",
        btnIcon: "fa-gift",
        btnStyle: "dark",
        url: "https://pepelux.io/?ref=mddulal596"
    },
    {
        name: "DropBNB",
        category: "faucet",
        subCategory: "BNB FAUCET",
        iconText: "DB",
        iconBg: "#F3BA2F",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "CLAIM FREE BNB REWARDS!",
        highlight: "Hourly BNB faucet & bonus rolls",
        features: [
            "Claim free BNB & boost points",
            "Easy and fast claim system"
        ],
        metaLabel: "CLAIMABLE:",
        metaValue: "Free BNB",
        metaIcon: "fa-coins",
        btnIcon: "fa-gift",
        btnStyle: "dark",
        url: "https://dropbnb.io/?ref=mddulalhosen0"
    },
    {
        name: "FreeSolana",
        category: "faucet",
        subCategory: "SOLANA FAUCET",
        iconText: "FS",
        iconBg: "#9945FF",
        badge1: { text: "Trusted", type: "orange", icon: "fa-shield-halved" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "CLAIM FREE SOLANA (SOL)!",
        highlight: "Earn free SOL with claims & tasks",
        features: [
            "Simple claim process for beginners",
            "Instant referral link support"
        ],
        metaLabel: "CLAIMABLE:",
        metaValue: "Free SOL",
        metaIcon: "fa-coins",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://freesolana.top/?r=212925"
    }
];

let currentCategory = 'all';

function renderCards(sites) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    sites.forEach(site => {
        const badge1Class = site.badge1.type === 'orange' ? 'badge-orange' : 'badge-purple';
        const badge2Class = site.badge2.type === 'contest' ? 'badge-contest' : 'badge-purple';
        const btnClass = site.btnStyle === 'brown' ? 'earn-btn brown' : 'earn-btn';

        const cardHTML = `
            <div class="card">
                <div>
                    <div class="card-header">
                        <div class="site-info">
                            <div class="site-icon" style="background-color: ${site.iconBg};">
                                ${site.iconText}
                            </div>
                            <div class="site-title">
                                <h3>${site.name}</h3>
                                <span>${site.subCategory}</span>
                            </div>
                        </div>
                        <div class="badges">
                            <span class="badge ${badge1Class}">
                                <i class="fa-solid ${site.badge1.icon}"></i> ${site.badge1.text}
                            </span>
                            <span class="badge ${badge2Class}">
                                <i class="fa-solid ${site.badge2.icon}" style="font-size: 6px;"></i> ${site.badge2.text}
                            </span>
                        </div>
                    </div>

                    <div class="tagline">
                        <i class="fa-solid fa-circle-check"></i> ${site.tagline}
                    </div>

                    <div class="highlight-box">
                        <span>💰</span> ${site.highlight}
                    </div>

                    <ul class="features-list">
                        <li><i class="fa-solid fa-bolt"></i> ${site.features[0]}</li>
                        <li><i class="fa-solid fa-rocket"></i> ${site.features[1]}</li>
                    </ul>
                </div>

                <div class="card-footer">
                    <div class="meta-info">
                        <span class="meta-label">${site.metaLabel}</span>
                        <span class="meta-pill">
                            <i class="fa-solid ${site.metaIcon}"></i> ${site.metaValue}
                        </span>
                    </div>
                    <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="${btnClass}">
                        EARN NOW <i class="fa-solid ${site.btnIcon}"></i>
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

function setCategory(category, btnElement) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    filterSites();
}

function filterSites() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filtered = earningSites.filter(site => {
        const matchesCategory = currentCategory === 'all' || site.category === currentCategory;
        const matchesSearch = site.name.toLowerCase().includes(searchText) || 
                              site.highlight.toLowerCase().includes(searchText) ||
                              site.subCategory.toLowerCase().includes(searchText);
        return matchesCategory && matchesSearch;
    });
    renderCards(filtered);
}

// পেজ লোড হলে কার্ডগুলো দেখাবে
renderCards(earningSites);
