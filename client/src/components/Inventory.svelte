<script>
    import {items, user, cartItems, tokens, tokensRequired} from "../stores";
    $tokensRequired=0;
  if($cartItems.length>0){
    $tokensRequired=$cartItems.reduce((a, b) => ({
            value: a.value + b.value,
  })).value;
  }

    function addToCart(itemToAdd) {
      document.getElementById('lastRow').style.display = "";
      document.getElementById('cartRow').style.display = "";
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

<div>
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
      <td>{item.value}</td>
      <td>{(item.date).substring(0, (item.date).length - 14)}</td>
      <td><button
        on:click={addToCart(item)}
          class="add button is-info is-light"
        >🛒 Add to Cart</button>
      </td>
    </tr>
    {/each}
    <tr id='cartRow' style="display: none;">
      <td><b>Cart Total:</b></td>
      <td>{$tokensRequired}</td>
      <td></td>
      <td><a class="add button is-primary is-light" href="#/cart">    View Cart </a></td>
    </tr>
    <tr id="lastRow" style="display: none;">
      <td><b>Tokens Available</b></td>
      <td>{$tokens}</td>
      <td></td>
      <td><a class="add button is-primary is-light" href="#/generateTokens">Update Tokens</a></td>
    </tr>
  </tbody>
</table>
{/if}
</div>

<style>
  .container{
    
  }
</style>