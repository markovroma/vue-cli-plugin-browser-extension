# vue-cli-plugin-simple-extension

> browser-extension plugin for vue-cli

Transforms the project into a browser extension.

## Project Structure

The following structure will be generated when installing this plugin.
```
src/
  └── extension/
      ├── background/
      |   ├── background.html
      |   └── background.js
      ├── content/
      |   └── content.js
      └── manifest.json
```

####  `background.html`
A common need for extensions is to have a single long-running script to manage some task or state. Background pages to the rescue.

####  `background.js`
background.js is included in background.html.

####  `content.js`
Content scripts are JavaScript files that run in the context of web pages. By using the standard Document Object Model (DOM), they can read details of the web pages the browser visits, or make changes to them.

####  `manifest.json`
Every extension has a JSON-formatted manifest file, named manifest.json, that provides important information.

## Installing in an Already Created Project

``` sh
vue add simple-extension
```

## Building Extension

``` sh
npm run build
```

