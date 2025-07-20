import IFormError from "@/app/models/formError";
import {Alert, ListGroup} from "react-bootstrap";

interface IProps {
    errors: IFormError[]
}

export default function ValidationErrorAlert(props: IProps) {
    return (
        <Alert variant="warning">
            <h4>Oh no!</h4>
            <p>I wasn&#39;t able to calculate your returns due to an issue with the provided information:</p>
            <ListGroup>
                {props.errors.map((error, index) =>
                    (<ListGroup.Item variant="danger" key={index}>The {error.name} field
                        requires {error.message}.</ListGroup.Item>)
                )}
            </ListGroup>
        </Alert>
    )
}