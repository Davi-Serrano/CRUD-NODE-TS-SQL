import { inject, injectable } from "tsyringe/dist/typings/decorators"; 
import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";

interface IRequest {
    name: string;
    password: string;
}

@injectable()
class CreateUserUseCase{
    constructor(
        @inject("UsersRepository")
        private userReposiotry: IPostgreSQLDBRepository){}

    async execute({ name, password}: IRequest): Promise<void>{
        

        await this.userReposiotry.create({name, password});
    }
}

export { CreateUserUseCase };