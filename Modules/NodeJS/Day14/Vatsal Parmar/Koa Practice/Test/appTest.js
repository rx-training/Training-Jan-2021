let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");

//assertion style
chai.should();

chai.use(chaiHttp);

describe("Customers API", () => {
  //Test get
  describe("GET /customers", () => {
    it("It should GET all the customers", (done) => {
      chai
        .request(app)
        .get("/customers")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
  //test get by id
  describe("GET /customers", () => {
    it("It should GET a customer by id", (done) => {
      const id = 1;
      chai
        .request(app)
        .get("/customers/" + id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("id");
          res.body.should.have.property("name");
          res.body.should.have.property("address");
          res.body.should.have.property("id").eq(id);
          done();
        });
    });
  });
  //test post
  describe("POST /customers", () => {
    it("It should POST a customer", (done) => {
      const custData = { name: "Ghi", address: "Vadodara" };
      chai
        .request(app)
        .post("/customers")
        .send(custData)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });

  //test put
  describe("PUT /customers", () => {
    it("It should PUT a customer", (done) => {
      const id = 1;
      const custData = { name: "Ghi", address: "Vadodara" };
      chai
        .request(app)
        .put("/customers/" + id)
        .send(custData)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });

  //test delete
  describe("DELETE /customers", () => {
    it("It should DELETE a customer", (done) => {
      const id = 1;
      chai
        .request(app)
        .delete("/customers/" + id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
});
