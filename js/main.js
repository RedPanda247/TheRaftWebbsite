let debug_mode = true;


// currentley selected info document (default "summary")
let selectedInfoDocumentName = "summary";
// find all "info ducument selectors" and give them an event listener for clicks
document.querySelectorAll(".info-document-select-box--item").forEach((selector) => {
    selector.addEventListener("click", function (event) {
        // get id of the info document item that was clicked
        selectedInfoDocumentName = selector.id;

        // deactivate previousley selected document
        document.querySelectorAll(".active-info-document").forEach((activeElement) => {
            activeElement.classList.remove("active-info-document");
            activeElement.classList.add("unactive-info-document");
        });

        // set all elements with the class of that id to be active by giving them an active class
        Array.from(document.getElementsByClassName(selectedInfoDocumentName)).forEach((affected) => {
            affected.classList.add("active-info-document");
            affected.classList.remove("unactive-info-document");
        });
    });
});