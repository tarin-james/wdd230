const baseURL = "https://tarin-james.github.io/wdd230/";
const linksURL = "https://tarin-james.github.io/wdd230/Final/data/rental-info.json";

document.addEventListener("DOMContentLoaded", async function(event) {
  
  const rentalResponse = await fetch(linksURL);
  const rentalInfo = await rentalResponse.json();
  console.log(rentalInfo)

    const rentalInfoBody = document.getElementById("rental-info-body");

    rentalInfo["rental-info"].forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.type}</td>
        <td>${item["max-persons"]}</td>
        <td>${item["reservation-half-day"]}</td>
        <td>${item["reservation-full-day"]}</td>
        <td>${item["walk-in-half-day"]}</td>
        <td>${item["walk-in-full-day"]}</td>
        <td>${item.specs ? item.specs : "-"}</td>
      `;
      rentalInfoBody.appendChild(row);
    });
  });