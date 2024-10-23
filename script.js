
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        console.log(json)

        let productEl = ""



        for (let product of json) {
            productEl += `
                <div class="card col-4">
                    <img src="${product.image}" class="card-img-top img-fluid p-2" style="height: 300px; object-fit: contain;" alt="...">
                    <div class="card-body">
                        <h5 class="card-title  ">${product.price}</h5>
                        <p class="card-text">${product.title}</p>
                        <a href="#" class="btn btn-primary">View More</a>
                    </div>
                    </div>
             `
        }
        let productlist = document.getElementById("productInfo")
        productlist.innerHTML = productEl
    })
