<template>
<div>
   <div id="user-list">
   	<h1 class="midlang">UserList</h1>
   	<h2 class="midlang">{{ message }}</h2>
   </div>
   <h2 class="midlang"> {{ user.uid }} Hi {{ user.email }}. Your Password is {{ user.password }} </h2>
</div>
</template>

<script>
export default {

computed: {
	user(){
		this.$store.commit('getCurrentUser');
	},
},

data() {
	return { message: 'hello' }
},

methods:{

save(){
		this.$store.dispatch('save')
	},

restore(){
		this.$store.dispatch('restore')
	}
}





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




