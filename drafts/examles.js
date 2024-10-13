document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const header = document.getElementById("header");

  let counter = 0;

  btn &&
    btn.addEventListener("click", () => {
      counter += 1;
      console.log(counter);
      header.innerText = counter.toString();
    });

  const mutationObserver = new MutationObserver((mutations) => {
    console.log(mutations);
  });

  mutationObserver.observe(header, {
    childList: true,
    attributeOldValue: true,
  });
});
