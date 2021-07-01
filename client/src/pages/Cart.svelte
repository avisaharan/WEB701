<script>
      import {Cart} from "../components/Cart.svelte"
      import {cartItems} from '../stores'
</script>

{#if $cartItems>0}
<Cart />
{:else}<hr/>
        <a class="button is-primary columns is-mobile is-centered" href="#/dashboard"><b>No Items in Cart.
            Continue shopping 🛒</b>
        </a>
{/if}