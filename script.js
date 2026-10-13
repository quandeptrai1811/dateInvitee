/**
 * A SPECIAL DATE FOR 20/10 - ROMANTIC INVITATION WEB PAGE
 * Vanilla JavaScript • GitHub Pages Ready
 * Features:
 *   - Notification on RSVP Acceptance (Email via FormSubmit.co, Telegram Bot, Discord Webhook)
 *   - Real Romantic Audio Player (Satie, Debussy, Pachelbel, Ambient Chimes, Custom MP3)
 *   - Multi-language (VI / EN)
 *   - Light / Dark Romantic Theme
 *   - Interactive Wax Seal & Envelope
 *   - Stage 1: Delivered Surprise Gift (12:00 - 16:00)
 *   - Stage 2: Heading Home at 17:00 & Traffic Jam Survival
 *   - Stage 3: Dinner at Pizza 4P's (19:30) with Suggested Menu
 */

// =============================================================================
// 1. CONFIGURATION (ĐIỀN THÔNG TIN CỦA BẠN TẠI ĐÂY)
// =============================================================================
const DATE_CONFIG = {
  senderName: "Anh",
  receiverName: "Em",
  
  targetYear: 2026,
  targetMonth: 10,
  targetDay: 20,
  targetHour: 12,  // 12:00 bắt đầu khung giờ giao quà bất ngờ
  targetMinute: 0,

  eventTitle: "Buổi Hẹn Hò 20/10 & Pizza 4P's Cùng Anh 💕",
  eventDescription: "Lịch trình 20/10: 12:00 - 16:00 Quà bất ngờ giao tận nơi • 17:00 Bắt đầu về vượt kẹt xe • 19:30 Bữa tối tại Pizza 4P's Trần Ngọc Diện (Thảo Điền).",
  eventLocation: "Pizza 4P's Trần Ngọc Diện, Thảo Điền, TP. Thủ Đức",
  googleMapsUrl: "https://www.google.com/maps/place/Pizza+4P's+Tran+Ngoc+Dien/@10.8063087,106.741081,17z/data=!3m1!4b1!4m6!3m5!1s0x317527003ccc9943:0x81a908b7a352d9fe!8m2!3d10.8063087!4d106.741081!16s%2Fg%2F11yrbyddxk?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",

  // ===========================================================================
  // 🔔 CẤU HÌNH NHẬN THÔNG BÁO KHI NÀNG BẤM "ĐỒNG Ý":
  // ===========================================================================
  
  // CÁCH 1: NHẬN QUA EMAIL (Hoàn toàn miễn phí, không cần đăng ký tài khoản)
  // Email nhận thông báo:
  notificationEmail: "m.quan1811@gmail.com",

  // CÁCH 2: NHẬN QUA TELEGRAM BOT (Tin nhắn báo rung điện thoại ngay lập tức)
  // Nếu có bot Telegram, điền Bot Token và Chat ID của bạn vào đây (nếu không dùng thì để trống):
  telegramBotToken: "", 
  telegramChatId: "",

  // CÁCH 3: NHẬN QUA DISCORD WEBHOOK (Báo về kênh riêng trên Discord)
  discordWebhookUrl: ""
};

