import Paid from "./enums/Paid";
export default interface IFormData {
    rate: number;
    principal: number;
    term: number;
    paid: Paid;
}
