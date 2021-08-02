<template>
  <div class="referral-table animate__fadeInUp">
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
        <tbody v-show="data.length > 0">
          <tr v-for="(referral, index) in paginatedData" :key="index">
            <td data-title="Ref ID" class="Id">
              <p>#{{ referral.userRef }}</p>
            </td>
            <td data-title="Username">
              {{ referral.username }}
            </td>
            <td data-title="Email">
              {{ referral.email }}
            </td>
            <td data-title="Phone Number">
              {{ referral.phoneNumber }}
            </td>
            <td data-title="Date Used">
              {{ format_date(referral.signupDate) }}
            </td>
            <td data-title="Code Usage" class="Code-usage">
              {{ referral.refCodeUsage }} Users
            </td>
            <td class="View">
              <ArrowCircle
                @click.native="$router.push(`/referrals/${referral._id}`)"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <NoData v-show="data.length == 0" />
    </div>
    <paginate
      :page-count="amountOfPages"
      :margin-pages="2"
      :container-class="'pagination'"
      :break-view-text="'. . .'"
      :click-handler="Paginate"
    />
  </div>
</template>

<script>
import paginate from 'vuejs-paginate'
import moment from 'moment'
import NoData from './NoTableData'

export default {
  name: 'ReferralTable',
  components: {
    NoData,
    paginate
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      paginatedData: this.initialPaginate(),
      amountOfPages: Math.ceil(this.data.length / 10)
    }
  },
  methods: {
    Paginate (clickedpagenumber) {
      let currentPage = 0
      let pagesToShow = 10
      let pageCount = 1
      if (clickedpagenumber > 1) {
        while (pageCount < clickedpagenumber) {
          currentPage += 10
          pagesToShow += 10
          pageCount += 1
        }
      }

      this.paginatedData = this.data
        .sort((a, b) => {
          const referralDateA = new Date(a.signupDate)
          const referralDateB = new Date(b.signupDate)
          return referralDateB - referralDateA
        })
        .slice(currentPage, pagesToShow)
    },
    initialPaginate () {
      const initialData = this.data.sort((a, b) => {
        const referralDateA = new Date(a.signupDate)
        const referralDateB = new Date(b.signupDate)
        return referralDateB - referralDateA
      })
      return initialData.slice(0, 10)
    },
    format_date (value) {
      const today = new Date().getTime()
      const signupDate = new Date(String(value)).getTime()
      if (today === signupDate) {
        return `Today, ${moment(new Date(String(value))).format('hh:mm')}`
      }
      return moment(new Date(String(value))).format('DD MMM YYYY, hh:mm')
    }
  }
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
  width: 100%;
  border-radius: 20px;
  /* max-height: 500px;
  overflow-y: auto; */
  overflow-x: hidden;
}
table {
  table-layout: auto;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  border-spacing: 0px;
}
thead tr {
  background: #f0f2f4;
}
th {
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #75759e;
}
th,
td {
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
  background: #f9fafb;
}
tbody tr:nth-child(odd) {
  background: #ffffff;
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
  tr {
    display: flex;
    flex-direction: column;
  }
  tr:first-child {
    border-radius: 20px 20px 0px 0px;
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
  .Id,
  .View {
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
