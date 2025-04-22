import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('App.vue', () => {
  it('uygulama düzgün render ediyor', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })
})
