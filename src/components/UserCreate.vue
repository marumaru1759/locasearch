<template>
   <div class="row">
       <div class="col-xs-6 col-xs-offset-3">
          <h1 class="midlang">会員登録</h1>
          <form v-on:submit.prevent="userRegister" class="form-horizontal">
          	
          	<div class="form-group">
              <label for="input_email" class="col-xs-2 control-label midlang">E-mail：</label>
              <div class="col-xs-10">
                <input type="text" v-model="newemail" class="form-control" id="input_email" placeholder="your email" /><br />
              </div>
            </div>
            
            <div class="form-group">
              <label for="input_password" class="col-xs-2 control-label midlang">パスワード：</label>
              <div class="col-xs-10">
                <input type="password" v-model="newPass" class="form-control" id="input_password" placeholder="your password" /></label><br />
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
	return { 
			 newemail: '',
			 newPass: ''
			}
	},

methods:{
	/*userRegister(){
		// 'userRegister' mutation is committed here
		this.$store.dispatch('userRegister',{
			email: this.newemail,
			password: this.newPass
		})
		.then(function(){
			if( this.newemail === this.$store.state.currentUser.email){
				this.newemail = '';
				this.newPass = '';
				console.log("Success");
				this.$router.push('Mypage');
			} else {
				this.newemail = '';
				this.newPass = '';
				console.log("failed");
			}
		})
	},*/

	userRegister(){
		// 'userRegister' mutation is committed here
			this.$store.dispatch('userRegister', {
				email: this.newemail,
				password: this.newPass
			}).then((error) => {
				if(error) { 
					console.log(error);
				} else {
					console.log("success");
					this.$router.push('Mypage');
				}
				
			});			
		
	}

}

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




