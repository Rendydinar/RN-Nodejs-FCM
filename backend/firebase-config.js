var admin = require("firebase-admin");

var serviceAccount = require("./your-service-account.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://changetoyourdateabseurl.firebasedatabase.app"
})

module.exports.admin = admin