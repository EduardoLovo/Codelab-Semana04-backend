import { User } from '../entities/user.entity';
export declare class CreateUserDto extends User {
    name: string;
    cpf: string;
    email: string;
    password: string;
}
