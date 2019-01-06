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
    $('#btn_login').click(function(){
        email = $('#email').val();
        pass = $('#password').val();
        auth.signInWithEmailAndPassword(email,pass)
        .then(function(){
            sessionStorage.setItem('user',email);
            window.location.href="/showlist"
        })
        .catch(function(error){
            alert(error)
        })
    })
    $('#btn_login_google').click(function(){
        var provider = firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(function(result) {
            console.log('success')
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            
            var errorCode = error.code;
            console.log(errorCode)
            var errorMessage = error.message;
            console.log(errorMessage)
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    })
    
})