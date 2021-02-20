export const state = () => ({
  layout: '',
  mode: 'Monthly',
  modalOpen: false,
  popUpOpen: false
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
  },
  setPopUpOpen (state, open) {
    state.popUpOpen = open
  }
}
