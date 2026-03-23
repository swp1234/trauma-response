// Trauma Response Test - Fight, Flight, Freeze, or Fawn?
// 8 questions, 4 trauma response types
// Dimensions: hypervigilance, emotional_regulation, dissociation, boundaries, resilience

const QUESTIONS = [
    { id: 0, icon: '\u{1F6A8}', questionKey: 'question.0', options: ['question.0a', 'question.0b', 'question.0c', 'question.0d'] },
    { id: 1, icon: '\u{1F4A2}', questionKey: 'question.1', options: ['question.1a', 'question.1b', 'question.1c', 'question.1d'] },
    { id: 2, icon: '\u{1F465}', questionKey: 'question.2', options: ['question.2a', 'question.2b', 'question.2c', 'question.2d'] },
    { id: 3, icon: '\u{1F3E2}', questionKey: 'question.3', options: ['question.3a', 'question.3b', 'question.3c', 'question.3d'] },
    { id: 4, icon: '\u{1F494}', questionKey: 'question.4', options: ['question.4a', 'question.4b', 'question.4c', 'question.4d'] },
    { id: 5, icon: '\u{23F0}', questionKey: 'question.5', options: ['question.5a', 'question.5b', 'question.5c', 'question.5d'] },
    { id: 6, icon: '\u{1F30A}', questionKey: 'question.6', options: ['question.6a', 'question.6b', 'question.6c', 'question.6d'] },
    { id: 7, icon: '\u{1F30C}', questionKey: 'question.7', options: ['question.7a', 'question.7b', 'question.7c', 'question.7d'] }
];

// Type indices: 0=Fight, 1=Flight, 2=Freeze, 3=Fawn
// Dimension scores: [hypervigilance, emotional_regulation, dissociation, boundaries, resilience]
const SCORE_MAP = {
    '0a': { type: [3,0,0,0], dim: [3,0,0,2,0] },
    '0b': { type: [0,3,0,0], dim: [2,0,0,0,1] },
    '0c': { type: [0,0,3,0], dim: [0,0,3,0,0] },
    '0d': { type: [0,0,0,3], dim: [0,1,0,0,2] },

    '1a': { type: [3,0,0,0], dim: [2,0,0,3,0] },
    '1b': { type: [0,3,0,0], dim: [2,1,0,0,0] },
    '1c': { type: [0,0,3,0], dim: [0,0,3,0,1] },
    '1d': { type: [0,0,0,3], dim: [0,0,0,0,3] },

    '2a': { type: [3,0,0,0], dim: [3,0,0,2,0] },
    '2b': { type: [0,3,0,0], dim: [2,0,1,0,0] },
    '2c': { type: [0,0,3,0], dim: [0,0,3,1,0] },
    '2d': { type: [0,0,0,3], dim: [1,1,0,0,2] },

    '3a': { type: [3,0,0,0], dim: [2,0,0,3,0] },
    '3b': { type: [0,3,0,0], dim: [3,0,0,0,0] },
    '3c': { type: [0,0,3,0], dim: [0,0,3,0,0] },
    '3d': { type: [0,0,0,3], dim: [0,2,0,0,2] },

    '4a': { type: [3,0,0,0], dim: [3,0,0,2,0] },
    '4b': { type: [0,3,0,0], dim: [2,0,1,0,0] },
    '4c': { type: [0,0,3,0], dim: [0,0,3,0,0] },
    '4d': { type: [0,0,0,3], dim: [0,1,0,0,3] },

    '5a': { type: [3,0,0,0], dim: [3,0,0,2,0] },
    '5b': { type: [0,3,0,0], dim: [2,0,1,0,1] },
    '5c': { type: [0,0,3,0], dim: [0,0,3,0,0] },
    '5d': { type: [0,0,0,3], dim: [0,2,0,0,2] },

    '6a': { type: [3,0,0,0], dim: [2,0,0,3,0] },
    '6b': { type: [0,3,0,0], dim: [3,0,0,0,0] },
    '6c': { type: [0,0,3,0], dim: [0,0,3,0,1] },
    '6d': { type: [0,0,0,3], dim: [0,1,0,0,3] },

    '7a': { type: [3,0,0,0], dim: [3,0,0,2,0] },
    '7b': { type: [0,3,0,0], dim: [2,0,1,0,0] },
    '7c': { type: [0,0,3,0], dim: [0,0,3,0,0] },
    '7d': { type: [0,0,0,3], dim: [0,2,0,0,2] }
};

