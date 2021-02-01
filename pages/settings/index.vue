<template>
  <div class="setting-container">
    <div class="setting-container-child animate__fadeInUp">
      <div class="setting-nav">
        <div class="setting-nav-child-1">
          <span id="Security" class="active" @click="changeNav">Security</span>
          <span id="Team" @click="changeNav">Team</span>
        </div>
        <button id="Button" class="btn-cmpt" @click="showForm">
          Add New Member +
        </button>
      </div>
      <SecurityForm id="Securityform" />
      <TeamTable id="Teamtable" />
      <div id="new-member" class="new-member-form-container">
        <NewMember @closeForm="closeForm" />
      </div>
    </div>
  </div>
</template>

<script>
import SecurityForm from '~/components/Securityform'
import TeamTable from '~/components/Teamtable'
import NewMember from '~/components/Newmemberform'
export default {
  name: 'Setting',
  layout: 'dashboardLayout',
  components: {
    SecurityForm,
    TeamTable,
    NewMember
  },
  created () {
    this.$store.commit('setLayout', 'SETTINGS') // changes layout title of dashboard header
  },
  methods: {
    changeNav (e) {
      const security = document.getElementById('Security')
      const team = document.getElementById('Team')
      const button = document.getElementById('Button')
      const securityForm = document.getElementById('Securityform')
      const teamTable = document.getElementById('Teamtable')

      if (e.srcElement.outerText === 'Team' || e.srcElement.textContent === 'Team') {
        security.classList.remove('active')
        team.classList.add('active')
        button.style.display = 'block'
        teamTable.style.display = 'block' // table
        securityForm.style.display = 'none' // form
      } else {
        team.classList.remove('active')
        security.classList.add('active')
        button.style.display = 'none'
        securityForm.style.display = 'flex' // form
        securityForm.style.flexDirection = 'column'
        teamTable.style.display = 'none' // table
      }
    },
    showForm () {
      document.getElementById('new-member').style.display = 'flex'
      document.getElementById('new-member').style.alignItems = 'center'
      document.getElementById('new-member').style.justifyContent = 'center'
    },
    closeForm () {
      document.getElementById('new-member').style.display = 'none'
    }
  }
}
</script>

<style scoped>
.setting-container {
  background: #F7F7F8;
  flex: 1;

  width: 100%;
  height: 100%;

  padding: 30px 6% 0px 4.45%;
  overflow-y: auto;
  overflow-x: hidden;
}
.setting-container-child {
  width: 713px;
  height: auto;
  background: #FFFFFF;
}
.setting-nav {
  display: flex;
  padding-right: 39px;
}
.setting-nav .btn-cmpt {
  width: 188px;
  display: none;
}
.setting-nav-child-1 {
  display: flex;
  flex: 1;
}
.setting-nav-child-1 span {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 165px;
  height: 69px;
  cursor: pointer;
}
.setting-nav-child-1 .active {
  border-bottom: 4px solid;
  color: #09AB5D;
  cursor: auto;
}
.new-member-form-container {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(6, 13, 37, 0.6);
}
@media (max-width: 1095px) {
  .setting-container-child {
    width: 100%;
  }
  .setting-nav {
    padding-right: 0px;
  }
}
@media (max-width: 816px) {
  .setting-container {
    padding: 20px 0px;
  }
}
@media (max-width: 767px) {
  .setting-container-child {
    width: 100%;
  }
  .setting-nav {
    flex-direction: column;
    padding-right: 0px;
  }
  .setting-nav .btn-cmpt {
    min-height: 46px;
    align-self: center;
  }
  .setting-nav-child-1 {
    margin-bottom: 10px;
  }
  .setting-nav-child-1 span {
    width: 50%;
  }
}
</style>
