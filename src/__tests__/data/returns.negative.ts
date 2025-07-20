import Paid from "@/app/models/enums/Paid";

const data = [
    {
        expectedValue: "rate must be greater than 0% and less than 100%",
        formData: {
            principal: 10000,
            rate: -1,
            paid: Paid[Paid.Maturity],
            term: 36
        }
    },
    {
        expectedValue: "rate must be greater than 0% and less than 100%",
        formData: {
            principal: 10000,
            rate: 101,
            paid: Paid[Paid.Maturity],
            term: 36
        }
    },
    {
        expectedValue: "principal must be greater than $0 and less than or equal to $5,000,000",
        formData: {
            principal: -1,
            rate: 1.1,
            paid: Paid[Paid.Monthly],
            term: 120
        }
    },
    {
        expectedValue: "principal must be greater than $0 and less than or equal to $5,000,000",
        formData: {
            principal: 5000001,
            rate: 1.1,
            paid: Paid[Paid.Monthly],
            term: 120
        }
    },
    {
        expectedValue: "term must be greater than 0 months and less than or equal to 120 months (10 years)",
        formData: {
            principal: 10000,
            rate: 1.1,
            paid: Paid[Paid.Quarterly],
            term: 121
        }
    },
    {
        expectedValue: "term must be greater than 0 months and less than or equal to 120 months (10 years)",
        formData: {
            principal: 10000,
            rate: 1.1,
            paid: Paid[Paid.Quarterly],
            term: -1
        }
    },
]

export default data