const baseUrl = "http://local.rainydays/wp-json/wc/store/products/" + id;
const productContainer = document.querySelector(".products")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");






async function getProducts(url) {

    const response = await fetch(baseUrl);
    const product = await response.json();
    console.log(id);





    product.forEach(function (product) {
        productContainer.innerHTML += `<a href="details.html?id=${product.id}" class="products"><h2>${product.name}</h2></a><div href="details.html" class="products-image" style="background-image:url('${product.images[0].src}');"></div>`
    })
}



getProducts(baseUrl);