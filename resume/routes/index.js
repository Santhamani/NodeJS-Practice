var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var PDFDocument = require('pdfkit'); // add pdfkit module to access it

router.post('/pdfGenrator',function(req,res){
    
    
    var doc = new PDFDocument(); // create instance of PDFDocument
    var fname=req.body.fname; // this file name is get by form
    var lname=req.body.lname;
    var mobileno=req.body.mobileno;
    var dob=req.body.dob;
    var content=req.body.content; // this text content is get by form
    doc.y = 320; // this set the document horizontal position
     doc.text(fname,100,100);
    doc.text(content,100,100);   
    //doc.write(path.resolve(".")+'/PDF/'+filename+'.pdf'); // it create a file that write the document
    //res.download(path.resolve(".")+'/PDF/'+filename+'.pdf'); // it download this file
    doc.pipe(fs.createWriteStream(path.resolve(".")+'/PDF'+
    fname+'.pdf'));
    doc.pipe(res);
    doc.end(); // document end by the end method
    var filePath = path.resolve(".")+'/PDF/'+fname+'.pdf'
});

router.get('/',function(req,res){
    res.render('index');
});

 module.exports = router;