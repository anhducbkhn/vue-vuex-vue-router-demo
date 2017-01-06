<!-- HeaderBar.vue -->
<template>
	<div>
	Home Page
	<ul>
		<li v-for="n in listServices" @click="testClick(n.url)">
      {{ n.service_name }} Price: {{ n.price }}
		</li>
	</ul>
	</div>
</template>
<script>
/* eslint-disable */
import { mapState } from 'vuex';
import router from '.././router';

var request = require('superagent');

export default {
  name: 'app',
  created: function () {
    request.get("https://demo6600464.mockable.io/services.json").end((err, res) => {
      if (res) {
        this.$store.dispatch('getListServiceHomePage', res.body);
      }
    });
  },
  computed: {
    ...mapState({
       listServices: function () {
        return this.$store.getters.getListServiceHomePage;
      },
    }),
  },
  methods: {
    testClick: function (url) {
      console.log(url);
      router.push({path: '/booking/' + url});
    }
  }
};
</script>