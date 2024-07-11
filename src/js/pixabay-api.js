import markUpMaker from "./render-functions";

function request(key, q) {
    fetch(`https://pixabay.com/api/?key=${key}&q="${q}"&image_type="photo"&orientation="horizontal"&safesearch="true"`)
    .then(resp => {
        if (!resp.ok) {
            throw new Error(resp.status)
        }

        return resp.json();
    })
    .then(data => {
        markUpMaker(data);
    })
    .catch(error => console.log(error))
}

export default request;