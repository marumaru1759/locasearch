<template>
	<div class="row">
   		<div class="col-xs-6 col-xs-offset-3">
   	<h1>Login</h1>
   	<loginForm :onlogin="handleLogin" />
   		</div>
   		<ul>
  			<li class="text-danger" v-if="loginerror">{{ loginerror }}</li>
  		</ul>
   	</div>
</template>

<script>
import loginForm from '@/components/molecules/loginForm.vue'

export default {
	name: 'LoginView',

	components:{
		loginForm
	},

	data() {
	return { 
			 loginerror: ''
			}
	},

methods:{
	handleLogin(authInfo){
		return this.$store.dispatch('login', authInfo)
			.then((error) => {
				if(error){
					console.log(error);
					this.loginerror = error;
				} else {
					console.log("success");
					this.$router.push({ path: '/Mypage'})
				}
				
			})
			.catch(err => this.throwReject(err))
	},

	throwReject (err) { return Promise.reject(err)}
	
	}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




