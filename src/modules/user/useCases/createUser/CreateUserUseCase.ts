import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe"; 
import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";

interface IRequest {
    name: string;
    password: string;
}

@injectable()
class CreateUserUseCase{
    constructor(
        @inject("UsersRepository")
        private userReposiotry: IPostgreSQLDBRepository
    ){}

    
    async execute({ name, password}: IRequest): Promise<void>{    
    
    const passwordHash =  await hash(password, 8)

    await this.userReposiotry.create({name, password: passwordHash});
    }
}

export { CreateUserUseCase };