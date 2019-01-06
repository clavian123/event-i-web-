
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

function write_data() {
    var key = database.ref().push().getKey();
    var data = {
        id:key,
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
        owner: $('#owner').val()
    }
    console.log(key)
    var updates = {};
    updates['/' + key + '/'] = data;
    return firebase.database().ref().update(updates);
}
$(function () {
    $('#btn_home').click(function(){
        window.location.href="/showlist"
    })
    // get_data(event_id);
    // if(document.getElementById("image").src==null){
    // }

    document.getElementById("btn_add").onclick = function () {
        write_data();
        window.location.href = "/showlist"
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