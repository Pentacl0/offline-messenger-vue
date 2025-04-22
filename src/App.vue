<template>
  <v-app class="app-layout">
    <v-main class="pa-0">
      <v-row no-gutters class="fill-height ma-0">
        <!-- Chat List (Mobilde başta açık, sonra menüyle kontrol edilir) -->
        <v-col
          cols="12"
          md="3"
          style="max-width: 250px;"
          class="pa-0 ma-0 fill-height"
          :class="{
            'd-none d-md-flex': !isMobile,
            'mobile-chat-list': isMobile && showMenu
          }"
          v-show="!isMobile || showMenu || !selectedChatId"
        >
          <ChatList
            :chats="chats"
            :selectedChatId="selectedChatId"
            @select-chat="selectChat"
          />
        </v-col>

        <!-- Chat Window -->
        <v-col
          cols="12"
          md="8"
          class="pa-0"
          v-show="!isMobile || selectedChatId"
        >
          <ChatWindow
            :selectedChat="selectedChat"
            @toggle-profile="openProfilePanel"
            @toggle-menu="toggleMenu"
          />
        </v-col>

        <!-- Profile Panel -->
        <v-col
          cols="12"
          md="3"
          v-if="!isMobile && showProfile"
          class="pa-0 d-none d-md-flex"
        >
          <ProfilePanel
            :user="selectedChat"
            @close="showProfile = false"
          />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ChatList from './components/ChatList.vue'
import ChatWindow from './components/ChatWindow.vue'
import ProfilePanel from './components/ProfilePanel.vue'

// Avatarlar
const maleAvatars = [
  'https://i.pravatar.cc/150?img=12',
  'https://i.pravatar.cc/150?img=14',
  'https://i.pravatar.cc/150?img=15'
]
const femaleAvatars = [
  'https://i.pravatar.cc/150?img=47',
  'https://i.pravatar.cc/150?img=49',
  'https://i.pravatar.cc/150?img=51'
]
const groupAvatar = 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'

// Chatlar
const chats = ref([
  { id: 1, name: 'Ahmet Yılmaz', gender: 'male', isGroup: false, about: 'Çevrimiçi', phone: '05001112233', type: 'user', profilePic: maleAvatars[0], groups: ['Frontend Geliştiriciler', 'Vue Topluluğu'], messages: [{ from: 'Ahmet', text: 'Merhaba nasılsın?' }, { from: 'Ben', text: 'İyiyim sen?' }] },
  { id: 2, name: 'Zeynep Kaya', gender: 'female', isGroup: false, about: 'Bugün meşgulüm', phone: '05002223344', type: 'user', profilePic: femaleAvatars[0], groups: ['Yazılımcılar', 'Tasarım Ekibi'], messages: [{ from: 'Zeynep', text: 'Bugün ne yapacaksın?' }] },
  { id: 3, name: 'Mustafa Demir', gender: 'male', isGroup: false, about: 'Çevrimdışı', phone: '05003334455', type: 'user', profilePic: maleAvatars[1], groups: ['Aile grubu', 'Java Geliştiriciler Topluluğu'], messages: [{ from: 'Ahmet', text: 'Projeler bitti mi?' }, { from: 'Ben', text: 'Evet hemen toplantı düzenleyelim' }] },
  { id: 4, name: 'Merve Şahin', gender: 'female', isGroup: false, about: 'Ofisteyim', phone: '05004445566', type: 'user', profilePic: femaleAvatars[1], groups: ['Sosyal medya yönetimi', 'Arkadaşlar ortamı'], messages: [{ from: 'Ahmet', text: 'Medya yönetiminde yardım lazım.' }, { from: 'Ben', text: 'Tabii!' }] },
  { id: 5, name: 'Emre Çetin', gender: 'male', isGroup: false, about: 'Müsait değil', phone: '05005556677', type: 'user', profilePic: maleAvatars[2], groups: ['Youtube ekibi', 'Grafik tasarım ekibi'], messages: [{ from: 'Ahmet', text: 'Hey dışarı çıkalım mı?' }, { from: 'Ben', text: 'Olur, nerede?' }] },
  { id: 6, name: 'Tasarım Ekibi', gender: 'group', isGroup: true, about: 'Grup sohbeti', phone: '-', type: 'group', profilePic: groupAvatar, messages: [{ from: 'Merve', text: 'Logo taslağını ekledim.' }, { from: 'Emre', text: 'Süper olmuş!' }] }
])

// State
const selectedChatId = ref(null)
const showProfile = ref(false)
const showMenu = ref(true)
const isMobile = ref(window.innerWidth < 768)

const selectedChat = computed(() =>
  chats.value.find(chat => chat.id === selectedChatId.value)
)

const selectChat = (id) => {
  selectedChatId.value = id
  if (isMobile.value) {
    showMenu.value = false
  }
  showProfile.value = false
}

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const openProfilePanel = () => {
  showProfile.value = true
}

const handleResize = () => {
  isMobile.value = window.innerWidth < 768
  if (!isMobile.value) {
    showMenu.value = true
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
html,
body {
  overflow: hidden;
}

@media (max-width: 768px) {
  .mobile-chat-list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: #1d2935;
  }
}
</style>
