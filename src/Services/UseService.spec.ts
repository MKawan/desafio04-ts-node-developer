import { User, UserServerces } from "./UserServices"

describe("UserServices", () =>{
    const mockDb: User[] = []
    const userServece = new UserServerces(mockDb);

    it('Deve adicionar um novo usuario', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userServece.createUser('mkawan', 'mkawan123@test.net');
        expect(mockConsole).toHaveBeenCalledWith('DB update', mockDb);
    });
});