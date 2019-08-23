<template>
  <div class="city-list" ref="city_sort">
    <div  v-for="(item,index) in cityList" :key="index" >
        <h2 :id="item.big" class="tit">{{item.big}}</h2>
        <ul>
            <li v-for="(item1,index1) in item.content" :key="index1.id">{{item1.nm}}</li>
        </ul>
    </div>
    <ul class="miaodian">
      <li  v-for="(item,index) in cityList" :key="index" @touchstart="handleToIndex(index)">{{item.big}}</li>
      <!-- <li  v-for="(item,index) in cityList" :key="index" @><a :href="'#'  + item.big">{{item.big}}</a></li> -->

    </ul>
   
  </div>
</template>

<script>
import {  changeArr} from "../unitil";
export default {
  data() {
    return {
        numArr:"QWERTYUIOPASDFGHJKLZXCVBNM".split("").sort((a,b) => a.charCodeAt() - b.charCodeAt()),
        arr:[],
        cityList: [],
        hotList: []//热门
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios({
        url: "/miao/api/cityList"
      }).then(res => {
        // console.log(res.data.data.cities);
        // this.cityList = res.data.data.cities;
         this.cityList =  changeArr( res.data.data.cities)
        console.log( this.cityList);
        this.hotList = res.data.data.cities.filter(
          (item, index) => index < 7);
          console.log(this.hotList)
      });
    },
    handleToIndex(index){
        var h2 = this.$refs.city_sort.getElementsByTagName('h2')
         this.$refs.city_sort.parentNode.scrollTop=h2[index].offsetTop-93
    }
  }
};

</script>




<style lang="scss" scoped>
.city-list{
    background: #fff0ff;
    width: 100%;
    .tit{
      height: .3rem;
      line-height: .3rem;
      text-indent: .15rem;
      background: #f0f0f0;
}
  li{
      height: .3rem;
      line-height: .3rem;
      text-indent: .15rem;
}
}

.miaodian{
  height: 100%;
  position: fixed;
  right: 0rem;
  top: .9rem;
  background: #fff;
  li{
    height: .16rem;
    a{
      color: #333;
      height: .16rem;
      line-height: .16rem;
      font-size: .12rem;
      display: block;
    }
  }
}

</style>