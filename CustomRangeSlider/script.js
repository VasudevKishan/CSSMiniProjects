const range = document.getElementById("range");

range.addEventListener("input", (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");

    const labelWidth = getComputedStyle(label).getPropertyValue("width");

    // to remove 'px' in width value
    const num_rangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2);

    const num_lebelWidth = +labelWidth.substring(0, labelWidth.length - 2);

    const max = +e.target.max;
    const min = +e.target.min;

    const left =
        value * (num_rangeWidth / max) -
        num_lebelWidth / 2 +
        scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;

    label.innerText = value;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
