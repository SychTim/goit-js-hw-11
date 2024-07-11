import request from "./js/pixabay-api";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

const key = "44874409-49a696090f67a7075082072ae";

form.addEventListener("submit", searchImages);

function searchImages(evt) {
    evt.preventDefault();
    gallery.innerHTML = `<p class="info-load">Loading images, please wait...</p>`

    // const q = form.imgName.value.split(" ").filter(word => {if (word !== "") {
    //         return true;
    //     }
    //     return false
    // }).join("+");
    request(key, encodeURIComponent(form.imgName.value.trim()));
    form.imgName.value = "";
}
