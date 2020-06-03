import { Handler } from "./Model";
import { IncomingMessage, ServerResponse } from "http";
import { UsersDBAccess } from "../User/UsersDBAccess";
import { HTTP_METHODS, HTTP_CODES } from "../Shared/Model";
import { Utils } from "./Utils";



export class UsersHandler implements Handler {

    private req: IncomingMessage;
    private res: ServerResponse;
    private usersDBAccess: UsersDBAccess = new UsersDBAccess();

    public constructor(req: IncomingMessage, res: ServerResponse) {
        this.req = req;
        this.res = res;
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

    private async handleNotFound() {
        this.res.statusCode = HTTP_CODES.NOT_FOUND;
        this.res.write('not found');
    }

}