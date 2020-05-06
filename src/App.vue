<template lang="pug">
  #app
    transition(name="fade", mode="out-in", :css="true")
      router-view
    <vue-snotify></vue-snotify>
</template>
<script>
export default {
 
}
</script>
<style lang="stylus">
#app
  font-family 'TT Norms Medium'
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  overflow hidden
  min-height 100vh
  background #F2F2F2
body
  margin 0
  padding 0
  min-height 100vh
  background white
</style>


<style lang="scss">
@import "~vue-snotify/styles/material";
@import '~@sweetalert2/theme-material-ui/material-ui.scss';

</style>