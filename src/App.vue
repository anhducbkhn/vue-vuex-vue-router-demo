<template>
  <div class="menu-links">
	  <div>
	   <img src="./assets/logo.png" />    
	  </div>
		<router-link to="/">HOME</router-link>
		<router-link to="/about">ABOUT</router-link>
		<router-view />
  </div>

</template>

<script>

export default {
  name: 'app',
};
</script>
