import { Module } from '@nestjs/common';
import { FilesResolver } from './file.resolver';
import { FilesService } from './file.service';

@Module({
  providers: [
    FilesResolver, //
    FilesService,
  ],
})
export class FilesModule {}
