import { getRepository, Repository } from "typeorm";
import { User } from "../../model/user";
import { IPostgreSQLDBRepository } from "../IPostgreSQLDBRepository";
import {  UserDTO, UserUpdateNameDTO } from "../IUserRepository";

//singleton


class UsersRepository implements IPostgreSQLDBRepository{
    private repository: Repository<User>

    private static INSTANCE: UsersRepository;

    private constructor(){
        this.repository = getRepository(User)
    }

    public static getInstance(): UsersRepository{

        if(!UsersRepository.INSTANCE){
            UsersRepository.INSTANCE = new UsersRepository()
        }

        return UsersRepository.INSTANCE;
    }

   async create({name, password}: UserDTO){
        const user = this.repository.create({
            name,
            password
        });

        await this.repository.save(user);

    }

    async getUsers(){
        const all = await this.repository.find()

        return all
    }


    async updateName({name, actualName}: UserUpdateNameDTO){

    }

    async deleteUser(name: string){
            

    }

}

export  { UsersRepository };