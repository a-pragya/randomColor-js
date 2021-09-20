const btn = document.querySelector('button')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
btn.addEventListener('click', () => {
    console.log("hey")
    randomColorArray = randomColor()
    randomColorString = `rgb( ${randomColorArray[0]}, ${randomColorArray[1]}, ${randomColorArray[2]})`
    body.style.backgroundColor = randomColorString
    h1.innerHTML = randomColorString
    if (randomColorArray[1] < 90) {
        console.log("dark")
        h1.style.color = 'bisque'
        btn.style.color = 'bisque'
        btn.style.borderColor = 'bisque'
    }
    else {
        h1.style.color = 'black'
        btn.style.color = 'black'
        btn.style.borderColor = 'black'

    }

})

function randomColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const colorArray = [r, g, b]
    return colorArray
    // console.log(`in randomColor, rgb: rgb( ${r}, ${g}, ${b})`)
    // return `rgb( ${r}, ${g}, ${b})`
}