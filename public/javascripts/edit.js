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

var selectedFile;

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
        document.getElementById("image").src = "" + image + "";
        document.getElementById("event_name").value = "" + name + "";
        document.getElementById("description").value = "" + desc + "";
        document.getElementById("date").value = "" + date + "";
        document.getElementById("location").value = "" + location + "";
        document.getElementById("city").value = "" + city;
        document.getElementById("price").value = "" + price + "";
        document.getElementById("type").value = "" + type + "";
        document.getElementById("email").value = "" + cpEmail + "";
        document.getElementById("cpTelp").value = "" + cpTelp + "";
        document.getElementById("owner").value = "" + owner + "";
        // document.getElementById("btn_edit").onclick()
    })
}
function write_data(id) {
    var data = {
        image: document.getElementById('image').src,
        name: $('#event_name').val(),
        desc: $('#description').val(),
        cpEmail: $('#email').val(),
        cpTelp: $('#cpTelp').val(),
        date: $('#date').val(),
        location: $('#location').val(),
        city: $('#city').val(),
        price: $('#price').val(),
        type: $('#type').val(),
        owner: $('#owner').val(),
        id:id
    }
    var key = id;
    // console.log(data)
    var updates = {};
    updates['/' + key + '/'] = data;
    return firebase.database().ref().update(updates);
}
// function delete_data(id){
//     database.ref(id).remove();
// }
$(function () {
    if(!sessionStorage.getItem('user')){
        window.location.href="/"
    }
    $('#btn_home').click(function(){
        window.location.href="/showlist"
    })
    $('#btn_add_new').click(function(){
        window.location.href="/add"
    })
    var params = window.location.search;
    var search = new URLSearchParams(params);
    var event_id = search.get('id');

    $('#btn_delete').click(function(){
        console.log(event_id)
        database.ref(event_id).remove()
        window.location.href="/showlist"
    })
    $('#btn_logout').click(function(){
        sessionStorage.clear();
        window.location.href="/";
    })

    get_data(event_id);
    // if(document.getElementById("image").src==null){
    // }

    document.getElementById("btn_modify").onclick = function () {
        write_data(event_id);
        window.location.href = "/detail?id=" + event_id
    }
    
    var btn_upload = document.getElementById('upload_image');
    var uploader = document.getElementById('uploader');
    btn_upload.addEventListener('change', function (e) {

        //dapetin nama file
        var file = e.target.files[0];

        // bikin storage reference
        var storage_ref = firebase.storage().ref('/images/' + file.name)

        //upload file
        var task = storage_ref.put(file);

        //update progress bar
        task.on('state_changed', function progress(snapshot){
            var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            uploader.value = percentage;
        },function error(){

        },function complete(snapshot){
            downloadURL = storage_ref.getDownloadURL().then(function(url){
                var url = url;
                document.getElementById('image').src=""+url+"";
                console.log(url)
            });
        })
    })
})