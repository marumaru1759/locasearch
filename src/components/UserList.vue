<template>
   <div id="user-list">UserList</div>
   <div v-for="user in users": key="user.id">
   	<h2> {{ user.name}} </h2>
   </div>
</template>

<script src="./showlist.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




