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
        	<div class="col-xs-6 col-xs-offset-3">
        		<ul>
  					<li class="text-danger" v-if="loginerror">{{ loginerror }}</li>
  				</ul>
       		</div>
    　 
		</div>
    </div>
</template>

<script>
export default {

data() {
	return { 
			 newemail: '',
			 newPass: '',
			 loginerror: ''
			}
	},

methods:{
	userRegister(){
		// 'userRegister' mutation is committed here
			this.$store.dispatch('userRegister', {
				email: this.newemail,
				password: this.newPass
			}).then((error) => {
				if(error) { 
					console.log(error);
					this.loginerror = error;
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




