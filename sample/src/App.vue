<template>
  <!--使用-->
  <div style="background-color: #f6f6fb;">
    <center/>
  </div>
</template>

<script>
/*引用*/
  import center from './components/center/center.vue'

  export default {
    name: 'App',
    components: {
      //注册
      center,
    },
    data(){
      return{
        windowWidth:window.innerWidth
      };
    },
    methods: {
      handleResize() {
        this.windowWidth = window.innerWidth;
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    }
  }
</script>

<style>

</style>
