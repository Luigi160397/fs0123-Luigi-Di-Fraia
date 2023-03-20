const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzOWZmOWM1NmIzNjAwMTMzZmU1NWEiLCJpYXQiOjE2NzkwNTUyMDUsImV4cCI6MTY4MDI2NDgwNX0.lNWwkb2Vjb6T3nXelLDUZccAR0IGxhsBo-tNmUvoR58";

const url = "https://striveschool-api.herokuapp.com/api/product/";

const spinner = document.querySelector(".spinner-border");

fetch(url, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(data => {
    const row = document.querySelector("#contenuto .row");
    row.innerHTML = "";
    spinner.style.display = "none";
    const prodotti = data;
    for (const prodotto of prodotti) {
      createCard(prodotto.name, prodotto.brand, prodotto.imageUrl, prodotto.price, prodotto._id);
    }
  })
  .catch(error => console.log(error));

const createCard = (name, brand, imgUrl, price, id) => {
  const row = document.querySelector("#contenuto .row");
  const col = document.createElement("div");
  col.setAttribute("class", "col");
  row.appendChild(col);

  col.innerHTML = `<div class="card shadow">
  <img style="object-fit: cover; object-position: top;
  height: 200px;" src="${imgUrl}"  class="card-img-top img-fluid" alt="card-pic" />
  <div class="card-body text-center">
    <h5 class="card-title text-capitalize">${name}</h5>
    <p class="card-text text-capitalize">${brand}</p>
    <p class="card-text text-capitalize">${price}€</p>
    <div class="d-flex justify-content-center gap-2">
      <a href="detail.html?id=${id}" class="btn btn-success text-nowrap">Scopri di più</a>
      <a href="backoffice.html?id=${id}" class="btn btn-outline-success">Modifica</a>
    </div>
  </div>
</div>`;
};
