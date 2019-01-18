<template>
<div>
   <div id="user-list">
   	<div class="loading" v-if="loading">Loading....</div>
   	<h1 class="midlang">UserList</h1>
   	<h2>{{ message }}</h2>
   </div>
   <div v-for="user in users" :key="user.id">
   	<h2 class="midlang"> Hi {{ user.name }} </h2>
   </div>
</div>
</template>

<script>
export default {

computed: {
	users(){
		return this.$store.state.userData
	},

data: {
	message: 'hello'
}

},

/*const getUsers = function(callback){
	setTimeoout(function(){
		callback(null, userData)
	},1000)
}*/

/*const UserList = {
	template: '#user-list',
	data: function(){
		return{
			loading: false,
			users: function () { return this.$store.state.userData },
			error: null,
			message: ""
		}
	},
*/
/*	created: function (){
		this.fetchData()
	},*/

/*	watch: {
		'$route': 'fetchData'
	},*/

/*	methods: {
		fetchData: function(){
			this.loading = true
			getUsers((function(err,users){
				this.loading = false
				if(err){
					this.error = err.toString()
				}else{
					this.users = users
				}
			}).bind(this))
		}
	}
}*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




