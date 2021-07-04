<script>
  import { items, cartItems, tokens, tokensRequired } from "../stores";
  import axios from "axios";  
  let newTokens=0;

  async function buyStuff(){
    if($tokens>$tokensRequired){
    newTokens=$tokens-$tokensRequired;
    try{
      const { data } = await axios.post("/api/auth/generateToken", { "tokens": newTokens });
      $tokens=data.tokens;
    } catch{}

    try{
      const {data}= await axios.post("/api/items/buyStuff", { "cartItems": $cartItems });
      $cartItems=[];
      return alert("Purchase Complete, tokens remaining: " + $tokens);
    }catch{}
    }
    else {
      return alert("Please update your tokens or reduce cart value.")
    }
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
          <td>{item.value}</td>
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
        <th><button class="button is-primary is-light" on:click={buyStuff}>🛒 Buy</button>
      </tr>
      <tr>
        <th><b>Token Balance: {$tokens} </b></th>
        <th></th>  
        <th></th>
        <th><a class="button is-primary is-light" href="#/generateTokens">Update Tokens</a></th>
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