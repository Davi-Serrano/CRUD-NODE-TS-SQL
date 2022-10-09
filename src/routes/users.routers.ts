import { Router } from "express"
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import  { CreateUserController }  from "../modules/user/useCases/createUser/CreateUserController";
import  deleteUserController  from "../modules/user/useCases/deleteUser";
import  listAllUsersController  from "../modules/user/useCases/readUsers";
import  updateUserController  from "../modules/user/useCases/updateUser";


const usersRoutes = Router()

const createUserController = new CreateUserController()


usersRoutes.use(ensureAuthentication);
usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", (req, res)=>{
    return listAllUsersController().handle(req, res);
 });

 usersRoutes.patch("/", (req, res)=>{
   return updateUserController().handle(req, res)
 })
 
 
 usersRoutes.delete("/", (req, res)=>{
   return deleteUserController().handle(req, res)
 });

 export { usersRoutes };