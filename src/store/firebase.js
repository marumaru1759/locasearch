import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBTtRuNAeLj9RdkYz5XpsC7u579QqLAmpg",
    authDomain: "locasearch.firebaseapp.com",
    databaseURL: "https://locasearch.firebaseio.com",
    projectId: "locasearch",
    storageBucket: "locasearch.appspot.com",
    messagingSenderId: "660314635299"
};

export const firebaseapp = firebase.initializeApp(config).then( console.log("inititaion ok"));



