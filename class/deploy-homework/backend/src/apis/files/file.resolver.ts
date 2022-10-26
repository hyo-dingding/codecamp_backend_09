import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { FilesService } from './file.service';

@Resolver()
export class FilesResolver {
  constructor(
    private readonly filesService: FilesService, //
  ) {}

  @Mutation(() => String)
  uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload, //
  ) {
    return this.filesService.upload({ file });
  }
}

//  file->  graphql-upload 설치
