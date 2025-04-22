<template>
  <div class="chat-list">
    <!-- Üst Başlık ve İkonlar -->
    <div class="chat-list-header">
      <div class="chat-header-left">Sohbetler</div>
      <div class="chat-header-right">
        <v-icon class="chat-header-icon">mdi-cog</v-icon>
        <v-icon class="chat-header-icon">mdi-circle</v-icon>
      </div>
    </div>

    <!-- Sohbetler -->
    <div
      v-for="chat in chats"
      :key="chat.id"
      :class="['chat-item', { selected: chat.id === selectedChatId }]"
      @click="$emit('select-chat', chat.id)"
    >
      <img :src="chat.profilePic" :alt="chat.name" class="chat-avatar" />
      <div class="chat-info">
        <span class="chat-name">{{ chat.name }}</span>
        <div class="chat-last-message">
          {{ chat.messages.length ? chat.messages.at(-1).text : 'Henüz mesaj yok' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  chats: Array,
  selectedChatId: [String, Number]
})
defineEmits(['select-chat'])
</script>

<style scoped>
.chat-list {
 width: 100%;
  max-width: 250px;
  background-color: #1d2935;
  color: white;
  height: 100vh;
  overflow-y: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.chat-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.chat-header-left {
  font-size: 18px;
  font-weight: bold;
  color: white;
}

.chat-header-right {
  display: flex;
  align-items: center;
}

.chat-header-icon {
  font-size: 20px;
  color: white;
  margin-left: 15px;
  cursor: pointer;
}

.chat-header-icon:hover {
  color: #34b7f1;
}

.chat-item {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.chat-item:hover {
  background-color: #263445;
}

.chat-item.selected {
  background-color: #263445;
}

.chat-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-info {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-name {
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.chat-last-message {
  font-size: 12px;
  color: #aaa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
  margin-top: 4px;
}
</style>
