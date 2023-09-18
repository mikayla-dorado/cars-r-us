// export const OrderList = async () => {
//     const response = await fetch("http://localhost:8088/orders") //this url came from POSTMAN, need it here to see/use all data
//     const orders = await response.json()

//     let orderHTML = ""
//         for (const order of orders) {
//             const orderPrice = order.metal.price + order.style.price + order.size.price
//             orderHTML += `<section class = order">
//             <div>Order # ${order.id} costs $${orderPrice}</li>
//             </section>`
//         }
//     return orderHTML
// }