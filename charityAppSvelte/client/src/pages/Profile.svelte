<script>
  import axios from "axios";
  import {user} from '../stores'
  //import { items, tokensLeft, user, valueOfAllItems,valueOfAllTokens } from "../stores";
  import { push } from "svelte-spa-router";
  let oldPassword;
  let newPassword;
  let avgSpending;
  let avgEarning;
  // let tokensLeft=tokensLeft+0.02*(vOfAllItems-vOfYourItems-tokesinCirculation-avgEarnings+avgSpending);
// tokensLeft=Math.floor(Math.random() * 15);

  let errorMessage;
  let successMessage;

  $: if (oldPassword) {
    errorMessage = null;
  }

  async function changePassword() {
    try {
      await axios.post("/api/auth/update-password", {
        oldPassword,
        newPassword
      });
      oldPassword = "";
      newPassword = "";
      successMessage = "Password was updated correctly";
    } catch (error) {
      if (error.response.data.message === "IncorrectPasswordError") {
        oldPassword = "";
        newPassword = "";
        errorMessage = "Wrong old password";
      }
    }
  }
</script>

<div class="container">
  <div class="section">
    <h2 class="title">Change password</h2>
    <hr />
    {#if successMessage}
      <div class="notification is-success">{successMessage}</div>
    {/if}
    <form on:submit|preventDefault={changePassword}>
      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Old Password</label>
        <div class="control">
          <input
            type="password"
            bind:value={oldPassword}
            class="input"
            required
            class:is-danger={errorMessage} />
          {#if errorMessage}
            <p class="help is-danger">{errorMessage}</p>
          {/if}
        </div>
      </div>
      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">New Password</label>
        <div class="control">
          <input
            type="password"
            bind:value={newPassword}
            class="input"
            required />
        </div>
      </div>
      <div class="control">
        <input type="submit" class="button is-info is-light" value="Submit" />
      </div>
    </form>
  </div>

</div>
<hr />
<div class="container">
  <div class="section">
    <h2 class="title">Generate Tokens</h2>
    <h2>You can change this only once in every three months. Tokens allocated will be calculated based on your requirements, spending habits and value of items available for donation, and items listed by you.</h2>
    <hr />
    {#if successMessage}
      <div class="notification is-success">{successMessage}</div>
    {/if}
    <form on:submit|preventDefault={()=>$user.token=$user.token+Math.random()*15}>
      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Avg Monthly Spending </label>
        <div class="control">
          <input
            type="number"
            bind:value={avgSpending}
            class="input"
            required
            class:is-danger={errorMessage} />
          {#if errorMessage}
            <p class="help is-danger">{errorMessage}</p>
          {/if}
        </div>
      </div>
      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Avg Monthly Income</label>
        <div class="control">
          <input
            type="number"
            bind:value={avgEarning}
            class="input"
            required />
        </div>
      </div>
      <div class="control">
        <input type="submit" class="button is-info is-light" value="Submit" />
        
      </div>
      Tokens Available : {$user.tokens}
    </form>
  </div>

</div>
