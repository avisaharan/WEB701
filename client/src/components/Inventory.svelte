<script>
    import {items} from "../stores";
    import {user} from "../stores";
    import {slide} from 'svelte/transition'

    function addToCart(item) {
      if(item.in_cart==true){
        return alert("Item already in cart");
      }
      else{
        function changeCart(thisItem){
          if(thisItem._id===item._id){
            thisItem.in_cart=true;
          }
        }
        
        $items.forEach(element=>changeCart(element));
        return alert("item added to cart");
      }
  //     else{
  // function changeCart(thisItem){}
  // $items.foreach(changeCart(selectedItem)
  // }
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