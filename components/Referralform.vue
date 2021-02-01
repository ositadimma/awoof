<template>
  <div class="ref-form-container animate__fadeIn">
    <div class="header">
      <span>Set Referral Bonus</span>
      <img src="~/assets/icons/Delete.svg" @click="$emit('CloseEdit')">
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
      <span class="cancel" @click="$emit('CloseEdit')">Cancel</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReferralForm'
}
</script>

<style scoped>
.ref-form-container {
  padding: 2.9% 2.7% 0px 2.7%;
  background: #FFFFFF;
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

  color: #061E5B;
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
  color: #696F79;
  margin-bottom: 11px;
}
input[type=text] {
  width: 100%;
  height: 64px;
  padding-left: 30px;

  border: 1px solid #8692A6;
  box-sizing: border-box;
  border-radius: 6px;

  margin-bottom: 21px;
  font-size: 12px;
}
input[type=text]::placeholder {
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
  color: #8692A6;

  align-self: center;
  cursor: pointer;
}
@media (max-width: 950px) and (orientation: landscape) {
  .ref-form-container {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 767px) {
  .ref-form-container {
    width: 100%;
    height: 100%;
  }
}
</style>
