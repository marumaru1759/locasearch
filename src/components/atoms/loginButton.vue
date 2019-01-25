<template>
  <button
  	class="btn btn-primary btn-block"
  	type="button"
  	@click="handleClick"
  >
  <slot />
</button>
</template>

<script>
export default {
	name: 'loginButton',

	props: {
		type: {
			type: String,
			default: 'button'
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		handleClick(ev){
			this.$emit('click', ev)
		}
	}

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="../css/style.css"></style>




