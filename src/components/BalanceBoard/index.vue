<template>
  <div class="sign">
    <span class="icon gold">金</span>{{this.gold}}
    <span class="icon silver">银</span>{{this.silver}}
    <span class="icon copper">铜</span>{{this.copper}}
    <button v-if="!checked" class="btn btn-sm btn-primary" @click="performCheckin">签到</button>
    <button v-else class="btn btn-sm btn-primary disabled">已签到</button>
  </div>
</template>
<script>
import { getBalance, checkin, isChecked } from '@/api/users'
export default {
  name: 'BalanceBoard',
  data () {
    return {
      gold: 0,
      silver: 0,
      copper: 0,
      checked: false
    }
  },
  props: ['userId'],
  methods: {
    fetchCurrencies: function () {
      getBalance(this.userId).then(res => {
        for (var currencyIndex in res.data) {
          switch (res.data[currencyIndex].coin_type) {
            case 0: this.gold = res.data[currencyIndex].amount__sum; break
            case 1: this.silver = res.data[currencyIndex].amount__sum; break
            case 2: this.copper = res.data[currencyIndex].amount__sum; break
          }
        }
      })
    },
    performCheckin: function () {
      checkin(this.userId).then(res => {
        this.copper = this.copper + res.data.amount
        this.checked = true
      })
    }
  },
  mounted: function () {
    this.fetchCurrencies()
    isChecked(this.userId).then(res => { this.checked = res.data.checked })
  }
}
</script>
<style lang="scss">
  .sign {
    width: 275px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 0px;
    -moz-box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    -webkit-box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3490196078);
  }
  .gold {
    background: gold;
  }
  .silver {
    background: #8e8e8e;
  }
  .copper {
    background: orangered;
  }
  .sign-btn {
    display: inline-block;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(30,144,255,.8);
    color: #fff;
    border-radius: 5px;
    &:hover {
      color: #fff;
      background: rgba(30,144,255,1);
    }
  }
</style>
