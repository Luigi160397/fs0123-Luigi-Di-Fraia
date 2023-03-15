const spinner = document.querySelector(".spinner-border");
spinner.style.display = "block";

fetch("https://striveschool-api.herokuapp.com/books")
  .then(res => res.json())
  .then(data => {
    spinner.style.display = "none";
    const books = data;
    for (const book of books) {
      createCard(book.title, book.price, book.img);
    }
  })
  .catch(error => console.log(error));

const createCard = (title, price, imgs) => {
  const row = document.querySelector(".row");
  const col = document.createElement("div");
  col.setAttribute("class", "col px-1");
  row.appendChild(col);

  const card = document.createElement("div");
  card.setAttribute("class", "card rounded-5 border-dark");
  col.appendChild(card);

  const img = document.createElement("img");
  img.setAttribute("class", "card-img-top img-fluid");
  img.setAttribute("src", imgs);
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title text-truncate");
  cardTitle.innerText = title;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text fs-4 fst-italic");
  cardText.innerText = `${price} €`;
  cardBody.appendChild(cardText);

  const buttons = document.createElement("div");
  buttons.setAttribute("class", "d-flex gap-3 justify-content-center");
  cardBody.appendChild(buttons);

  const cardLink = document.createElement("a");
  cardLink.setAttribute("class", "btn btn-danger px-4 fw-bold");
  cardLink.setAttribute("href", "#");
  cardLink.innerText = "Scarta";
  cardLink.addEventListener("click", event => {
    event.preventDefault();
    col.remove();
  });
  buttons.appendChild(cardLink);

  const cardLink2 = document.createElement("a");
  cardLink2.setAttribute("class", "btn btn-outline-danger px-4 fw-bold");
  cardLink2.setAttribute("href", "#");
  cardLink2.innerHTML = `<i class="bi bi-cart3"></i>`;
  cardLink2.addEventListener("click", event => {
    event.preventDefault();
    const listGroup = document.querySelector(".list-group");
    const li = document.createElement("li");
    li.textContent = title;
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-outline-danger", "px-4", "fw-bold");
    removeButton.innerHTML = `<i class="bi bi-trash3"></i>`;
    removeButton.addEventListener("click", () => {
      li.parentNode.removeChild(li);
    });
    li.appendChild(removeButton);
    listGroup.appendChild(li);
  });
  buttons.appendChild(cardLink2);
};
