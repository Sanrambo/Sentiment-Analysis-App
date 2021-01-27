import { isUrlValid } from '../client/js/CheckURL'


describe('Testing the isUrlValid() functionality', () => {
    test('It should be functionality ', async () => {
        expect(isUrlValid).toBeInstanceOf(Function);
    });
});
