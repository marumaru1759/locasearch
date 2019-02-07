<template>
<div>
	<header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Hi {{ user.email }}</h3>
          <nav class="nav nav-masthead justify-content-end">
            <router-link to="/info" class="nav-link">お知らせ</router-link>
            <router-link to="/logout" class="nav-link">Logout</router-link>
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




