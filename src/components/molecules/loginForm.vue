<template>
  <form novalidate=>
  	<div class="form-item">
  		<label for="name">UserName</label>
  		<input
  			id="name"
  			v-model="name"
  			type="text"
  			autocomplete="off"
  			placholder="your name"
  			@focus="resetError"
  		>
  	</div>
  	<div class="form-item">
  		<label for="password">Password</label>
  		<input
  			id="password"
  			v-model="password"
  			type="password"
  			autocomplete="off"
  			placeholder="your password"
  			@focus="resetError">
  		<ul>
  			<li v-if="!validation.password.required">Password is mandatory</li>
  		</ul>
  	</div>

  	<div class="form-actions">
  		<loginButton
  			@click="handleClick">Login
  		</loginButton>
  	</div>
  </form>
</template>

</template>

<script>
import loginButton from '@/component/atoms/loginButton.vue'

const required = val => !!val.trim()

export default {
	name: 'loginForm',

	components: loginButton

	props: {
		onlogin:{
			type: Function,
			required: true
		}
	},

	data (){
		return{
			name: '',
			password: '',
			progress: false,
			error: ''
		}
	},

	computed: {
		validation(){
			return{
				password: {
					required: required(this.password)
				}
			}
		}
	}


	methods: {
		resetError(){
			this.error = ''
		},

		handleClick(ev){
			this.progress = true //
			this.error = ''

			this.$nextTick(() => {
				this.onlogin({ name: this.name, password: this.password })
				.catch(err => {
					this.error = err.message
				})
				.then(() => {
					this.progress = false
				})
			})

		}
	}

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="../css/style.css"></style>




