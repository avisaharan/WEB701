<script>
  import Router, { wrap, push } from "svelte-spa-router";
  
  import Home from "./components/Home.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Signup from "./components/Signup.svelte";
  import Login from "./components/Login.svelte";
  import Profile from "./components/Profile.svelte";
  import Cart from "./components/Cart.svelte"
  import MyItems from "./components/MyItems.svelte"
  import Navbar from "./components/Navbar.svelte";
  import Loading from "./components/Loading.svelte";
  import { onDestroy, onMount } from "svelte";
  import axios from "axios";
  import { user,loggedInUser, cartItems, tokens } from "./stores";
import PasswordReset from "./components/PasswordReset.svelte";
import GenerateTokens from "./components/GenerateTokens.svelte";
  let loading = true;
  onMount(async () => {
    const { data } = await axios.get("/api/auth/user");
    $user = data.user;
    if($user){
      $loggedInUser=$user._id;
    $tokens=data.user.tokens;
    }
    $cartItems=JSON.parse(localStorage.getItem('cartItems'))
    loading = false;
});

  const routes = {
    "/": wrap(Home, { reason: "authenticated" }, () => !$user),
    "/dashboard": wrap(Dashboard, { reason: "unauthenticated" }, () => $user),
    "/signup": wrap(Signup, { reason: "authenticated" }, () => !$user),
    "/login": wrap(Login, { reason: "authenticated" }, () => !$user),
    "/profile": wrap(Profile, { reason: "unauthenticated" }, () => $user),
    "/cart": wrap(Cart, { reason: "unauthenticated" }, () => $user),
    "/myItems": wrap(MyItems, { reason: "unauthenticated" }, () => $user),
    "/passwordReset": wrap(PasswordReset, { reason: "unauthenticated" }, () => $user),
    "/generateTokens": wrap(GenerateTokens, { reason: "unauthenticated" }, () => $user),
  };

  function conditionsFailed(event) {
    const { reason } = event.detail.userData;
    switch (reason) {
      case "unauthenticated":
        return push("/login");
      case "authenticated":
        return push("/dashboard");
    }
  }
</script>
<style>
  .loading-container {
    max-width: 500px;
    display: flex;
    min-height: 100vh;
    align-content: center;
    margin: auto;
  }
</style>
{#if loading}
  <div class="loading-container">
    <Loading />
  </div>
{:else}
  <Navbar />
  <Router {routes} on:conditionsFailed={conditionsFailed} />
{/if}
