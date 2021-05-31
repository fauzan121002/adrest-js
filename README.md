<p align="center">
    <img src="https://github.com/fauzan121002/incx.js/blob/master/dist/IncX.gif"></img>
</p>

<p align="center">
    Include and Extends your HTML tags into seperate HTML files.
</p>

<div align="center">

[![tag](https://img.shields.io/github/tag/fauzan121002/incx.js.svg)](https://github.com/fauzan121002/incx.js/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/fauzan121002/incx.js/blob/master/LICENSE) [![Issue](https://img.shields.io/github/issues/fauzan121002/incx.js)](https://img.shields.io/github/issues/fauzan121002/incx.js) [![Forks](https://img.shields.io/github/forks/fauzan121002/incx.js)](https://img.shields.io/github/forks/fauzan121002/incx.js) [![Stars](https://img.shields.io/github/stars/fauzan121002/incx.js)](https://img.shields.io/github/stars/fauzan121002/incx.js)

</div>

[See documentation](https://fauzan121002.github.io/incx.js/)

## Usage

**IncX.js** was already published to npm, so you can easily import it online with jsdelivr.

```html
<!-- unminified version -->
<script src="https://cdn.jsdelivr.net/npm/incx.js/src/incx.js"></script>
<!-- minified version -->
<script src="https://cdn.jsdelivr.net/npm/incx.js/dist/incx-min.js"></script>
```

**Note** : paste it upper `</body>` tag.

## Featuring Tags

### Include

Include tag has 2 mode : separate or attached

- Separate Mode

Seperate Mode use `src` attribute inside `include` tags to define the seperate file you want to include.

```html
<include src="header.html"></include>
```

- Attached Mode

You need attached mode to include script that you don't want to split in other files.

```html
<include>
  <h1>IncX was so simple!</h1>
</include>
```

## Extends

The extends function is useful for extending files from master file to the file that wrap things up.

```html
<!-- wrapper.html -->
<extends src="main.html"> </extends>
<include>(inside extends.html - 1)</include>
<include src="header.html"></include>
<include src="footer.html"></include>
<include>(inside extends.html - 2)</include>
<script src="incx.js"></script>
```

## License

**IncX.js** is licensed under [MIT License](./LICENSE)
