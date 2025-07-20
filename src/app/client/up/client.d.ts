import type { AccountResponse } from "./types.ts";
/**
 * @class UpClient
 * Represents an authenticated instance of the Up Client.
 */
export default class UpClient {
    private static MAX_SAVERS;
    private static BASE_URI;
    private readonly pat;
    /**
     * @constructor Instantiate a new instance of the Up Client.
     * @param {string} pat Your personal access token.
     */
    constructor(pat: string);
    /**
     * @function get_all_accounts Get a paginated list of all accounts for the currently authenticated user.
     * @return {Promise<AccountResponse>} A list of all accounts for the currently authenticated user.
     */
    get_all_accounts(): Promise<AccountResponse>;
    /**
     * @function headers Gets the required HTTP Headers for API requests.
     * @return {HeadersInit} The required HTTP Headers for API requests.
     */
    private get headers();
}
