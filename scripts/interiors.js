import {setInteriorId} from "./transientstate.js"


const handleInteriorChoice = (changeEvent) => {
    if (changeEvent.target.id === "resource") {
       const chosenOption = changeEvent.target.value
       setInteriorId(parseInt(chosenOption))
    }
 }


export const interiorOptions = async () => {
    const response = await fetch("http://localhost:8088/interior")
    const interiors = await response.json()

    let html = `<h2>Interiors</h2>`

    html += '<select id="interior">'
    html += '<option value="0">Select an interior package</option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.fabric}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += `</select>`
    return html
}


    document.addEventListener("change", handleInteriorChoice) //do we need this? why?
