import Form from 'react-bootstrap/Form';
import Paid from "../models/enums/Paid";
import type {Account} from "../client/up/types.ts";
import {FormEvent, useEffect, useRef} from "react";
import type IFormData from "../models/formData.ts";
import {InputGroup} from "react-bootstrap";

interface IProps {
    accounts: Account[],
    formData: IFormData,
    handleChange: (e: FormEvent) => void,
}

export default function Calculator(props: IProps) {
    const accountSelectRef = useRef<HTMLSelectElement>(null);

    /**
     * Effect to reset the "Select" form control if the principal is modified in the parent state.
     */
    useEffect(() => {
        if (props.formData.principal != Number(accountSelectRef.current?.value) && accountSelectRef.current)
            accountSelectRef.current.value = String(props.formData.principal)

    }, [props.formData.principal])

    return (
        <Form>
            <Form.Group className="mb-2">
                <Form.Label>Principal</Form.Label>
                <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                        name="principal"
                        type="number"
                        onBlur={props.handleChange}
                        defaultValue={props.formData.principal}/>
                    <Form.Select
                        onChange={props.handleChange}
                        name="principal"
                        ref={accountSelectRef}
                        disabled={props.accounts.length == 0}>
                        <option
                            key="default"
                            value={props.formData.principal}>
                            { props.accounts.length > 0 ? "Custom Amount" : "No Eligible Account(s)" }
                        </option>
                        {props.accounts
                            .filter(i => i.attributes.balance.valueInBaseUnits > 0)
                            .map((i) =>
                                (<option
                                    key={i.id}
                                    value={i.attributes.balance.valueInBaseUnits/100}>
                                    {i.attributes.displayName}
                                </option>)
                            )
                        }
                    </Form.Select>
                </InputGroup>
                <Form.Text className="text-muted">
                    The amount of money you want to start saving with.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Interest rate</Form.Label>
                <InputGroup>
                    <Form.Control
                        name="rate"
                        type="number"
                        onBlur={props.handleChange}
                        defaultValue={props.formData.rate}/>
                    <InputGroup.Text>% p.a.</InputGroup.Text>
                </InputGroup>
                <Form.Text className="text-muted">
                    The percentage return you earn on your deposited money over the chosen period.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Investment term</Form.Label>
                <InputGroup>
                    <Form.Control
                        name="term"
                        type="number"
                        onBlur={props.handleChange}
                        defaultValue={props.formData.term}/>
                    <InputGroup.Text>months</InputGroup.Text>
                </InputGroup>
                <Form.Text className="text-muted">
                    How long you want to leave your savings invested (in months).
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Interest paid</Form.Label>
                <InputGroup>
                    <Form.Select name="paid" onChange={props.handleChange}>
                        {Object.keys(Paid).filter(i => isNaN(Number(i))).map(i =>
                            (<option value={i} key={i}>{i}</option>)
                        )}
                    </Form.Select>
                </InputGroup>
                <Form.Text className="text-muted">
                    How frequently the term deposit pays interest or rolls over and reinvests.
                </Form.Text>
            </Form.Group>
        </Form>
    )
}