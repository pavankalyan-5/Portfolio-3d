const pageTurnBtn = document.querySelectorAll('.nextprev-btn');


pageTurnBtn.forEach((el, index) => {

    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        } else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }


    }
});

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200)
    })
}


let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
   pageNumber--;
   if(pageNumber < 0) {
       pageNumber = totalPages - 1;
   }
}

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200)
    })
}

// opening animation
const coverRight = document.querySelector('.cover.cover-right');

// opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
},2100)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
})


document.getElementById('download-cv').addEventListener('click', function() {
    // Replace 'example.pdf' with the actual path to your PDF file
    const pdfFilePath = 'Guntuboina_Pavan_Kalyan_Resume.pdf';

    // Create an anchor element
    const link = document.createElement('a');
    link.href = pdfFilePath;

    // Set the download attribute with the desired file name
    link.download = 'Pavan_Kalyan_Resume.pdf';

    // Append the anchor to the document body
    document.body.appendChild(link);

    // Trigger a click on the anchor element to start the download
    link.click();

    // Remove the anchor from the document
    document.body.removeChild(link);
});