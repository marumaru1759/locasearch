<template>
   <div class="row">
       <div class="col-md-6 col-md-offset-3">
          <h1>会員登録</h1>
          <form action="" method="post" class="form-horizontal">
              
            <div class="form-group">
              <label for="input_name" class="col-md-2 control-label">名前：</label>
              <div class="col-md-10">
                <input type="text" class="form-control" id="login_name" placeholder="Name" /><br />
              </div>
            </div>
            
            <div class="form-group">
              <label for="input_password" class="col-md-2 control-label">パスワード：</label>
              <div class="col-md-10">
                <input type="password" class="form-control" id="input_password" placeholder="Password" /></label><br />
              </div>
            </div>
            
            <div class="form-group">
              <div class="col-md-offset-2 col-md-10">
                <button type="submit" class="btn btn-primary btn-block">登録</button>
              </div>
            </div>
        　</form>      
    　 </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




