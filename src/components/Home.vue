<!-- HeaderBar.vue -->
<template>
	<div>
	Home Page
	<ul>
		<li v-for="n in listServices">
			{{ n.service_name }} Price: {{ n.price }}
		</li>
	</ul>
	</div>
</template>
<script>
/* eslint-disable */
import { mapState } from 'vuex';
var request = require('superagent');

export default {
  name: 'app',
  computed: {
    ...mapState({
       listServices: function () {
         request.get("https://demo6600464.mockable.io/services.json").end((err, res) => {
          if (res) {
            this.$store.dispatch('getListServiceHomePage', res.body);
          }
        });

        let listServicesHomePage1 = this.$store.getters.getListServiceHomePage;
        return listServicesHomePage1;
      },
    }),
  },
};
</script>