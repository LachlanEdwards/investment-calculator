import IFormData from "@/app/models/formData";

/**
 * List of validators for form data.
 */
const validators: Validator<IFormData>[] = [
    {
        name: "rate",
        validate: (value) => value.rate > 0 && value.rate < 100,
        message: "rate must be greater than 0% and less than 100%",
    },
    {
        name: "principal",
        validate: (value) => value.principal > 0 && value.principal <= 5000000,
        message: "principal must be greater than $0 and less than or equal to $5,000,000",
    },
    {
        name: "term",
        validate: (value) => value.term > 0 && value.term <= 120,
        message: "term must be greater than 0 months and less than or equal to 120 months (10 years)",
    },
]

export default validators;