

let Products = () => {
    function productsPopulate(imageUrl, AddLike) {
        let html = `
 <div class="product-content"
            style="height: 30vh;width: 30vh; background-color: blue; display: flex; align-items: center; justify-content: center;">
            <img src="${imageUrl}" alt="img">
            <button id="btn" style="color: white; background-color: black; padding:5px 10px ;">${AddLike}</button>
        </div>`
        document.querySelector(".product").innerHtml = document.querySelector(".product").innerHtml + html;
    }

    productsPopulate("ss.jpg", "Add Like");
    productsPopulate("ss.jpg", "Add Like");
    productsPopulate("ss.jpg", "Add Like");
    productsPopulate("ss.jpg", "Add Like");
}
Products();
let flag = 1;
Array.from(document.getElementsByTagName("button")).forEach(e => {

    e.addEventListener("click", (x) => {
        if (flag == 1) {
            Array.from(document.getElementsByTagName("button")).forEach(e => {
                e.innerHTML = "Liked"
            })

            flag = 0;
        } else {
            Array.from(document.getElementsByTagName("button")).forEach(e => {
                e.innerHTML = "Add Like"
            })
            flag = 1;
        }
    })
})