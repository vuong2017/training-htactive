function htmlTemplate(reactDom, url, helmetData) {
  if (url.search('/admin') !== -1) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        ${helmetData.title.toString()}
        ${helmetData.meta.toString()}
    </head>
    
    <body>
        <div id='app'>${reactDom}</div>
        <script src='/app.bundle.js'></script>
    </body>
    </html>
   `;
  }
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        ${helmetData.title.toString()}
        ${helmetData.meta.toString()}
        <meta charset="utf-8">
        <title>ReactJS Online Training</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=yes">
        <link rel="profile" href="http://gmpg.org/xfn/11">
        <link rel="search" type="application/opensearchdescription+xml" title="Stack Overflow" href="https://www.tutorialspoint.com/videotutorials/opensearch.xml">
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
        <link rel="alternate" type="application/rss+xml" title="TutorialsPoint Videos Feed" href="https://www.tutorialspoint.com/videotutorials/feeds/">
        <link rel="stylesheet" href="/client/css/tp-style.min.css">
        <link rel="stylesheet" href="/client/css/vd.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
        <script src="/client/js/ca-pub-7133395778201029.js"></script>
        <script src="/client/js/jquery.js"></script>
        <script src="/client/js/tp-custom.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/client/css/custom.css">
        <script src="/client/js/jquery-ui.js"></script>
    </head>
    
    <body>
        <div id='app'>${reactDom}</div>
        <script src='/app.bundle.js'></script>
    </body>
    </html>
    `;
}

export default htmlTemplate;
