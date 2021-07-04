<script>
      import axios from "axios";
  import { user, tokens } from "../stores";
  //import { items, tokensLeft, user, valueOfAllItems,valueOfAllTokens } from "../stores";

  let avgSpending;
  let avgEarning;
  let errorMessage;
  // let tokensLeft=tokensLeft+0.02*(vOfAllItems-vOfYourItems-tokesinCirculation-avgEarnings+avgSpending);
  // tokensLeft=Math.floor(Math.random() * 15);

  async function generateTokens(){
    try {
      await axios.post("/api/auth/generateTokens", {
        avgEarning,
        avgSpending,
      });
      avgEarning = "";
      avgSpending = "";
      successMessage = "Tokens generated";
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
      <h2 class="title">Generate Tokens</h2>
      <h2>
        You can change this only once in every three months. Tokens allocated will
        be calculated based on your requirements, spending habits and value of
        items available for donation, and items listed by you.
      </h2>
      <hr />
      <form
        on:submit|preventDefault={generateTokens}
      >
        <div class="field">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">Avg Monthly Spending </label>
          <div class="control">
            <input
              type="number"
              bind:value={avgSpending}
              class="input"
              required
              class:is-danger={errorMessage}
            />
            {#if errorMessage}
              <p class="help is-danger">{errorMessage}</p>
            {/if}
          </div>
        </div>
        <div class="field">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">Avg Monthly Income</label>
          <div class="control">
            <input type="number" bind:value={avgEarning} class="input" required />
          </div>
        </div>
        <div class="control">
          <input type="submit" class="button is-info is-light" value="Submit" />
        </div>
        Tokens Available : {$tokens}
      </form>
    </div>
  </div>
  