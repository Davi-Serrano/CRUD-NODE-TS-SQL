import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    async  handle(req: Request, res: Response): Promise<Response>{
        const { name, password } = req.body.user
        await this.createUserUseCase.execute({name, password})
        
        return res.sendStatus(201)
    }
}


export { CreateUserController };