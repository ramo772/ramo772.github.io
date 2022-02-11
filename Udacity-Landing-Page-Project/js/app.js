/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
//get sections to array
const sections = document.querySelectorAll("section");
//Create Items Dynamically
function myFunction() {
    for (let i = 0; i < sections.length; i++) {
        let ul = document.getElementById("ul");
        let li = document.createElement("li");
        li.classList.add("item");
        li.addEventListener("click", function() {
            goSection(i, li);
        });
        li.appendChild(
            document.createTextNode(
                sections[i].getElementsByTagName("h2")[0].innerHTML
            )
        );
        ul.appendChild(li);
    }
}
//providing information about the size of an element and its position relative to the viewport
function viewSection(section) {
    let sec = section.getBoundingClientRect();
    return (
        sec.top >= 0 &&
        sec.left >= 0 &&
        sec.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        sec.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//navigate to section when click on nav button
function goSection(i, li) {
    console.log(i, li);
    sections[i].scrollIntoView({ behavior: "smooth" });
    const x = document.querySelectorAll("li");
    sections.forEach((section) => {
        if (section == sections[i]) {
            section.classList.add("your-active-class");
            for (let j = 0; j < x.length; j++) {
                if (x[j] == li) {
                    x[j].style.color = 'green'
                } else {
                    x[j].style.color = 'black';
                }
            }
        } else {
            section.classList.remove("your-active-class");
        }
    });
}
//add active class to section viewsection return true
document.addEventListener("scroll", function() {
    sections.forEach((section) => {
        if (viewSection(section)) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    });
});

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
// Set sections as active