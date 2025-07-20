/**
 * Interface for the required fields to calculate returns on an investment.
 * @param {number} principal - The principal in dollars invested in the term deposit.
 * @param {number} term - The term of the investment expressed as months.
 * @param {number} rate - The interest rate of the term deposit product expressed as a decimal.
 * @param {Paid} paid  - The interest payment cycle.
 */
export default interface IFormData {
    rate: number;
    principal: number;
    term: number;
    paid: string;
}