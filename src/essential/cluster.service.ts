import { Injectable } from "@nestjs/common";
import { isMaster, fork, on } from "cluster"
import { cpus } from "os"
import { ConfigService } from "./config.service";

@Injectable()
export class ClusterService {

    static coreCpu = cpus().length

    static clusterize(callback: Function) {
        if(isMaster && ConfigService.get("DYNO")) {

            console.log(`Master process (${process.pid}) is running`)

            for(let i = 0; i < this.coreCpu; i++) {
                fork()
            }

            on('exit', (worker, code, signal) => {
                console.log(`worker ${worker.process.pid} died`)
            })

            return;
        }

        callback()
    }
}