function htmlTemplate(reactDom, reduxState, helmetData) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='utf-8'>
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            <title>React SSR</title>
            <link rel='stylesheet' type='text/css' href='/css/style.css'>
        </head>
        
        <body>
            <div id='app'>${reactDom}</div>
            <script>
                window.REDUX_DATA = ${JSON.stringify(reduxState)}
            </script>
            <script src='/app.bundle.js'></script>
        </body>
        </html>
    `;
}

export default htmlTemplate;
