<script>
  import { cartItems } from "../stores";
  import { slide } from "svelte/transition";
</script>

<hr />
<hr />
{#if $cartItems.length > 0}
    <table class="table container box">
      <thead><tr><th></th><th><b>Items In Cart</b></th><th></th><th></th></tr></thead>
    <thead>
      <tr>
        <th>Item</th>
        <th>Tokens</th>
        <th>Posted Date</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {#each $cartItems as item}
    <tr>
      <td>{item.name}</td>
      <td>${item.value}</td>
      <td>{(item.date).substring(0, (item.date).length - 14)}</td>
      <td><button
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
<th>{$cartItems.reduce((a, b) => ({
  value: a.value + b.value,
})).value}</th>
<th></th>
<th></th>
    </tr>
  </tfoot>
</table>

{/if}




