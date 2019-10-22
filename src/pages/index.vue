
<template>
  
  <div class="main">物見の者に　物見へ物見に参れと申したも　みんな身重のお前の身を思うため</div>

</template>

<script>

  import data from '~/assets/data.yaml';

  export default {

    data() {

      return {

        data

      }

    }

  };

</script>

<style lang="scss" scoped>
  
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP');

  .main {

    display: inline-block;
    height: 60vh;
    margin: auto;

    font: normal 27px 'Noto Serif Japanese', serif;
    letter-spacing: 0.1em;
    word-wrap:break-word;
    writing-mode: vertical-rl;
    line-height: 1.9em;


  }

</style>
