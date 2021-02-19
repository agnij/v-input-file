<template>
  <div>
    <input-file v-model="fileList" :multiple="false" :btnColor="btnColor"></input-file>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      fileList: [],
      btnColor: '#409eff'
    }
  }
}
</script>
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
