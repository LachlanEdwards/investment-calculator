import {expect, it} from "@jest/globals";
import IFormData from "@/app/models/formData";
import returnsTheories from "@/__tests__/data/returns.negative";
import {validateFormData} from "@/app/utils/calculator";

it('returns the expected validation error', () => {
    const theories: { expectedValue: string, formData: IFormData }[] = returnsTheories

    for (const theory of theories) {
        const {hasError, errors} = validateFormData(theory.formData)
        expect(hasError).toBeTruthy()
        expect(errors[0].message).toBe(theory.expectedValue)
    }
})