import {Module, OnModuleInit} from '@nestjs/common';
import {HealthModule} from "./health/health.module";
import {ConfigModule} from "@nestjs/config";
import {EmbeddingModule} from "./embedding/embedding.module";
import {EmbeddingService} from "./embedding/embedding.service";

@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "../../.env"
    }),
    EmbeddingModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
