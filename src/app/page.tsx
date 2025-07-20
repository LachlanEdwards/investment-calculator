"use client";

import Calculator from "@/app/components/Calculator";
import {FormEvent, useEffect, useRef, useState} from "react";
import IState from "@/app/models/state";
import Paid from "@/app/models/enums/Paid";
import IFormData from "@/app/models/formData";
import {Alert, Card, Col, Container, Form, Row, Button, InputGroup, ListGroup} from "react-bootstrap";
import UpClient from "@/app/client/up/client";
import {balance, returns, validateFormData} from "@/app/utils/calculator";
import ValidationErrorAlert from "@/app/components/ValidationErrorAlert";
import ExceptionAlert from "@/app/components/ExceptionAlert";

export default function Home() {
  /**
   * React Ref to the input form control for a customer's Personal Access Token.
   */
  const apiKeyRef = useRef<HTMLInputElement>(null);

  /**
   * Primary state object for the application.
   */
  const [state, setState] = useState<IState>({
    accounts: [],
    termDeposit: {
      principal: 10000,
      rate: 1.10,
      term: 36,
      paid: Paid[Paid.Maturity]
    },
    formErrors: [],
    exception: null
  })

  /**
   * State for the "Up Client".
   */
  const [upClient, setUpClient] = useState<UpClient | null>(null)

  /**
   * Effect to attempt to retrieve a list of bank account(s) if the instance of "Up Client" is modified i.e. a
   * Personal Access Token is submitted.
   */
  useEffect(() => {
    upClient?.get_all_accounts().then(response => {
      setState((prevState: IState) => {
        return { ...prevState, accounts: response.data }
      })
    }).catch((error: Error) => {
      setState((prevState) => {
        return { ...prevState,  exception: error }
      })
    })
  }, [upClient])

  /**
   * Handler for the "onPress" event fired by the button purposed to authorize the "Up Client".
   */
  const useUpApi = () => {
    const apiKey = apiKeyRef.current?.value
    setUpClient(() => apiKey ? new UpClient(apiKey) : null)
  }

  /**
   * Handler for the "onChange" event fired by a form control purposed to update the primary application state.
   * @param {FormEvent} e - The event object passed.
   */
  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    const _value = isNaN(Number(value)) ? value : Number(value);

    setState((prevState: IState) => {
      /** Construct the state object for the updated form data **/
      const formData = { ...prevState.termDeposit, [name as keyof IFormData]: _value };

      /** Validate the form data before updating the state **/
      const { hasError, errors } = validateFormData(formData);
      if (hasError) {
        e.preventDefault(); e.stopPropagation();
        return { ...prevState, formErrors: errors }
      }

      /** If no validation errors are propagated, update the form state and clear any previous errors. **/
      return { ...prevState, termDeposit: formData, formErrors: [] }
    });
  };

  return (
      <div className="flex justify-content-center align-content-center w-screen h-screen">
        <Container>
          { state.exception ? (<ExceptionAlert exception={state.exception}/>) : (<></>) }
          <Row>
            <Col>
              <h3 role="heading">Calculate your returns</h3>
              <h5 className="mb-2 text-muted" role="heading">Use our deposit and savings calculator to forecast the return on your term deposit or cash investment.</h5>
              { state.formErrors.length > 0 ? (<ValidationErrorAlert errors={state.formErrors}/>) : (<></>) }
              <Calculator accounts={state.accounts ?? []} formData={state.termDeposit} handleChange={handleChange}></Calculator>
            </Col>
            <Col className="align-content-center">
              <>
                <Card.Subtitle className="mb-2">Final balance</Card.Subtitle>
                <Card.Text>${balance(state.termDeposit).toFixed(2)}</Card.Text>
                <Card.Subtitle className="mb-2">Total interest earned</Card.Subtitle>
                <Card.Text>${returns(state.termDeposit).toFixed(2)}</Card.Text>
                <Alert variant="success">
                  <Form>
                    <Form.Label>Your Personal Access Token</Form.Label>
                    <InputGroup>
                      <Form.Control ref={apiKeyRef} type="text"></Form.Control>
                      <Button onClick={useUpApi} variant="success" size="sm">Connect</Button>
                    </InputGroup>
                    <Form.Text>Enter your Personal Access Token to see a list of your Up account(s) and their balance in the Calculator.</Form.Text>
                  </Form>
                </Alert>
              </>
            </Col>
          </Row>
        </Container>
      </div>
  )
}
