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
    let oldContent = tag.innerHTML;
    tag.innerHTML = "";
    fetchChain.push(
      new Promise((resolve, reject) => {
        resolve(oldContent);
      })
    );
  }
}

Promise.all(fetchChain).then((values) => {
  for (value of values) !app || app.insertAdjacentHTML("beforebegin", value);
});

for (let tag of extendTags) {
  let src = tag.attributes["src"] ? tag.attributes["src"].value : null;
  if (src) {
    fetch(src)
      .then((response) => response.text())
      .then((html) => {
        let htmlElement = document.createElement("html");

        let htmlReset = htmlElement;
        htmlReset.innerHTML = html.outerHTML;

        let lastHtml = htmlElement;
        lastHtml.innerHTML = htmlReset.innerHTML;
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
