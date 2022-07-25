<template>
  <view class="content-box">
    <view class="bank-data-list" v-for="(item, index) in data" :key="index" @click="jumpDetail(index)">
      <view class="bank-data-text" >{{item.name}}</view>
      <view>
        <image v-if="item.dataType==0" class="expand-butten"></image>
      </view>
    </view>
  </view>
</template>


<script>
const dataList = [
  {
    dataID: "12233",
    bankTypeID: "103344445",
    dataType: "0",
    code: "122",
    name: "中国银行",
    shortName: "中国银行",
    enName: "Bank of China",
    bankTypeName: "中国银行",
    country: "中国",
    area: "山东省济南市",
    address: "历下区",
    lhh: "2000000",
    swiftcode: "",
    annualReview: "2022 - 0 - 10",
    bankanglea_Name: "2000000",
    bankangleb_Name: "",
    note: "test"
  },
  {
    dataID: "12234 ",
    bankTypeID: "103344445",
    dataType: "1",
    code: "123",
    name: "中国银行",
    shortName: "中国银行",
    enName: "Bank of China",
    bankTypeName: "中国银行",
    country: "中国",
    area: "山东省济南市",
    address: "历下区",
    lhh: "2000000",
    swiftcode: "",
    annualReview: "2022 - 0 - 10",
    bankanglea_Name: "2000000",
    bankangleb_Name: "",
    note: "test"
  }
];
import {getBankOrganize} from "@/common/http.api";
export default {
  name: "bank-organize",
  data() {
    return {
      data:[],
      Param: {
        bankTypeID:'',
        dataType:0,
        dataID: 0
      }
    }
  },
  mounted() {
    this.getBankOrganizeApi();
  },
  methods: {
    jumpDetail(index) {
      if (!this.data) {
        return
      }
      uni.navigateTo({
        url: `/pages/bank/bank-base-detail?bankTypeID=`+this.data[index].bankTypeID+"&dataType="+this.data[index].dataType+"&dataID="+this.data[index].dataID
      })
    },
    getBankOrganizeApi() {
      this.data = dataList
      /*this.data = getBankOrganize();*/
    }
  }
}
</script>

<style lang="scss" scoped>
.content-box{
  border-top: 1px solid rgba(81, 120, 159, 0.25);
  background-color: #FFFFFF;
}
.bank-data-text{
  font-size: 16px;
  color: #333333;
  font-weight: 400;
  margin-top: 10px;
}
.expand-butten{
  width: 40px;
  height: 40px;
  background: red;
  margin-right: 10px;

}
.bank-data-list{
  height: 44px;
  margin-left: 16px;
  margin-right: 16px;
  border-bottom: 1px solid rgba(81, 120, 159, 0.25);
  display: flex;
  justify-content: space-between;
}
</style>