<script>
  export let numericArray;

  import { modes, median, iqr } from "./stats.js";

  $: calculatedModes = modes(numericArray);
</script>

<style>

</style>

<table>
<caption>Central Tendencies</caption>
  <tr>
    <td>Mean</td>
    <td>
      <span>{numericArray.reduce((a,b) => a+b, 0) / numericArray.length}</span>
    </td>
  </tr>
  <tr>
    <td>Median</td>
    <td>
      <span>{median(numericArray)}</span>
    </td>
  </tr>
  <tr>
    <td>{calculatedModes.length > 1 ? "Modes" : "Mode"}</td>
    <td>
      <span>{calculatedModes}</span>
    </td>
  </tr>
</table>
