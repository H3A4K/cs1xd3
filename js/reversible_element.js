/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 01 02 26
 * Date Modified : 27 02 26
 * 
 * Toggling direction of children of a parent element
 */

class Reversible_Element {
    /**
     * Allows the children of a parent element to be reversed in direction in the DOM.
     * Inserts an image depicting the current direction of the list into the toggle_element.
     * 
     * @param {String} parent_element_ID the ID of the parent_element
     * @param {String} toggle_element_ID the ID of the toggle button element
     * @param {Array<String>} reversed_element_types the HTML element types that are to be included in reversing direction. If blank, will defalt to all elements
     */
    constructor(parent_element_ID, toggle_element_ID, reversed_element_types, start_as_reversed = false) {
        this.sub_elements = [];
        if (!reversed_element_types) {
            this.sub_elements = Array.from(document.getElementById(parent_element_ID).children);
        } else {
            this.sub_elements = [];
            reversed_element_types.forEach((type) => {
                document.querySelectorAll(`#${parent_element_ID} ${type}`).forEach((element) => {
                    this.sub_elements.push(element);
                });
            });
        }

        this.parent_element_ID = parent_element_ID;
        this.reversed_element_types = reversed_element_types;

        this.toggle_element = document.getElementById(toggle_element_ID);
        this.toggle_element.addEventListener("click", () => this.toggle_direction());

        this.toggle_img = document.createElement("img");
        this.toggle_img.setAttribute("src", "./assets/imgs/arrows/down.png");
        this.toggle_img.classList.add("dark-invert");

        this.toggle_element.appendChild(this.toggle_img);
        this.reversed = false;

        if (start_as_reversed) {
            this.toggle_direction();
        }
    }

    /**
     * Toggles the direction of the allowed items contained in the element
     */
    toggle_direction() { // https://stackoverflow.com/questions/74510705/how-to-instantly-reverse-flexbox-item-order-with-non-full-row-at-the-bottom
        this.reversed = !this.reversed;

        if (this.reversed) {
            this.sub_elements.forEach((item, index, arr) => item.style.order = arr.length - index);
            this.toggle_img.setAttribute("src", "./assets/imgs/arrows/up.png");
        } else {
            this.sub_elements.forEach((item) => item.style.order = "");
            this.toggle_img.setAttribute("src", "./assets/imgs/arrows/down.png");
        }
    }
}