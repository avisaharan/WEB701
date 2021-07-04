<script>
    import{items, loggedInUser} from '../stores'
    import axios from "axios";

    async function deleteItemFromInventory(id) {
    const response = await axios.delete('/api/items/' + id);
    if (response.data.id === id) {
      $items = $items.filter((t) => t._id !== id);
    }
  }
</script>

<table class="table container box">
  <thead>
    <tr>
      <th>Item</th>
      <th>Tokens</th>
      <th>Posted Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {#each $items as item}
  {#if (item.user_id===$loggedInUser)}
  <tr>
    <td>{item.name}</td>
    <td>{item.value}</td>
    <td>{(item.date).substring(0, (item.date).length - 14)}</td>
    <td><button class='delete' on:click={deleteItemFromInventory(item._id)}></button></td>
  </tr>
  {/if}
  {/each}
</tbody>
</table>

