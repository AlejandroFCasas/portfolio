const express = require('express');
const router = express.Router();


router.get ('/', (req, res) => {
    res.render('index.html', {title: 'Portfolio Web'});
});

router.get ('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact Page'});
});
router.get ('/proyects', (req, res) => {
    res.render('proyects.html', {title: 'Proyects'});
});
router.get ('/proyectoAlco/index', (req, res) => {
    res.render('proyectoAlco/index.html', {title: 'Proyecto Alco'});
});

router.get ('/proyectoAlco/0creditos', (req, res) => {
    res.render('proyectoAlco/0creditos.html', {title: 'Proyecto Alco'});
});
router.get ('/proyectoAlco/0075Creditos', (req, res) => {
    res.render('proyectoAlco/0075Creditos.html', {title: 'Proyecto Alco'});
});
router.get ('/proyectoAlco/12Creditos', (req, res) => {
    res.render('proyectoAlco/12Creditos.html', {title: 'Proyecto Alco'});
});
router.get ('/proyectoTareas/index', (req, res) => {
    res.render('proyectoTareas/index.html', {title: 'Proyecto Tareas'});
});

router.get('/download', function(req, res){ 
    var file = __dirname + '/CVCasasAlejandro.pdf'; 
    res.download(file); // Set disposition and send it. });
});




module.exports = router;



