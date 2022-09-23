import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { JWTStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

dotenv.config();

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule,
        UsersModule,
        JwtModule.register({
          secret: process.env.JWTKEY,
          signOptions: { expiresIn: process.env.TOKEN_EXPIRES },
        }),
      ],
      providers: [AuthService, LocalStrategy, JWTStrategy],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
