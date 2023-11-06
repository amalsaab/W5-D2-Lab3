let width = document.getElementById("width")
let height = document.getElementById("height")
let color = document.getElementById("color")
let border = document.getElementById("border")
let reset = document.getElementById("reset")
let output = document.getElementById("output")


width.addEventListener("change", () => {
    output.style.width = `${width.value}%`
})
height.addEventListener("change", () => {
    output.style.height = `${height.value}%`
})
color.addEventListener("change", () => {
    console.log(color.value);
    output.style.background = `${color.value}`
})
border.addEventListener("change", () => {
    output.style.borderRadius = `${border.value}px`
})
reset.addEventListener("click", () => {
    output.style.width = `30%`
    output.style.height = `40%`
    color.value = 'blue'
    output.style.background = `blue`
    output.style.borderRadius = `0px`

})
