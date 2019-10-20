<script>
  export let numericArray;
  export let format = "CODE";

  $: formatted =
    format == "CODE"
      ? "[\n  " + numericArray.join(",\n  ") + "\n]"
      : numericArray.join("\n");
</script>

<style>
  .format-button {
    display: block;
  }
</style>

<table>
  <caption>Population Description</caption>
  <tr>
    <td>Sample Size</td>
    <td>{numericArray.length}</td>
  </tr>
  <tr>
    <td>Unique Values</td>
    <td>{new Set(numericArray).size}</td>
  </tr>
  <tr>
    <td>
      Sorted Array
      <button
        class="format-button"
        on:click={() => {
          format = format == 'CODE' ? 'EXCEL' : 'CODE';
        }}>
        To {format == 'CODE' ? 'Excel' : 'Code'}
      </button>
    </td>
    <td>
      <pre>{formatted}</pre>
    </td>
  </tr>
</table>
