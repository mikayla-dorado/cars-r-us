import {setWheelId} from "./transientstate.js"


const handleWheelChoice = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
       const chosenOption = changeEvent.target.value
       setWheelId(parseInt(chosenOption))
    }
 }


export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let html = "<h2>Wheels</h2>"

    html += '<select id="wheel">'
    html += '<option value="0">Select a wheel package</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.wheel}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}


    document.addEventListener("change", handleWheelChoice) //do we need this? why?