const express = require('express')
const { admin } = require('./firebase-config')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const port = 3000
const notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};
app.post('/firebase/notification', (req, res) => {
  const registrationToken = req.body.registrationToken
  const options = notification_options

  const message = {
    data: {
      type: 'warning',
      content: req.body.message,
    },
    // topic: 'weather',
  };

  /** Send Messagen Displaying a Notification in App */
  // admin.messaging().sendToDevice(registrationToken, message, options)
  //   .then(response => {

  //     res.status(200).send("Notification sent successfully")

  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  /** Send Message Displaying a Notification in Device */
  admin.messaging().sendMulticast({
    tokens: [
      req.body.registrationToken
    ],
    notification: {
      title: 'Basic Notification',
      body: 'This is a basic notification sent from the server!',
      imageUrl: 'https://icons.iconarchive.com/icons/crountch/one-piece-jolly-roger/icons-390.jpg',
    },
  }).then(response => {
    res.status(200).send("Notification sent successfully")
  })
    .catch(error => {
      console.log(error);
    });

})
app.listen(port, () => {
  console.log("listening to port" + port)
})