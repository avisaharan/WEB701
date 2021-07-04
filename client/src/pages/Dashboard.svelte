<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import Cart from '../components/Cart.svelte'
  import InputItem from '../components/InputItem.svelte'
  import Inventory from '../components/Inventory.svelte'
  import {items, user} from "../stores";
import MyItems from "../components/MyItems.svelte";

  let itemName = "";
  let itemPrice = 0;


  onMount(async () => {
    const { data } = await axios.get("/api/items/");
    $items = data;
  });
  async function addItemToInventory() {
    const item = {
      name: itemName,
      value: itemPrice,
      date: new Date().toISOString(),
    };
    const response = await axios.post("/api/items/", item);
    $items = [response.data, ...$items];
    itemName = "";
    itemPrice = 0;
  }
</script>
<InputItem bind:itemName={itemName} bind:itemPrice={itemPrice} addItemToInventory={addItemToInventory}/>
<div class='box'>
  <Inventory/>
</div>


