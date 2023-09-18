import { saveOrderSubmission } from "./transientstate.js"

const handleOrderSubmissionClick = (clickEvent) => {
    if (clickEvent.target.name === "saveOrder") {
        saveOrderSubmission()
    }
}

export const saveOrder = () => {
    document.addEventListener("click", handleOrderSubmissionClick)

    return "<div><button class='button' name='saveOrder'> Place Order </button></div>"
}