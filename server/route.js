import { documentRegister } from "./mongoose.js";

export const create = (req, res) => {
    const { name, email, password } = req.body;

    documentRegister.findOne({ email : email }, (err, data) => {
        if(err){
            res.send({ message: "Some error occured", err: err });
        }
        else if(data) {
            documentRegister.updateOne({ email: data.email }, { $set: {
                name: name,
                email: email,
                password: password
            }}, (err, data) => {
                if(err){
                    res.send({ message: "Some error occured", err: err });
                }
                else {
                    res.send({ message: "Successfully updated", data: data });
                }
            })
        }
        else {
            documentRegister.insertMany({
                name: name,
                email: email,
                password: password
            }, (err, data) => {
                if(err){
                    res.send({ message: "Some error occured", err: err });
                }
                else {
                    res.send({ message: "Successfully created", data: data });
                }
            })
        }
    })
}

export const read = (req, res) => {
    documentRegister.find((err, data) => {
        if(err){
            res.send({ message: "Some error occured", err: err });
        }
        else {
            res.send({ message: "Successfully got", data: data });
        }
    })
}

export const update = (req, res) => {
    const id = req.params.id;

    documentRegister.findOne({ _id: id }, (err, data) => {
        if(err){
            res.send({ message: "Some error occured", err: err });
        }
        else {
            res.send({ message: "Successfully got for update", data: data });
        }
    })
}

export const dlt = (req, res) => {
    const id = req.params.id;

    documentRegister.deleteOne({ _id : id }, (err, data) => {
        if(err){
            res.send({ message: "Some error occured", err: err });
        }
        else {
            res.send({ message: "Successfully deleted", data: data });
        }
    })
}