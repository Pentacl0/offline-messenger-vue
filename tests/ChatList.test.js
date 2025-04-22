import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ChatList from '../src/components/ChatList.vue'

describe('ChatList.vue', () => {
  it('ChatList bileşeni düzgün render oluyor', () => {
    const wrapper = mount(ChatList, {
      props: {
        chats: [
          { id: 1, name: 'Test Kullanıcı', messages: [] }
        ],
        selectedChatId: null
      }
    })
    expect(wrapper.text()).toContain('Test Kullanıcı')
  })
})
