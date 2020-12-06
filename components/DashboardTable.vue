<template>
  <div class="dashboard-table">
    <div class="head">
      <span>Recent Giveaways</span>
      <span>See All</span>
    </div>
    <div class="table-head">
      <table>
        <thead>
          <tr>
            <th class="Name">
              Name
            </th>
            <th class="Type">
              Type
            </th>
            <th>
              Tasks
            </th>
            <th>
              Total Amount
            </th>
            <th>
              Date Posted
            </th>
            <th class="View" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-title="Name" class="Name">
              <div class="Name-div">
                <p>Don Jazzy</p>
                <Checkicon />
              </div>
            </td>
            <td data-title="Type" class="Type">
              Giveaway
            </td>
            <td data-title="Tasks">
              Open
            </td>
            <td data-title="Total Amount">
              N300,000,000
            </td>
            <td data-title="Date Posted">
              22 Jan 2020, 10:03
            </td>
            <td class="View">
              <ArrowCircle />
            </td>
          </tr>
          <tr>
            <td data-title="Name" class="Name">
              <div class="Name-div">
                <p>Don Jazzy</p>
                <Checkicon />
              </div>
            </td>
            <td data-title="Type" class="Type">
              Giveaway
            </td>
            <td data-title="Tasks">
              Open
            </td>
            <td data-title="Total Amount">
              N300,000,000
            </td>
            <td data-title="Date Posted">
              22 Jan 2020, 10:03
            </td>
            <td class="View">
              <ArrowCircle />
            </td>
          </tr>
          <tr>
            <td data-title="Name" class="Name">
              <div class="Name-div">
                <p>Don Jazzy</p>
                <Checkicon />
              </div>
            </td>
            <td data-title="Type" class="Type">
              Giveaway
            </td>
            <td data-title="Tasks">
              Open
            </td>
            <td data-title="Total Amount">
              N300,000,000
            </td>
            <td data-title="Date Posted">
              22 Jan 2020, 10:03
            </td>
            <td class="View">
              <ArrowCircle />
            </td>
          </tr>
          <tr>
            <td data-title="Name" class="Name">
              <div class="Name-div">
                <p>Don Jazzy</p>
                <Checkicon />
              </div>
            </td>
            <td data-title="Type" class="Type">
              Giveaway
            </td>
            <td data-title="Tasks">
              Open
            </td>
            <td data-title="Total Amount">
              N300,000,000
            </td>
            <td data-title="Date Posted">
              22 Jan 2020, 10:03
            </td>
            <td class="View">
              <ArrowCircle />
            </td>
          </tr>
          <tr>
            <td data-title="Name" class="Name">
              <div class="Name-div">
                <p>Don Jazzy</p>
                <Checkicon />
              </div>
            </td>
            <td data-title="Type" class="Type">
              Giveaway
            </td>
            <td data-title="Tasks">
              Open
            </td>
            <td data-title="Total Amount">
              N300,000,000
            </td>
            <td data-title="Date Posted">
              22 Jan 2020, 10:03
            </td>
            <td class="View">
              <ArrowCircle />
            </td>
          </tr>
          <tr>
            <td data-title="Name" class="Name">
              <div class="Name-div">
                <p>Don Jazzy</p>
                <Checkicon />
              </div>
            </td>
            <td data-title="Type" class="Type">
              Giveaway
            </td>
            <td data-title="Tasks">
              Open
            </td>
            <td data-title="Total Amount">
              N300,000,000
            </td>
            <td data-title="Date Posted">
              22 Jan 2020, 10:03
            </td>
            <td class="View">
              <ArrowCircle />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardTable'
}
</script>

<style scoped>
.dashboard-table {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}
.dashboard-table .head {
  display: flex;
  margin-bottom: 26px;
  padding-left: 34px;
}
.dashboard-table .head span:nth-child(1) {
  font-size: 16px;
  color: #75759E;
  flex: 3;
}
.dashboard-table .head span:nth-child(2) {
  font-size: 16px;
  font-weight: bold;
  color: #09AB5D;
  cursor: pointer;
}
.table-head {
  width:100%;
  border-radius: 20px;
  max-height: 500px;
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
td:last-child {
  padding-left: 0px;
  text-align: center;
}
td {
  overflow-x: auto;
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
.Name {
  padding-left: 31px;
  width: 30%;
}
.Name-div {
  display: flex;
  align-items: center;
}
p {
  margin-right: 10px;
}
.Type {
  width: 15%;
}
.View {
  width: 10%;
}
.arrowcircle {
  cursor: pointer;
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
@media (max-width: 1100px) {
  .dashboard-table .head {
    padding-left: 0px;
  }
  .table-head {
    max-height: 386px;
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
  .Name, .Type, .View {
    width: 100%;
    padding: 0px;
  }
}
@media (max-width: 767px) {
  .dashboard-table .head span:nth-child(1) {
    font-size: 13px;
  }
  .dashboard-table .head span:nth-child(2) {
    font-size: 13px;
  }
}
</style>
