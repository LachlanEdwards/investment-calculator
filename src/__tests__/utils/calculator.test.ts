import {expect, it} from "@jest/globals";
import IFormData from "@/app/models/formData";
import {balance, returns} from "@/app/utils/calculator";
import returnsTheories from "@/__tests__/data/returns.positive";

it('calculates the correct return', () => {
    const theories: { expectedValue: number, formData: IFormData }[] = returnsTheories

    for (const theory of theories) {
        const actualValue: number = returns(theory.formData)
        expect(Math.round(actualValue)).toBe(theory.expectedValue)
    }
})

it('calculates the correct balance', () => {
    const theories: { expectedValue: number, formData: IFormData }[] = returnsTheories

    for (const theory of theories) {
        const actualValue: number = balance(theory.formData)
        const expectedValue: number = theory.expectedValue + theory.formData.principal

        expect(Math.round(actualValue)).toBe(expectedValue)
    }
})