let includeTags = document.getElementsByTagName("include");
let extendTags = document.getElementsByTagName("extends");

for (let tags of includeTags) {
  fetch(tags.attributes["src"].value /*, options */)
    .then((response) => response.text())
    .then((html) => {
      tags.innerHTML = html;
    })
    .catch((error) => {
      console.warn(error);
    });
}

for (let tags of extendTags) {
  fetch(tags.attributes["src"].value /*, options */)
    .then((response) => response.text())
    .then((html) => {
      let resetElement = document.createElement("html");
      resetElement.innerHTML = html;

      let resetElement2 = document.createElement("html");
      resetElement2.innerHTML = resetElement.outerHTML;

      let lastHtml = document.createElement("html");
      lastHtml.innerHTML = resetElement2.innerHTML;

      document.head.innerHTML = lastHtml.getElementsByTagName(
        "head"
      )[0].innerHTML;

      tags.innerHTML = lastHtml.getElementsByTagName("body")[0].innerHTML;

      var fragment = document.createDocumentFragment();

      while (tags.firstChild) {
        fragment.appendChild(tags.firstChild);
      }

      tags.parentNode.replaceChild(fragment, tags);
    })
    .catch((error) => {
      console.warn(error);
    });
}
