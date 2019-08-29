<!-- 页面功能 author date -->
<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mockdata: {}
    }
  },
  /**
   * fn名称
   * 参数说明
   * 功能的说明
   */
  created() {
    // 请求调用示例
    /*
    this.$request.get('/user?ID=12345')
    .then(function (res) {
      // handle success
      if( res.data.errno * 1 === 0) {
        // 处理成功
        // res.data.data
      } else {
        alert(errsmg)
        // 处理其他错误码的情况
      }
    })
    .catch(function (err) {
      // handle error
      // alert('服务器错误请稍后重试。。。')
    })
    */
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
