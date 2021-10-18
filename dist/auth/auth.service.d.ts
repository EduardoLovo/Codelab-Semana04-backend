import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './model/LoginDto';
import { User } from 'src/user/entities/user.entity';
import { UserToken } from './model/UserToken';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    login(dto: LoginDto): Promise<UserToken>;
    validateUser(email: string, password: string): Promise<User>;
}