// =============================================================================
// 2. I18N DICTIONARY (VIỆT NAM & ENGLISH)
// =============================================================================
const I18N = {
  vi: {
    envelopeHint: "Chạm vào con dấu sáp để mở thư gửi em",
    tagline: "An Exclusive Invitation",
    mainTitle: "Dành Riêng Cho Em",
    subDate: "Chủ Nhật • 20 Tháng 10",
    badgePill: "20 • 10 • Vietnamese Women's Day",
    heroHeadline: "Hẹn Hò Cùng Anh",
    heroSubline: '"Mỗi khoảnh khắc đẹp đẽ nhất hôm nay, anh đều muốn dành tặng riêng em."',
    countdownTitle: "Đếm ngược đến giờ hẹn",
    daysLabel: "Ngày",
    hoursLabel: "Giờ",
    minutesLabel: "Phút",
    secondsLabel: "Giây",
    scrollCue: "Khám phá lịch trình",
    itineraryEyebrow: "The Itinerary",
    itineraryTitle: "Hành Trình Ngày 20/10",
    itineraryDesc: "Anh đã chuẩn bị sẵn mọi điều, em chỉ cần mang theo một nụ cười thật tươi.",
    
    // Stage 1: Delivered Surprise Gift
    afternoonTag: "Stage 1 • Một Tí Bất Ngờ Nhỏ",
    afternoonTitle: "Món Quà Bí Mật Đang Trên Đường Đến",
    afternoonSummary: "Một chút bất ngờ nhỏ đầu ngày: Trong khoảng thời gian từ 12:00 đến 16:00, một món quà bí mật được chuẩn bị riêng sẽ được giao đến tận tay em. Em chỉ cần giữ điện thoại để nhận quà bất ngờ nhé!",
    mysteryTeaserTitle: "Gợi ý món quà giao đến",
    mysteryTeaserSub: "Chạm để hé lộ điều bất ngờ...",
    revealBtn: "Hé lộ",
    hideBtn: "Thu lại",
    secretHeading: "Bất Ngờ Giao Tận Tay Em:",
    secretItem1: "💐 <strong>Món quà ngọt ngào:</strong> Bó hoa tone màu em yêu thích cùng chiếc thiệp viết tay chân thành.",
    secretItem2: "📦 <strong>Thời gian giao:</strong> Shipper sẽ liên hệ trong khung giờ 12:00 - 16:00 này.",
    secretItem3: "💌 <strong>Nhiệm vụ của nàng:</strong> Nhận quà, mỉm cười thật tươi và mở chiếc thiệp bí mật ra xem nhé!",
    secretNote: '"Mở đầu cho một ngày 20/10 thật nhiều niềm vui của em!"',
    afternoonMetaPickup: "📍 Địa điểm: Giao đến tận nơi của nàng",
    afternoonMetaDress: "📱 Lưu ý: Giữ chuông điện thoại trong khoảng 12:00 - 16:00",

    // Stage 2: Heading Home at 17:00
    trafficTag: "Stage 2 • Bắt Đầu Về Lúc 17h",
    trafficTitle: "Bắt Đầu Về & Ác Mộng Kẹt Xe Tan Tầm 🚗💨",
    trafficSummary: 'Bắt đầu xuất phát về lúc 17h! Đây là "thử thách lớn nhất ngày 20/10": Vượt qua biển người xe cộ kẹt cứng giờ tan tầm để về nhà nghỉ ngơi, tắm rửa thơm tho và khoác lên chiếc váy xinh đẹp nhất trước giờ hẹn tối!',
    trafficFunTitle: "Chiến Thuật Vượt Ùn Tắc:",
    trafficFunDesc: "Bật playlist nhạc yêu thích, kiên nhẫn từng mét đường. Về đến nhà là được thư thả chuẩn bị, không vội vàng!",
    trafficMetaTip: "💡 Tips: Nghỉ ngơi dưỡng sức, sạc đầy pin điện thoại sẵn sàng cho buổi tối",

    // Stage 3: Night Dinner at Pizza 4P's with Suggested Menu
    nightTag: "Stage 3 • Bữa Tối Lãng Mạn (19:30)",
    nightTitle: "Dạ Tiệc Pizza 4P's Trần Ngọc Diện",
    nightSummary: "Một bàn tiệc ấm cúng giữa không gian sân vườn rợp bóng cây xanh mát và ánh đèn dịu ngọt tại Pizza 4P's Thảo Điền. Nơi có phô mai Burrata tươi béo ngậy, pizza nướng củi thơm lừng và những câu chuyện chỉ của hai chúng ta.",
    mapBtn: "Mở Google Maps ↗",

    // Menu Gợi Ý
    menuHeading: "Menu Gợi Ý Cho Bữa Tối",
    dish1Title: "1 Phần Salad Trái Cây với Burrata",
    dish1Desc: "Phô mai Burrata tươi béo ngậy kết hợp trái cây theo mùa thanh mát",
    dish2Title: "1 Pizza Half-Half Nướng Củi",
    dish2Desc: "2 nửa hương vị đặc trưng nóng hổi kết hợp theo sở thích",
    dish3Title: "1 Đĩa Mì Ý Thơm Lừng",
    dish3Desc: "Sợi pasta tươi dai mềm hòa quyện nước sốt đậm đà",
    dish4Title: "1 Tí Tráng Miệng Ngọt Ngào",
    dish4Desc: "Món bánh tráng miệng dịu êm khép lại một ngày trọn vẹn",

    hlBurrataTitle: "Burrata trứ danh & Pizza nướng củi",
    hlBurrataSub: "Hương vị tinh tế hòa quyện trong từng món ăn",
    hlWineTitle: "Rượu vang & Trò chuyện ấm cúng",
    hlWineSub: "Nâng ly chúc mừng ngày đặc biệt của người phụ nữ anh thương",
    hlAmbienceTitle: "Không gian sân vườn Thảo Điền",
    hlAmbienceSub: "Yên bình, lãng mạn và tách biệt khỏi ồn ào phố thị",
    nightMetaTime: "⏰ Thời gian hẹn: Đúng 19:30 có mặt tại bàn",
    nightMetaDress: "🌹 Trang phục: Chiếc váy xinh em tự tin nhất",

    // Notes
    notesTitle: "Một Chút Lưu Ý Nhỏ",
    dressCodeTitle: "Gợi ý trang phục",
    dressCodeDesc: "Màu trắng kem, be, hồng pastel hoặc chiếc váy em yêu thích và tự tin nhất.",
    mustBringTitle: "Điều cần mang theo",
    mustBringDesc: "Chỉ cần một tâm hồn thật thoải mái và nụ cười rạng rỡ của em. Mọi việc còn lại cứ để anh lo!",

    // RSVP & Notification
    rsvpTitle: "Em Sẽ Đi Cùng Anh Chứ?",
    rsvpSubtitle: "Hãy xác nhận để anh được đồng hành cùng công chúa trong ngày 20/10 nhé!",
    rsvpNotePlaceholder: "Gửi kèm một lời nhắn nhỏ cho anh (tùy chọn)...",
    acceptBtnText: "Dạ, Em Đồng Ý! 💕",
    acceptedBtnText: "Đã Đồng Ý 💕",
    calendarBtnText: "📅 Thêm vào Lịch",
    statusHeading: "Anh Đã Ghi Nhận Lời Đồng Ý!",
    statusDesc: "Hẹn gặp cô gái xinh đẹp nhất của anh vào ngày 20/10 nhé. Nhận quà chiều 12h-16h, vượt kẹt xe 17h và bữa tối 19:30 tại Pizza 4P's!",
    notifySending: "Đang gửi thông báo đến anh...",
    notifySent: "Đã gửi thông báo thành công đến anh! 💕",
    footerSign: "Made with all my love • Happy Vietnamese Women's Day 20/10",
    reopenBtn: "💌 Đóng & xem lại phong bì thư",
    soundOn: "Nhạc: Bật",
    soundOff: "Nhạc: Tắt",
    toastAccept: "Cảm ơn em! Anh rất mong chờ đến ngày 20/10!",
    toastCalendar: "Đã tạo file lịch hẹn (.ics)! 🗓️"
  },

  en: {
    envelopeHint: "Tap the wax seal to open your letter",
    tagline: "An Exclusive Invitation",
    mainTitle: "Especially For You",
    subDate: "Sunday • October 20th",
    badgePill: "October 20th • Special Romance Date",
    heroHeadline: "A Date With Me",
    heroSubline: '"Every beautiful moment today is crafted just for you."',
    countdownTitle: "Countdown to our rendezvous",
    daysLabel: "Days",
    hoursLabel: "Hours",
    minutesLabel: "Mins",
    secondsLabel: "Secs",
    scrollCue: "Explore the itinerary",
    itineraryEyebrow: "The Itinerary",
    itineraryTitle: "Our Romantic Journey",
    itineraryDesc: "Everything is prepared with love. You just need to bring your sweetest smile.",
    
    // Stage 1: Delivered Surprise Gift
    afternoonTag: "Stage 1 • A Little Sweet Surprise",
    afternoonTitle: "A Secret Gift is on the Way",
    afternoonSummary: "A little sweet surprise to begin: Between 12:00 PM and 4:00 PM, a secret gift prepared just for you will be delivered right to your door. Just keep your phone nearby to receive your special package!",
    mysteryTeaserTitle: "Hint about the delivered gift",
    mysteryTeaserSub: "Tap to uncover the surprise...",
    revealBtn: "Reveal",
    hideBtn: "Collapse",
    secretHeading: "Special Delivery For You:",
    secretItem1: "💐 <strong>A sweet gift:</strong> Beautiful flowers in your favorite pastel tones with a handwritten letter.",
    secretItem2: "📦 <strong>Delivery window:</strong> The courier will arrive between 12:00 PM and 4:00 PM.",
    secretItem3: "💌 <strong>Her only mission:</strong> Receive the package, smile warmly, and open the secret card!",
    secretNote: '"To kick off a joyful October 20th full of smiles!"',
    afternoonMetaPickup: "📍 Destination: Delivered right to your doorstep",
    afternoonMetaDress: "📱 Note: Keep your phone on ring between 12:00 - 16:00",

    // Stage 2: Heading Home at 17:00
    trafficTag: "Stage 2 • Heading Home at 17:00",
    trafficTitle: "Heading Home & The Rush Hour Traffic 🚗💨",
    trafficSummary: 'Heading home at 17:00 (5:00 PM)! The ultimate test of October 20th: Navigating through rush hour traffic to get home, freshen up, and slip into your most gorgeous dress before our dinner date!',
    trafficFunTitle: "Traffic Survival Tactic:",
    trafficFunDesc: "Turn on your favorite playlist, breathe easy inch by inch. Once home, relax and get ready without any rush!",
    trafficMetaTip: "💡 Tip: Rest up, fully charge your phone, and get ready for tonight",

    // Stage 3: Night Dinner at Pizza 4P's with Suggested Menu
    nightTag: "Stage 3 • Romantic Dinner (19:30)",
    nightTitle: "Dinner at Pizza 4P's Tran Ngoc Dien",
    nightSummary: "A warm, candlelit table surrounded by lush greenery and romantic fairy lights in Thao Dien. Featuring artisanal fresh Burrata cheese, gourmet wood-fired pizza, and stories meant only for the two of us.",
    mapBtn: "Open Google Maps ↗",

    // Menu Suggestions
    menuHeading: "Suggested Dinner Menu",
    dish1Title: "1 Fruit Salad with Fresh Burrata",
    dish1Desc: "Creamy artisanal burrata paired with fresh seasonal fruits",
    dish2Title: "1 Wood-Fired Half-Half Pizza",
    dish2Desc: "Two signature artisanal flavors combined to our liking",
    dish3Title: "1 Classic Savory Pasta",
    dish3Desc: "Al dente fresh pasta tossed in rich, flavorful sauce",
    dish4Title: "A Sweet Delicate Dessert",
    dish4Desc: "A delightful sweet treat to conclude a magical day",

    hlBurrataTitle: "Signature Burrata & Wood-Fired Pizza",
    hlBurrataSub: "Harmonious culinary art in every single slice",
    hlWineTitle: "Fine Wine & Intimate Talks",
    hlWineSub: "A toast celebrating the most precious lady in my life",
    hlAmbienceTitle: "Thao Dien Garden Ambience",
    hlAmbienceSub: "Peaceful, serene, away from city noise",
    nightMetaTime: "⏰ Reservation: 19:30 (7:30 PM) sharp at table",
    nightMetaDress: "🌹 Attire: The dress you feel most confident in",

    // Notes
    notesTitle: "A Few Gentle Notes",
    dressCodeTitle: "Dress code suggestions",
    dressCodeDesc: "Cream white, beige, pastel blush, or your absolute favorite dress.",
    mustBringTitle: "Things to bring",
    mustBringDesc: "Just bring your happy heart and your radiant smile. Let me take care of everything else!",

    // RSVP & Notification
    rsvpTitle: "Will You Join Me?",
    rsvpSubtitle: "Please confirm so I can have the privilege of taking my princess out on October 20th!",
    rsvpNotePlaceholder: "Send a little sweet note for him (optional)...",
    acceptBtnText: "Yes, I'd Love To! 💕",
    acceptedBtnText: "Accepted 💕",
    calendarBtnText: "📅 Add to Calendar",
    statusHeading: "Your RSVP is Confirmed!",
    statusDesc: "Can't wait to see my gorgeous girl on October 20th! Gift delivery 12:00-16:00, heading home at 17:00, and dinner at 19:30 at Pizza 4P's!",
    notifySending: "Sending notification to him...",
    notifySent: "Notification successfully sent to him! 💕",
    footerSign: "Made with all my love • Happy Vietnamese Women's Day 20/10",
    reopenBtn: "💌 Reclose & view envelope",
    soundOn: "Music: On",
    soundOff: "Music: Off",
    toastAccept: "Thank you my love! Counting down every second!",
    toastCalendar: "Calendar event (.ics) saved! 🗓️"
  }
};

