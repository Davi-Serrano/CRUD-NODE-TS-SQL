import { User } from "../../model/user";
import { IMongoDBRepository } from "../IMongoDBRepository";
import {  UserDTO, UserUpdateNameDTO } from "../IUserRepository";

//singleton


class UsersRepository implements IMongoDBRepository{
    private repository: any

    private static INSTANCE: UsersRepository;

    private constructor(){
        this.repository = [];
    }

    public static getInstance(): UsersRepository{

        if(!UsersRepository.INSTANCE){
            UsersRepository.INSTANCE = new UsersRepository()
        }

        return UsersRepository.INSTANCE;
    }

   async create({name, password}: UserDTO){
        const user = new User()

        Object.assign(user,{
            name,
            password
        })

        this.repository.push(user)

    }

    async getUsers(){

        return this.repository
    }


    async updateName({name, actualName}: UserUpdateNameDTO){

    }

    async deleteUser(name: string){
            

    }

}

export  { UsersRepository };