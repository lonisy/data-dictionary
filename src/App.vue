<template>
  <div id="app">
	  <dictionary></dictionary>
  </div>
</template>

<script type="text/ecmascript-6">
import Dictionary from './components/Dictionary'

export default {
  name: 'app',
  components: {
	  Dictionary
  }
}
</script>
<style>
#app {
	height: 100%;
}
</style>
