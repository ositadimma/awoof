export const state = () => ({
  layout: '',
  mode: 'Monthly',
  modalOpen: false,
  modalHeaderOpen: false,
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
  setModalHeaderOpen (state, open) {
    state.modalHeaderOpen = open
  },
  setPopUpOpen (state, open) {
    state.popUpOpen = open
  }
}
