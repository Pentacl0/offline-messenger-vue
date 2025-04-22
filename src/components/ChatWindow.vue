<template>
  <div :class="['chat-container', { 'profile-open': showProfile }]">
    <div class="chat-window">
      <!-- Üst Bar -->
      <div class="chat-header">
        <!-- Mobil Menü İkonu -->
        <span
          class="mobile-menu-icon"
          @click="$emit('toggle-menu')"
        >☰</span>

        <img
          v-if="selectedChat"
          :src="selectedChat.profilePic"
          class="chat-avatar"
        />
        <span
          class="chat-name"
          @click="showProfile = true"
        >
          {{ selectedChat?.name }}
        </span>

        <div class="search-box">
          <v-icon class="search-icon">mdi-magnify</v-icon>
          <input v-model="searchTerm" placeholder="Mesajlarda ara..." />
        </div>
      </div>

      <!-- Mesajlar -->
      <div class="chat-messages" ref="messageList">
        <template v-if="selectedChat">
          <div
            v-for="(msg, index) in filteredMessages"
            :key="index"
            :class="['message', msg.from === 'Ben' ? 'sent' : 'received']"
          >
            <p>
              <span
                v-for="(part, i) in splitAndHighlight(msg.text)"
                :key="i"
                :class="{ highlight: isMatch(part) }"
              >
                {{ part }}
              </span>
            </p>
            <span class="message-time">{{ msg.time || '' }}</span>
          </div>
        </template>
        <div v-else class="chat-placeholder">💬 Bir sohbet seçin.</div>
      </div>

      <!-- Mesaj Girişi -->
      <div class="chat-input">
        <input
          v-model="newMessage"
          placeholder="Mesajınızı yazın..."
          @keydown.enter="handleSend"
        />
        <button @click="handleSend">Gönder</button>
      </div>
    </div>

    <!-- Profil Panel -->
    <div class="profile-panel" v-if="showProfile">
      <ProfilePanel :user="selectedChat" @close="showProfile = false" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import ProfilePanel from './ProfilePanel.vue'

const props = defineProps({
  selectedChat: Object
})
const emit = defineEmits(['toggle-menu'])

const showProfile = ref(false)
const searchTerm = ref('')
const newMessage = ref('')
const messageList = ref(null)

const filteredMessages = computed(() =>
  props.selectedChat?.messages?.filter(msg =>
    msg.text.toLowerCase().includes(searchTerm.value.toLowerCase())
  ) || []
)

const handleSend = () => {
  const trimmed = newMessage.value.trim()
  if (!trimmed || !props.selectedChat) return
  props.selectedChat.messages.push({
    from: 'Ben',
    text: trimmed,
    time: new Date().toLocaleTimeString()
  })
  newMessage.value = ''
  scrollToBottom()
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messageList.value) {
      messageList.value.scrollTop = messageList.value.scrollHeight
    }
  })
}

const splitAndHighlight = (text) => {
  if (!searchTerm.value) return [text];
  const escaped = searchTerm.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.split(regex);
};

const isMatch = (part) => {
  return searchTerm.value &&
    part.toLowerCase() === searchTerm.value.toLowerCase();
};

watch(() => props.selectedChat?.messages?.length, scrollToBottom)
</script>

<style scoped src="../styles/ChatWindow.css"></style>

<style scoped>
.highlight {
  background: yellow;
  font-weight: bold;
  padding: 1px 2px;
  border-radius: 3px;
}

.mobile-menu-icon {
  display: none;
}

@media (max-width: 768px) {
 .mobile-menu-icon {
    display: block !important;
    font-size: 28px;
    margin-right: 10px;
    cursor: pointer;
    color: white !important;
    z-index: 1000;
  }
}
</style>