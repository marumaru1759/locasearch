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

data: function(){
	return { message: "hello" }
},

computed:{
		user(){
			return this.$store.state.currentUser	
		}
},

methods:{

save(){
		this.$store.dispatch('save')
	},

restore(){
		this.$store.dispatch('restore')
	}
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




