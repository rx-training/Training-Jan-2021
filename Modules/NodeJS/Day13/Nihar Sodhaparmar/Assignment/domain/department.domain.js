const { Department, validate } = require('../models/department.model');

class DepartmentDomain {

    // add department
    async addDepartment(req, res) {

        const { error } = validate(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        try {

            const department = new Department({
                name: req.body.name
            });

            await department.save();

            res.send(department);
        }
        catch (e) {
            res.status(500).send(e);
        }

    }

    // get all departments
    async getAllDepartments(req, res){
        const departments = await Department.find().select({ name: 1 });
        res.send(departments);
    }
}

module.exports = DepartmentDomain;