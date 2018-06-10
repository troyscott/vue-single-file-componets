<template>
  <div>
    <h1>Slots</h1>
    <message>
      <h2>What are you doing today?</h2>
    </message>
    <message>
      <h2>Learning about Vue.js!</h2>
    </message>
    <hr><br>
    <h1>Event Bus using a SFC</h1>
    <shopping-input></shopping-input>    
    <shopping-list :shoppingList="shoppingList"></shopping-list>
    <button @click="stopListening()">Stop Listening</button>
    <hr><br>
    <h1>Props and Emit using a SFC</h1>
    <fancy-button 
      button-text="Click Me!"
      @buttonClicked="eventListener($event)"></fancy-button>
    <br><hr><br>
    <fancy-button 
      button-text="Click Me Again!"
      @buttonClicked="eventListener($event)"></fancy-button>
    <br><hr><br>
    <button @click="clickMe()">Another Button</button>
  </div>
</template>

<script>
import ShoppingInput from './components/ShoppingInput';
import ShoppingList from './components/ShoppingList';
import Message from './components/Message';
import EventBus from './EventBus';

export default {
    components: {
      ShoppingInput,
      ShoppingList,
      Message
    },
    data() {
      return {
        shoppingList: []
      }
    },
    created() {
      // Setup the EventBus for App.vue
      // listens for the addShoppingItem message
      EventBus.$on('addShoppingItem', (itemName) => {
        this.shoppingList.push(itemName);
      });

    },
    methods: {
      stopListening() {
        // stop listenining to the addShoppingItem Event
        EventBus.$off('addShoppingItem');

      },
      eventListener(message) {
        // Fancy Button Example 
        // props pass data to child components
        // emit send events/data to parent component
        // using props and emit to pass data
        alert(`Button was clicked! ${message}` );
    },
      clickMe(){
        alert('Regular button in root component')
      }
    }
}
</script>

<style>

</style>

