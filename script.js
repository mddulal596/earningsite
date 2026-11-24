const earningSites = [
    {
        name: "FaucetPay",
        category: "faucet",
        subCategory: "WALLET & EARN",
        iconText: "FP",
        iconBg: "#1D4ED8",
        badge1: { text: "Trusted", type: "orange", icon: "fa-shield-halved" },
        badge2: { text: "TOP", type: "contest", icon: "fa-circle" },
        tagline: "RECEIVE INSTANT CRYPTO PAYMENTS",
        highlight: "Microwallet & Earnings Platform",
        features: [
            "PTC, Offerwall, Surveys, Games",
            "Instant crypto payouts & faucet list"
        ],
        tips: "Most faucet sites pay directly to FaucetPay with zero or very low fees. Create your account first and copy your deposit addresses.",
        metaLabel: "WITHDRAW TO:",
        metaValue: "Crypto Wallet",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://faucetpay.io/r/541045"
    },
    {
        name: "Exmacoin",
        category: "faucet",
        subCategory: "FAUCET & PTC",
        iconText: "E",
        iconBg: "#2563EB",
        badge1: { text: "Trusted", type: "orange", icon: "fa-shield-halved" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "COMPLETE TASKS & RECEIVE REWARDS",
        highlight: "Claim Faucet, watch videos to earn!",
        features: [
            "PTC ads - Offers - Videos - Slinks",
            "Withdraw from just $0.01 - Instant"
        ],
        tips: "Complete daily PTC ads and shortlinks first to reach the $0.01 minimum withdrawal in minutes.",
        metaLabel: "WITHDRAW TO:",
        metaValue: "FaucetPay",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://exmacoin.com/?r=mddulalhosen0"
    },
    {
        name: "FireFaucet",
        category: "faucet",
        subCategory: "FAUCET & PTC",
        iconText: "F",
        iconBg: "#1E293B",
        badge1: { text: "TOP", type: "orange", icon: "fa-fire" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "WEEKLY $100 ACTIVITY CONTEST LIVE!",
        highlight: "Auto Faucet - Earn Automatically!",
        features: [
            "PTC ads - Offers - Slinks - Tasks",
            "Boost your level and earn more!"
        ],
        tips: "Collect ACP (Auto Claim Points) from daily bonuses and shortlinks, then run the Auto Faucet in the background.",
        metaLabel: "PAYMENT PROOF:",
        metaValue: "+ $30",
        metaIcon: "fa-coins",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://firefaucet.win/ref/417972?s=mddulal596"
    },
    {
        name: "VieFaucet",
        category: "faucet",
        subCategory: "FAUCET & PTC",
        iconText: "VF",
        iconBg: "#0D9488",
        badge1: { text: "TOP", type: "orange", icon: "fa-fire" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "HIGHEST FAUCET CLAIM REWARDS!",
        highlight: "Claim faucet every 4 minutes!",
        features: [
            "View ads & complete shortlinks",
            "Daily bonus, challenges & offers"
        ],
        tips: "Claim the faucet every 4 minutes and complete daily challenges for extra token multipliers.",
        metaLabel: "WITHDRAW TO:",
        metaValue: "FaucetPay",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://viefaucet.com?r=662650f146e395ce252b194e"
    },
    {
        name: "RewardJoy",
        category: "offers",
        subCategory: "PTC & OFFERS",
        iconText: "RJ",
        iconBg: "#D97706",
        badge1: { text: "HOT", type: "orange", icon: "fa-fire" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "5 CONTESTS • $12,000 TOTAL PRIZES",
        highlight: "Get up to $150 per offer - Join!",
        features: [
            "Earn up to $0.03 per PTC ad view",
            "LVL up & boost reward up to 15%"
        ],
        tips: "Focus on high-paying Offerwalls and daily PTC ads to level up your account for permanent reward boosts.",
        metaLabel: "WITHDRAW TO:",
        metaValue: "FaucetPay",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://www.rewardjoy.com/?r=mddulal596"
    },
    {
        name: "Rewards Official Bot",
        category: "offers",
        subCategory: "TELEGRAM BOT",
        iconText: "TG",
        iconBg: "#0284C7",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "EARN REWARDS ON TELEGRAM!",
        highlight: "Complete simple bot tasks & bonuses",
        features: [
            "Fast task verification & updates",
            "Direct Telegram bot access"
        ],
        tips: "Open the bot in Telegram, click Start, and check daily tasks for quick rewards.",
        metaLabel: "PLATFORM:",
        metaValue: "Telegram",
        metaIcon: "fa-paper-plane",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://t.me/rewardsofficials_bot"
    },
    {
        name: "Feyorra",
        category: "faucet",
        subCategory: "FAUCET & EARN",
        iconText: "FY",
        iconBg: "#7E22CE",
        badge1: { text: "Trusted", type: "orange", icon: "fa-shield-halved" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "CLAIM FREE CRYPTO FAUCET!",
        highlight: "Earn crypto with faucet & tasks",
        features: [
            "Easy claims & quick rewards",
            "Multiple earning options available"
        ],
        tips: "Use the faucet regularly and withdraw directly to your FaucetPay wallet.",
        metaLabel: "WITHDRAW TO:",
        metaValue: "Crypto / FP",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://feyorra.top/?r=764701"
    },
    {
        name: "EarnFreeCoin",
        category: "faucet",
        subCategory: "FAUCET & PTC",
        iconText: "EF",
        iconBg: "#15803D",
        badge1: { text: "TOP", type: "orange", icon: "fa-fire" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "EARN FREE COINS EVERY DAY!",
        highlight: "Faucet claims, PTC & shortlinks",
        features: [
            "Low minimum withdrawal limit",
            "Bonus rewards for active users"
        ],
        tips: "Check the PTC section daily for easy clicks with no timer hassle.",
        metaLabel: "WITHDRAW TO:",
        metaValue: "Crypto / FP",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://earnfreecoin.com/ref/9HKE54"
    },
    {
        name: "LTCLux",
        category: "faucet",
        subCategory: "LTC FAUCET",
        iconText: "LL",
        iconBg: "#1E40AF",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "CLAIM FREE LITECOIN (LTC)!",
        highlight: "Hourly LTC faucet & bonus rolls",
        features: [
            "Verify email & claim bonus rolls",
            "Multiply your rewards easily"
        ],
        tips: "Verify your email right after signing up to get free bonus rolls!",
        metaLabel: "CLAIMABLE:",
        metaValue: "Free LTC",
        metaIcon: "fa-coins",
        btnIcon: "fa-gift",
        url: "https://ltclux.io/?ref=mddulal596"
    },
    {
        name: "LTCPool",
        category: "faucet",
        subCategory: "LTC EARNING",
        iconText: "LP",
        iconBg: "#0369A1",
        badge1: { text: "Trusted", type: "orange", icon: "fa-shield-halved" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "LITECOIN REWARDS & TASKS!",
        highlight: "Earn LTC through claims & offers",
        features: [
            "Smooth interface & fast payouts",
            "Referral commission rewards"
        ],
        tips: "Combine hourly claims with offerwall tasks to reach withdrawal faster.",
        metaLabel: "REWARD IN:",
        metaValue: "Litecoin (LTC)",
        metaIcon: "fa-coins",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://ltcpool.io/?ref=2N5PWMRG"
    },
    {
        name: "FaucetArena",
        category: "faucet",
        subCategory: "FAUCET & GAMES",
        iconText: "FA",
        iconBg: "#B91C1C",
        badge1: { text: "TOP", type: "orange", icon: "fa-fire" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "FAUCET, PTC & MINI GAMES!",
        highlight: "Claim rewards & complete tasks",
        features: [
            "PTC ads, offers & daily bonuses",
            "Simple and fast earning system"
        ],
        tips: "Log in daily to keep your bonus streak active.",
        metaLabel: "WITHDRAW TO:",
        metaValue: "FaucetPay",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://faucetarena.com/signup?ref=75354ead"
    },
    {
        name: "LTCMiner",
        category: "watch",
        subCategory: "LTC MINING",
        iconText: "LM",
        iconBg: "#0F172A",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "LITECOIN MINING & REWARDS!",
        highlight: "Start earning LTC effortlessly",
        features: [
            "Track your LTC balance easily",
            "Bonus & referral opportunities"
        ],
        tips: "Enter your LTC address from FaucetPay to start tracking your free plan.",
        metaLabel: "COIN:",
        metaValue: "Litecoin (LTC)",
        metaIcon: "fa-coins",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://ltcminer.com/831970"
    },
    {
        name: "DropDoge",
        category: "faucet",
        subCategory: "DOGE FAUCET",
        iconText: "DD",
        iconBg: "#A16207",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "CLAIM FREE DOGECOIN (DOGE)!",
        highlight: "Hourly Doge faucet & bonus rolls",
        features: [
            "Boost rewards with points & rolls",
            "Regular claims & contests"
        ],
        tips: "Claim every hour and save your points for higher-tier rolls.",
        metaLabel: "CLAIMABLE:",
        metaValue: "Free DOGE",
        metaIcon: "fa-coins",
        btnIcon: "fa-gift",
        url: "https://dropdoge.io/?ref=mddulalhosen0"
    },
    {
        name: "PepeLux",
        category: "faucet",
        subCategory: "PEPE FAUCET",
        iconText: "PL",
        iconBg: "#166534",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "CLAIM FREE PEPE TOKENS!",
        highlight: "Faucet claims & bonus rolls",
        features: [
            "Verify email & get bonus rolls",
            "Multiply rewards up to high tiers"
        ],
        tips: "Verify your email to unlock extra free PEPE rolls.",
        metaLabel: "CLAIMABLE:",
        metaValue: "Free PEPE",
        metaIcon: "fa-coins",
        btnIcon: "fa-gift",
        url: "https://pepelux.io/?ref=mddulal596"
    },
    {
        name: "DropBNB",
        category: "faucet",
        subCategory: "BNB FAUCET",
        iconText: "DB",
        iconBg: "#CA8A04",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "CLAIM FREE BNB REWARDS!",
        highlight: "Hourly BNB faucet & bonus rolls",
        features: [
            "Claim free BNB & boost points",
            "Easy and fast claim system"
        ],
        tips: "Claim hourly and participate in weekly contests for extra BNB.",
        metaLabel: "CLAIMABLE:",
        metaValue: "Free BNB",
        metaIcon: "fa-coins",
        btnIcon: "fa-gift",
        url: "https://dropbnb.io/?ref=mddulalhosen0"
    },
    {
        name: "FreeSolana",
        category: "faucet",
        subCategory: "SOLANA FAUCET",
        iconText: "FS",
        iconBg: "#7C3AED",
        badge1: { text: "Trusted", type: "orange", icon: "fa-shield-halved" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "CLAIM FREE SOLANA (SOL)!",
        highlight: "Earn free SOL with claims & tasks",
        features: [
            "Simple claim process for beginners",
            "Instant referral link support"
        ],
        tips: "Complete quick faucet claims and shortlinks to stack free SOL.",
        metaLabel: "CLAIMABLE:",
        metaValue: "Free SOL",
        metaIcon: "fa-coins",
        btnIcon: "fa-arrow-up-right-from-square",
        url: "https://freesolana.top/?r=212925"
    }
];

let currentCategory = 'all';
let favorites = JSON.parse(localStorage.getItem('earningSiteFavs')) || [];

function updateFavCounts() {
    document.getElementById('favCount').textContent = favorites.length;
    document.getElementById('menuFavCount').textContent = favorites.length;
}

function toggleFavorite(siteName) {
    if (favorites.includes(siteName)) {
        favorites = favorites.filter(name => name !== siteName);
    } else {
        favorites.push(siteName);
    }
    localStorage.setItem('earningSiteFavs', JSON.stringify(favorites));
    updateFavCounts();
    filterSites();
}

function renderCards(sites) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    if (sites.length === 0) {
        container.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; padding: 32px; color: #71717A; font-size: 13px;">No matching sites found.</p>`;
        return;
    }

    sites.forEach(site => {
        const badge1Class = site.badge1.type === 'orange' ? 'pill-orange' : 'pill-purple';
        const badge2Class = site.badge2.type === 'contest' ? 'pill-status' : 'pill-purple';
        const isFav = favorites.includes(site.name);

        const cardHTML = `
            <article class="site-card">
                <div>
                    <div class="card-top">
                        <div class="card-brand">
                            <div class="card-avatar" style="background-color: ${site.iconBg};">
                                ${site.iconText}
                            </div>
                            <div class="card-title-wrap">
                                <h3>${site.name}</h3>
                                <span>${site.subCategory}</span>
                            </div>
                        </div>
                        <div class="card-badges">
                            <span class="pill-badge ${badge1Class}">
                                <i class="fa-solid ${site.badge1.icon}"></i> ${site.badge1.text}
                            </span>
                            <span class="pill-badge ${badge2Class}">
                                <i class="fa-solid ${site.badge2.icon}" style="font-size: 6px;"></i> ${site.badge2.text}
                            </span>
                        </div>
                    </div>

                    <div class="card-subline">
                        <i class="fa-solid fa-circle-check"></i> ${site.tagline}
                    </div>

                    <div class="card-promo">
                        <span>💰</span> ${site.highlight}
                    </div>

                    <ul class="card-points">
                        <li><i class="fa-solid fa-bolt"></i> ${site.features[0]}</li>
                        <li><i class="fa-solid fa-rocket"></i> ${site.features[1]}</li>
                    </ul>
                </div>

                <div>
                    <div class="card-tools">
                        <button type="button" class="tool-btn" onclick="openTipsModal('${site.name}')">
                            <i class="fa-solid fa-circle-info"></i> Tips
                        </button>
                        <button type="button" class="tool-btn ${isFav ? 'saved' : ''}" onclick="toggleFavorite('${site.name}')">
                            <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i> ${isFav ? 'Saved' : 'Save'}
                        </button>
                    </div>

                    <div class="card-bottom">
                        <div class="payout-box">
                            <span class="payout-label">${site.metaLabel}</span>
                            <span class="payout-pill">
                                <i class="fa-solid ${site.metaIcon}"></i> ${site.metaValue}
                            </span>
                        </div>
                        <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="action-btn primary-action">
                            EARN NOW <i class="fa-solid ${site.btnIcon}"></i>
                        </a>
                    </div>
                </div>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

function setCategory(category, btnElement) {
    currentCategory = category;
    document.querySelectorAll('.chip-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    filterSites();
}

function menuFilter(category) {
    toggleMenu();
    const buttons = document.querySelectorAll('.chip-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });
    currentCategory = category;
    filterSites();
}

function filterSites() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filtered = earningSites.filter(site => {
        const matchesCategory =
            currentCategory === 'all' ||
            (currentCategory === 'favorites' && favorites.includes(site.name)) ||
            site.category === currentCategory;

        const matchesSearch =
            site.name.toLowerCase().includes(searchText) ||
            site.highlight.toLowerCase().includes(searchText) ||
            site.subCategory.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });
    renderCards(filtered);
}

function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('active');
    document.getElementById('menuOverlay').classList.toggle('active');
}

function openTipsModal(siteName) {
    const site = earningSites.find(s => s.name === siteName);
    if (!site) return;
    document.getElementById('tipsModalTitle').textContent = `${site.name} - Quick Tips`;
    document.getElementById('tipsModalBody').innerHTML = `
        <p><b>Category:</b> ${site.subCategory}</p>
        <p><b>Withdraw:</b> ${site.metaValue}</p>
        <div class="info-panel" style="margin: 10px 0 0;">
            <p>💡 <b>Tip:</b> ${site.tips}</p>
        </div>
    `;
    document.getElementById('tipsModalLink').href = site.url;
    document.getElementById('tipsModal').classList.add('active');
}

function openGiftModal() {
    document.getElementById('giftModal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

updateFavCounts();
renderCards(earningSites);
