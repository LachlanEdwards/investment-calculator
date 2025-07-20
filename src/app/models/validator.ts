/**
 * @interface Interface for a field validator.
 * @type <T> - The object to validate.
 * @param {keyof <T>} name - The key of the field the `func` property will validate.
 * @param {(value: <T>) => boolean} validator - The function to perform validation.
 * @param {string} message - The message to display if the field fails to validate against the provided function.
 */
interface Validator<T> {
    name: keyof T;
    validate: (value: T) => boolean;
    message: string;
}