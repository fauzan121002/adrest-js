let tags = document.getElementsByTagName("include"),
  extendTags = document.getElementsByTagName("extends"),
  app = document.getElementById("incx"),
  fetchChain = [];
for (let e of tags) {
  let t = e.attributes.src ? e.attributes.src.value : null;
  if (t)
    fetchChain.push(
      new Promise((e, n) => {
        fetch(t)
          .then((e) => e.text())
          .then((t) => {
            e(t);
          })
          .catch((e) => {
            n(e);
          });
      })
    );
  else {
    let t = e.innerHTML;
    (e.innerHTML = ""),
      fetchChain.push(
        new Promise((e, n) => {
          e(t);
        })
      );
  }
}
Promise.all(fetchChain).then((e) => {
  for (value of e) !app || app.insertAdjacentHTML("beforebegin", value);
});
for (let e of extendTags) {
  let t = e.attributes.src ? e.attributes.src.value : null;
  t &&
    fetch(t)
      .then((e) => e.text())
      .then((t) => {
        let n = document.createElement("html"),
          a = n;
        a.innerHTML = t.outerHTML;
        let r = n;
        (r.innerHTML = a.innerHTML),
          (document.head.innerHTML =
            r.getElementsByTagName("head")[0].innerHTML),
          (e.innerHTML = r.getElementsByTagName("body")[0].innerHTML);
        let l = document.createDocumentFragment();
        for (; e.firstChild; ) l.appendChild(e.firstChild);
        e.parentNode.replaceChild(l, e);
      })
      .catch((e) => {
        console.warn(e);
      });
}
