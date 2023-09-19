import { interiorOptions } from "./interiors.js"
import { paintOptions } from "./paints.js"
import { wheelOptions } from "./wheels.js"
import { techOptions } from "./technologies.js"
import { saveOrder } from "./saveorders.js"
import { OrderList } from "./orders.js"

const container = document.querySelector('#container')

const render = async () => {
    const interiorOptionsHTML = await interiorOptions()
    const paintOptionsHTML = await paintOptions()
    const wheelOptionsHTML = await wheelOptions()
    const techOptionsHTML = await techOptions()
    const buttonHTML = await saveOrder()
    const orderHTML = await OrderList()

    const composedHTML = `
    <article class = "title">
    Cars 'R Us: Personal Car Builder
    </article>
        <article class ="choices">
    <section class="choices__paints options">
        ${paintOptionsHTML}
        </section>
    <section class="choices__interior options">
        ${interiorOptionsHTML}
        </section>
        </article>
        <article class ="choices2">
    <section class="choices__wheels options">
        ${wheelOptionsHTML}
        </section>
    <section class="choices__technologies options">
        ${techOptionsHTML}
        </section>
        </article>

        <br></br>
        
        <article class="PlaceOrder">
        ${buttonHTML}
        </article>
        <br></br>

        <article class="orders"
        <h2>Custom Car Orders</h2>
        <br></br>
            ${orderHTML}
        </article>  
       
       
    
            `

    container.innerHTML = composedHTML

}

document.addEventListener("newOrdercreated", render)

render()

