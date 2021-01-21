<template>
  <div class="transaction-table">
    <div class="table-head">
      <table>
        <thead>
          <tr class="header">
            <th class="Ref">
              Trans Ref.
            </th>
            <th class="User">
              User
            </th>
            <th class="Tasks">
              Tasks
            </th>
            <th>
              Total Amount
            </th>
            <th>
              Date Posted
            </th>
            <th class="Status">
              <span>Status</span>
              <div>
                <img src="~/assets/icons/down.svg" alt="down">
                <img src="~/assets/icons/up.svg" alt="u[">
              </div>
            </th>
            <th class="View" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-title="Trans Ref." class="Ref">
              <p>#18319</p>
            </td>
            <td data-title="User" class="User">
              Michael Daniel
            </td>
            <td data-title="Tasks" class="Tasks">
              Open
            </td>
            <td data-title="Total Amount">
              N300,000
            </td>
            <td data-title="Date Posted">
              22 Jan 2020, 10:03
            </td>
            <td data-title="Status" class="Status failed">
              Failed
            </td>
            <td class="View">
              <ArrowCircle @click.native="$router.push('/transactions/detail')" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
export default {
  name: 'TransactionsTable'
}
</script>

<style scoped>
.transaction-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.table-head {
  width:100%;
  border-radius: 20px;
  max-height: 520px;
  overflow-y: auto;
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
/* status */
th:nth-last-child(2) div {
  display: flex;
  flex-direction: column;
}
th:nth-last-child(2) {
  display: flex;
  align-items: center;
  min-width: 20%;
}
th:nth-last-child(2) div {
  margin-left: 15px;
}
th:nth-last-child(2) div {
  cursor: pointer;
}
.failed {
  color: #E12A1E;
  width: 20%;
}
.completed {
  color: #09AB5D;
  width: 20%;
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
.Ref {
  padding-left: 31px;
  width: 15%;
}
.User {
  width: 20%;
}
.Tasks {
  width: 10%;
}
.Status {
  width: 15%;
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
@media (max-width: 950px) {
  .table-head {
    max-height: 448px;
  }
  thead {
    display: none;
  }
  /* status */
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
  .Ref, .User, .Tasks, .View, .Status {
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
