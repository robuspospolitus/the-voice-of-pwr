import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Użytkownik z tym adresem email już istnieje');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.usersService.create({
      name: dto.name,
      mail: dto.email,
      hashedPass: hashedPassword,
    });

    const { hashedPass, ...result } = user;
    return result;
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('Nieprawidłowy email lub hasło');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.hashedPass);
    if (!passwordMatches) {
      throw new UnauthorizedException('Nieprawidłowy email lub hasło');
    }

    const payload = {
      sub: user.id,
      email: user.mail,
      role: user.role,
      timestamp: Date.now(),
    };

    return { access_token: this.jwtService.sign(payload) };
  }
}