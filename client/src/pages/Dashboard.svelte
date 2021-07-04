<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import Cart from "../components/Cart.svelte";
  import InputItem from "../components/InputItem.svelte";
  import Inventory from "../components/Inventory.svelte";
  import { items, sortKey, user } from "../stores";
  import MyItems from "../components/MyItems.svelte";

  let sortKeyPrevious='';
  let itemName = "";
  let itemPrice = 0;

  function sort_by_key(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  $: onMount(async () => {
    const { data } = await axios.get("/api/items/");
    $items = data;
    if (localStorage.getItem("sortKey")) {
      $sortKey = localStorage.getItem("sortKey");
      if(localStorage.getItem('sortKey2')){
        sortKeyPrevious=localStorage.getItem('sortKey2');
        if(sortKeyPrevious==$sortKey){
          $items = sort_by_key($items, $sortKey).reverse();
        }
        else{
          $items = sort_by_key($items, $sortKey);
        }
      }
      localStorage.setItem('sortKey2',$sortKey)
    } else $sortKey = "Not defined";
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

<InputItem bind:itemName bind:itemPrice {addItemToInventory} />
<div class="box">
  <Inventory />
</div>
