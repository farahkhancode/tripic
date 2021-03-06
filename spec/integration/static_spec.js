const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

//#1
  describe("GET /", () => {

//#2
    it("should return status code 200 and have 'Welcome to Tripic' in the body of the response", () => {
        request.get(base, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          expect(body).toContain("Welcome to Tripic");
//#4
        done();
      });
    });

  });
});
