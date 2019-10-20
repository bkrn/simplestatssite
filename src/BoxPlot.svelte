<script>
  import { afterUpdate, beforeUpdate } from "svelte";
  export let numericArray;

  import { percentile, median, iqr, mean, stddev } from "./stats.js";
  import rough from "roughjs/dist/rough.umd";

  const scaleArray = array => {
    let scale = 200 / (Math.max(...array) - Math.min(...array));
    let adj = (Math.max(...array) + Math.min(...array)) / 2;
    let arr = array.map(v => ((v - adj) * scale) + 125);
    console.log(Math.max(...arr), Math.min(...arr))
    return arr
  };

  const outliers = array => {
    let q1 = percentile(25, array);
    let q3 = percentile(75, array);
    let iqRange = iqr(array);
    let lower = q1 - 1.5 * iqRange;
    let upper = q3 + 1.5 * iqRange;
    return {
      outer: array.filter(v => v < lower || v > upper),
      main: array.filter(v => v >= lower && v <= upper)
    };
  };

  const initBox = array => {
    let scaled = scaleArray(array);
    let { outer, main } = outliers(scaled);
    return {
      y: { start: 10, end: 30, middle: 20 },
      x: {
        max: Math.max(...main),
        q3: percentile(75, scaled),
        median: median(scaled),
        q1: percentile(25, scaled),
        min: Math.min(...main)
      },
      outliers: outer
    };
  };

  beforeUpdate(() => {
    const canvas = document.getElementById("boxplot");
    if (canvas) {
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    }
  });

  afterUpdate(() => {
    const rc = rough.canvas(document.getElementById("boxplot"));
    const box = initBox(numericArray);
    console.log(box)
    box.x.iqr = box.x.q3 - box.x.q1;
    // main box
    rc.rectangle(box.x.q1, box.y.start, box.x.iqr, box.y.end - box.y.start); // box
    rc.line(box.x.median, box.y.start - 5, box.x.median, box.y.end + 5); // median
    rc.line(box.x.min, box.y.middle, box.x.q1, box.y.middle); // left whisker
    rc.line(box.x.q3, box.y.middle, box.x.max, box.y.middle); // right whisker
    rc.line(box.x.min, box.y.start, box.x.min, box.y.end); // left whisker stop
    rc.line(box.x.max, box.y.start, box.x.max, box.y.end); // right whisker stop

    // outliers
    const outlier = { size: 3 };
    for (let point of box.outliers) {
      rc.line(
        point - outlier.size,
        box.y.middle - outlier.size,
        point + outlier.size,
        box.y.middle + outlier.size
      );
      rc.line(
        point - outlier.size,
        box.y.middle + outlier.size,
        point + outlier.size,
        box.y.middle - outlier.size
      );
    }
  });
</script>

<canvas width="250" height="50" id="boxplot" />
