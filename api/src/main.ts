import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('PuyoPuyo Score Attack API')
    .setDescription('ぷよぷよ一人用スコアアタックAPI')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // OpenAPI定義をyamlでエクスポート
  const yaml = require('js-yaml');
  const openapiYaml = yaml.dump(document);
  writeFileSync(join(__dirname, '../../openapi/puyo-api.yaml'), openapiYaml, 'utf8');

  await app.listen(3000);
}
bootstrap();
