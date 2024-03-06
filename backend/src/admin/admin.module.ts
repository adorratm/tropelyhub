import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { CompaniesModule } from './companies/companies.module';
import { ModelsModule } from './models/models.module';
import { SettingsModule } from './settings/settings.module';
import { RouterModule } from '@nestjs/core';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [AuthModule, UsersModule, RolesModule, CompaniesModule, ModelsModule, SettingsModule,
    RouterModule.register([{
      path: 'admin',
      module: AdminModule,
      children: [
        {
          path: '/',
          module: AuthModule
        },
        {
          path: '/',
          module: UsersModule
        },
        {
          path: '/',
          module: RolesModule
        },
        {
          path: '/',
          module: CompaniesModule
        },
        {
          path: '/',
          module: ModelsModule
        },
        {
          path: '/',
          module: SettingsModule
        }
      ]
    }])
  ],
})
export class AdminModule { }
