import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.createUserEntity = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set({
      createdAt: new Date(),
      updatedAt: new Date(),
    });
});
