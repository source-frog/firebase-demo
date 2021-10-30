import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.createUserEntity = functions.auth.user().onCreate((user) => {
  functions.logger.info(
    "New user created, firestore entity will be created now"
  );

  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set({
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .then(() => {
      functions.logger.info("Created firestore entity");
    });
});
