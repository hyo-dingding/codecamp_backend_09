// API 핵심

import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cache } from 'cache-manager';
import { BoardsService } from './boards.service';
import { CreateBoardInput } from './dto/createBoard.Input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  // @Query(() => String, { nullable: true })
  // getHello(): string {
  //   return this.boardsService.qqq();
  // }
  @Query(() => String)
  // @Query(() => [Board]) // String 아님.
  async fetchBoards() {
    // +=================
    // 2. 캐쉬에서 조회하는연습
    const mycache = await this.cacheManager.get('aaa');
    console.log(mycache);
    return '연습완료';
    // 레디스 연습을 위해서 잠시 주석 걸기
    // return this.boardsService.findAll();
  }

  @Mutation(() => String)
  async creatBoard(
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args('contents') contents: string,
    @Args('createBoardInput')
    createBoardInput: CreateBoardInput,
    // @Args({name:'createBoardInput', nullable:true}) createBoardInput: CreateBoardInput, 느낌표 제외할때
  ) {
    // 1. 캐쉬에 등록하는연습
    await this.cacheManager.set('aaa', createBoardInput, {
      ttl: 0,
    });

    return ' 캐쉬에 등록완료';
    // redis연습을 위해 잠시 주석걸기!!!!
    // return this.boardsService.create({ createBoardInput });
  }
}

//  @Mutation(() => String) 실패! 배열안의 객체타입인데
//   @Args('createBoardInput' : 이것을 ) createBoardInput변수로 받을건데 : CreateBoardInput,타입은 이거야
