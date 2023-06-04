import UserService from  '../../src/services/user-service.js';
import UserRepository from '../../src/repository/user-repository.js';

jest.mock('../../src/repository/user-repository.js');
describe('user service signup test ', ()=>{
    test('should succeessffully create a user', async()=> {
        const data = {
            email: 'a@b.com',
            password : '123432'
        };
        (UserRepository.prototype.create).mockReturnValue({...data, createdAt : '2023-06-05', updatedAt: '2023-06-05'});
        const service = new UserService();
        const response = await service.signup();
        expect(response.email).toBe(data.email);
    })
})