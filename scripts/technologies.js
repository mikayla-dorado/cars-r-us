import {setTechId} from "./transientstate.js"


const handleTechnologyChoice = (changeEvent) => {
    if (changeEvent.target.id === "tech") {
       const chosenOption = changeEvent.target.value
       setTechId(parseInt(chosenOption))
    }
 }


export const techOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technologies.map( (tech) => {
            return `<option value="${tech.id}">${tech.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}


    document.addEventListener("change", handleTechnologyChoice)
