import type {Account} from "../client/up/types";
import type IFormData from "./form_data";

/**
 * The default application state.
 * @param {string[]} accounts - A list of the customer's bank account(s).
 * @param {IFormData} termDepsoit - An object to represent the required data to calculate the returns on an investment.
 * @param {Error} error - A placeholder field for any customer-facing errors encountered during runtime.
 */
export default interface IState {
    accounts: Account[],
    termDeposit: IFormData,
    error: Error | null
}