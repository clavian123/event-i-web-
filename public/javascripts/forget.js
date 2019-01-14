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
    $('#btn_send').click(function(){
        console.log('asdasdasd')
        var email = $('#email').val();
        auth.sendPasswordResetEmail(email).then(function(){
            //Email sent
            alert('Reset Password Email has been sent to '+email)
            window.location.href="/"
        }).catch(function(error){``
            alert(error)
        })
    })
})