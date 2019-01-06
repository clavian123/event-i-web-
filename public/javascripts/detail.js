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
    window.location.href="/edit?id="+id
}

function get_data(event_id) {
    database.ref(event_id).on('value', function (snapshot) {
        console.log(snapshot.val());
        let id = snapshot.val().id;
        let city = snapshot.val().city
        let name = snapshot.val().name
        let desc = snapshot.val().desc
        let cpEmail = snapshot.val().cpEmail
        let cpTelp = snapshot.val().cpTelp
        let date = snapshot.val().date
        let image = snapshot.val().image
        let location = snapshot.val().location
        let owner = snapshot.val().owner
        let price = snapshot.val().price
        let type = snapshot.val().type
        console.log(cpEmail)
        document.getElementById("image").src=""+image+"";
        document.getElementById("name").innerText=""+name+"";
        document.getElementById("desc").innerText=""+desc+"";
        document.getElementById("date").innerText="Date: "+date+"";
        document.getElementById("location").innerText="Location: "+location+", "+city;
        document.getElementById("price").innerText="Price: "+price+"";
        document.getElementById("type").innerText="Type: "+type+"";
        document.getElementById("email").innerHTML="Email: "+cpEmail+"";
        document.getElementById("telp").innerText="Phone: "+cpTelp+"";
        document.getElementById("owner").innerText="Owned By: "+owner+"";  
       
    })
}
$(function () {
    var params = window.location.search;
    var search = new URLSearchParams(params);
    var event_id = search.get('id');
    get_data(event_id);
    document.getElementById("btn_edit").onclick=function(){
        window.location.href="/edit?id="+event_id
    }
})