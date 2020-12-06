<template>
  <div class="Winners-table">
    <div class="table-head">
      <table>
        <thead>
          <tr>
            <th class="Name">
              Name
            </th>
            <th class="Task">
              Task Completion
            </th>
            <th>
              Date Entered
            </th>
            <th class="View" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-title="Name" class="Name">
              Chibuzo Chiamaka
            </td>
            <td data-title="Task Completion" class="Task">
              All Completed
            </td>
            <td data-title="Date Entered">
              Today, 10:03
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
  name: 'Winnerstable'
}
</script>

<style scoped>
.Winners-table {
  width: 100%;
  height: auto;
  margin: 26px 0px 67px 0px;
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
  width: 35%;
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
@media (max-width: 950px) {
  .Winners-table .head {
    padding-left: 0px;
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
  .Name, .View {
    width: 100%;
    padding: 0px;
  }
}
@media (max-width: 767px) {
  .Winners-table .head {
    padding-left: 0px;
  }
  .Winners-table .head span:nth-child(1) {
    font-size: 13px;
  }
  .Winners-table .head span:nth-child(2) {
    font-size: 13px;
  }
}
</style>
