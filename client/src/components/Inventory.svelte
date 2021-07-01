<script>
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

{#if $items.length > 0}
    <table class="table container box">
      <thead><tr><th></th><th><b>Buy these</b></th><th></th><th></th></tr></thead>
    <thead>
      <tr>
        <th>Item</th>
        <th>Tokens</th>
        <th>Posted Date</th>
        <th>Add to Cart</th>
      </tr>
    </thead>
    <tbody>
    {#each $items as item}
    <tr>
      <td>{item.name}</td>
      <td>${item.value}</td>
      <td>{(item.date).substring(0, (item.date).length - 14)}</td>
      <td><button
        on:click={addToCart(item)}
          class="add"
        >🛒Add to Cart</button>
      </td>
    </tr>
    {/each}
  </tbody>
</table>
{/if}