let currentLang = localStorage.getItem('date_lang') || 'vi';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('date_lang', lang);
  document.documentElement.lang = lang;

  const dict = I18N[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  const langIndicator = document.getElementById('lang-indicator');
  if (langIndicator) {
    langIndicator.textContent = lang.toUpperCase();
  }

  const soundLabel = document.getElementById('sound-label');
  const soundToggle = document.getElementById('sound-toggle');
  if (soundLabel && soundToggle) {
    const isPlaying = soundToggle.classList.contains('playing');
    soundLabel.textContent = isPlaying ? dict.soundOn : dict.soundOff;
  }
}

// =============================================================================
// 3. THEME TOGGLE (LIGHT / DARK)
// =============================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('date_theme') || 'light';
  applyTheme(savedTheme);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('date_theme', theme);

  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// =============================================================================
// 4. AMBIENT CANVAS PARTICLES (Cánh hoa rơi & Bụi sao)
// =============================================================================
class AmbientCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.petalCount = 26;
    this.sparkleCount = 35;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    for (let i = 0; i < this.petalCount; i++) {
      this.particles.push(new Petal(this.width, this.height));
    }
    for (let i = 0; i < this.sparkleCount; i++) {
      this.particles.push(new Sparkle(this.width, this.height));
    }

    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (let p of this.particles) {
      p.update(this.width, this.height);
      p.draw(this.ctx);
    }
    requestAnimationFrame(() => this.animate());
  }
}

