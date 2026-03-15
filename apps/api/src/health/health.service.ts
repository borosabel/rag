import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class HealthService {
  getHealth() {
    return {
      "status": HttpStatus.OK,
      "timeStamp": new Date().getTime(),
    };
  }
}