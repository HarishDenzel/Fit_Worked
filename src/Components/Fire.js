import firebase from 'firebase'

 

 class fire{
     constructor(){
      this.init()
      this.checkAuth()   
     }
     init = () =>{
     if(!firebase.apps.length){
       firebase.initializeApp({
        apiKey: "AIzaSyDmVLdJF6c5uyITyz5HUBFqO7FsmhmaWCc",
        authDomain: "facebook-89400.firebaseapp.com",
        projectId: "facebook-89400",
        storageBucket: "facebook-89400.appspot.com",
        messagingSenderId: "565682163168",
        appId: "1:565682163168:web:b5cdb4dbf3299ee81e2f85",
        measurementId: "G-G273DDNXLX" 
       })  ;
     }
    };

    checkAuth =() =>{
        firebase.auth().onAuthStateChanged(user =>{
            if(!user){
                firebase.auth().signInAnonymously();
            }
        });
    }
 

 send = messages =>{
messages.forEach(item =>{
  
    const messages = {
      text: item.text,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: item.user
    }
    this.db.push(messages);
});

};

parse = messages =>{
    const {user ,text,timestamp} =messages.val();
    const{key: _id} =messages;
    const createdAt =new Date(timestamp);
    return{
        _id,
        createdAt,
        user,
        text
    };

};
get = callback =>{
  this.db.on("child_added",snapshot => callback(this.parse(snapshot))) ; 
};
off(){
    this.db.off();
}

 get db(){
     return firebase.database.ref("messages");
 }

get uid(){
    return(firebase.auth().currentUser || {}).uid;
}

}
export default new Fire();