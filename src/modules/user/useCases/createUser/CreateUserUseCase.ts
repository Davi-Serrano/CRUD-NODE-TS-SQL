import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";

interface IRequest {
    name: string;
    password: string;
}

class CreateUserUseCase{
    constructor(private userReposiotry: IPostgreSQLDBRepository){}

    execute({ name, password}: IRequest): void{

        this.userReposiotry.create({name, password});
    }
}

export { CreateUserUseCase };