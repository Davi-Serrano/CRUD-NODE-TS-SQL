import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";


class DeleteUserUseCase {
    constructor(private userRepository: IPostgreSQLDBRepository){}

    async execute(name: string){
        await this.userRepository.deleteUser(name)
    }
}

export { DeleteUserUseCase };