class Petal {
  constructor(w, h) {
    this.reset(w, h, true);
  }

  reset(w, h, initial = false) {
    this.x = Math.random() * w;
    this.y = initial ? Math.random() * h : -20;
    this.size = 10 + Math.random() * 12;
    this.speedY = 0.6 + Math.random() * 0.9;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.swing = Math.random() * 2;
    this.swingSpeed = 0.015 + Math.random() * 0.02;
    this.opacity = 0.35 + Math.random() * 0.45;
    
    const shades = [
      'rgba(235, 130, 150, ',
      'rgba(244, 160, 175, ',
      'rgba(219, 112, 135, ',
      'rgba(255, 195, 205, '
    ];
    this.colorBase = shades[Math.floor(Math.random() * shades.length)];
  }

  update(w, h) {
    this.y += this.speedY;
    this.x += Math.sin(this.swing) * 0.8 + this.speedX;
    this.swing += this.swingSpeed;
    this.rotation += this.rotationSpeed;

    if (this.y > h + 30 || this.x < -30 || this.x > w + 30) {
      this.reset(w, h);
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = this.colorBase + this.opacity + ')';

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, this.size / 2, this.size);
    ctx.bezierCurveTo(0, this.size * 0.8, -this.size / 2, this.size * 0.5, 0, 0);
    ctx.fill();
    ctx.restore();
  }
}

