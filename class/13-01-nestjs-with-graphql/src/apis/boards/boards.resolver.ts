// API 핵심

import { Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';

@Resolver()
export class BoardsResolver {
  constructor(private readonly boardsService: BoardsService) {}

  @Query(() => String, { nullable: true })
  getHello(): string {
    return this.boardsService.qqq();
  }
}

//  getHello(): string 타입스크립트 타입 (s소문자)
// @Query(() => String) 그래프큐엘 타입(S대문자 )
