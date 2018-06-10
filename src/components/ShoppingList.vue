<template>
  <div>
    <ul>
      <li v-for="item in shoppingList" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import EventBus from '../EventBus';

export default {
  props: ['shoppingList'],
  created() {
    // Setup the EventBus for Shopping List
    // listens for the addShoppingItem message
    EventBus.$on('addShoppingItem', (item) => {
      console.log(`There was an item added! ${item}`);
    });
  }
}
</script>

<style>

</style>
