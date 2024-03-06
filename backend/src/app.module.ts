import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import * as Joi from 'joi';

@Module({
  imports: [
    // Import the ConfigModule and pass a configuration object to it
    ConfigModule.forRoot({
      validationSchema: Joi.object({ // Define the validation schema for the environment variables
        POSTGRES_HOST: Joi.required(), // Define the required environment variables
        POSTGRES_PORT: Joi.number().default(5432), // Define the default value for the environment variable
        POSTGRES_USER: Joi.required(), // Define the required environment variables
        POSTGRES_PASSWORD: Joi.required(), // Define the required environment variables
        POSTGRES_DB: Joi.required(), // Define the required environment variables
        PORT: Joi.number().default(3000), // Define the default value for the environment variable
      }),
    }),
    DatabaseModule, // Import the DatabaseModule
    AdminModule, // Import the AdminModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
