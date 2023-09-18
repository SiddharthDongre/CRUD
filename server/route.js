import { registerModel } from "./mongoose.js";

let create, read, dlt;

create = async (req, res) => {
  // console.log(req.body);
  let { id, name, email, password } = req.body;
  let a;
    
  a = await registerModel.findOne({ email: email });

  // console.log(a);

  if(id) {
    await registerModel.updateOne({ _id: id }, {
      $set: {
        name: name,
        // email: email,
        password: password
      }
    });

    res.send("User Successfully Updated");
  } else {
    if(a){
      res.send("User Already Exist");
    } else {
      registerModel.insertMany({
        name: name,
        email: email,
        password: password
      });

      res.send("User Successfully Created");
    };
  };
};

read = async (req, res) => {
  let a;

  a = await registerModel.find({});

  res.send(a);
};

dlt = async(req, res) => {
  // console.log(req.params.id);
  let id, a;

  id = req.params.id;

  a = await registerModel.deleteOne({ _id: id });

  res.send("User Successfully Deleted");
};

export { create, read, dlt };