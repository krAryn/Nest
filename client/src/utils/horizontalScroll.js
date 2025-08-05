
/**
 * This function Enables Smooth Horizontal Scrolling within a target element
 * @param {*} targetElement An Overflow X enabled, HTML element object
 * @param {String} direction Either Prev or Next
 */
export function slide(targetElement, direction) {
    direction = String(direction).toLowerCase()
    let intId
    
    // For Next Button
    if (direction === "next") {
        intId = setInterval(() => {
            targetElement.scrollLeft += 5
        }, 1)
    } else {
        // For Prev Button
        intId = setInterval(() => {
            targetElement.scrollLeft -= 5
        }, 1)
    }
    setTimeout(() => {
        clearInterval(intId)
    }, 300)
}