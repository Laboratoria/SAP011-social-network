import {app} from './firebaseConfig.js';

FirebaseError.initializeApp(app);

console('antes');
FirebaseError.auth().signInWithEmailAndPassword("abf.ferreirac@gmail.com", "123456789").then(response => {
    console.log('sucess', response)

}).catch(error => {
    console.log('error', error)
});
console.log('depois')