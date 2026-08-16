let currentPage = 1;

function nextPage() {

    const current = document.querySelector(
        `.page-${currentPage}`
    );

    current.classList.remove("active");

    currentPage++;

    const next = document.querySelector(
        `.page-${currentPage}`
    );

    if (next) {
        next.classList.add("active");
    }

}


function restart() {

    const current = document.querySelector(
        `.page-${currentPage}`
    );

    current.classList.remove("active");

    currentPage = 1;

    const first = document.querySelector(".page-1");

    first.classList.add("active");

}

const noButton = document.getElementById("noButton");

noButton.addEventListener("pointerdown", function (e) {
    e.preventDefault();
    moveNoButton();
});

function moveNoButton() {

    const card = document.querySelector(".page-3 .message-card");

    const cardRect = card.getBoundingClientRect();

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const padding = 15;

    const maxX = cardRect.width - buttonWidth - padding * 2;
    const maxY = 180;

    const randomX =
        Math.random() * maxX - maxX / 2;

    const randomY =
        Math.random() * maxY - maxY / 2;

    noButton.style.position = "absolute";

    noButton.style.left =
        `calc(50% + ${randomX}px)`;

    noButton.style.top =
        `${randomY}px`;
}