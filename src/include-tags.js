let includeTags = document.getElementsByTagName("include");

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