const TRAUMA_TYPES = {
    fight: {
        id: 'fight',
        emoji: '\u{2694}\u{FE0F}',
        nameKey: 'type.fight.name',
        taglineKey: 'type.fight.tagline',
        descKey: 'type.fight.description',
        traitsKeys: ['type.fight.trait1', 'type.fight.trait2', 'type.fight.trait3'],
        tipKey: 'type.fight.tip',
        color: '#ef4444'
    },
    flight: {
        id: 'flight',
        emoji: '\u{1F3C3}',
        nameKey: 'type.flight.name',
        taglineKey: 'type.flight.tagline',
        descKey: 'type.flight.description',
        traitsKeys: ['type.flight.trait1', 'type.flight.trait2', 'type.flight.trait3'],
        tipKey: 'type.flight.tip',
        color: '#f59e0b'
    },
    freeze: {
        id: 'freeze',
        emoji: '\u{1F9CA}',
        nameKey: 'type.freeze.name',
        taglineKey: 'type.freeze.tagline',
        descKey: 'type.freeze.description',
        traitsKeys: ['type.freeze.trait1', 'type.freeze.trait2', 'type.freeze.trait3'],
        tipKey: 'type.freeze.tip',
        color: '#6366f1'
    },
    fawn: {
        id: 'fawn',
        emoji: '\u{1F98C}',
        nameKey: 'type.fawn.name',
        taglineKey: 'type.fawn.tagline',
        descKey: 'type.fawn.description',
        traitsKeys: ['type.fawn.trait1', 'type.fawn.trait2', 'type.fawn.trait3'],
        tipKey: 'type.fawn.tip',
        color: '#10b981'
    }
};

const TYPE_ORDER = ['fight', 'flight', 'freeze', 'fawn'];
const DIMENSION_KEYS = ['hypervigilance', 'emotional_regulation', 'dissociation', 'boundaries', 'resilience'];

