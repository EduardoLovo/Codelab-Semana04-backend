import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './model/LoginDto';
import { User } from 'src/user/entities/user.entity'
import * as bcrypt from 'bcrypt';
import { UserPayload } from './model/UserPayload';
import { UserToken } from './model/UserToken';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {}

    async login(dto: LoginDto) : Promise<UserToken> {
        const user: User = await this.validateUser(dto.email, dto.password);

        const payload: UserPayload = {
            sub: user.id,
            username: user.email,
        };
        
        return {
            accessToken: this.jwtService.sign(payload),
        }
    }
    async validateUser(email: string, password: string): Promise<User> {
        const user: User = await this.userService.findByEmail(email);

        if(user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                return {
                    ...user,
                    password: undefined,
                };
            }
        }

        throw new Error('User and/or passwoird are invalid.');
    }
}
