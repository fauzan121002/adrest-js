let tags = document.getElementsByTagName("include");
let extendTags = document.getElementsByTagName("extends");
let app = document.getElementById("incx");
let fetchChain = [];

for (let tag of tags) {
  let src = tag.attributes["src"] ? tag.attributes["src"].value : null;

  if (src) {
    fetchChain.push(
      new Promise((resolve, reject) => {
        fetch(src)
          .then((response) => response.text())
          .then((html) => {
            resolve(html);
          })
          .catch((error) => {
            reject(error);
          });
      })
    );
  } else {
    fetchChain.push(
      new Promise((resolve, reject) => {
        resolve(tag.innerHTML);
      })
    );
  }
}

Promise.all(fetchChain).then((values) => {
  for (value of values) {
    if (app) app.insertAdjacentHTML("beforebegin", value);
    else document.body.insertAdjacentHTML("beforeend", value);
  }

  // remove() was not fully supported
  // https://caniuse.com/?search=remove
  // meanwhile removeChild()
  // https://caniuse.com/?search=removeChild
  !app || app.parentNode.removeChild(app);
  while (tags[0]) {
    tags[0].parentNode.removeChild(tags[0]);
  }
});

for (let tag of extendTags) {
  let src = tag.attributes["src"] ? tag.attributes["src"].value : null;
  if (src) {
    fetch(src)
      .then((response) => response.text())
      .then((html) => {
        let htmlElement = document.createElement("html");

        let resetHtml = htmlElement;
        resetHtml.innerHTML = html;

        let lastHtml = htmlElement;
        lastHtml.innerHTML = resetHtml.innerHTML;
        document.head.innerHTML =
          lastHtml.getElementsByTagName("head")[0].innerHTML;
        tag.innerHTML = lastHtml.getElementsByTagName("body")[0].innerHTML;

        let fragment = document.createDocumentFragment();
        while (tag.firstChild) {
          fragment.appendChild(tag.firstChild);
        }

        tag.parentNode.replaceChild(fragment, tag);
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}
