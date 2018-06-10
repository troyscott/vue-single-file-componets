
<template>
<div>
  <input type="text" v-model="message">
  <button @click.prevent="clicked">{{ buttonText }}</button>
</div>
</template>

<script>
// buttonText becomes button-text property
export default {
  data() {
    return {
      message: ''
    }
  },
  props: {
    buttonText: {
      type: String,
      default: 'Fancy Button Man!',
      required: true,
      validator: value => value.length > 3
    }
  },
  methods: {
    clicked() {
      this.$emit('buttonClicked', this.message);
    }
  }
}
</script>

<style scoped>

button {
  border: 1px solid black;
  padding: 10px;

}
</style>