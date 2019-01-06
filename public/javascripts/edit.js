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
var storage = firebase.storage().ref();

function get_data(event_id) {
    database.ref(event_id).on('value', function (snapshot) {
        console.log(snapshot.val());
        let id = snapshot.val().id
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
        console.log(cpTelp)
        document.getElementById("image").src=""+image+"";
        document.getElementById("event_name").value=""+name+"";
        document.getElementById("description").value=""+desc+"";
        document.getElementById("date").value=""+date+"";
        document.getElementById("location").value=""+location+"";
        document.getElementById("city").value=""+city;
        document.getElementById("price").value=""+price+"";
        document.getElementById("type").value=""+type+"";
        document.getElementById("email").value=""+cpEmail+"";
        document.getElementById("cpTelp").value=""+cpTelp+"";
        // document.getElementById("btn_edit").onclick()
    })
}
function write_data(id){
    var data={
        image:$('#image').val(),
        name:$('#event_name').val(),
        desc:$('#description').val(),
        cpEmail:$('#email').val(),
        cpTelp:$('#cpTelp').val(),
        date:$('#date').val(),
        location:$('#location').val(),
        city:$('#city').val(),
        price:$('#price').val(),
        type:$('#type').val()
    }
    
    var key = id;
    
    var updates={};
    updates['/'+key+'/']=data;
    return firebase.database().ref().update(updates);
}

$(function () {
    var params = window.location.search;
    var search = new URLSearchParams(params);
    var event_id = search.get('id');
    get_data(event_id);
    document.getElementById("btn_modify").onclick=function(){
        // write_data(event_id);
        console.log($('#upload_image').val);
        // window.location.href="/detail?id="+event_id
    }
})