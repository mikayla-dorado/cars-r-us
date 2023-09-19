export const OrderList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=technology&_expand=wheel&_expand=interior&_expand=paint") 
    const orders = await response.json()

    let orderHTML = ""
        for (const order of orders) {
            const orderPrice = order.paint.price + order.wheel.price + order.interior.price + order.technology.price
            orderHTML += `<section class = "order">
            <div>${order.paint.color} car with ${order.wheel.wheel} wheels, ${order.interior.fabric}, and the ${order.technology.package} package for a total cost of $${orderPrice}.</div>
            </section>`
        }
    return orderHTML
}