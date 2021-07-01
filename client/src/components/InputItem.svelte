<script>
    export let itemName="",itemPrice=0, addItemToInventory;
    $: disabled=itemName==''
    let donate=true
    </script>
<div class='container'>
  <div class="field">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">List the items you want to Donate</label>
    <div class="control">
      <input class="input" type="text" placeholder="e.g Potatoes" bind:value={itemName}>
    </div>
  </div>
  
  
  <div class="field">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">Item Price</label>
    <div class="control">
      <input class="input" type="number" placeholder="Leave it blank if you want to list the item for Free" bind:value={itemPrice}>
    </div>
  </div>
  <button class="button" on:click={addItemToInventory} {disabled}>Add</button>
</div>

