<template>
  <main id="app-root">
    <heading :name="name"/>
  </main>
</template>

<script>
import Heading from './components/Heading.vue'
export default {
  name: 'app-root',
  components: { Heading },
  data () {
    return {
      name: 'Fred'
    }
  }
}
</script>

<style src="../styles.css"/>
