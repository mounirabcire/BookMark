// Lenis configuration
// const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//     console.log(e);
// });

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// BOOKS DATA
const books = [
    {
        title: "To Kill a Mockingbird",
        description:
            "Harper Lee’s classic novel of a young girl growing up in the racially charged American South. It's a deeply moving story about morality, justice, and empathy.",
        price: "$10.99",
        img: "assets/imgs/to-kill-a-mockingbird.png",
    },
    {
        title: "1984",
        description:
            "George Orwell’s dystopian masterpiece set in a totalitarian regime, where surveillance and censorship dominate every aspect of life. A chilling vision of the future.",
        price: "$9.99",
        img: "assets/imgs/1984.png",
    },
    {
        title: "The Great Gatsby",
        description:
            "F. Scott Fitzgerald’s iconic novel about love, wealth, and the American Dream in the Roaring Twenties. The story of Jay Gatsby’s unrequited love for Daisy Buchanan.",
        price: "$8.99",
        img: "assets/imgs/The Great Gatsby.png",
    },
    {
        title: "Pride and Prejudice",
        description:
            "Jane Austen’s beloved novel about the manners and matrimonial machinations of early 19th-century England, centering on the spirited Elizabeth Bennet and the enigmatic Mr. Darcy.",
        price: "$7.99",
        img: "assets/imgs/Pride and Prejudice.png",
    },
];

// VARIABLES
let currentBook = 0;
let isMenuOpen = false;

const meunu = document.querySelector(".menu");

const booksContainer = document.querySelector(".books--left");
const bookPrice = document.querySelector(".books__price");
const bookName = document.querySelector(".books__name");
const bookDesc = document.querySelector(".books__desc");
const bookCover = document.querySelector(".books__img");
const bookCoverSm = document.querySelector(".books__img--sm");

const nextBook = document.querySelector(".books__btn--next");
const prevBook = document.querySelector(".books__btn--previous");

// HANDLE NEXT BOOK
nextBook.addEventListener("click", function () {
    currentBook++;
    prevBook.style.cursor = "pointer";
    prevBook.style.pointerEvents = "auto";
    prevBook.classList.remove("books__icon--inactive");

    const book = books[currentBook];

    bookPrice.textContent = book.price;
    bookName.textContent = book.title;
    bookDesc.textContent = book.description;
    bookCover.src = book.img;
    bookCoverSm.src = book.img;

    if (currentBook === books.length - 1) {
        nextBook.classList.add("books__icon--inactive");
        nextBook.style.cursor = "not-allowed";
        nextBook.style.pointerEvents = "none";
        return;
    }
});

// HANLDE PREVIOUS BOOK
prevBook.addEventListener("click", function () {
    currentBook--;
    nextBook.style.cursor = "pointer";
    nextBook.style.pointerEvents = "auto";
    nextBook.classList.remove("books__icon--inactive");

    const book = books[currentBook];

    bookPrice.textContent = book.price;
    bookName.textContent = book.title;
    bookDesc.textContent = book.description;
    bookCover.src = book.img;
    bookCoverSm.src = book.img;

    if (currentBook === 0) {
        prevBook.classList.add("books__icon--inactive");
        prevBook.style.cursor = "not-allowed";
        prevBook.style.pointerEvents = "none";
        return;
    }
});

meunu.addEventListener("click", function () {
    document.querySelector(".nav__list").classList.toggle("nav__list--active");
});
