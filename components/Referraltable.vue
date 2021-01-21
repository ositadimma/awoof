<template>
  <div class="referral-table">
    <div class="table-head">
      <table>
        <thead>
          <tr class="header">
            <th class="Id">
              Ref ID
            </th>
            <th>
              Username
            </th>
            <th>
              Email
            </th>
            <th>
              Phone Number
            </th>
            <th>
              Date Used
            </th>
            <th class="Code-usage">
              Code Usage
            </th>
            <th class="View" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-title="Ref ID" class="Id">
              <p>#18319</p>
            </td>
            <td data-title="Username">
              Precious Martins
            </td>
            <td data-title="Email">
              preciousmartins@example.com
            </td>
            <td data-title="Phone Number">
              +2348123456789
            </td>
            <td data-title="Date Used">
              22 Jan 2020, 10:03
            </td>
            <td data-title="Code Usage" class="Code-usage">
              4 Users
            </td>
            <td class="View">
              <ArrowCircle @click.native="$router.push('/referrals/detail')" />
            </td>
          </tr>
          <tr>
            <td data-title="Ref ID" class="Id">
              <p>#18319</p>
            </td>
            <td data-title="Username">
              Precious Martins
            </td>
            <td data-title="Email">
              preciousmartins@example.com
            </td>
            <td data-title="Phone Number">
              +2348123456789
            </td>
            <td data-title="Date Used">
              22 Jan 2020, 10:03
            </td>
            <td data-title="Code Usage" class="Code-usage">
              4 Users
            </td>
            <td class="View">
              <ArrowCircle @click.native="$router.push('/referrals/detail')" />
            </td>
          </tr>
          <tr>
            <td data-title="Ref ID" class="Id">
              <p>#18319</p>
            </td>
            <td data-title="Username">
              Precious Martins
            </td>
            <td data-title="Email">
              preciousmartins@example.com
            </td>
            <td data-title="Phone Number">
              +2348123456789
            </td>
            <td data-title="Date Used">
              22 Jan 2020, 10:03
            </td>
            <td data-title="Code Usage" class="Code-usage">
              4 Users
            </td>
            <td class="View">
              <ArrowCircle @click.native="$router.push('/referrals/detail')" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--<div class="table-ctn">
      <ReferralTableBody />
      <ReferralTableBody />
      <ReferralTableBody />
      <ReferralTableBody />
      <ReferralTableBody />
      <ReferralTableBody />
      <ReferralTableBody />
    </div>-->
    <div class="pagination">
      <span class="active">1</span>
      <span class="inactive">2</span>
      <span class="inactive">3</span>
      <span class="inactive">4</span>
      <span class="inactive">5</span>
      <span class="inactive">6</span>
      <span>. . .</span>
      <span class="inactive">10</span>
    </div>
  </div>
</template>

<script>
// import ReferralTableBody from './ReferralTablebody'
export default {
  name: 'ReferralTable'
  /* components: {
    ReferralTableBody
  } */
}
</script>

<style scoped>
.referral-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.table-head {
  width:100%;
  border-radius: 20px;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
}
table {
  table-layout: auto;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  border-spacing: 0px;
}
thead tr {
  background: #F0F2F4;
}
th {
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #75759E;
}
th, td {
  height: 64px;
  text-align: left;
  padding-left: 6px;
}
th:first-child {
  border-top-left-radius: 20px;
}
th:last-child {
  padding-left: 0px;
  border-top-right-radius: 20px;
}
/* code usage */
th:nth-last-child(2) {
  min-width: 10%;
}
td:nth-last-child(2) {
  width: 10%;
}
/**/
td {
  overflow-x: auto;
}
td:last-child {
  padding-left: 0px;
  text-align: center;
}
tbody tr:last-child td {
  height: 74px;
}
tbody tr:last-child td:first-child {
  border-bottom-left-radius: 20px;
}
tbody tr:last-child td:last-child {
  border-bottom-right-radius: 20px;
}
tbody tr:nth-child(even) {
  background: #F9FAFB;
}
tbody tr:nth-child(odd) {
  background: #FFFFFF;
}
.Id {
  padding-left: 31px;
  width: 8%;
}
.View {
  width: 10%;
}
.arrowcircle {
  cursor: pointer;
}
.pagination {
  margin-top: 35px;
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 165px;
}
.pagination .inactive {
  display: block;
  text-align: center;
  width: 20px;
  height: 21px;

  font-weight: 600;
  font-size: 14px;

  color: #000000;
  padding-top: 2px;
  cursor: pointer;
}
.pagination .inactive:hover {
  color: #FFFFFF;
  background: #001431;
  border-radius: 5px;
}
.pagination .active {
  display: block;
  text-align: center;
  width: 20px;
  height: 21px;

  font-weight: 600;
  font-size: 14px;

  color: #FFFFFF;
  background: #001431;
  border-radius: 5px;
  padding-top: 2px;
  cursor: auto;
}
@media (max-width: 1100px) {
  .table-head {
    max-height: 450px;
  }
  thead {
    display: none;
  }
  /* code usage */
  td:nth-last-child(2) {
    width: 100%;
  }
  /**/
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
  td:last-child {
    justify-content: center;
  }
  td::before {
    content: attr(data-title);
  }
  tbody tr:first-child td:first-child {
    border-radius: 20px 20px 0px 0px;
  }
  tbody tr:last-child td {
    height: 64px;
  }
  tbody tr:last-child td:last-child {
    border-radius: 0px 0px 20px 20px;
  }
  tbody tr:last-child td:first-child {
    border-radius: 0px;
  }
  .Id, .View {
    width: 100%;
    padding: 0px;
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
