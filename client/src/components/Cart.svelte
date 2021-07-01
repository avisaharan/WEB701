<script>
import{cartItems} from '../stores'
  import {slide} from 'svelte/transition'
  
</script>
<hr/><hr/>
{#if $cartItems.length > 0}
<div class="container">
  <h1>Items in Cart</h1>
  <span>Tokens left: </span>
  
    {#each $cartItems as item}
      <div class="notification" transition:slide={{ duration: 250 }}>
        {item.name} for ${item.value}<button
          on:click={() =>
            ($cartItems = $cartItems.filter((t) => t._id !== item._id))}
          class="delete"
        />
        <span class="is-size-7 has-text-grey date">
          {item.date}
        </span>
      </div>
    {/each}
    Total Tokens Required: {$cartItems.reduce((a, b) => ({
      value: a.value + b.value,
    })).value}
</div>
{/if}