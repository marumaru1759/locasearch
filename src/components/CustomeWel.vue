<template>
   <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
	<header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">ロケサーチ（仮）</h3>
          <nav class="nav nav-masthead justify-content-end">
            <router-link to="/info" class="nav-link">お知らせ</router-link>
            <router-link to="/mypage" class="nav-link">マイページ</router-link>
            <a class="nav-link" href="#">ログイン</a>
          </nav>
        </div>
      	</header>

	<main role="main" class="inner cover">
        	<h1 class="cover-heading">ロケサーチ（仮）</h1>
        	<p class="lead">あなたの行きたい場所を見つけるサイト</p>
        	<p class="lead">
          	<router-link to="/register" class="btn btn-lg btn-secondary">新規登録</router-link>
        	</p>
        </main>

	<footer class="mastfoot mt-auto">
        <div class="inner">
          <nav class="nav justify-content-center">
            <a class="nav-link" href="#">利用規約</a> 
            <a class="nav-link" href="#">当サイトについて</a>
            <a class="nav-link" href="#">お問い合わせ</a>
          </nav>
        </div>
      </footer>
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

<style>
h1, h2 {
  font-weight: normal;
  color: #ffffff
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
