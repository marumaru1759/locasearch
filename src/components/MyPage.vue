<template>
<div>
	<header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Hi {{ user.email }}</h3>
          <nav class="nav nav-masthead justify-content-end">
            <a href="#" @click="googleSearch" class="nav-link">Push</a>
          </nav>
        </div>
    </header>
   <div id="user-list">
   	<h3 class="midlang">{{ user.uid }}</h3>
   </div>
</div>
</template>

<script>
export default {

computed:{
		user(){
			return this.$store.state.currentUser	
		}
},

methods:{
	googleSearch(){
		return this.$store.dispatch('googleSearch')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




