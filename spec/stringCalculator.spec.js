let myStringCalculator = require("../stringCalculator")



describe("Add", function(){
  it("should return 0 if the string is empty" , function(){
      expect(Add("")).toBe(0);
  })
   it("should add two string numbers", function(){
    expect(Add("1,2")).toEqual(3)
   })
   it("should be able to support different delimeters", function() {
     
      expect(Add("\n1;2")).toBe(3);
    })
   it("should allow the Add method to handle new lines between numbers",function(){
       expect(Add("1\n2,3")).toEqual(6)
   })
   it("should throw an exception if there are negative numbers", () => {
          expect(() => { Add("-12,8") }).toThrowError();
     })
})