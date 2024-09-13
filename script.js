document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById("navbar");
    const trigger = document.getElementById("scrollTrigger");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }, { threshold: 0 });

    observer.observe(trigger);



    // Scroll to next section when clicking scroll icon
    const scrollIcon = document.querySelector('.scroll-indicator');
    scrollIcon.addEventListener('click', () => {
        window.scroll({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});



// 
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Function to move to the next item
function moveNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

// Function to move to the previous item
function movePrev() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]); // here the length of items = 6
}

// Add event listeners for manual navigation
next.addEventListener('click', moveNext);
prev.addEventListener('click', movePrev);

// Automatically scroll every 5 seconds
setInterval(moveNext, 5000);




// 
window.addEventListener('load', () => {
    const rows = document.querySelectorAll('.row');

    rows.forEach((row) => {
        const rowWidth = row.scrollWidth;
        const clones = [];
        const items = Array.from(row.children);

        // Clone elements to create infinite scroll effect
        items.forEach(item => {
            const clone = item.cloneNode(true);
            row.appendChild(clone);
            clones.push(clone);
        });

        let scrollPosition = 0;
        let scrollStep = row.classList.contains('scroll-center') ? 0.5 : 1; // Speed of the scroll

        function animateScroll() {
            scrollPosition += scrollStep;
            if (scrollPosition >= rowWidth) {
                scrollPosition = 0;
            }
            row.style.transform = `translateX(-${scrollPosition}px)`;
            requestAnimationFrame(animateScroll);
        }

        animateScroll();
    });
});
