import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LocalStrategy } from './auth/local.startegy';
import { PostModule } from './post/post.module';
import { Post } from './post/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({       
      type: 'mysql',       
      name: 'default',       
      host: 'localhost',      
      port: 3306,       
      username:'root',       
      password:'givebot_db_password',       
      database:'016labs-test',       
      entities: [User, Post],       
      synchronize: true,     
    }),
   PostModule,
    UserModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
