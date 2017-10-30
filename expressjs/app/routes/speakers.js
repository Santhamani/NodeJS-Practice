var express = require('express')
var router = express.Router();
//var dataFile = require('./data/data.json');

router.get('/speakers', function(req, res){
        var data = req.app.get('appData');
        var pagePhotos =[];
        var pageSpeakers = data.speakers;
        data.speakers.forEach(function(item) {
                pagePhotos = pagePhotos.concat(item.artwork);
        });

       res.render('speaker',{
               pageTitle:'Speakers',
               artwork : pagePhotos,
               sravs : pageSpeakers,
               pageId:'speakerList'

       });
});

router.get('/speakers/:speakerid', function(req, res){
        var data = req.app.get('appData');
        var pagePhotos =[];
        var pageSpeakers = [];

        data.speakers.forEach(function(item) {
                if( item.shortname == req.params.speakerid){
                        pageSpeakers.push(item);
                        pagePhotos = pagePhotos.concat(item.artwork);
                }
                
        });

       res.render('speaker',{
               pageTitle:'Speakers',
               artwork : pagePhotos,
               sravs : pageSpeakers,
               pageId:'speakerDetails'

       });
});

module.exports = router;