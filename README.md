Offline Messenger UI
Bu proje, Vue 3 ve Vuetify kullanılarak geliştirilmiş, mobil ve masaüstü uyumlu bir offline mesajlaşma uygulaması arayüzüdür.

✨ Özellikler
📋 Sohbet listesi: Kullanıcılar sohbet ettiği kişileri listeler.

💬 Mesajlaşma: İki yönlü (gönderen/alıcı) mesajlaşma deneyimi.

🔍 Mesaj Arama: Sohbetlerde arama, aranan kelimeleri vurgulama.

👤 Profil Paneli: Sağ panelde kullanıcı profili, medya ve ortak gruplar.

📱 Responsive: Mobil ve masaüstü cihazlara tamamen uyumlu.

⚡ Hızlı ve Etkileşimli UI: Vue 3 + Vite + Vuetify ile geliştirildi.

🧪 Test Edilebilirlik: Vitest ile %58+ test kapsamı, temel bileşenler test edildi.

🛠️ Teknolojiler
Vue 3, Vuetify, Vite

Vitest & @vue/test-utils

Font Awesome / Material Design Icons

Başlatmak için:
npm install
npm run dev


Test Çalıştırma:
npm run test
npm run coverage

Geliştirici Notları:
Bu proje bir iş başvurusu kapsamında UI kullanım senaryosu gereksinimlerine uygun geliştirilmiştir.

Performans odaklıdır, düşük cihazlarda dahi sorunsuz çalışır.

Proje yapısı
src/
├── components/
│   ├── ChatList.vue
│   ├── ChatWindow.vue
│   ├── MessageInput.vue
│   └── ProfilePanel.vue
├── styles/
│   ├── ChatWindow.css
│   └── style.css
├── App.vue
├── main.js
tests/
├── App.test.js
├── ChatList.test.js
└── setup.js


