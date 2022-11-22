export function toPascalCase(value) {
    return value.split("").map((x, i) => (i === 0 ? x.toUpperCase() : x.toLowerCase())).join("");
}