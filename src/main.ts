import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Jhulieny B.","http://www.https://www.linkedin.com/in/jhulieny-bucci-72ba55232/","jhulienybucci@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
  
  //trabalhar fuso horario Brasil
  process.env.TZ = '-03:00';
  
  app.useGlobalPipes(new ValidationPipe());
  
  //pedir requisicao da nuvem, em lugar diferente nao no local host
  app.enableCors(/*endereço do front, mas agora liberado globalmente*/);

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
