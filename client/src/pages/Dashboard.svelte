<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import Cart from '../components/Cart.svelte'
  import InputItem from '../components/InputItem.svelte'
  import Inventory from '../components/Inventory.svelte'
  import {items} from "../stores";

  let itemsApi = "/api/items/";
  let itemName = "";
  let itemPrice = 0;


  onMount(async () => {
    const { data } = await axios.get(itemsApi);
    $items = data;
  });
  async function addItemToInventory() {
    const item = {
      name: itemName,
      value: itemPrice,
      date: new Date().toISOString(),
    };
    const response = await axios.post(itemsApi, item);
    $items = [response.data, ...$items];
    itemName = "";
    itemPrice = 0;
  }

  async function deleteItemFromInventory(id) {
    const response = await axios.delete(itemsApi + id);
    if (response.data.id === id) {
      $items = $items.filter((t) => t._id !== id);
    }
  }
</script>

<InputItem bind:itemName={itemName} bind:itemPrice={itemPrice} addItemToInventory={addItemToInventory}/>
<div class='box'>
  <Inventory class="is-vcentered"/>
<Cart/>
</div>


