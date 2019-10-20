

export const percentile = (val, array) => {
    if (array.length < 2) {
        return undefined;
    }
    let stepSize = 100 / array.length;
    let last = array[0];
    let percentile = stepSize;
    for (let ix = 1; ix < array.length; ix++) {
        percentile += stepSize;
        if (percentile == val) {
            return array[ix];
        } else if (percentile > val) {
            return (last + array[ix]) / 2;
        }
        last = array[ix];
    }
    return last;
}

export const median = (array) => {
    return percentile(50, array)
}

export const iqr = (array) => {
    return percentile(75, array) - percentile(25, array)
}

export const modes = (array) => {
    const counts = {};
    for (let ix = 0; ix < array.length; ix++) {
        if (!counts[array[ix]]) {
            counts[array[ix]] = 0;
        }
        counts[array[ix]]++;
    }
    const max = Object.entries(counts).reduce((a, b) => a[1] > b[1] ? a : b)[1];
    return Object.entries(counts).filter((a) => a[1] == max).map((a) => a[0]);
}

export const mean = (array) => {
    return array.reduce((a,b) => a + b) / array.length
}

export const variance = (array) => {
    const xhat = mean(array);
    return array.map(v => Math.pow(v - xhat, 2)).reduce((a,b) => a + b) / (array.length - 1);
}

export const stddev = (array) => {
    return Math.sqrt(variance(array))
}

export const nonparametricSkew = (array) => {
    return (mean(array) - median(array)) / stddev(array)
}