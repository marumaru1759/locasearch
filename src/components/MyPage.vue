<template>
<div>
	<header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Hi {{ user.email }}</h3>
          <nav class="nav nav-masthead justify-content-end">
            <router-link to="/info" class="nav-link">お知らせ</router-link>
            <a href="#" @click="logoutclick" class="nav-link">Logout</router-link>
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
	logoutclick(){
		return this.$store.dispatch('logout')
			.then(() => {
				this.$router.push({ path: '/'})
			})
			.catch(err => this.throwReject(err))
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




