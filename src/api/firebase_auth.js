var admin = require("firebase-admin");
var firebase = require("firebase");
var serviceAccount = require("../../private/locasearch-firebase-adminsdk-a461o-0f31d0744e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://locasearch.firebaseio.com"
});
