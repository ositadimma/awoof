<template>
  <div class="table-head">
    <table>
      <thead>
        <tr>
          <th class="Name">
            Name
          </th>
          <th>
            Email Address
          </th>
          <th>
            Role
          </th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-title="Name" class="Name">
            Vivian Oluwaseun
          </td>
          <td data-title="Email Address">
            vivose84@pharmaccess.com
          </td>
          <td data-title="Role">
            Owner
          </td>
          <td data-title="Actions" />
        </tr>
        <tr>
          <td data-title="Name" class="Name">
            Vivian Oluwaseun
          </td>
          <td data-title="Email Address">
            vivose84@pharmaccess.com
          </td>
          <td data-title="Role" class="Role">
            <div>
              <p>User</p>
              <img src="~/assets/icons/teamcarrot.svg" alt="Team">
            </div>
          </td>
          <td data-title="Actions" class="Actions">
            <img src="~/assets/icons/Edit.svg" alt="Edit">
            <img src="~/assets/icons/Delete1.svg" alt="delete">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Teamtable'
}
</script>

<style scoped>
.table-head {
  display: none;
  width:100%;
  height: 470px;
  max-height: 500px;
  overflow-y: auto;
}
table {
  table-layout: auto;
  width: 100%;
  border-spacing: 0px;
}
thead tr {
  background: #F0F2F4;
}
th {
  font-weight: normal;
  height: 63px;
  font-size: 14px;
  line-height: 24px;
  color: #75759E;

  text-align: left;
  padding-left: 6px;
}
td {
  height: 85px;
  text-align: left;
  padding-left: 6px;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
  overflow-x: auto;
}
tbody tr:last-child td {
  border-bottom: none;
}
.Name {
  padding-left: 49px;
}
.Role div {
  display: flex;
  cursor: pointer;
}
.Role div p {
  margin-right: 9px;
}
.Actions img {
  cursor: pointer;
}
.Actions img:first-child {
  margin-right: 32px;
}
::-webkit-scrollbar {
    width: 2px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
@media (max-width: 950px) {
  .table-head {
    max-height: 330px;
    padding-bottom: 0px;
  }
  thead {
    display: none;
  }
  tr{
    display: flex;
    flex-direction: column;
  }
  tr:first-child {
    border-radius: 20px 20px 0px 0px
  }
  td {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
  }
  td::before {
    content: attr(data-title);
  }
  .Name {
    width: 100%;
    padding: 0px;
  }
  .Actions img:first-child {
    margin-right: 5px;
    margin-left: auto;
  }
}
@media (max-width: 767px) {
  th {
    font-size: 12px;
  }
  td {
    font-size: 11px;
  }
}
</style>
