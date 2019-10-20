<script>
  export let selected = "Sample Summary";

  import SampleSummary from "./SampleSummary.svelte";
  import NormalModel from "./NormalModel.svelte";
  import CentralLimit from "./CentralLimit.svelte";
  import NavButton from "./NavButton.svelte";

  const navClick = event => {
    selected = event.detail.name;
  };
</script>

<style>
  .view-grid {
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: 100px 100px 400px auto;
  }

  header {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 1;
  }

  nav {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 2;
  }
</style>

<main class="view-grid">
  <header>
    <h1>Statistics Calculator</h1>
  </header>
  <nav>
    <NavButton
      {...{ name: 'Sample Summary', selected }}
      on:message={navClick} />
    <NavButton {...{ name: 'Normal Model', selected }} on:message={navClick} />
    <NavButton {...{ name: 'Central Limit', selected }} on:message={navClick} />
  </nav>
  {#if selected == 'Sample Summary'}
    <SampleSummary />
  {:else if selected == 'Normal Model'}
    <NormalModel />
  {:else if selected == 'Central Limit'}
    <CentralLimit />
  {/if}
</main>
