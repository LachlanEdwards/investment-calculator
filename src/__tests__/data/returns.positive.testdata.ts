import Paid from "@/app/models/enums/Paid";

const data = [
    {
        expectedValue: 330,
        formData: {
            principal: 10000,
            rate: 1.1,
            paid: Paid[Paid.Maturity],
            term: 36
        }
    },
    {
        expectedValue: 335,
        formData: {
            principal: 10000,
            rate: 1.1,
            paid: Paid[Paid.Monthly],
            term: 36
        }
    },
    {
        expectedValue: 335,
        formData: {
            principal: 10000,
            rate: 1.1,
            paid: Paid[Paid.Quarterly],
            term: 36
        }
    },
    {
        expectedValue: 334,
        formData: {
            principal: 10000,
            rate: 1.1,
            paid: Paid[Paid.Annually],
            term: 36
        }
    }
]

export default data