import { IncomingMessage, ServerResponse } from "http";
import { UsersDBAccess } from "../User/UsersDBAccess";
import { HTTP_METHODS, HTTP_CODES } from "../Shared/Model";
import { Utils } from "./Utils";
import { BaseRequestHandler } from "./BaseRequestHandler";



export class UsersHandler extends BaseRequestHandler {

    private usersDBAccess: UsersDBAccess = new UsersDBAccess();

    public constructor(req: IncomingMessage, res: ServerResponse) {
        super(req, res);
    }



    async handleRequest(): Promise<void> {
        switch (this.req.method) {
            case HTTP_METHODS.GET:
                await this.handleGet();
                break;
            default:
                this.handleNotFound();
                break;
        }
    }

    private async handleGet() {
        const parsedUrl = Utils.getUrlParameters(this.req.url);
        console.log('queryId:' + parsedUrl?.query.id);
        const a = '5';
    }



}