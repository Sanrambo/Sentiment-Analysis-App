import { isUrlValid } from '../client/js/CheckURL'


describe('Testing the isUrlValid() functionality', () => {
    test('Testing the isUrlValid() functionality', async () => {
        expect(isUrlValid).toBeInstanceOf(Function);
    });
});
