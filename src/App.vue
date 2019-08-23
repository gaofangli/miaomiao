<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 0.16rem;
}
li,
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
body,
html {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
}
input {
  border: none;
  outline: none;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
@media screen and (min-width: 320px) {
  html {
    font-size: 100px;
  }
}
@media screen and (min-width: 375px) {
  html {
    font-size: 117.1875px;
  }
}
@media screen and (min-width: 414px) {
  html {
    font-size: 129.375px;
  }
}
@media screen and (min-width: 640px) {
  html {
    font-size: 200px;
  }
}
@media screen and (min-width: 768px) {
  html {
    font-size: 240px;
  }
}
@font-face {
  font-family: "iconfont";
  src: url(./components/iconfont/iconfont.eot),
    url(./components/iconfont/iconfont.ttf),
    url(./components/iconfont/iconfont.woff),
    url(./components/iconfont/iconfont.woff2);
}
</style>
