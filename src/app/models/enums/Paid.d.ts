/**
 * The investment payment cycle, i.e., the number of times that interest is compounded per year.
 */
declare enum Paid {
    Monthly = 12,
    Quarterly = 4,
    Annually = 1,
    Maturity = 0
}
export default Paid;
