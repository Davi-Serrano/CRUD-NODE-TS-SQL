import { container } from "tsyringe"
import { UsersRepository } from "../../modules/user/repositories/implemantations/userRepository"
import { IPostgreSQLDBRepository } from "../../modules/user/repositories/IPostgreSQLDBRepository"
import { IUserReposioty } from "../../modules/user/repositories/IUserRepository"


container.registerSingleton<IPostgreSQLDBRepository>(
    "UsersRepository", 
    UsersRepository
)