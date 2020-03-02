import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDa5bCRlUmNWUfPdk2G8eZTZWVamF0GEwo",
    authDomain: "",
    databaseURL: "https://flash-chat-df0d2.firebaseio.com",
    projectId: "flash-chat-df0d2"
};

firebase.initializeApp(config);
export default firebase;