class Sparkle {
  constructor(w, h) {
    this.reset(w, h, true);
  }

  reset(w, h, initial = false) {
    this.x = Math.random() * w;
    this.y = initial ? Math.random() * h : Math.random() * h;
    this.size = 1.2 + Math.random() * 2.2;
    this.opacity = 0.1 + Math.random() * 0.6;
    this.pulseSpeed = 0.015 + Math.random() * 0.03;
    this.color = Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(255, 255, 255, ';
  }

  update(w, h) {
    this.opacity += Math.sin(Date.now() * this.pulseSpeed * 0.05) * 0.015;
    if (this.opacity < 0.05) this.opacity = 0.05;
    if (this.opacity > 0.8) this.opacity = 0.8;
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = this.color + this.opacity + ')';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// =============================================================================
// 5. ROMANTIC AUDIO MANAGER
// =============================================================================
class RomanticAudioManager {
  constructor() {
    this.audioEl = document.getElementById('bg-audio');
    this.volumeSlider = document.getElementById('volume-slider');
    this.isPlaying = false;
    this.currentMode = 'gymnopedie';
    this.chimeTimer = null;
    this.audioCtx = null;

    this.tracks = {
      gymnopedie: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Gymnopedie_No_1.ogg",
      clair: "https://upload.wikimedia.org/wikipedia/commons/2/25/Debussy_-_Clair_de_Lune.ogg",
      canon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Pachelbel%27s_Canon.ogg"
    };

    this.init();
  }

  init() {
    if (this.audioEl) {
      this.audioEl.volume = 0.35;
      this.audioEl.addEventListener('error', () => {
        if (this.currentMode === 'gymnopedie' && !this.audioEl.src.includes('archive.org')) {
          this.audioEl.src = "https://archive.org/download/GymnopedieNo1/GymnopedieNo1.mp3";
          if (this.isPlaying) this.audioEl.play().catch(() => {});
        }
      });
    }

    if (this.volumeSlider) {
      this.volumeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (this.audioEl) this.audioEl.volume = val;
      });
    }
  }

  startAmbientChimes() {
    this.stopAmbientChimes();
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!this.audioCtx) this.audioCtx = new AudioContext();
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

    const notes = [329.63, 369.99, 415.30, 493.88, 554.37, 659.25, 739.99];

    const playRandomChime = () => {
      if (this.currentMode !== 'chimes' || !this.isPlaying) return;

      const freq = notes[Math.floor(Math.random() * notes.length)];
      const now = this.audioCtx.currentTime;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const vol = (this.volumeSlider ? parseFloat(this.volumeSlider.value) : 0.35) * 0.15;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(vol, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 4.6);

      const nextDelay = 3000 + Math.random() * 3000;
      this.chimeTimer = setTimeout(playRandomChime, nextDelay);
    };

    playRandomChime();
  }

