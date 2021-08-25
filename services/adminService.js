import firebase from "firebase";

let adminEmail = "sparjap005@gmail.com";

function checkAdmin() {
  const user = firebase.auth().currentUser;
  // firebase.auth().onAuthStateChanged((user) => {
  if (user !== null) {
    const email = user.email;
    console.log(email);
    // if (email === adminEmail) return true;
  } else {
    //   var uid = user.uid;
    // return false;
  }
  // });
}

// console.log(checkAdmin());

export { checkAdmin };
