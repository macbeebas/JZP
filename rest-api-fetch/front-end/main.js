import { renderApp } from "./app";
import "./style.css";

const rootNode = document.querySelector("#app");

const { renderShoppingList } = renderApp(
  rootNode,
  onDeleteItem,
  onAddItem,
  onEditItem
);

let list = [];

fetch("http://localhost:3000/items").then((response) => {
  if (response.ok) {
    response.json().then((data) => {
      list = data;
      renderShoppingList(list);
    });
  }
});

function onDeleteItem(item) {
  fetch(`http://localhost:3000/items/${item.id}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      list = list.filter((i) => i !== item);
      renderShoppingList(list);
    }
  });
}

function onAddItem(item) {
  fetch("http://localhost:3000/items", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        list = [...list, data];
        renderShoppingList(list);
      });
    }
  });
}

function onEditItem(item) {
  fetch(`http://localhost:3000/items/${item.id}`, {
    method: "PATCH",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      const index = list.LastIndexOf(item);
      list[index] = item;
      renderShoppingList(list);
    }
  });
}
