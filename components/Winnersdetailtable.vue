<template>
  <div class="body">
    <span>Giveaway Details</span>
    <hr>
    <table>
      <thead>
        <tr>
          <th class="Status">
            Type
          </th>
          <th class="Tasks">
            Giver
          </th>
          <th class="Amount">
            Total Amount
          </th>
          <th class="Date">
            Date Posted
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-title="Type" class="Status">
            Star Givaway
          </td>
          <td data-title="Giver" class="Tasks">
            <div class="Name-div">
              <p>Don Jazzy</p>
              <Checkicon />
            </div>
          </td>
          <td data-title="Total Amount" class="Amount">
            N500,000
          </td>
          <td data-title="Date Posted" class="Date">
            Today, 8:45
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th class="Status">
            Possible Winners
          </th>
          <th class="Tasks">
            Task Completion
          </th>
          <th class="Amount">
            Amount Won
          </th>
          <th class="Date">
            Date Entered
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-title="Possible Winners" class="Status">
            5 (N100,000 per winner)
          </td>
          <td data-title="Task Completion" class="Tasks">
            All Completed
          </td>
          <td data-title="Amount Won" class="Amount">
            N100,000
          </td>
          <td data-title="Date Entered" class="Date">
            Today, 10:03
          </td>
        </tr>
      </tbody>
    </table>
    <span>Tasks</span>
    <hr>
    <div class="Task-grid-container">
      <div class="Task-grid">
        <div class="th">
          Task One
        </div>
        <div data-title="Task-One" class="td">
          Follow On Instagram
        </div>
      </div>
      <div class="Task-grid">
        <div class="th">
          Task Two
        </div>
        <div data-title="Task-Two" class="td">
          Share on Twitter
        </div>
      </div>
      <div class="Task-grid">
        <div class="th">
          Task Three
        </div>
        <div data-title="Task-Three" class="td">
          Retweet on Twitter
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Winnersdetailtable'
}
</script>

<style scoped>
.body {
  width: 100%;
  height: 433px;
  background: #FFFFFF;
  border: 1px solid #E2E2EA;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  margin-bottom: 65px;
  overflow-y: auto;
}
hr {
  margin-bottom: 19px;
  width: 92.5%;
  align-self: center;
}
.body span {
  align-self: start;
  display: block;
  margin-left: 3.8%;
  margin-top: 27px;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 19px;

  color: #A2ABAA;
}
/* table */
table {
  table-layout: auto;
  width: 100%;
  margin-bottom: 40px;
  padding: 0px 3.4% 0px 3.4%;
}
th, td {
  text-align: left;
}
th {
  font-weight: normal;
  font-size: 11px;
  line-height: 19px;
  color: #75759E;
}
td {
  font-weight: 600;
  font-size: 13px;
  line-height: 21px;
  color: #171717;
  overflow-x: auto;
}
.Amount, .Tasks, .Status, .Date {
  width: 25%;
}
.Task-grid-container {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
  grid-gap: 0px 18px;
  width: 100%;
  padding: 0px 3.4% 0px 3.4%;
}
.Task-grid {
  display: flex;
  flex-direction: column;
}
.Task-grid .th {
  font-size: 11px;
  line-height: 19px;
  color: #75759E;
}
.Task-grid .td {
  font-weight: 600;
  font-size: 13px;
  line-height: 21px;

  white-space: nowrap;
  color: #171717;
  overflow-x: auto;
}
.Name-div {
  display: flex;
  align-items: center;
}
.Name-div p {
  margin-right: 10px;
}
@media (max-width: 950px) {
  .body {
    width: 100%;
    height: auto;
  }
  .body span {
    margin-left: 3.8%;
  }
  thead {
    display: none;
  }
  tr{
    display: flex;
    flex-direction: column;
  }
  td {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
  }
  td::before {
    content: attr(data-title);
  }
  .Amount, .Tasks, .Status, .Date {
    width: 100%;
  }
  .Task-grid-container {
    display: flex;
    flex-direction: column;
  }
  .Task-grid {
    display: block;
    width: 100%;
  }
  .Task-grid .th {
    display: none;
  }
  .Task-grid .td {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
  }
  .Task-grid .td::before {
    content: attr(data-title);
  }
}
</style>
