<script>
  export let sourceString;

  import { asNumericList } from "./parse.js";
  import FiveNumber from "./FiveNumber.svelte";
  import ArrayDescription from "./ArrayDescription.svelte";
  import CentralStatistics from "./CentralStatistics.svelte";
  import NormalStats from "./NormalStats.svelte";
  import BoxPlot from "./BoxPlot.svelte";

  import { sampleSource } from "./store.js";

  const unsubscribe = sampleSource.subscribe(value => {
    sourceString = value;
  });

  $: numericArray = asNumericList(sourceString);
</script>

<style>
  section.input {
    grid-row: 3;
    grid-column: 1 2;
  }

  section.summaries {
    grid-row: 3;
    grid-column: 2 3;
  }
</style>

<section class="input">
  <textarea
    placeholder="paste numbers here separated by whitespace and/or commas"
    rows="10"
    value={sourceString}
    on:input={ev => {
      sampleSource.update((_) => ev.target.value);
    }} />

</section>
<section class="summaries">
  <ArrayDescription {numericArray} />
  <FiveNumber {numericArray} />
  <CentralStatistics {numericArray} />
  <NormalStats {numericArray} />
  <BoxPlot {numericArray} />
</section>
