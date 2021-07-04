<script>
  import { items, cartItems } from "../stores";
  function buyStuff() {

    alert("Purchase Complete");
    $cartItems = [];
    localStorage.setItem("cartItems", JSON.stringify($cartItems));
  }
</script>

<hr />
<hr />
<div class="container">
  {#if $cartItems.length > 0}
  <table class="table container box">
    <thead><tr><th /><th><b>Items In Cart</b></th><th /><th /></tr></thead>
    <thead>
      <tr>
        <th>Item</th>
        <th>Tokens</th>
        <th>Posted Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each $cartItems as item}
        <tr>
          <td>{item.name}</td>
          <td>${item.value}</td>
          <td>{item.date.substring(0, item.date.length - 14)}</td>
          <td
            ><button
              on:click={() =>
                ($cartItems = $cartItems.filter((t) => t._id !== item._id))}
              class="delete"
            />
          </td>
        </tr>
      {/each}
    </tbody>
    <tfoot>
      <tr>
        <th>Tokens Required</th>
        <th
          >{$cartItems.reduce((a, b) => ({
            value: a.value + b.value,
          })).value}</th
        >
        <th />
        <th><button on:click={buyStuff}>🛒Buy</button></th>
      </tr>
    </tfoot>
  </table>
{:else}<hr />
  <a class="button is-primary columns is-mobile is-centered" href="#/dashboard"
    ><b>No Items in Cart. Continue shopping 🛒</b>
  </a>
{/if}
</div>

<style>

</style>