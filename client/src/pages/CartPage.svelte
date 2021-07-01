<script>
      import Cart from "../components/Cart.svelte"
      import {cartItems} from '../stores'

</script>
{#if $cartItems.length>0}
<Cart />
<button class=button> Buy these using tokens</button>
{:else}<hr/>
        <a class="button is-primary columns is-mobile is-centered" href="#/dashboard"><b>No Items in Cart.
            Continue shopping 🛒</b>
        </a>
{/if}