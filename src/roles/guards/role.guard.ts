import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { RolesService } from '../roles.service';

@Injectable()
export class DoesRoleExist implements CanActivate {
  constructor(private readonly roleService: RolesService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    return this.validate(req);
  }

  private async validate(request) {
    const userExist = await this.roleService.findByName(request.body.name);
    if (userExist) {
      throw new ForbiddenException('this role exist');
    }
    return true;
  }
}