class TraumaResponseApp {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.typeScores = [0, 0, 0, 0];
        this.dimScores = [0, 0, 0, 0, 0];
        this.resultType = null;
        this.init();
    }

    async init() {
        if (window.i18n) {
            await window.i18n.init();
        }

        this.bindEvents();
        this.initTheme();
        this.hideLoader();

        if (typeof DailyStreak !== 'undefined') { DailyStreak.init(); }
        if (typeof GameAchievements !== 'undefined') { GameAchievements.init(); }
        if (typeof GameAds !== 'undefined') { GameAds.init(); }
        if (typeof Haptic !== 'undefined') { Haptic.init(); }

        if (typeof gtag === 'function') {
            gtag('event', 'page_view', { page_title: 'Trauma Response Test' });
        }
    }

    bindEvents() {
        const startBtn = document.getElementById('start-btn');
        if (startBtn) startBtn.addEventListener('click', () => this.startQuiz());

        const retryBtn = document.getElementById('retry-btn');
        if (retryBtn) retryBtn.addEventListener('click', () => this.restart());

        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) themeToggle.addEventListener('click', () => this.toggleTheme());

        const langToggle = document.getElementById('lang-toggle');
        const langMenu = document.getElementById('lang-menu');
        if (langToggle && langMenu) {
            langToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                langMenu.classList.toggle('hidden');
            });
            document.querySelectorAll('.lang-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    const lang = btn.getAttribute('data-lang');
                    if (window.i18n) window.i18n.setLanguage(lang);
                    langMenu.classList.add('hidden');
                });
            });
            document.addEventListener('click', () => langMenu.classList.add('hidden'));
        }

        document.getElementById('share-kakao')?.addEventListener('click', () => this.shareKakao());
        document.getElementById('share-twitter')?.addEventListener('click', () => this.shareTwitter());
        document.getElementById('share-facebook')?.addEventListener('click', () => this.shareFacebook());
        document.getElementById('share-copy')?.addEventListener('click', () => this.shareCopy());
    }

    hideLoader() {
        const loader = document.getElementById('app-loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => loader.style.display = 'none', 400);
            }, 600);
        }
    }

    initTheme() {
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            const toggle = document.getElementById('theme-toggle');
            if (toggle) toggle.textContent = '\u{2600}';
        }
    }

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const toggle = document.getElementById('theme-toggle');
        if (current === 'light') {
            document.documentElement.removeAttribute('data-theme');
            if (toggle) toggle.textContent = '\u{1F319}';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            if (toggle) toggle.textContent = '\u{2600}';
            localStorage.setItem('theme', 'light');
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const screen = document.getElementById(screenId);
        if (screen) screen.classList.add('active');
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.answers = [];
        this.typeScores = [0, 0, 0, 0];
        this.dimScores = [0, 0, 0, 0, 0];
        this.showScreen('question-screen');
        this.renderQuestion();

        if (typeof gtag === 'function') {
            gtag('event', 'quiz_start', { event_category: 'trauma_response' });
        }
    }

    renderQuestion() {
        const q = QUESTIONS[this.currentQuestion];
        const t = window.i18n ? window.i18n.t.bind(window.i18n) : (k) => k;

        const fill = document.getElementById('progress-fill');
        if (fill) fill.style.width = ((this.currentQuestion / 8) * 100) + '%';

        const counter = document.getElementById('q-current');
        if (counter) counter.textContent = this.currentQuestion + 1;

        const icon = document.getElementById('question-icon');
        if (icon) icon.textContent = q.icon;

        const text = document.getElementById('question-text');
        if (text) text.textContent = t(q.questionKey);

        const container = document.getElementById('options-container');
        if (!container) return;
        container.innerHTML = '';

        const labels = ['A', 'B', 'C', 'D'];
        q.options.forEach((optKey, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = '<span class="option-label">' + labels[idx] + '</span><span class="option-text">' + t(optKey) + '</span>';
            btn.addEventListener('click', () => this.selectOption(q.id, idx, btn));
            container.appendChild(btn);
        });
    }

    selectOption(questionId, optionIdx, btn) {
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        const scoreKey = questionId + String.fromCharCode(97 + optionIdx);
        const scoreData = SCORE_MAP[scoreKey];
        if (scoreData) {
            for (let i = 0; i < 4; i++) this.typeScores[i] += scoreData.type[i];
            for (let i = 0; i < 5; i++) this.dimScores[i] += scoreData.dim[i];
        }

        this.answers.push({ question: questionId, option: optionIdx });

        setTimeout(() => {
            this.currentQuestion++;
            if (this.currentQuestion < 8) {
                this.renderQuestion();
            } else {
                this.showAnalyzing();
            }
        }, 400);
    }

    showAnalyzing() {
        this.showScreen('analyzing-screen');

        const fill = document.getElementById('analyzing-fill');
        const percent = document.getElementById('analyzing-percent');
        const detail = document.getElementById('analyzing-detail');
        const t = window.i18n ? window.i18n.t.bind(window.i18n) : (k) => k;

        const steps = [
            { pct: 25, key: 'analyzing.scanning' },
            { pct: 50, key: 'analyzing.mapping' },
            { pct: 75, key: 'analyzing.integrating' },
            { pct: 100, key: 'analyzing.complete' }
        ];

        let step = 0;
        const interval = setInterval(() => {
            if (step >= steps.length) {
                clearInterval(interval);
                setTimeout(() => this.showResult(), 400);
                return;
            }
            if (fill) fill.style.width = steps[step].pct + '%';
            if (percent) percent.textContent = steps[step].pct + '%';
            if (detail) detail.textContent = t(steps[step].key);
            step++;
        }, 500);
    }

    calculateResult() {
        let maxScore = -1;
        let maxIdx = 0;
        for (let i = 0; i < 4; i++) {
            if (this.typeScores[i] > maxScore) {
                maxScore = this.typeScores[i];
                maxIdx = i;
            }
        }
        return TRAUMA_TYPES[TYPE_ORDER[maxIdx]];
    }

    getNormalizedDimensions() {
        const maxPossible = 24;
        return this.dimScores.map(s => Math.min(100, Math.round((s / maxPossible) * 100)));
    }

    drawRadarChart() {
        const canvas = document.getElementById('radar-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const t = window.i18n ? window.i18n.t.bind(window.i18n) : (k) => k;

        const w = canvas.width;
        const h = canvas.height;
        const cx = w / 2;
        const cy = h / 2;
        const radius = Math.min(cx, cy) - 40;
        const dims = this.getNormalizedDimensions();
        const labels = DIMENSION_KEYS.map(k => t('metric.' + k));
        const n = 5;
        const angleStep = (2 * Math.PI) / n;
        const startAngle = -Math.PI / 2;

        ctx.clearRect(0, 0, w, h);

        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        const gridColor = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
        const labelColor = isLight ? '#666680' : '#8a8aaa';

        for (let level = 1; level <= 4; level++) {
            const r = (radius / 4) * level;
            ctx.beginPath();
            for (let i = 0; i <= n; i++) {
                const angle = startAngle + angleStep * i;
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        for (let i = 0; i < n; i++) {
            const angle = startAngle + angleStep * i;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        ctx.beginPath();
        for (let i = 0; i < n; i++) {
            const angle = startAngle + angleStep * i;
            const r = (dims[i] / 100) * radius;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(225,29,72,0.2)';
        ctx.fill();
        ctx.strokeStyle = '#e11d48';
        ctx.lineWidth = 2;
        ctx.stroke();

        for (let i = 0; i < n; i++) {
            const angle = startAngle + angleStep * i;
            const r = (dims[i] / 100) * radius;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = '#e11d48';
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }

        ctx.font = '12px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillStyle = labelColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let i = 0; i < n; i++) {
            const angle = startAngle + angleStep * i;
            const labelR = radius + 24;
            const x = cx + labelR * Math.cos(angle);
            const y = cy + labelR * Math.sin(angle);
            ctx.fillText(labels[i], x, y);
        }
    }

    showResult() {
        this.resultType = this.calculateResult();
        const type = this.resultType;
        const t = window.i18n ? window.i18n.t.bind(window.i18n) : (k) => k;

        this.showScreen('result-screen');

        const emoji = document.getElementById('result-emoji');
        if (emoji) emoji.textContent = type.emoji;

        const title = document.getElementById('result-title');
        if (title) title.textContent = t(type.nameKey);

        const tagline = document.getElementById('result-tagline');
        if (tagline) tagline.textContent = '"' + t(type.taglineKey) + '"';

        const desc = document.getElementById('result-description');
        if (desc) desc.textContent = t(type.descKey);

        this.drawRadarChart();

        const dims = this.getNormalizedDimensions();
        const metricsGrid = document.getElementById('metrics-grid');
        if (metricsGrid) {
            metricsGrid.innerHTML = '';
            DIMENSION_KEYS.forEach((key, idx) => {
                const row = document.createElement('div');
                row.className = 'metric-row';
                row.innerHTML = '<span class="metric-label">' + t('metric.' + key) + '</span>' +
                    '<div class="metric-bar-bg"><div class="metric-bar-fill" style="background:' + type.color + '"></div></div>' +
                    '<span class="metric-value">' + dims[idx] + '</span>';
                metricsGrid.appendChild(row);
                setTimeout(() => {
                    row.querySelector('.metric-bar-fill').style.width = dims[idx] + '%';
                }, 100);
            });
        }

        const percentile = document.getElementById('percentile-stat');
        const pctVal = Math.floor(Math.random() * 20) + 15;
        if (percentile) {
            percentile.innerHTML = t('result.percentile').replace('{pct}', '<strong>' + pctVal + '%</strong>').replace('{type}', t(type.nameKey));
        }

        const traitsList = document.getElementById('traits-list');
        if (traitsList) {
            traitsList.innerHTML = '';
            type.traitsKeys.forEach(key => {
                const tag = document.createElement('span');
                tag.className = 'trait-tag';
                tag.textContent = t(key);
                traitsList.appendChild(tag);
            });
        }

        const copingText = document.getElementById('coping-tip-text');
        if (copingText) copingText.textContent = t(type.tipKey);

        this.spawnConfetti();

        if (typeof gtag === 'function') {
            gtag('event', 'quiz_complete', {
                event_category: 'trauma_response',
                event_label: type.id,
                value: 1
            });
        }
    }

    spawnConfetti() {
        const container = document.getElementById('confetti-container');
        if (!container) return;
        container.innerHTML = '';
        const colors = ['#e11d48', '#fb7185', '#fda4af', '#be123c', '#f43f5e', '#ffe4e6', '#881337'];
        for (let i = 0; i < 40; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDelay = (Math.random() * 2) + 's';
            piece.style.animationDuration = (2 + Math.random() * 2) + 's';
            container.appendChild(piece);
        }
    }

    restart() {
        this.showScreen('intro-screen');
        window.scrollTo(0, 0);
    }

    getShareText() {
        if (!this.resultType) return '';
        const t = window.i18n ? window.i18n.t.bind(window.i18n) : (k) => k;
        return t('share.text').replace('{type}', t(this.resultType.nameKey));
    }

    getShareUrl() {
        return 'https://dopabrain.com/trauma-response/';
    }

    shareKakao() {
        const text = this.getShareText();
        const url = 'https://sharer.kakao.com/talk/friends/picker/link?url=' + encodeURIComponent(this.getShareUrl()) + '&text=' + encodeURIComponent(text);
        window.open(url, '_blank', 'width=600,height=400');
    }

    shareTwitter() {
        const text = this.getShareText();
        const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(this.getShareUrl());
        window.open(url, '_blank', 'width=600,height=400');
    }

    shareFacebook() {
        const url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.getShareUrl());
        window.open(url, '_blank', 'width=600,height=400');
    }

    async shareCopy() {
        const text = this.getShareText() + ' ' + this.getShareUrl();
        try {
            await navigator.clipboard.writeText(text);
            const btn = document.getElementById('share-copy');
            if (btn) {
                const original = btn.textContent;
                btn.textContent = '\u{2705} Copied!';
                setTimeout(() => btn.textContent = original, 2000);
            }
        } catch (e) {
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TraumaResponseApp();
});
