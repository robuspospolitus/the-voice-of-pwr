import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

constructor() {
  super({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration: true,
    secretOrKey: process.env.JWT_SECRET as string,
  });
}

  validate(payload: any) {
    const expiryMs = Number(process.env.EXPIRY_TIME_MS);
    const now = Date.now();

    if (now - payload.timestamp > expiryMs) {
      throw new UnauthorizedException('Token wygasł');
    }

    return { id: payload.sub, email: payload.email, role: payload.role };
  }
}