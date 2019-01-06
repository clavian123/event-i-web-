var config = {
    apiKey: "AIzaSyB2-ZdmzUAFpNMAgRxoVZsPpOttQSTblPE",
    authDomain: "event-i.firebaseapp.com",
    databaseURL: "https://event-i.firebaseio.com",
    projectId: "event-i",
    storageBucket: "event-i.appspot.com",
    messagingSenderId: "914913839581"
};
firebase.initializeApp(config);
const auth = firebase.auth();

$(function(){

    $('#btn_register').click(function(){
        var email = $('#email').val();
        var password = $('#password').val();
        var con_password = $('#con_password').val();
        if(password!=con_password){
            alert("Your password is different")
        }
        else{
            auth.createUserWithEmailAndPassword(email,password)
            .then(function(){
                sessionStorage.setItem('user',email)
                window.location.href='/showlist'
            })
            .catch(function(error){
                alert(error);
            })
        }
    })
})