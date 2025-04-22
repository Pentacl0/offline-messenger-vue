<template>
  <v-row>
    <v-col>
      <v-text-field
        v-model="message"
        placeholder="Mesaj yaz..."
        @keydown.enter="sendMessage"
        outlined
        dense
        hide-details
      />
    </v-col>
    <v-col cols="auto">
      <v-btn icon color="primary" @click="sendMessage">
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['send'])

const message = ref('')

const sendMessage = () => {
  if (message.value.trim() !== '') {
    emit('send', message.value.trim())
    message.value = ''
  }
}
</script>
