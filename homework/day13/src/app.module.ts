// index.js

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StarbucksModule } from './apis/starbucks/starbucks.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Starbucks } from './apis/starbucks/entities/starbucks.entity';
// import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    StarbucksModule,
    // ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    // TypeOrmModule.forRoot({
    //   type: process.env.DATABASE_TYPE as 'mysql',
    //   host: process.env.DATABASE_HOST,
    //   port: Number(process.env.DATABASE_PORT),
    //   username: process.env.DATABASE_USERNAME,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_DATABASE,
    // entities: [Starbucks],
    //   synchronize: true,
    //   logging: true,
    // }),
  ],
})
export class AppModule {}