  stopAmbientChimes() {
    if (this.chimeTimer) {
      clearTimeout(this.chimeTimer);
      this.chimeTimer = null;
    }
  }

  setTrack(trackKey, customFile = null) {
    this.currentMode = trackKey;
    this.stopAmbientChimes();

    if (trackKey === 'chimes') {
      if (this.audioEl) this.audioEl.pause();
      if (this.isPlaying) this.startAmbientChimes();
      return;
    }

    if (trackKey === 'custom' && customFile) {
      const fileUrl = URL.createObjectURL(customFile);
      if (this.audioEl) {
        this.audioEl.src = fileUrl;
        if (this.isPlaying) this.audioEl.play().catch(() => {});
      }
      return;
    }

    if (this.tracks[trackKey] && this.audioEl) {
      this.audioEl.src = this.tracks[trackKey];
      if (this.isPlaying) {
        this.audioEl.play().catch(() => {});
      }
    }
  }

  play() {
    this.isPlaying = true;
    if (this.currentMode === 'chimes') {
      this.startAmbientChimes();
    } else if (this.audioEl) {
      this.audioEl.play().catch(err => {
        console.log("Audio autoplay prevented by browser until user gesture:", err);
      });
    }
  }

  pause() {
    this.isPlaying = false;
    this.stopAmbientChimes();
    if (this.audioEl) {
      this.audioEl.pause();
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

// =============================================================================
// 6. COUNTDOWN TIMER ĐẾN NGÀY 20/10 (12:00 TRƯA)
// =============================================================================
function initCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function update() {
    const now = new Date();
    let year = now.getFullYear();
    let target = new Date(year, DATE_CONFIG.targetMonth - 1, DATE_CONFIG.targetDay, DATE_CONFIG.targetHour, DATE_CONFIG.targetMinute, 0);

    if (now.getTime() > target.getTime() + 86400000) {
      target = new Date(year + 1, DATE_CONFIG.targetMonth - 1, DATE_CONFIG.targetDay, DATE_CONFIG.targetHour, DATE_CONFIG.targetMinute, 0);
    }

    const diff = target - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minutesEl.textContent = String(m).padStart(2, '0');
    secondsEl.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// =============================================================================
// 7. HEART CONFETTI EFFECT
// =============================================================================
function triggerHeartConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const hearts = [];
  const heartCount = 65;
  const colors = ['#e63946', '#ff4d6d', '#ff758f', '#ff8fa3', '#c9184a', '#d4af37'];

  for (let i = 0; i < heartCount; i++) {
    hearts.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 80,
      y: canvas.height / 2 + (Math.random() - 0.5) * 80,
      size: 14 + Math.random() * 22,
      vx: (Math.random() - 0.5) * 12,
      vy: -6 - Math.random() * 10,
      gravity: 0.28,
      rotation: Math.random() * Math.PI,
      vRotation: (Math.random() - 0.5) * 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: 0.008 + Math.random() * 0.012
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    for (let h of hearts) {
      if (h.alpha <= 0) continue;
      alive = true;

      h.x += h.vx;
      h.y += h.vy;
      h.vy += h.gravity;
      h.rotation += h.vRotation;
      h.alpha -= h.decay;

      ctx.save();
      ctx.translate(h.x, h.y);
      ctx.rotate(h.rotation);
      ctx.globalAlpha = Math.max(0, h.alpha);
      ctx.fillStyle = h.color;

      const s = h.size / 2;
      ctx.beginPath();
      ctx.moveTo(0, s / 4);
      ctx.quadraticCurveTo(0, -s, s, -s);
      ctx.quadraticCurveTo(2 * s, -s, 2 * s, s / 3);
      ctx.quadraticCurveTo(2 * s, 1.4 * s, 0, 2.2 * s);
      ctx.quadraticCurveTo(-2 * s, 1.4 * s, -2 * s, s / 3);
      ctx.quadraticCurveTo(-2 * s, -s, -s, -s);
      ctx.quadraticCurveTo(0, -s, 0, s / 4);
      ctx.fill();
      ctx.restore();
    }

    if (alive) {
      requestAnimationFrame(render);
    } else {
      canvas.remove();
    }
  }

  render();
}

// =============================================================================
// 8. TỰ ĐỘNG GỬI THÔNG BÁO VỀ EMAIL / TELEGRAM / DISCORD
// =============================================================================
async function sendAcceptanceNotification(customNote = "") {
  const feedbackEl = document.getElementById('notify-feedback-text');
  if (feedbackEl) feedbackEl.textContent = I18N[currentLang].notifySending;

  const nowStr = new Date().toLocaleString(currentLang === 'vi' ? 'vi-VN' : 'en-US');
  const noteContent = customNote.trim() || (currentLang === 'vi' ? '(Nàng không để lại lời nhắn, chỉ mỉm cười đồng ý 💕)' : '(No custom note, accepted with a sweet smile 💕)');

  let hasSent = false;

  // 1. GỬI VỀ EMAIL BẰNG FORMSUBMIT.CO
  if (DATE_CONFIG.notificationEmail && DATE_CONFIG.notificationEmail !== 'your-email@gmail.com') {
    try {
      const emailUrl = `https://formsubmit.co/ajax/${encodeURIComponent(DATE_CONFIG.notificationEmail)}`;
      const res = await fetch(emailUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `💖 [Date 20/10] ${DATE_CONFIG.receiverName} Đã Nhận Lời Hẹn Hò!`,
          "Người nhận lời": DATE_CONFIG.receiverName,
          "Lời nhắn từ nàng": noteContent,
          "Thời gian xác nhận": nowStr,
          "Lịch trình hẹn": "12:00 - 16:00 Giao quà • 17:00 Kẹt xe về • 19:30 Pizza 4P's Trần Ngọc Diện"
        })
      });
      if (res.ok) hasSent = true;
    } catch (e) {
      console.log("Email notification error:", e);
    }
  }

