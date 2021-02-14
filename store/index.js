export const state = () => ({
  layout: '',
  mode: 'Monthly',
  modalOpen: false
})

export const mutations = {
  setLayout (state, layout) {
    state.layout = layout
  },
  setMode (state, mode) {
    state.mode = mode
  },
  setModalOpen (state, open) {
    state.modalOpen = open
  }
}
