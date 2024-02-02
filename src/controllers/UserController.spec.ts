import { User, UserServerces } from "../Services/UserServices";
import { makeMockRequest, makeMockResponse } from "../mocks/moksReqRes.mock";
import { UserControllers } from "./UserControllers"
import { Request, Response } from "express";

//createUser
describe('UserController', () => {
    const mockUserControllers: Partial<UserServerces> ={
        createUser: jest.fn()
    }
    const userControllers = new UserControllers(mockUserControllers as UserServerces);
    
    it('Deve adicionar um novo usuario', () => {
        const mockReq = {
            body: {
                name: 'mkawan',
                email: 'mkawan123@dio.bank'
            }
        } as Request
        const mockRes = makeMockResponse();
        const res = userControllers.createUser(mockReq, mockRes)

        expect(mockRes.state.status).toBe(201)
        expect(mockRes.state.json).toMatchObject({message: 'user create'})
    })
})

//getAllUser
describe("UserControllers", () => {
    const mockUserControllers: Partial<UserServerces> ={
        getAllUser: jest.fn()
    }
    const userControllers = new UserControllers(mockUserControllers as UserServerces);

    it('Deve pegar todos os usuarios', () => {
        const mockReq = {} as Request
        const mockRes = makeMockResponse();
        
        const res = userControllers.getAllUser(mockReq, mockRes)
        expect(mockRes.state.status).toBe(200)
    })
})

describe('UserControllers', () => {
    const mockUserControllers: Partial<UserServerces> ={
        getAllUser: jest.fn()
    }
    const userControllers = new UserControllers(mockUserControllers as UserServerces);
    it('Deve validar name com bad req', () => {
        const mockReq = {
            body: {
                email: 'mkawan123@dio.bank'
            }
        } as Request
        const mockRes = makeMockResponse();
        const res = userControllers.createUser(mockReq, mockRes)
        //validação nome
        expect(mockRes.state.status).toBe(400)
        expect(mockRes.state.json).toMatchObject({message: 'Bad request name mandatory'})
    })
})

describe('UserControllers', () => {
    const mockUserControllers: Partial<UserServerces> ={
        getAllUser: jest.fn()
    }
    const userControllers = new UserControllers(mockUserControllers as UserServerces);
    it('Deve validar email com bad req', () => {
        const mockReq = {
            body: {
                name: 'mkawan'
            }
        } as Request
        const mockRes = makeMockResponse();
        const res = userControllers.createUser(mockReq, mockRes)
        //validação nome
        expect(mockRes.state.status).toBe(400)
        expect(mockRes.state.json).toMatchObject({message: 'Bad request email mandatory'})
    })
})

describe("UserControllers", () => {

    const userControllers = new UserControllers()
    it('Deve pegar todos os usuarios', () => {

        const resDelete = {
            
                "message": "usuario deletado"
              }
              
        const mockReq = {} as Request
        const mockRes = makeMockResponse();

        const mockDelete = userControllers.deleteAllUser(mockReq, mockRes)
        expect(mockRes.state.status).toBe(200)
        expect(mockRes.state.json).toMatchObject(resDelete)
    })
})