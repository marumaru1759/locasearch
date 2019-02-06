<template>
  	<form novalidate　class="form-horizontal">
  				<div class="form-group" >
  					<label for="email" class="col-xs-2 control-label midlang">E-mail</label>
  					<div class="col-xs-10">
  						<input
  							id="email"
  							v-model="email"
  							type="text"
  							autocomplete="off"
  							placeholder="your email"
  							@focus="resetError"
  							class = "form-control"
  						>
  					</div>
  				</div>

  				<div class="form-group">
  					<label for="password" class="col-xs-2 control-label midlang">Password</label>
  					<div class="col-xs-10">
						<input
  							id="password"
  							v-model="password"
  							type="password"
  							autocomplete="off"
  							placeholder="your password"
  							@focus="resetError"
  							class = "form-control"
  						>
  					<ul>
  						<li class ="midlang" v-if="!validation.password.required">Password is mandatory</li>
  					</ul>
  					</div>
              </div>                
              
  			<div class="form-group">
  				<loginButton
  					@click="handleClick">Login
  				</loginButton>
  			</div>
  	</form>
</template>


<script>
import loginButton from '@/components/atoms/loginButton.vue'

const required = val => !!val.trim()

export default {
	name: 'loginForm',

	components: {
		loginButton
	},

	props: {
		onlogin:{
			type: Function,
			required: true
		}
	},

	data (){
		return{
			email: '',
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
	},


	methods: {
		resetError(){
			this.error = ''
		},

		handleClick(ev){
			this.progress = true //
			this.error = ''

			this.$nextTick(() => {
				this.onlogin({ email: this.email, password: this.password })
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




