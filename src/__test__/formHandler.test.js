import { handleSubmit, postData, updateUI } from '../client/js/formHandler'


describe("Testing the handleSubmit() functionality", () => {
    test("It should be functionality ", async () => {
        expect(handleSubmit).toBeInstanceOf(Function);
    });

});

describe("Testing the meaningcloud() functionality", () => {
    test("It should be functionality ", async () => {
        expect(postData).toBeInstanceOf(Function);
    });
});
describe("Testing the meaningcloud() functionality", () => {
    test("It should be functionality ", async () => {
        expect(updateUI).toBeInstanceOf(Function);
    });
});