<template>
  <div>
    <button v-on:click="getSuccess">Get Success</button>
    <button v-on:click="getFail">Get Fail</button>
    <button v-on:click="post">Post</button>
  </div>
</template>

<script>
import axios from '../js/config.js'
export default {
  name: 'HelloWorld',
  methods: {
    getSuccess: function (){
      console.log('success')
      axios.get('http://jsonplaceholder.typicode.com/todos/200', {
        params: {
          clientId: 'web'
        }
      })
    },
    getFail: function (){
      console.log('fail')
      axios
      .get('http://jsonplaceholder.typicode.com/todos/201')
      .catch(error => {
        console.log(error)
        // console.log(error.response.status)
      })
    },
    post: function (){
      let user = {
        a: 2,
        id: 7,
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com'
      }
      axios.post('http://localhost:3000/users/', user)
      .then(response => {
        console.log(response.data);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
