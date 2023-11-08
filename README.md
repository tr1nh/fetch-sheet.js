# fetch-sheet.js

Get data from Google Sheet.

## How to use

- Create a Google Sheet and input data.
- Add script tag into your HTML: `<script src="https://cdn.statically.io/gh/tr1nh/fetch-sheet.js/master/fetch-sheet.min.js"></script>`.
- Write script to get and handle data:

```javascript
fetchSheet
  .fetch({
    gSheetId: <sheet_id>,
    wSheetName: <sheet_name>,
  })
  .then((rows) => {
    // handle responsed data here
  });
```

## Preview

![preview-gif](./preview.gif)
