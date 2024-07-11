import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

function markUpMaker(data) {
    if (data.hits.length
        === 0) {
        iziToast.show({
            title: 'Error',
            message: "Sorry, there are no images matching your search query. Please try again!",
            backgroundColor: "red"
        });
        gallery.innerHTML = "";
        return;
    }
    const markUp = data.hits.map(({comments, downloads, views, likes, largeImageURL, webformatURL, tags}) => {
    return `
        <a class="gallery-item" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}">
            <div class="inscriptions">
            <div>
                <p class="insc-name">Likes</p>
                <p class="insc-value">${likes}</p>
            </div>
            <div>
                <p class="insc-name">Views</p>
                <p class="insc-value">${views}</p>
            </div>
            <div>
                <p class="insc-name">Comments</p>
                <p class="insc-value">${comments}</p>
            </div>
            <div>
                <p class="insc-name">Downloads</p>
                <p class="insc-value">${downloads}</p>
            </div>
            </div>
        </a>`
        }).join("");
    gallery.innerHTML = markUp;

    const lightbox = new SimpleLightbox('.gallery a');
}

export default markUpMaker;