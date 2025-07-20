import type { Account } from "../client/up/types";
import type IFormData from "./form_data";
export default interface IState {
    accounts: Account[];
    termDeposit: IFormData;
    error: Error | null;
}
