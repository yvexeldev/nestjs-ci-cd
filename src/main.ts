import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');

    await app.listen(3000).then(() => {
        console.log('App running in 3000-port');
    });
}
bootstrap();
