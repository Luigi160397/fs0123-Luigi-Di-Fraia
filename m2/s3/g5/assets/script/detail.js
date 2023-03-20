const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzOWZmOWM1NmIzNjAwMTMzZmU1NWEiLCJpYXQiOjE2NzkwNTUyMDUsImV4cCI6MTY4MDI2NDgwNX0.lNWwkb2Vjb6T3nXelLDUZccAR0IGxhsBo-tNmUvoR58";

const url = "https://striveschool-api.herokuapp.com/api/product/";
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");
const endpoint = url + selectedId;
const spinner = document.querySelector(".spinner-border");

fetch(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(data => {
    spinner.style.display = "none";
    const row = document.querySelector("#contenuto .row");
    row.innerHTML = "";
    const prodotto = data;

    createCard(prodotto.name, prodotto.brand, prodotto.imageUrl, prodotto.price, prodotto.description);
    document.querySelector("#modifica").href = `backoffice.html?id=${prodotto._id}`;
  })
  .catch(error => console.log(error));

const createCard = (name, brand, imgUrl, price, description) => {
  const row = document.querySelector("#contenuto .row");
  const col = document.createElement("div");
  col.setAttribute("class", "col");
  row.appendChild(col);

  col.innerHTML = `<div id="dettaglio" class="card mb-3 shadow-lg p-5">
  <div class="row g-0">
    <div class="col-md-8">
      <img style="object-fit: cover;" src="${imgUrl}" class="img-fluid rounded-start" alt="${name}">
    </div>
    <div class="col-md-4">
      <div class="card-body">
      <h5 class="card-title text-capitalize fw-bold display-5">${name}</h5>
      <h4 class="card-text text-capitalize"><small>Brand:</small> ${brand}</h4>
      <p class="card-text text-capitalize"><small>Prezzo:</small> ${price}€</p>
      <p class="card-text"><small>Descrizione del prodotto:</small> ${description}</p>
      </div>
    </div>
  </div>
</div>`;
};
