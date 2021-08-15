import { Request, Response } from "express";
import { CreatetagService } from "../services/CreatetagService";

class CreateTagController {
    async handle(request: Request, response: Response){

        const  { name } = request.body;
        
        const createTagservice =  new CreatetagService();

        const tag =  await createTagservice.execute(name);

        return response.json(tag);
    }
}

export { CreateTagController };