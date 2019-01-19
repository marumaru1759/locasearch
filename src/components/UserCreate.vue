<template>
   <div class="row">
       <div class="col-xs-6 col-xs-offset-3">
          <h1 class="midlang">会員登録</h1>
          <form v-on:submit.prevent="userRegister" class="form-horizontal">
              
            <div class="form-group">
              <label for="input_name" class="col-xs-2 control-label midlang">名前：</label>
              <div class="col-xs-10">
                <input type="text" v-model="newUser" class="form-control" id="login_name" placeholder="Name" /><br />
              </div>
            </div>
            
            <div class="form-group">
              <label for="input_password" class="col-xs-2 control-label midlang">パスワード：</label>
              <div class="col-xs-10">
                <input type="password" class="form-control" id="input_password" placeholder="Password" /></label><br />
              </div>
            </div>
            
            <div class="form-group">
              <div class="col-xs-offset-2 col-xs-10">
                <button type="submit" class="btn btn-primary btn-block">登録</button>
              </div>
            </div>
        　</form>      
    　 </div>
    </div>
</template>

<script>
export default {

data() {
	return { newUser: '',}
	},

computed:{
	users(){
		return this.$store.state.userData
		},
	},

methods:{
	userRegister(){
		// 'userRegister' mutation is committed here
		this.$store.commit('userRegister',{
			name: this.newUser,
		})
		this.newUser = ''
		this.$router.push('/users')
	},

	/*toggleRegistrationStatus(user){
		// 'toggleRegistrationStatus' mutation is committed here
		this.$store.commit('toggleRegistrationStatus',{
			id: user.id
		})
	}*/
	}
}

/*var postUser = function (params, callback){
	setTimeout(function (){
		params.id = userData.length + 1
		userData.push(params)
		callback(null, params)
	}, 1000)
}

var UserCreate ={
	template: '#user-create',
	data: function(){
		return{
			sending: false,
			user: this.defaultUser(),
			error: null
		}
	},

	created: function(){

	},

	methods:{
		defaultUser: function(){
			return{
				name: '',
				description: ''
			}
		},

		createUser: function(){
			if (this.user.name.trim() === ''){
				this.error = 'Name is mandatory'
				return
			}
			if (this.user.description.trim() === ''){
				this.error = 'Descripiton is mandatory'
				return
			}

			postUser(this.user, (function(err, user){
				this.sending = false
				if(err){
					this.error = err.toString()
				} else{
					this.error = null
					this.user = this.defaultUser()
					alert('A new user has been registered')
					this.$router.push('/')
				}
			}).bind(this))
		}
	}
}

*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




