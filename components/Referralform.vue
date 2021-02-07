<template>
  <div class="ref-form-container" hidden>
    <div v-click-outside="clickAwayFromForm" class="ref-form-body animate__fadeIn">
      <div class="header">
        <span>Set Referral Bonus</span>
        <img src="~/assets/icons/Delete.svg" @click="closeEdit">
      </div>
      <hr>
      <div class="form">
        <label>Amount</label>
        <input type="text" placeholder="Please Enter">

        <label>Referral ID</label>
        <input type="text" placeholder="Please Enter">
        <button class="btn-cmpt">
          Continue
        </button>
        <span class="cancel" @click="closeEdit">Cancel</span>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'ReferralForm',
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    clickAwayFromForm (e) {
      const Referralformcontainer = document.querySelector('.ref-form-container')
      const Referralform = document.querySelector('.ref-form-body')
      const Editbutton = document.querySelector('.edit-image')

      Referralform.childNodes.forEach((element) => {
        if (
          e.target !== Referralform &&
          !element.isEqualNode(e.target) &&
          e.target !== Editbutton
        ) {
          Referralformcontainer.setAttribute('hidden', true)
        }
      })
    },
    closeEdit () {
      document.querySelector('.ref-form-container').setAttribute('hidden', true)
    }
  }
}
</script>

<style scoped>
.ref-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(6, 13, 37, 0.6);
}
.ref-form-body {
  padding: 2.9% 2.7% 0px 2.7%;
  background: #ffffff;
  width: 50.5%;
  height: 82.5%;
  max-height: 564px;
  overflow-y: auto;
}
span {
  font-weight: 600;
}
.header {
  display: flex;
  align-items: center;
  margin-bottom: 17px;

  padding-left: 3.5%;
}
.header span {
  font-size: 18px;
  line-height: 29px;

  color: #061e5b;
}
.header img {
  margin-left: auto;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.form {
  display: flex;
  flex-direction: column;
  padding: 20px 13% 0px 13%;
}
label {
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: #696f79;
  margin-bottom: 11px;
}
input[type='text'] {
  width: 100%;
  height: 64px;
  padding-left: 30px;

  border: 1px solid #8692a6;
  box-sizing: border-box;
  border-radius: 6px;

  margin-bottom: 21px;
  font-size: 12px;
}
input[type='text']::placeholder {
  font-weight: 600;
}
.btn-cmpt {
  height: 64px;
  border-radius: 6px;
  margin-top: 20px;
  margin-bottom: 27px;
}
.cancel {
  font-size: 12px;
  line-height: 19px;
  color: #8692a6;

  align-self: center;
  cursor: pointer;
}
@media (max-width: 950px) and (orientation: landscape) {
  .ref-form-body {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 767px) {
  .ref-form-body {
    width: 100%;
    height: 100%;
  }
}
</style>
