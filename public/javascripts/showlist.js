// var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyB2-ZdmzUAFpNMAgRxoVZsPpOttQSTblPE",
  authDomain: "event-i.firebaseapp.com",
  databaseURL: "https://event-i.firebaseio.com",
  projectId: "event-i",
  storageBucket: "event-i.appspot.com",
  messagingSenderId: "914913839581"
};
firebase.initializeApp(config);
var database = firebase.database();

function move(id){
    window.location.href='/detail?id='+id
}

$(function(){
    
    $('#btn_add_new').click(function(){
        window.location.href="/add"
    })

    database.ref().on('child_added',function(snapshot){
        let db = snapshot.val().id;
        console.log(snapshot.val().name)
        database.ref(db).on('value',function(snapshot){
            let name = snapshot.val().name
            let desc = snapshot.val().desc
            let image = snapshot.val().image
            let location = snapshot.val().location
            let id = snapshot.val().id
            $('#card').append(`<div class="card">`+
            `<img src="${image}" style="width:100%">`+
            `<h1>${name}</h1>`+
            `<p class="price">${location}</p>`+
            `<p>${desc}</p>`+
            `<input type="hidden" id="id"></input>`+
            `<p><button onclick='move(\"${id}\")'>VIEW DETAIL</button></p>
          </div>`)
        })
     })

})