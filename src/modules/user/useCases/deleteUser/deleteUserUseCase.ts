import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";


class DeleteUserUseCase {
    constructor(private userRepository: IPostgreSQLDBRepository){}

    execute(name: string){
        this.userRepository.deleteUser(name)
    }
}

export { DeleteUserUseCase };