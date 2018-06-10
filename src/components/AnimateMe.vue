<template>
  <div>
  <h3 v-bind:class="{ customAnimated: toggle }">I fade in!</h3>
  <button @click="toggle = !toggle">Toggle Heading/Flash Heading</button>
  <h4 v-bind:class="{animated: toggle, flash: toggle,  highlight: toggle}">Hello Vue!</h4>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggle: false
    }
  }

}
</script>

<style scoped>

.highlight {
  color: red;
}

button {
 background-color: transparent;
 padding: 5px;
 border: 1px solid black;
}

h3{
 opacity: 0;
}

@keyframes fade {
 from { opacity: 0; }
 to { opacity: 1; }
}

.customAnimated {
 animation: fade 1s;
 opacity: 1;
}
</style>
