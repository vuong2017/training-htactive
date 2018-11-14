function htmlTemplate(reactDom, url, helmetData) {
  if (url.search('/admin') !== -1) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        ${helmetData.title.toString()}
				${helmetData.meta.toString()}
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no">
				<meta name="theme-color" content="#000000">
				<link rel="manifest" href="/admin/manifest.json">
				<link rel="shortcut icon" href="/admin/favicon.png">
				<meta name="author" content="" />
				<meta name="description" content="" />
				<meta name="keywords" content="" />
				<meta name="application-name" content="" />
				<link href='http://fonts.googleapis.com/css?family=Quattrocento+Sans:400,700' rel='stylesheet' type='text/css'>
				<link href="/admin/css/icons.css" rel="stylesheet" />
				<link href="/admin/css/bootstrap.css" rel="stylesheet" />
				<link href="/admin/css/plugins.css" rel="stylesheet" />
				<link href="/admin/css/main.css" rel="stylesheet" />
				<link href="/admin/css/custom.css" rel="stylesheet" />
				<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/admin/img/ico/apple-touch-icon-144-precomposed.png">
				<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/admin/img/ico/apple-touch-icon-114-precomposed.png">
				<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/admin/img/ico/apple-touch-icon-72-precomposed.png">
				<link rel="apple-touch-icon-precomposed" href="/admin/img/ico/apple-touch-icon-57-precomposed.png">
				<link rel="icon" href="/admin/favicon.png" type="image/png">
				<meta name="msapplication-TileColor" content="#3399cc" />
  			<title>HT Training</title>
    </head>
    
    <body>
        <div id='app'>${reactDom}</div>
				<script src='/app.bundle.js'></script>
				<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
				<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
				<script type="text/javascript" src="/admin/js/libs/excanvas.min.js"></script>
				<script type="text/javascript" src="/admin/js/libs/respond.min.js"></script>
				<script src="/admin/plugins/forms/validation/jquery.validate.js"></script>
				<script src="/admin/plugins/forms/validation/additional-methods.min.js"></script>
				<script src="/admin/js/pages/login.js"></script>



				<script src="/admin/plugins/forms/validation/jquery.validate.js"></script>
				<script src="/admin/plugins/forms/validation/additional-methods.min.js"></script>
				<script src="/admin/js/pages/login.js"></script>
				<script src="/admin/js/bootstrap/bootstrap.js"></script>
				<script src="/admin/js/libs/modernizr.custom.js"></script>
				<script src="/admin/js/jRespond.min.js"></script>
				<script src="/admin/plugins/core/slimscroll/jquery.slimscroll.min.js"></script>
				<script src="/admin/plugins/core/slimscroll/jquery.slimscroll.horizontal.min.js"></script>
				<script src="/admin/plugins/core/fastclick/fastclick.js"></script>
				<script src="/admin/plugins/core/velocity/jquery.velocity.min.js"></script>
				<script src="/admin/plugins/core/quicksearch/jquery.quicksearch.js"></script>
				<script src="/admin/plugins/ui/bootbox/bootbox.js"></script>
				
				<script src="/admin/js/libs/date.js"></script>
				<script src="/admin/js/polyfiller.js"></script>
				<script src="/admin/plugins/charts/flot/jquery.flot.custom.js"></script>
				<script src="/admin/plugins/charts/flot/jquery.flot.pie.js"></script>
				<script src="/admin/plugins/charts/flot/jquery.flot.resize.js"></script>
				<script src="/admin/plugins/charts/flot/jquery.flot.time.js"></script>
				<script src="/admin/plugins/charts/flot/jquery.flot.growraf.js"></script>
				<script src="/admin/plugins/charts/flot/jquery.flot.categories.js"></script>
				<script src="/admin/plugins/charts/flot/jquery.flot.stack.js"></script>
				<script src="/admin/plugins/charts/flot/jquery.flot.orderBars.js"></script>
				<script src="/admin/plugins/charts/flot/jquery.flot.tooltip.min.js"></script>
				<script src="/admin/plugins/charts/flot/jquery.flot.curvedLines.js"></script>
				<script src="/admin/plugins/charts/progressbars/progressbar.js"></script>
				<script src="/admin/plugins/ui/waypoint/waypoints.js"></script>
				<script src="/admin/plugins/ui/weather/skyicons.js"></script>
				<script src="/admin/plugins/ui/notify/jquery.gritter.js"></script>
				<script src="/admin/plugins/misc/vectormaps/jquery-jvectormap-1.2.2.min.js"></script>
				<script src="/admin/plugins/misc/vectormaps/maps/jquery-jvectormap-world-mill-en.js"></script>
				<script src="/admin/plugins/misc/countTo/jquery.countTo.js"></script>
				<script src="/admin/js/jquery.dynamic.js"></script>
				<script src="/admin/js/main.js"></script>

				<script src="/admin/plugins/charts/sparklines/jquery.sparkline.js"></script>
				<script src="/admin/plugins/tables/datatables/jquery.dataTables.js"></script>
				<script src="/admin/plugins/tables/datatables/dataTables.tableTools.js"></script>
				<script src="/admin/plugins/tables/datatables/dataTables.bootstrap.js"></script>
				<script src="/admin/plugins/tables/datatables/dataTables.responsive.js"></script>
				<script src="/admin/js/pages/tables-data.js"></script>
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
