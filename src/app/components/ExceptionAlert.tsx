import {Alert} from "react-bootstrap";

interface IProps {
    exception: Error
}

export default function ExceptionAlert(props: IProps) {
    return (
        <Alert variant="danger">
            <h4>An unexpected error was encountered</h4>
            <p>{props.exception.message}</p>
            <code>{props.exception.name}: {props.exception.stack}</code>
        </Alert>
    )
}