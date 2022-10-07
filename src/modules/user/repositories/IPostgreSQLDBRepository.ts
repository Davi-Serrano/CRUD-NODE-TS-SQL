import { User } from "../model/user";

interface UserDTO{
    name: string,
    password: string;
}

interface UserUpdateNameDTO{
    name: string;
    actualName: string;
}

interface IPostgreSQLDBRepository{
    create({name, password}: UserDTO): Promise<void>;
    getUsers(): Promise<User[]>;
    findById(id: string): Promise<User>;
    findByName(id: string): Promise<User>;
    deleteUser(name:string): Promise<void>;
    updateName({name, actualName}: UserUpdateNameDTO): Promise<void>;
}

export { IPostgreSQLDBRepository, UserUpdateNameDTO, UserDTO }