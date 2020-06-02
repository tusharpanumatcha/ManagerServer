import { TokenGenerator, Account, SessionToken } from "../Server/Model";
import { UserCredentialsDBAccess } from "./UserCredentialsDBAccess";



export class Authorizer implements TokenGenerator {


    private userCredDBAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();


    async generateToken(account: Account): Promise<SessionToken | undefined> {
        const resultAccount = await this.userCredDBAccess.getUserCredential(
            account.username, account.password
        )
        if (resultAccount) {
            return {
                tokenId: 'someTokenId'
            }
        } else {
            return undefined;
        }
    }

}