<template>
  <div class="new-member-form">
    <div class="header">
      <span>Add New Member</span>
      <img src="~/assets/icons/Delete.svg" @click="$emit('closeForm')">
    </div>
    <hr>
    <div class="form">
      <label>Select Role</label>
      <div class="select" @click="showSelect">
        <div class="default-option">
          Please select
        </div>
        <div id="inner-select" class="inner-select">
          <div class="option">
            Please select1
          </div>
          <div class="option">
            Please select2
          </div>
        </div>
      </div>

      <label>Fullname</label>
      <input type="text" placeholder="Please Enter">
      <label>Email Address</label>
      <input type="text" placeholder="Please Enter">
      <button class="btn-cmpt">
        Create Account
      </button>
      <span class="cancel" @click="$emit('closeForm')">Cancel</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newmemberform',
  methods: {
    showSelect () {
      const select = document.getElementsByClassName('select')
      const inner = document.getElementById('inner-select')
      if (select[0].className === 'select') {
        select[0].className = 'select active-select'
        inner.style.display = 'block'
      } else {
        select[0].className = 'select'
        inner.style.display = 'none'
      }
    }
  }
}
</script>

<style scoped>
.new-member-form {
  padding: 2.9% 2.7% 0px 2.7%;
  background: #FFFFFF;
  width: 48.5%;
  height: 95%;/*660px;*/
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
.select {
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  border: 1px solid #8692A6;
  border-radius: 6px;

  margin-bottom: 21px;
  padding-right: 29.5px;
  position: relative;
  z-index: 0;
  cursor: pointer;
}
.select::after {
  content: url('~assets/icons/teamcarrot.svg');
}
.active-select::after {
  transform: rotate(180deg);
}
.default-option {
  width: 99%;
  height: 100%;

  display: flex;
  align-items: center;
  padding-left: 30px;
  font-weight: 600;
  font-size: 12px;
  color: #8692A6;
}
.inner-select {
  display: none;
  width: 100%;
  max-height: 300px;

  position: absolute;
  top: 100%;
  z-index: 1;

  overflow-y: auto;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.option {
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid;
  font-weight: 600;
  font-size: 12px;
  color: #8692A6;
  background: #FFFFFF;
}
.option:last-child {
  border: none;
}
.option:hover {
  color: #FFFFFF;
  background: #09AB5D;
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
  color: #8692A6;
}
input[type=text]::placeholder {
  font-weight: 600;
  color: #8692A6;
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
  .new-member-form {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 767px) {
  .new-member-form {
    width: 100%;
    height: 100%;
  }
}
</style>
