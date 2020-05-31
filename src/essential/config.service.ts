import { config } from "dotenv"
import { join } from "path"
import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {

    static parsedData = config({
        path: join(process.env.INIT_CWD, "/config/.env"),
        encoding: "utf8"
    })

    static get(key: string) {
        return process.env[key]
    }
}