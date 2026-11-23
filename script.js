// এখানে আপনি নতুন সাইট যোগ করতে বা আপনার রেফারেল লিংক পরিবর্তন করতে পারবেন
const earningSites = [
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
        url: "https://example.com/exmacoin"
    },
    {
        name: "Earnbitmoon",
        category: "faucet",
        subCategory: "FAUCET & PTC",
        iconText: "EBM",
        iconBg: "#F5B041",
        badge1: { text: "TOP", type: "orange", icon: "fa-fire" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "1,300,000+ USERS • $800K+ PAID OUT",
        highlight: "Claim Faucet Every 5 Minutes",
        features: [
            "PTC ads - Offers - Slinks - Tasks",
            "Join $1,000 Offerwall Contest!"
        ],
        metaLabel: "PAYMENT PROOF:",
        metaValue: "+ $5.85",
        metaIcon: "fa-coins",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://example.com/earnbitmoon"
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
        url: "https://example.com/firefaucet"
    },
    {
        name: "ClipCoin",
        category: "watch",
        subCategory: "WATCH & EARN",
        iconText: "▶",
        iconBg: "#6C3483",
        badge1: { text: "Trusted", type: "orange", icon: "fa-shield-halved" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "WATCH VIDEOS & COMPLETE TASKS!",
        highlight: "Earn money by watching videos!",
        features: [
            "Boost your income up to + 50%",
            "Minimum withdraw - just $0.10!"
        ],
        metaLabel: "WITHDRAW TO:",
        metaValue: "FaucetPay",
        metaIcon: "fa-wallet",
        btnIcon: "fa-arrow-up-right-from-square",
        btnStyle: "dark",
        url: "https://clipcoin.pro/u/lzqxv"
    },
    {
        name: "Pick Sites",
        category: "faucet",
        subCategory: "FAUCET NETWORK",
        iconText: "P",
        iconBg: "#154360",
        badge1: { text: "10 GIFTS", type: "orange", icon: "fa-gift" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "GET PAID FOR SURVEYS AND OFFERS!",
        highlight: "Claim up to $10 per faucet claim!",
        features: [
            "Verify Email & Get 10 Bonus Rolls",
            "Multiply rewards up to 4,850x"
        ],
        metaLabel: "CLAIMABLE:",
        metaValue: "10 Coins",
        metaIcon: "fa-circle-dollar-to-slot",
        btnIcon: "fa-gift",
        btnStyle: "dark",
        url: "https://example.com/picksites"
    },
    {
        name: "FMatrix",
        category: "faucet",
        subCategory: "FAUCET NETWORK",
        iconText: "FM",
        iconBg: "#117A65",
        badge1: { text: "12 Coins", type: "orange", icon: "fa-coins" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "GET PAID FOR SURVEYS AND OFFERS!",
        highlight: "Claim up to $25 per faucet claim!",
        features: [
            "Weekly wagering contest - live!",
            "Level up & earn higher rewards"
        ],
        metaLabel: "CLAIMABLE:",
        metaValue: "12 Coins",
        metaIcon: "fa-circle-dollar-to-slot",
        btnIcon: "fa-gift",
        btnStyle: "dark",
        url: "https://example.com/fmatrix"
    },
    {
        name: "TronClick",
        category: "faucet",
        subCategory: "FAUCET & GAMES",
        iconText: "TC",
        iconBg: "#2ECC71",
        badge1: { text: "GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "NEW", type: "purple", icon: "fa-bolt" },
        tagline: "GET PAID FOR SURVEYS AND OFFERS!",
        highlight: "Claim up to $8 in TRX every hour",
        features: [
            "Verify Email & Get 10 Bonus Rolls",
            "Multiply rewards up to 4,850x"
        ],
        metaLabel: "WITHDRAW TO:",
        metaValue: "MEXC / FP",
        metaIcon: "fa-wallet",
        btnIcon: "fa-gift",
        btnStyle: "dark",
        url: "https://example.com/tronclick"
    },
    {
        name: "TimeBucks",
        category: "offers",
        subCategory: "PTC & TASKS",
        iconText: "TB",
        iconBg: "#27AE60",
        badge1: { text: "$1 GIFT", type: "orange", icon: "fa-gift" },
        badge2: { text: "Contest", type: "contest", icon: "fa-circle" },
        tagline: "EARN BY COMPLETING SIMPLE TASKS!",
        highlight: "Sign Up & Verify Bonus up to $1",
        features: [
            "PTC ads - Offerwalls - Games",
            "Daily Streak - Up to $11 per day!"
        ],
        metaLabel: "WITHDRAW TO:",
        metaValue: "AirTM / Crypto",
        metaIcon: "fa-wallet",
        btnIcon: "fa-gift",
        btnStyle: "dark",
        url: "https://example.com/timebucks"
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
