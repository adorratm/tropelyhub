import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  // Create the NestJS application
  const app = await NestFactory.create(AppModule);

  // Enable versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'api/v',
  })

  // Enable CORS
  app.enableCors();

  // If the application is not in production, then create the Swagger API documentation
  if (process.env.NODE_ENV !== 'production') {
    // Create the Swagger API documentation
    const config = new DocumentBuilder()
      .setTitle('Tropelyhub API')
      .setDescription('Here you can find all the endpoints for the Tropelyhub API')
      .setVersion('1.0')
      .addTag('admin')
      .addTag('admin/auth')
      .addTag('admin/users')
      .addTag('admin/roles')
      .addTag('admin/companies')
      .addTag('admin/models')
      .addTag('admin/settings')
      .build();

    // Create the Swagger documentation
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
  // Get the ConfigService
  const configService = app.get(ConfigService);

  // Start the application
  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
