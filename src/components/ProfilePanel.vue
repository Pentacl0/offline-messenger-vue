<template>
  <div v-if="visible" class="profile-panel open">
    <div class="profile-header">
      <v-btn icon class="close-btn" @click="$emit('close')">
        ✖
      </v-btn>
      <h2>{{ user.name }}</h2>
    </div>

    <img :src="user.profilePic" :alt="user.name" class="profile-avatar" />

    <div class="profile-info">
      <p class="profile-about">
        <strong>Hakkımda:</strong>
        {{ user.about || 'Bilgi yok' }}
      </p>
      <p class="phone-number">
        <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="phone" class="icon" />
        {{ user.phone || 'Telefon bilgisi yok' }}
      </p>
    </div>

    <div class="media-shortcuts">
      <strong>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2875/2875433.png"
          class="icon"
        />
        Medya
      </strong>
      <ul>
        <li><img src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png" class="media-icon" /></li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/126/126477.png" class="media-icon" /></li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/727/727245.png" class="media-icon" /></li>
      </ul>
    </div>

    <div class="profile-groups">
      <strong>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
          class="icon"
        />
        Ortak Gruplar
      </strong>
   <ul>
  <li v-for="(group, index) in user.groups || []" :key="index">
    <img
      src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
      alt="tick icon"
      class="icon"
      style="width: 16px; height: 16px; margin-right: 8px;"
    />
    {{ group }}
  </li>
</ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  user: Object
})
const visible = ref(false)

watch(
  () => props.user,
  (val) => {
    visible.value = !!val
  },
  { immediate: true }
)
</script>

<style scoped>
.profile-panel {
  width: 300px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  position: absolute;
  right: 10px;
  top: 50px;
  transition: all 0.3s ease-in-out;
  font-family: Arial, sans-serif;
  z-index: 100;
}

.profile-about {
  font-size: 14px;
  color: #444;
  background: #f9f9f9;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.profile-header h2 {
  font-size: 18px;
  color: #333;
  font-weight: bold;
}

.close-btn {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 6px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  width: 30px;
  height: 30px;
}

.close-btn:hover {
  background: #e63939;
}

.profile-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: block;
  margin: 10px auto;
  border: 3px solid #25D366;
}

.profile-info {
  text-align: center;
  margin-bottom: 15px;
}

.profile-info p {
  font-size: 14px;
  color: #555;
}

.phone-number {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #333;
  font-weight: bold;
  gap: 8px;
  margin-top: 6px;
}

.icon {
  width: 18px;
  height: 18px;
}

.media-shortcuts {
  margin-top: 15px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 8px;
}

.media-shortcuts strong {
  font-size: 14px;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 6px;
}

.media-shortcuts ul {
  list-style: none;
  padding: 0;
  margin-top: 5px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.media-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 5px;
  object-fit: contain;
}

.profile-groups {
  margin-top: 20px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 8px;
}

.profile-groups strong {
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
  gap: 5px;
}

.profile-groups ul {
  list-style: none;
  padding: 0;
  margin-top: 5px;
}

.profile-groups li {
  font-size: 14px;
  color: #444;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  gap: 8px;
  padding: 5px 10px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>