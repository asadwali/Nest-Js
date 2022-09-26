import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TermsnconditionModule } from './termsncondition/termsncondition.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';
import { PersonModule } from './person/person.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TermsnconditionModule, LoginModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'testing_db',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProfileModule,
    PersonModule,
    OrdersModule,
    AuthModule,
  ],
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
