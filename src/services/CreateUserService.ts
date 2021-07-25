import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/usersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin } : IUserRequest) {
        const userRepository = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error('Email incorrect');
        }

        const userAlreadyexists = await userRepository.findOne({ email});

        if (userAlreadyexists) {
            throw new Error('User already exists');
        }

        const user = userRepository.create({name, email, admin});

        await userRepository.save(user);

        return user;
    }
}

export {
    CreateUserService
};
