// API 핵심

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';
import { CreateBoardInput } from './dto/createBoard.Input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardsResolver {
  constructor(private readonly boardsService: BoardsService) {}

  // @Query(() => String, { nullable: true })
  // getHello(): string {
  //   return this.boardsService.qqq();
  // }
  @Query(() => [Board]) // String 아님.
  fetchBoards() {
    return this.boardsService.findAll();
  }

  @Mutation(() => String)
  creatBoard(
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
    // @Args({name:'createBoardInput', nullable:true}) createBoardInput: CreateBoardInput, 느낌표 제외할때
  ) {
    return this.boardsService.create({ createBoardInput });
  }
}

//  @Mutation(() => String) 실패! 배열안의 객체타입인데
//   @Args('createBoardInput' : 이것을 ) createBoardInput변수로 받을건데 : CreateBoardInput,타입은 이거야 