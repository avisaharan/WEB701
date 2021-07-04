<script>
  import axios from "axios";
  import { user, tokens, cartItems } from "../stores";
  //import { items, tokensLeft, user, valueOfAllItems,valueOfAllTokens } from "../stores";

  let avgSpending;
  let avgEarning;
  let errorMessage;
  let newTokens = 0;
  // let tokensLeft=tokensLeft+0.02*(vOfAllItems-vOfYourItems-tokesinCirculation-avgEarnings+avgSpending);
  // tokensLeft=Math.floor(Math.random() * 15);
  async function generateTokens() {
    if (avgEarning > 700 || avgSpending > 700) {
      return alert(
        "You need to reduce your expenses. Currently, only poeple with less than $700 per month of earnings are eligible."
      );
    }
    if (avgEarning < avgSpending) {
      newTokens = avgSpending - avgEarning;
      try {
        const { data } = await axios.post("/api/auth/generateToken", {
          tokens: newTokens,
        });
        $tokens = data.tokens;
        avgEarning = "";
        avgSpending = "";
        return alert(`Tokens generated. Tokens Available now: ${$tokens}`);
      } catch {}
    } else {
      return alert(
        "Your earnings can't be more than spending to generate tokens."
      );
    }
  }
</script>

<div class="container">
  <div class="section">
    <h2 class="title">Generate Tokens</h2>
    <h2>
      Tokens will be calculated based on your spending habits, value of items
      available for donation, and items listed by you.
    </h2>
    <hr />
    <form on:submit|preventDefault={generateTokens}>
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
