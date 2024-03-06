import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    // Login
    public async login(LoginDto: LoginDto) {
        return 'Login';
    }

    // Register
    public async register(RegisterDto: RegisterDto) {
        return 'Register';
    }
}
