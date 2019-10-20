<script>
  export let numericArray;

  import { percentile, median, iqr } from "./stats.js";
</script>

<style>

</style>

<table>
<caption>Five (Six) Number Summary</caption>
  <tr>
    <td>Minimum</td>
    <td>
      <span>{Math.min(...numericArray)}</span>
    </td>
  </tr>
  <tr>
    <td>First Quartile</td>
    <td>
      <span>{percentile(25, numericArray)}</span>
    </td>
  </tr>
  <tr>
    <td>Median</td>
    <td>
      <span>{median(numericArray)}</span>
    </td>
  </tr>
  <tr>
    <td>Third Quartile</td>
    <td>
      <span>{percentile(75, numericArray)}</span>
    </td>
  </tr>
  <tr>
    <td>Maximum</td>
    <td>
      <span>{Math.max(...numericArray)}</span>
    </td>
  </tr>
  <tr>
    <td>IQR</td>
    <td>
      <span>{iqr(numericArray)}</span>
    </td>
  </tr>
</table>
