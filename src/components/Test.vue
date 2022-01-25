<template>
    <div>
      <h1>hello</h1>
    <ul>
      <li  v-for="product in allProducts" :key="product.id">
        {{product.price}} | {{product.title}}
      </li>
    </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  name: 'Test',
  computed: mapGetters(['allProducts'])
}
</script>
