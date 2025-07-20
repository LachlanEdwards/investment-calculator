import IFormData from "@/app/models/formData";
import Paid from "@/app/models/enums/Paid";
import validators from "@/app/utils/validators/formDataValidator";
import IFormError from "@/app/models/formError";

/**
 * Validate updates to a form data object.
 * @param {IFormData} formData - The form data object.
 * @return { hasError: boolean; errors: { [p: string]: string } } - An object containing the validation state of the
 * form data object.
 */
const validateFormData = (formData: IFormData) => {
    const errors: IFormError[] = [];

    for (const validator of validators) {
        if (!validator.validate(formData))
            errors.push({ name: validator.name, message: validator.message })
    }

    const hasError = errors.length > 0
    return { hasError, errors };
}

/**
 * Getter for the balance in dollars of the balance invested in the term deposit at maturity.
 * @function
 * @return {number} The balance in dollars of the balance invested in the term deposit at maturity.
 */
const balance = (termDeposit: IFormData): number => {
    const annum = 12 /** The number of months in a year **/
    const annual_term = termDeposit.term / annum /** The term of the deposit expressed annually **/

    /**
     * If interest to be paid at maturity, divide by the annual term else use the numeric value assigned to the enum
     * to indicate the number of times that interest is compounded per year.
     */
    const paid = Paid[termDeposit.paid as keyof typeof Paid]

    /**
     * The interest rate expressed as a decimal.
     */
    const decimal_rate = termDeposit.rate / 100

    /**
     * The compound interest formula: A = P (1 + r/n)^(nt)
     * - A: is the future value of the investment/loan, including interest
     * - P: is the principal investment amount (the initial deposit or loan amount)
     * - r: is the annual interest rate (as a decimal)
     * - n: is the number of times that interest is compounded per year
     * - t: is the number of years the money is invested or borrowed for.
     */
    return paid != Paid.Maturity
        ? termDeposit.principal * (1 + decimal_rate/paid)**(paid*annual_term)
        : termDeposit.principal * decimal_rate * annual_term + termDeposit.principal;
}

/**
 * Getter for the total return in dollars of the term deposit at maturity.
 * @return {number} The total return in dollars of the term deposit at maturity.
 */
const returns = (formData: IFormData): number => {
    return balance(formData) - formData.principal
}

export { balance, returns, validateFormData }