  // 2. GỬI VỀ TELEGRAM BOT (Nếu được cấu hình)
  if (DATE_CONFIG.telegramBotToken && DATE_CONFIG.telegramChatId) {
    try {
      const tgText = `💖 *[DATE 20/10]* Nàng đã nhận lời hẹn hò!\n\n` +
                     `💌 *Lời nhắn:* ${noteContent}\n` +
                     `⏰ *Thời gian:* ${nowStr}\n` +
                     `📍 *Bữa tối:* Pizza 4P's Trần Ngọc Diện (19:30)`;
      await fetch(`https://api.telegram.org/bot${DATE_CONFIG.telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: DATE_CONFIG.telegramChatId,
          text: tgText,
          parse_mode: 'Markdown'
        })
      });
      hasSent = true;
    } catch (e) {
      console.log("Telegram notification error:", e);
    }
  }

  // 3. GỬI VỀ DISCORD WEBHOOK (Nếu được cấu hình)
  if (DATE_CONFIG.discordWebhookUrl) {
    try {
      await fetch(DATE_CONFIG.discordWebhookUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `💖 **[DATE 20/10]** Nàng đã nhận lời hẹn hò!\n> 💌 *Lời nhắn:* "${noteContent}"\n> ⏰ *Thời gian:* ${nowStr}`
        })
      });
      hasSent = true;
    } catch (e) {
      console.log("Discord notification error:", e);
    }
  }

  if (feedbackEl) {
    feedbackEl.textContent = I18N[currentLang].notifySent;
  }
}

// =============================================================================
// 9. TẠO LỊCH HẸN (.ICS & GOOGLE CALENDAR)
// =============================================================================
function handleCalendarExport() {
  const year = DATE_CONFIG.targetYear;
  const month = String(DATE_CONFIG.targetMonth).padStart(2, '0');
  const day = String(DATE_CONFIG.targetDay).padStart(2, '0');
  
  const startIso = `${year}${month}${day}T120000`;
  const endIso = `${year}${month}${day}T213000`;

  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(DATE_CONFIG.eventTitle)}&dates=${startIso}/${endIso}&details=${encodeURIComponent(DATE_CONFIG.eventDescription)}&location=${encodeURIComponent(DATE_CONFIG.eventLocation)}`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Date Invitee//Romance 20-10//VI',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `SUMMARY:${DATE_CONFIG.eventTitle}`,
    `DESCRIPTION:${DATE_CONFIG.eventDescription}`,
    `LOCATION:${DATE_CONFIG.eventLocation}`,
    `DTSTART:${startIso}`,
    `DTEND:${endIso}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Hen-Ho-20-10-Pizza-4Ps.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(I18N[currentLang].toastCalendar);

  setTimeout(() => {
    const askMsg = currentLang === 'vi' 
      ? 'Bạn có muốn mở thêm sự kiện trên Google Calendar không?' 
      : 'Would you also like to open this event in Google Calendar?';
    if (confirm(askMsg)) {
      window.open(gcalUrl, '_blank');
    }
  }, 400);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500);
}

// =============================================================================
// 10. SETUP EVENT LISTENERS & INITIALIZATION
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  new AmbientCanvas('ambient-canvas');
  initTheme();
  applyLanguage(currentLang);

  const audioManager = new RomanticAudioManager();
  const soundToggle = document.getElementById('sound-toggle');
  const melodySelect = document.getElementById('melody-select');
  const customAudioInput = document.getElementById('custom-audio-input');

  function updateSoundButtonState(isPlaying) {
    if (!soundToggle) return;
    const soundLabel = document.getElementById('sound-label');
    if (isPlaying) {
      soundToggle.classList.add('playing');
      if (soundLabel) soundLabel.textContent = I18N[currentLang].soundOn;
    } else {
      soundToggle.classList.remove('playing');
      if (soundLabel) soundLabel.textContent = I18N[currentLang].soundOff;
    }
  }

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      const isPlaying = audioManager.toggle();
      updateSoundButtonState(isPlaying);
    });
  }

  if (melodySelect) {
    melodySelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      if (selected === 'custom') {
        if (customAudioInput) customAudioInput.click();
      } else {
        audioManager.setTrack(selected);
        if (!audioManager.isPlaying) {
          audioManager.play();
          updateSoundButtonState(true);
        }
      }
    });
  }

  if (customAudioInput) {
    customAudioInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        audioManager.setTrack('custom', file);
        audioManager.play();
        updateSoundButtonState(true);
        showToast(`Đã phát bài hát: ${file.name}`);
      }
    });
  }

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLang = currentLang === 'vi' ? 'en' : 'vi';
      applyLanguage(nextLang);
    });
  }

  const waxSealBtn = document.getElementById('wax-seal');
  const envelopeCard = document.getElementById('envelope-card');
  const envelopeStage = document.getElementById('envelope-stage');
  const mainContent = document.getElementById('main-content');
  const reopenBtn = document.getElementById('reopen-envelope-btn');

  function openEnvelope() {
    envelopeCard.classList.add('open-animation');

    if (!audioManager.isPlaying) {
      audioManager.play();
      updateSoundButtonState(true);
    }

    setTimeout(() => {
      envelopeStage.classList.add('opened');
      mainContent.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1100);
  }

  if (waxSealBtn) {
    waxSealBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openEnvelope();
    });
  }

  if (envelopeCard) {
    envelopeCard.addEventListener('click', () => {
      openEnvelope();
    });
  }

  if (reopenBtn) {
    reopenBtn.addEventListener('click', () => {
      envelopeStage.classList.remove('opened');
      envelopeCard.classList.remove('open-animation');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  initCountdown();

  const revealBtn = document.getElementById('reveal-surprise-btn');
  const mysterySecret = document.getElementById('mystery-secret');
  if (revealBtn && mysterySecret) {
    revealBtn.addEventListener('click', () => {
      mysterySecret.classList.toggle('hidden');
      if (!mysterySecret.classList.contains('hidden')) {
        revealBtn.textContent = I18N[currentLang].hideBtn;
        triggerHeartConfetti();
      } else {
        revealBtn.textContent = I18N[currentLang].revealBtn;
      }
    });
  }

  // RSVP (Nhận lời mời hẹn & Gửi thông báo tới chàng)
  const acceptBtn = document.getElementById('accept-btn');
  const rsvpStatus = document.getElementById('rsvp-status');
  const rsvpNoteInput = document.getElementById('rsvp-note-input');

  if (acceptBtn && rsvpStatus) {
    acceptBtn.addEventListener('click', () => {
      rsvpStatus.classList.remove('hidden');
      triggerHeartConfetti();
      acceptBtn.disabled = true;
      acceptBtn.style.opacity = '0.85';
      const btnText = acceptBtn.querySelector('.btn-text');
      if (btnText) btnText.textContent = I18N[currentLang].acceptedBtnText;
      showToast(I18N[currentLang].toastAccept);

      // Lấy lời nhắn của nàng (nếu có) và gửi thông báo
      const girlNote = rsvpNoteInput ? rsvpNoteInput.value : "";
      sendAcceptanceNotification(girlNote);
    });
  }

  const calendarBtn = document.getElementById('calendar-btn');
  if (calendarBtn) {
    calendarBtn.addEventListener('click', () => {
      handleCalendarExport();
    });
  }

  const revealElements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
});
