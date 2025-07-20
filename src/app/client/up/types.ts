/**
 * @interface AccountResponse
 * @property {Account[]} data - The list of accounts returned in this response.
 * @property {Links} links - The link(s) to associated resources.
 */
export interface AccountResponse {
    data: Account[]
    links: Links
}

/**
 * @interface Account
 * @property type - The type of this resource: accounts
 * @property id - The unique identifier for this account.
 * @property attributes - The attributes of this resource.
 * @property relationships - The link(s) to retrieve the related resource(s) in this relationship.
 * @property links - The link(s) to the related resources.
 */
export interface Account {
    type: string
    id: string
    attributes: Attributes
    relationships: Relationships
    links: Links
}

/**
 * @interface Account
 * @property displayName - The name associated with the account in the Up application.
 * @property accountType - The bank account type of this account.
 * @property ownershipType -The ownership structure for this account.
 * @property balance - The available balance of the account, taking into account any amounts that are currently on hold.
 * @property createdAt - The date-time at which this account was first opened.
 */
export interface Attributes {
    displayName: string
    accountType: string
    ownershipType: string
    balance: Balance
    createdAt: string
}

/**
 * @interface Balance
 * @property currencyCode - The ISO 4217 currency code.
 * @property value - The amount of money, formatted as a string in the relevant currency. For example, for an Australian
 * dollar value of $10.56, this field will be "10.56". The currency symbol is not included in the string.
 * @property valueInBaseUnits - The amount of money in the smallest denomination for the currency, as a 64-bit integer.
 * For example, for an Australian dollar value of $10.56, this field will be 1056.
 */
export interface Balance {
    currencyCode: string
    value: string
    valueInBaseUnits: number
}

/**
 * @interface Relationships
 * @property currencyCode - The link(s) to the related transaction(s) in this relationship.
 */
export interface Relationships {
    transactions: Transactions
}

/**
 * @interface Transactions
 * @property currencyCode - The link(s) to the related transaction(s) in this relationship.
 */
export interface Transactions {
    links: Links
}

/**
 * @interface Transactions
 * @property currencyCode - The link(s) to the related resources(s).
 */
export interface Links {
    related: string
    prev: string
    next: string
}
