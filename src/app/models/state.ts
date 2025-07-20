import type {Account} from "../client/up/types";
import type IFormData from "./formData";
import IFormError from "@/app/models/formError";

/**
 * The default application state.
 * @param {string[]} accounts - A list of the customer's bank account(s).
 * @param {IFormData} termDepsoit - An object to represent the required data to calculate the returns on an investment.
 * @param {IFormError[]} formErrors - A list of data errors, if any, propagated for invalid data entries.
 * @param {Error} error - A placeholder field for any customer-facing errors encountered during runtime.
 */
export default interface IState {
    accounts: Account[],
    termDeposit: IFormData,
    formErrors: IFormError[],
    exception: Error | null
}