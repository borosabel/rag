import {Injectable} from "@nestjs/common";
import OpenAI from "openai";

@Injectable()
export class EmbeddingService {
  private openai = new OpenAI;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is missing");
    }
    this.openai = new OpenAI({ apiKey });
  }

  async embed(text: string): Promise<number[]> {
    const embedding = await this.openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
      encoding_format: "float"
    })

    return embedding.data[0].embedding;
  }
}