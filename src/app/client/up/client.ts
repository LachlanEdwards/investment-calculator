import type {AccountResponse} from "./types.ts";

/**
 * @class UpClient
 * Represents an authenticated instance of the Up Client.
 */
export default class UpClient {
    private static MAX_SAVERS = 50;
    private static BASE_URI: string = "https://api.up.com.au";

    private readonly pat: string

    /**
     * @constructor Instantiate a new instance of the Up Client.
     * @param {string} pat Your personal access token.
     */
    constructor(pat: string) {
        this.pat = pat
    }

    /**
     * @function get_all_accounts Get a paginated list of all accounts for the currently authenticated user.
     * @return {Promise<AccountResponse>} A list of all accounts for the currently authenticated user.
     */
    get_all_accounts(): Promise<AccountResponse> {
        return new Promise((resolve, reject) => {
            const endpoint: string = `api/v1/accounts?page[size]=${UpClient.MAX_SAVERS}`

            fetch(`${UpClient.BASE_URI}/${endpoint}`, {
                method: "GET",
                headers: this.headers,
            })
            .then(response => response.json())
            .then((accountResponse: AccountResponse) => {
                resolve(accountResponse)
            })
            .catch((error: Error) => {
                reject(error)
            });
        });
    }

    /**
     * @function headers Gets the required HTTP Headers for API requests.
     * @return {HeadersInit} The required HTTP Headers for API requests.
     */
    private get headers(): HeadersInit {
        return {
            "Authorization": `Bearer ${this.pat}`
        }
    }
}