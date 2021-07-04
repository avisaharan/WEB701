<script>
    import {items, user, cartItems} from "../stores";


    function addToCart(itemToAdd) {
      if($cartItems.find(item=>item._id==itemToAdd._id)){
        return alert(`${itemToAdd.name} is already in cart.`)
      }
      else{
        $cartItems=[itemToAdd,...$cartItems]
        localStorage.setItem("cartItems", JSON.stringify($cartItems))
        return alert(`${itemToAdd.name} added to cart.`)
      }
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