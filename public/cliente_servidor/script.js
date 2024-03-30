document.addEventListener("DOMContentLoaded", function() {
  fetch("https://6605a0322ca9478ea180cb41.mockapi.io/app/users")
  .then(response => response.json())
  .then(data => {
      const clientList = document.getElementById("data-list");
      data.forEach(client => {
          const listItem = document.createElement("li");
          listItem.textContent = client.name; // Suponiendo que el objeto cliente tenga una propiedad "name"
          clientList.appendChild(listItem);
      });
  })
  .catch(error => {
      console.error("Error al obtener el listado de clientes:", error);
  });
});
