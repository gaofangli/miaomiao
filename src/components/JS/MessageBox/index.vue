<template>
  <div class="messgaeBox">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <div>
      <div  v-if="cancel" @touchstart="handleCancel">{{cancel}}</div>
      <div  v-if="ok" @touchstart="handleOk">{{ok}}</div>
    </div>
    <!-- <MessageBox /> -->
  </div>
</template>

<script>

export default {
  name: "MessgaeBox",
  components: {
    // MessageBox
  },
  
};
</script>

<style lang="scss" scoped>
.messgaeBox {
  width: 2rem;
  height: 1.4rem;
  border: 0.01rem solid.03rem;
  border-radius: 0.04rem;
  background: white;
  box-shadow: 0.03rem 0.03rem 0.03rem 0.03rem #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -1rem;
  margin-top: -0.7rem;
  z-index: 2;
}
.messgaeBox h2 {
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.18rem;
}
.messgaeBox p {
  text-align: center;
  line-height: 0.4rem;
}
.messgaeBox > div {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.messgaeBox > div div {
  flex: 1;
  text-align: center;
  line-height: 0.3rem;
  border-right: 0.01rem solid #ccc;
}
.messgaeBox > div div:last-child {
  border: none;
}
</style>