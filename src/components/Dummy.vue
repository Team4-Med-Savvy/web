<template>
    <div>
        <div v-for="item in list" v-bind:key="item.id">
         <div class="col-12 col-md-3 " >
                <div class="card shadow h-100">
                  <img class="card-img-top img-fluid" src="@/assets/covidessentials.jpeg" alt="carrot" height="200px">
                    <div class="card-body">
                        <div class="card-title" ><h5>{{item.employee_name}}</h5></div>
                        <div class="card-text" style="font-family: 'Trebuchet MS', sans-serif;">{{item.employee_salary}}</div>
                        <div><button type="button" class="btn btn-success mt-2 py-1"></button>{{item.emplyee_age}}</div>
                    </div>
                    <a href="/#/product" class="stretched-link"></a>
                </div>
        </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default{
  name: 'Dummy',
  data () {
    return {list: undefined}
  },
  mounted () {
    Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then((resp) => {
        this.list = resp.data.data
        console.warn(resp.data.data)
      })
  }
}
</script>
