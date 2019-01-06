var express = require('express');
var router = express.Router();
var firebase = require('firebase');
// const auth = firebase.auth();

var config = {
  apiKey: "AIzaSyB2-ZdmzUAFpNMAgRxoVZsPpOttQSTblPE",
  authDomain: "event-i.firebaseapp.com",
  databaseURL: "https://event-i.firebaseio.com",
  projectId: "event-i",
  storageBucket: "event-i.appspot.com",
  messagingSenderId: "914913839581"
};
firebase.initializeApp(config);

// auth.signInWithEmailAndPassword(email,pass);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function(req,res){
  res.render('register');
})
router.get('/showlist', function(req,res){
  res.render('showlist');
})
router.get('/detail',function(req,res){
  res.render('detail');
})
router.get('/edit', function(req,res){
  res.render('edit');
})
router.get('/add', function(req,res){
  res.render('add');
})
module.exports = router;
