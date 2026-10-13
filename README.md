# 💌 A Special Date for 20/10 • Romantic Date Invitation

Trang web mời hẹn hò phong cách **Minimal Romance** được xây dựng hoàn toàn bằng **Vanilla HTML, CSS, JavaScript** (thuần, không cần thư viện ngoài, không cần build step). Có thể mở trực tiếp trên trình duyệt hoặc triển khai (deploy) ngay lên **GitHub Pages**.

---

## 🔔 Cách Cài Đặt Nhận Thông Báo Khi Nàng Bấm "Đồng Ý"

Trang web đã được tích hợp sẵn hệ thống gửi thông báo tự động ngay khi nàng bấm nút **"Dạ, Em Đồng Ý! 💕"** (kèm theo bất kỳ lời nhắn dễ thương nào nàng gõ vào).

Bạn có thể chọn **1 trong 3 cách** sau ở đầu file [script.js](file:///Users/quandeptrai/development/mine/dateInvitee/script.js):

### Cách 1: Nhận Thông Báo Qua Email (Đã cài đặt sẵn: m.quan1811@gmail.com)
Email của bạn (`m.quan1811@gmail.com`) đã được cấu hình sẵn trong [script.js](file:///Users/quandeptrai/development/mine/dateInvitee/script.js).

**Lưu ý nhỏ ở lần bấm thử đầu tiên**:
- Dịch vụ [FormSubmit](https://formsubmit.co) sẽ gửi đến hộp thư `m.quan1811@gmail.com` một email xác nhận kích hoạt ("*Action Required: Activate your form*").
- Bạn chỉ cần mở email đó và bấm nút **Activate Form** một lần duy nhất.
- Kể từ đó, mỗi khi nàng bấm nhận lời trên trang web, email thông báo sẽ bay thẳng về hộp thư của bạn ngay lập tức!

---

### Cách 2: Báo Tin Nhắn Rung Điện Thoại Qua Telegram Bot (Siêu Nhanh)
Nếu bạn muốn điện thoại rung thông báo ngay tức thì:
1. Mở Telegram, tìm bot `@BotFather`, gõ `/newbot` để tạo bot và lấy `Bot Token`.
2. Tìm bot `@userinfobot` để lấy `Chat ID` của bạn.
3. Điền vào [script.js](file:///Users/quandeptrai/development/mine/dateInvitee/script.js):
   ```javascript
   telegramBotToken: "123456789:ABCdef...",
   telegramChatId: "987654321",
   ```

---

### Cách 3: Báo Về Kênh Riêng Trên Discord
Tạo Webhook trong Server Discord riêng của bạn và dán link vào:
```javascript
discordWebhookUrl: "https://discord.com/api/webhooks/...",
```

---

## 🌟 Lịch Trình Ngày 20/10

* 🎁 **Stage 1 (12:00 – 16:00) • Một Tí Bất Ngờ Nhỏ**:
  - Một món quà bí mật được chuẩn bị riêng sẽ được giao đến tận nơi của nàng trong khung giờ này.
  - Hộp gợi ý tương tác mở ra hoa tươi, thiệp viết tay và lời nhắn ngọt ngào mở đầu ngày 20/10.

* 🛵 **Stage 2 (17:00 – 18:30) • Bắt Đầu Về Lúc 17h & Thử Thách Kẹt Xe Tan Tầm 🚗💨**:
  - Giờ tan tầm bắt đầu xuất phát về nhà! Vượt qua biển người xe cộ kẹt cứng để về nhà nghỉ ngơi, chuẩn bị váy áo xinh đẹp trước giờ hẹn tối.

* 🍕 **Stage 3 (19:30 – 21:30) • Dạ Tiệc Tại Pizza 4P's Trần Ngọc Diện**:
  - Không gian sân vườn Thảo Điền lãng mạn dưới ánh nến.
  - **Menu gợi ý thịnh soạn**:
    - 🥗 *1 phần Salad trái cây với phô mai Burrata tươi béo ngậy*
    - 🍕 *1 Pizza Half-Half nướng củi (2 vị đặc trưng nóng hổi)*
    - 🍝 *1 đĩa Mì Ý thơm lừng đậm đà*
    - 🍰 *1 tí tráng miệng ngọt ngào khép lại bữa tối hoàn hảo*
  - Nút bấm trực tiếp mở [Google Maps Pizza 4P's Trần Ngọc Diện](https://www.google.com/maps/place/Pizza+4P's+Tran+Ngoc+Dien/@10.8063087,106.741081,17z/data=!3m1!4b1!4m6!3m5!1s0x317527003ccc9943:0x81a908b7a352d9fe!8m2!3d10.8063087!4d106.741081!16s%2Fg%2F11yrbyddxk?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D).

---

## 🚀 Triển Khai Lên GitHub Pages

```bash
git init
git add .
git commit -m "feat: added acceptance notifications and custom messages"
git branch -M main
git remote add origin https://github.com/<username-cua-ban>/<ten-repo>.git
git push -u origin main
```
Sau đó vào **Settings** → **Pages** trên GitHub, chọn branch `main` và lưu là xong!
