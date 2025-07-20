import type { Account } from "../client/up/types.ts";
import type { ChangeEvent } from "react";
import type IFormData from "../models/formData.ts";
interface IProps {
    accounts: Account[];
    form_data: IFormData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function Calculator(props: IProps): import("react/jsx-runtime").JSX.Element;
export {};
