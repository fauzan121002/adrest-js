# Adrest.js

<a
    style="
    color: white;
    text-decoration: none;
    background-color: #212121; padding: 5px;
    "
    href="https://fauzan121002.github.io/adrest-js"
    target="_blank"
    >Adrest.js Documentation</a>

## Setup

You can include this external js script in your script tags inside body tag

```html
    <script src="https://rawcdn.githack.com/fauzan121002/adrest-js/e50386d8bb09fd59e7665e1c3ec0686e4997da9a/test/adrest.js">
```

### Example Usage

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Adrest</title>
  </head>
  <body>
    <include src="header.html"></include>

    <h1>This Is Body</h1>

    <include src="footer.html"></include>

    <script src="https://rawcdn.githack.com/fauzan121002/adrest-js/e50386d8bb09fd59e7665e1c3ec0686e4997da9a/test/adrest.js"></script>
  </body>
</html>
```

header.html

<h1>Header</h1>

footer.html

<h1>Footer</h1>

## Usage

### Extending layout

<img
    src="dist/img/extend.png"
    alt=""
/>

<p>You must only extend one file inside the file.</p>

### Include view

<img
    src="dist/img/include.png"
    alt=""
/>

<p>You can also include when extend.</p>
