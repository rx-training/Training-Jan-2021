const StdModel = require("../Models/Student");

class StudentData {
    //Get All student Details
    async getAllStudentData(req, res) {
        const result = await StdModel.find();
        res.send(result);
    }

    //Particular Student Record From Id
    async getStudentDataFromId(req, res) {
        const result = await StdModel.findById(req.params.id);
        if (!result)
            return res.send(`Student Data Not Found For Id: ${req.params.id}`);
        else {
            res.send(result);
        }
    }

    // get Fees Details From StudentId
    async getFeesDetailsFromStudentId(req, res) {
        const result = await StdModel.findById(req.params.id);
        if (!result)
            return res.send(`Student Data Not Found For Id: ${req.params.id}`);
        else {
            res.send(result.Fees);
        }
    }

    // get Result Details From StudentId
    async getResultDetailsFromStudentId(req, res) {
        const result = await StdModel.findById(req.params.id);
        if (!result)
            return res.send(`Student Data Not Found For Id: ${req.params.id}`);
        else {
            res.send(result.Result);
        }
    }

    async insertStudent(req, res) {
        const data = req.body;
        const stdObject = new StdModel(data);
        try {
            const result = await stdObject.save();
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }

    // Update Result For Particular StudentId
    async updateEngResult(req, res) {
        let data = req.body;
        try {
            const updateResult = await StdModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: { Result: data },
                },
                { new: true }
            );
            res.send(updateResult);
        } catch (ex) {
            res.send(ex.message);
        }
    }

    //Delete Student
    async deleteStudent(req, res) {
        const result = await StdModel.findByIdAndDelete(req.params.id);
        res.send(`Student Id:${req.params.id}  Deleted Successfully `);
    }
}
module.exports = StudentData;
