<!-- HeaderBar.vue -->
<template>
	<div>
	Home Page
	<ul>
		<li v-for="n in listOfServices()">
			{{ n.service_name }}
		</li>
	</ul>
	{{ msg }}
	</div>
</template>
<script>
/* eslint-disable */
import { mapState } from 'vuex';

export default {
  name: 'app',
  data () {
    return {
      msg: 'aaaaa',
      listOfServices: function () {
        const listServices = this.$store.getters.getListServiceHomePage;
        console.log(listServices);
        return listServices;
      }
    }
  },
  computed: {
    ...mapState({
      listServices: function () {
        console.log('a');	
        const listServices = this.$store.getters.getListServiceHomePage;
        console.log(listServices);
        return listServices;
      },
    }),
  },
};
</script>