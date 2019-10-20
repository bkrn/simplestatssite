


export const asNumericList = (str) => {
    let array = str.split(/(?:,|\s)/).filter((c) => c).map(parseFloat);
    array.sort((a, b) => a - b);
    return array
}