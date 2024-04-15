import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //trabakhar fuso horario Brasil
  process.env.TZ = '-03:00';
  
  app.useGlobalPipes(new ValidationPipe());
  
  //pedir requisicao da nuvem, em lugar diferente nao no local host
  app.enableCors(/*endereço do front, mas agora liberado globalmente*/);

  await app.listen(4000);
}
bootstrap();
