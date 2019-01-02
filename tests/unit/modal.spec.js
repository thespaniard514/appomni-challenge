import { shallowMount, mount } from '@vue/test-utils'
import Modal from '@/components/Modal.vue'

describe('Modal.vue', () => {
  it('modal emits close when close button clicked', () => {
    const wrapper = shallowMount(Modal, {
    })
    wrapper.find('button.btn-close').trigger('click');
    expect(wrapper.emitted().close).toBeTruthy()
  })
});
