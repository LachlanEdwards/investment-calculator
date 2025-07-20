/**
 * Interface for form data error(s).
 * @param {string} name - The name assigned to the invalid/erroneous field.
 * @param {string} message - The message to describe the error.
 */
export default interface IFormError {
    name: string;
    message: string;
}