<template>
   <div>
   	<h1>Login</h1>
   	<loginForm :onlogin="handleLogin" />
   </div>
</template>

<script>
import loginForm from '@/components/molecules/loginForm.vue'

export default {
	name: 'LoginView',

	components:{
		loginForm
	},

methods:{
	handleLogin(authInfo){
		return this.$store.dispatch('login', authInfo)
			.then(() => {
				this.$router.push({ path: '/Mypage'})
			})
			.catch(err => this.throwReject(err))
	},

	throwReject (err) { return Promise.reject(err)}
	
	}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




