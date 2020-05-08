<template lang="pug">
  #app(v-loading="loading")
    transition(name="fade", mode="out-in", :css="true")
      router-view
    <vue-snotify></vue-snotify>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      setLoadingStatus: "main/setLoadingStatus",
    })
  },
  computed: {
    ...mapGetters({
      getLoadingStatus: "main/getLoadingStatus",
    }),
    loading: {
      get(){
        return this.getLoadingStatus
      },
      set(val) {
        return this.setLoadingStatus(val)
      }
    },
  }
 
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