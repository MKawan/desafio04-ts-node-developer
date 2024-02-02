export interface User{
    name: string
    email:string
}

const db = [{
    name: "MKawan",
    email: "mkawan@dio.com",
}]

export class UserServerces{
    //passando com propridade type interface User
    //criando db interno.
    db: User[];

    //passando o db externo no constructor para o interno
    constructor(
        database = db
    ){
        this.db = database;
    }

    createUser = (name: string, email: string) =>{
        const user = {
            name,
            email
        }
        //usando this.db para chamar o db interno pertencente a class
        this.db.push(user)
        console.log('DB update', this.db)
    }

    getAllUser = () =>{
        return db
    }
}