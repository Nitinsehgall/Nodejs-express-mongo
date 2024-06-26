const mongoose = require("mongoose");

//nsehgal agar ni hoga databse to create krdega agr hoga to usse hi use krega
mongoose
  .connect("mongodb://localhost:27017/nsehgal")
  .then(() => {
    console.log("Connection succesfuly");
  })
  .catch((err) => {
    console.log(err + "Error found");
  });

//ye humara schema define krti hai ki kya kya hoga aur uska data type
const playListSchema = new mongoose.Schema({
  name: {type:String,
    required:true,
    lowercase:true
  },
  author: String,
  id: {type:Number,
    validate(value){
    if(value<0){
      throw new Error('you cannot create ')
    }
  }},
  active: Boolean,
});

//model se hum collection create krte hai
const Playlist = new mongoose.model("collect", playListSchema);
//asyn await mai humne kia hai agar nhi b krenge to b work krata hai
const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "ReactJS",
      author: "nitin",
        
      id: -1,
      active: true,
    });
    const jsplaylist = new Playlist({
      name: "js",
      author: "brainnspack",
      id: 456,
      active: true,
    });
    const jssplaylist = new Playlist({
      name: "jsx",
      author: "lead",
      id: 789,
      active: true,
    });
    //ye upar wale sare insert krne k lie hai
    const result = await Playlist.insertMany([
      reactPlaylist,
      jsplaylist,
      jssplaylist,
    ]);
    // console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// console.log(Playlist.find());
///document mai data read krne k lie
const getDocument = async () => {
  const result = await Playlist.find({}).sort({ name: 1 });
  // .countDocuments()
  console.log(result);
};
// console.log(getDocument());
getDocument();

// uncommnet to create the data

createDocument(); 

//document update krne k lie
const updateDocument = async (_id) => {
  try {
    const result = await Playlist.updateOne(
      { _id },
      {
        $set: {
          name: "JavaScript",
        },
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// updateDocument("6671c5597a9d55bd36b692e1");

const deleteDocument = async (_id) => {
  const result = await Playlist.deleteOne({ _id });
  console.log(result);
};

// now delete the document from mongoose
deleteDocument("6671c5597a9d55bd36b692e2");
