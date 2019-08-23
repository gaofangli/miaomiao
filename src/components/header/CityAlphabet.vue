<template>
    <ul class="list">
      <li
        v-for="item of citylistArr"
        :key="item"
        :ref="item"
        @click="handeClick"
        @touchstart="handleTouchStart" 
        @touchmove="handleTouchMove" 
        @touchend= "handleTouchEnd"
      >{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props:{
          citylist : ""
        },
        data(){
          return{
            bool:false,//表示位
            starty:0,
            timer:null
          }
        },
        computed:{
          //定义一个计算属性用于盛放传递过来的值
          citylistArr(){
            const newArr=[] //定义空数组并循环遍历
            for (let i in this.citylist) {
               newArr.push(i)
            }
            return newArr
          }
        },
       updated(){
          this.startY=this.$refs["A"][0].offsetTop
       },
      methods:{
          handeClick(e){
            this.$emit('change',e.target.innerText) //非父子组件传值
          },
          handleTouchStart(){
            // 手指放上去
            this.bool=true
          },
          handleTouchMove(e){
            //在bool的判断为true的时候执行以下判断
            if(this.bool) {

              if(this.timer) {
                clearInterval(this.timer)
              }
              //使用节流函数进行控制
              this.timer = setTimeout(() => {
                const touchY = e.touches[0].clientY -79//字母列表 到蓝色头部的距离
                const index = Math.floor((touchY - this.startY ) / 20)
                if(index >=0 && index < this.citylistArr.length) {
                  this.$emit('chang',this.citylistArr[index])
                }
              },16)
            }
          },
          handleTouchEnd(){
            // 手指离开
            this.bool=false
          }
      }
    }
</script>

<style scoped lang="less">
.list{
  position: fixed;
  top: 5rem;
  width: 0.54054rem;
  height: 15.891891rem;
  text-align: center;
  right: 0;
  bottom: 0;
  li{
    width: 0.54054rem;
    height: 0.54054rem;
    line-height:0.54054rem;
    text-align: center;
    color: #25A4BB;
    font-size: 16px;
  }
}
</style>