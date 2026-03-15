import {EmbeddingService} from "./embedding.service";
import {Module} from "@nestjs/common";

@Module({
  providers: [EmbeddingService],
  exports: [EmbeddingService],
})
export class EmbeddingModule {
}