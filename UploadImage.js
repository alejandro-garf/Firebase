// Uploading an image simple code

const file = blankFile; // File API; Strings, bytes

const storage = getStorage;  // create a reference to storage

const rootRef = redStorage; //Create root reference

const fileRed = ref(storage, 'images/somefile.jpg'); //File reference

// Uploaf Javascript file/ blob

uploadBytes(fileref, file).then(function(snapshot){
    console.log('Uploaded Js file or blob');
})

//Upload a string
uploadString(fileRef, string, 'base64').then(function(snapshot) {
            console.log('uploaded a string');
})