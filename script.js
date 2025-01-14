

let fontSize = localStorage.getItem('fontSize') ? parseInt(localStorage.getItem('fontSize')) : 16;

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.fontSize = fontSize + "px";
});
function increaseFontSize() {
    fontSize += 1;
    document.body.style.fontSize = fontSize + "px";
    localStorage.setItem('fontSize', fontSize);
}
function decreaseFontSize() {
    fontSize -= 1;
    if (fontSize < 12) {
        fontSize = 12;
    }
    document.body.style.fontSize = fontSize + "px";
    localStorage.setItem('fontSize', fontSize);
}


// event listener waits until the DOM is fully loaded
// retrieves the current URL of the page, removes any fragment identifiers, and converts the URL to lowercase
// selects all <a> elements that are inside navbar
// compares the link's URL with the current location.
// if the link's URL matches the current location, it adds the active class to the link -> style is applied
document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = window.location.href.split('#')[0].toLowerCase();
    document.querySelectorAll('.navbar a').forEach(link => {
        if (link.href.split('#')[0].toLowerCase() === currentLocation) {
            link.classList.add('active');
        }
    });
});

// event listener waits until the DOM is fully loaded
// selects the first element in the document with the class skip-link
// makes skiplink to be on focus when the page is opened
document.addEventListener('DOMContentLoaded', () => {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.focus();
    }
});


