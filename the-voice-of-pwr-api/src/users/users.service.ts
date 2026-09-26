import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  constructor(private db: DatabaseService) {}

  findByEmail(email: string) {
    return this.db.user.findUnique({ where: { mail: email } });
  }

  findById(id: number) {
    return this.db.user.findUnique({ where: { id } });
  }

  create(data: { name: string; mail: string; hashedPass: string }) {
    return this.db.user.create({ data });
  }

  async update(id: number, data: { name?: string; email?: string; password?: string }) {
    const updateData: any = {};

    if (data.name) updateData.name = data.name;
    if (data.email) updateData.mail = data.email;
    if (data.password) updateData.hashedPass = await bcrypt.hash(data.password, 10);

    const user = await this.db.user.update({ where: { id }, data: updateData });
    const { hashedPass, ...result } = user;
    return result;
  }
}