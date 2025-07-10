document.addEventListener("DOMContentLoaded", () => {
  const offerBoxes = document.querySelectorAll(".offer-box");
  const totalPrice = document.getElementById("totalPrice");

  offerBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      offerBoxes.forEach((b) => {
        b.classList.remove("active");
        b.querySelector(".options").classList.add("hidden");
        b.querySelector("input").checked = false;
      });

      box.classList.add("active");
      box.querySelector(".options").classList.remove("hidden");
      box.querySelector("input").checked = true;

      const price = box.getAttribute("data-price");
      totalPrice.textContent = `$${parseFloat(price).toFixed(2)} USD`;
    });
  });
});
