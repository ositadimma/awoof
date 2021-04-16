export const state = () => ({
  layout: '',
  mode: 'Monthly',
  modalOpen: false,
  modalHeaderOpen: false,
  popUpOpen: false,
  key: 0
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
  },
  setKey (state, key) {
    state.key = key
  }
}

/*
export const state = () => ({
  layout: '',
  mode: 'Monthly',
  modalOpen: false,
  modalHeaderOpen: false,
  popUpOpen: false,
  data: []
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
  },
  setData (state, data) {
    state.data = data
  }
}
*/
