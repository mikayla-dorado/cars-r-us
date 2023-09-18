import {setPaintId} from "./transientstate.js"


const handlePaintChoice = (changeEvent) => {
    if (changeEvent.target.id === "resource") {
       const chosenOption = changeEvent.target.value
       setPaintId(parseInt(chosenOption))
    }
 }


export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paint")
    const paints = await response.json()

    let html = "<h2>Paints</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint package</option>'

    const arrayOfOptions = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

    document.addEventListener("change", handlePaintChoice) //do we need this? why?
