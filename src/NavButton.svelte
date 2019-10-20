<script>
  export let name;
  export let selected;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function changeSelection() {
    dispatch("message", {
      name
    });
  }

  $: isSelected = name == selected;
</script>

<style>
  button::-moz-focus-inner {
    border: 0;
  }
  button {
    background: darkgray;
    display: inline-block;
    padding: 5px 10px 6px;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    line-height: 1;
    text-shadow: 0 -1px 1px #222;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);
    user-select: none;
  }

  button:disabled {
    background: darkorange;
  }
</style>

<button disabled={isSelected} on:click={changeSelection}>{name}</button>
