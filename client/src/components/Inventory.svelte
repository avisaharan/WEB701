<script>
    export let deleteItemFromInventory
    import {items,cartItems} from "../stores";
    import {user} from "../stores";
    import {slide} from 'svelte/transition'

    function addToCart(item) {
    if ($cartItems.find((element) => element == item)) {
      return alert("Item already in cart");
    }
    $cartItems = [item, ...$cartItems];
  }
</script>

<div class="buy-item-box container">
    {#each $items as item}
      <div class="notification" transition:slide={{ duration: 250 }}>
        <span
          ><b>{item.name}</b> for ${item.value} tokens. Listed on {(item.date)}</span
        >
        {#if item.user_id==$user._id}
        <button on:click={deleteItemFromInventory(item._id) }
          >Delete From Inventory</button
        >
        {/if}
        <button on:click={addToCart(item)}>Add to Cart</button>
      </div>
    {/each}
  </div>