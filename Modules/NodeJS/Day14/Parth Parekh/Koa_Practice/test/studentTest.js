process.env.NODE_ENV = "test";
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Students API", () => {
    //Get Student Data Route
    describe("/GET students", () => {
        it("it should GET all the students Data", (done) => {
            chai.request(server)
                .get("/students")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    done();
                });
        });
        it("it should Not GET all the students Data", (done) => {
            chai.request(server)
                .get("/student")
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    //Get Student data from id
    describe("/GET students/:id", () => {
        it("it should GET Student Data by Id", (done) => {
            const studentId = 1;
            chai.request(server)
                .get(`/students/${studentId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("Id").eq(1);
                    res.body.should.have.property("name");
                    res.body.should.have.property("Gender");
                    res.body.should.have.property("Age");
                    done();
                });
        });
    });

    //Post  Insert new Student data
    describe("/POST students", () => {
        it("it should Insert new Student Data", (done) => {
            const stdData = { Id: 10, name: "kk" };
            chai.request(server)
                .post("/students/add")
                .send(stdData)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("it should Not Insert new Student Data", (done) => {
            chai.request(server)
                .post("/student/add")
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    //Put Update Student Data
    describe("/PUT students", () => {
        it("it should Update Student Data", (done) => {
            const id = 1;
            const stdData = [{ Id: 10, name: "kk" }];
            chai.request(server)
                .put("/students/edit/" + id)
                .send(stdData)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
    });

    //Delete Student Data By Id
    describe("/DELTE students", () => {
        it("it should Delete Student Data", (done) => {
            const id = 2;
            chai.request(server)
                .delete("/students/delete/:" + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
