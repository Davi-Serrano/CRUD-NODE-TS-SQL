import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";

interface IRequest {
    name: string;
    password: string;
}

class CreateUserUseCase{
    constructor(private userReposiotry: IPostgreSQLDBRepository){}

    async execute({ name, password}: IRequest): Promise<void>{
        

        await this.userReposiotry.create({name, password});
    }
}

export { CreateUserUseCase };