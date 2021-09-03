const express= require('express');
const morgan = require('morgan');
const mongoose= require('mongoose');
const { render } = require('ejs');
const blogRoutes=require('./routes/blogRoutes');
const Api1=require('./Api1');

const newapp=express();
//connection to database
const dbURI='mongodb+srv://Hana:1234@project1.zlwfj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI) 
.then((result)=> newapp.listen(process.env.PORT || 3000))
.catch((err)=>console.log(err));
newapp.set('view engine','ejs');
// middleware
newapp.use(express.static('public'));
//middleware to accept from database
newapp.use(express.urlencoded({extended:true}));
newapp.use(morgan('div'));
//newapp.use((req, res, next) => {
 //res.locals.path = req.path;
  //next();
//});

newapp.get('/', (req, res) => {
    res.redirect('/blogs');
  });
  
  newapp.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  
  //blog routes
 
  newapp.use('/blogs', blogRoutes);
  
  //Api routes
  newapp.use('/weather',Api1);

 //404 page

  newapp.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });
 

