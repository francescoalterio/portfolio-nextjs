export function toPascalCase(value) {
    if(typeof value !== 'string') return
    return value.split(" ").map(word => {
        return word.split("").map((x, i) => (i === 0 ? x.toUpperCase() : x.toLowerCase())).join("");
    }).join(" ")
}