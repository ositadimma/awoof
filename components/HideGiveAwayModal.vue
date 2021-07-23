<template>
  <div class="modal-container" @click.self="closeModal">
    <div class="modal-card animate__fadeIn">
      <div class="modal-title">
        <span>Are you sure you want to perform this action?</span>
      </div>
      <div class="action-container">
        <button class="yes-btn" @click="hideGiveAway">
          yes
        </button>
        <button class="no-btn" @click="closeModal">
          no
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'HideGiveAway',
  props: {
    id: {
      type: String,
      default () {
        return ''
      }
    },
    status: {
      type: Boolean
    }
  },
  methods: {
    async hideGiveAway (hide) {
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      try {
        const response = await this.$axios.$post(
          `/admins/giveaway_visibility/${this.id}`,
          {
            hide: this.status ? 'no' : 'yes'
          }
        )
        if (response) {
          if (!this.status) {
            this.$toast.global.custom_success('Giveaway is no longer visible.')
          } else {
            this.$toast.global.custom_success('Giveaway is visible.')
          }
          this.$emit('refresh')
          this.closeModal()
        }
      } catch (err) {
        if (err.message.includes('Network')) {
          this.$toast.global.custom_error(
            'please check your connection and try again'
          )
        }

        if (err.response !== undefined) {
          if (err.response.status === 400) {
            this.$toast.global.custom_error(err.response.data || err.response.data.message)
          } else if (err.response.status === 403) {
            this.$toast.global.custom_error(err.response.data)
          }
        }
      }
    },
    closeModal () {
      this.$store.commit('setPopUpOpen', false)
    }
  }
}
</script>

<style scoped>
.modal-container {
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}

.modal-card {
  width: 400px;
  border-radius: 3px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px -2px rgb(27 33 58 / 40%);
}

.modal-title {
  padding: 0.9rem 4% 0px 4%;
}

.modal-title span {
  font-weight: bold;
  font-size: calc(0.8rem + 0.3vw);
}
.action-container {
  width: 100%;
  display: flex;
}

button {
  width: 50%;
  height: 40px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.yes-btn:hover {
  background: #09ab5d;
  color: #fff;
  transition: background 0.3s;
}

.no-btn:hover {
  background: #ff0000;
  color: #fff;
  transition: background 0.3s;
}
@media (min-width: 1600px) {
  .modal-title span {
    font-size: 25px;
  }
}
</style>
