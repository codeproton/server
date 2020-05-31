import { Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import { ClusterService } from "./cluster.service";

@Module({
    providers: [
        ConfigService, ClusterService
    ]
})
export class EssentialModule {
    //TODO: We should do anything here?
}