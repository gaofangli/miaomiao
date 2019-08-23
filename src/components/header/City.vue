<template>
    <div id="app">
      <city-header  :citylist="ShowCityList"></city-header>
      <section>
          <city-list
           :hot="HotCity"
           :citylist="ShowCityList"
           :letter="letter"
          ></city-list>
        <city-alphabet :citylist="ShowCityList" @change="alphabetChange"></city-alphabet>
      </section>
    </div>
</template>

<script>
    import CityHeader from "./CityHeader";
    import CityList from "./CityList";
    import CityAlphabet from "./CityAlphabet";
    export default {
        name: "City",
      components: {CityAlphabet, CityList, CityHeader},
      data(){
          return{
            CurrentCity:[],
            HotCity:[],
            ShowCityList:[],
            letter:''
          }
      },
      created(){
        this.https.get("/miao/api/cityList").then((res)=>{
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.HotCity = data.hotCities
            this.ShowCityList = data.cities
          }
        })
      },
      methods:{
        //接收字母的值并传递给list组件
        alphabetChange(letter){
          console.log(letter)
          this.letter=letter
        }
      }
    }

</script>

<style scoped>
section{
  flex: 1;
}
</style>