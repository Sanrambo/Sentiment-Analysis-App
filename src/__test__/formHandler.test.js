import { handleSubmit, postData, updateUI } from '../client/js/formHandler'


describe("Testing the handleSubmit() functionality", () => {
    test("Testing the handleSubmit() functionality", async () => {
        expect(handleSubmit).toBeInstanceOf(Function);
    });

});

describe("Testing the postData() functionality", () => {
    test("Testing the postData() functionality", async () => {
        expect(postData).toBeInstanceOf(Function);
    });
});
describe("Testing the updateUI() functionality", () => {
    test("Testing the UpdateUI() functionality", async () => {
        expect(updateUI).toBeInstanceOf(Function);
    });
});