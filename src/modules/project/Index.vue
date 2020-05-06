

<template lang="pug">
    .project
        Wysywig
        MobileView
</template>


<script>

import MobileView from './components/MobileView';
import Wysywig from './components/Wysywig';

export default {
    components: {
        MobileView,
        Wysywig
    }
};
</script>

<style lang="stylus" scoped>

.project
    width 100vw
    height 100vh
    display flex
    flex-direction row
    justify-content center
    align-items center

</style>
