<script>
  export let numericArray;

  import { mean, variance, stddev, nonparametricSkew } from "./stats.js";
</script>

<style>

</style>

<table>
  <caption>Normal Statistics</caption>
  <tr>
    <td>Mean</td>
    <td>
      <span>{mean(numericArray)}</span>
    </td>
  </tr>
  <tr>
    <td>Standard Deviation</td>
    <td>
      <span>{stddev(numericArray)}</span>
    </td>
  </tr>
  <tr>
    <td>Variance</td>
    <td>
      <span>{variance(numericArray)}</span>
    </td>
  </tr>
  <tr>
    <td>Nonparametric skew</td>
    <td>
      <span>{nonparametricSkew(numericArray)}</span>
    </td>
  </tr>

</table>
