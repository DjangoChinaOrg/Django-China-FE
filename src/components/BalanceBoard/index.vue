<template>
  <div class="sign">
    <span class="icon gold">金</span>{{this.gold}}
    <span class="icon silver">银</span>{{this.silver}}
    <span class="icon copper">铜</span>{{this.copper}}
    <a href="" class="sign-btn">签到</a>
  </div>
</template>
<script>
import { getBalance } from '@/api/users'
export default {
  name: 'BalanceBoard',
  data () {
    return {
      gold: 0,
      silver: 0,
      copper: 0
    }
  },
  props: {
    userId: Number
  },
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
    }
  },
  mounted: function () {
    this.fetchCurrencies()
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
