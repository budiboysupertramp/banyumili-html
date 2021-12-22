const container = document.querySelector(".content-product-detail");
// gambar besar
const change = document.querySelector(".img-product-detail");

container.addEventListener("click", function(e){

    // untuk mengganti gambar
    if( e.target.className == "img-preview-product") {
        change.src = e.target.src;
    }
    

});