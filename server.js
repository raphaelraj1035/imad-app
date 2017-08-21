var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articals = {
    'artical-one' : {
        title: 'Artical One | Raphael',
        heading: 'Artical One',
        date: 'Sep 5, 2016',
        content:`<p>
                     This is the content for my first articalThis is the content for my first artical This is the content for my first articalThis is the content for my first articalThis is the content for my first articalThis is the content for my first artical This is the content for my first artical This is the content for my first artical.
                </p>
                <p>
                                    This is the content for my first articalThis is the content for my first artical This is the content for my first articalThis is the content for my first articalThis is the content for my first articalThis is the content for my first artical This is the content for my first artical This is the content for my first artical
                </p>
                                <p>
                                    This is the content for my first articalThis is the content for my first artical This is the content for my first articalThis is the content for my first articalThis is the content for my first articalThis is the content for my first artical This is the content for my first artical This is the content for my first artical
                                </p>` 
            
                   
                
},
    'artical-two' :{
        title: 'Artical Two | Raphael',
        heading: 'Artical Two',
        date: 'Sep 10, 2016',
        content:`<p> Second article is coming soon
                     </p>` 
    },
    'artical-three' : {
        title: 'Artical One | Raphael',
        heading: 'Artical Three',
        date: 'Sep 25, 2016',
        content:`<p>
                     Third artical coming soon in few min
                                </p>` 
    }
};


function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate = `
<html>
    <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width, inital-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
            <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
} 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articalName', function (req, res) {
    // articalName=artical-one
    var articalName = req.params.articalName;
    res.send(createTemplate(articals[articalName]));
});





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
