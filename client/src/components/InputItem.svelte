<script>
    export let itemName="",itemPrice=0, addItemToInventory;
    $: disabled=itemName==''
    </script>

<div class="donate-item-entry-box container">
    <h1>List the items you want to donate</h1>
    <input
      class="input"
      label="itemName"
      type="text"
      placeholder="Item Name"
      bind:value={itemName}
    />
    <input
      class="input"
      label="itemPrice"
      type="number"
      placeholder="Item Price"
      bind:value={itemPrice}
    />
    <button on:click={addItemToInventory} {disabled}>Add</button>
  </div>