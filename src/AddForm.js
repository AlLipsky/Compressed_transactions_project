import React from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "reactstrap";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  counterparty: Yup.string().min(1, "Too Short!").required("Required"),
  amount: Yup.number().min(1).required("Required"),
});

const AddForm = ({ handleSetTransaction, closeModalWindowFunc }) => (
  <div>
    <Formik
      initialValues={{
        tradingParty: "me",
        counterparty: "",
        amount: 0,
      }}
      onSubmit={(values) => {
        handleSetTransaction(values);
      }}
      validationSchema={SignupSchema}
    >
      <Form
        style={{
          width: "300px",
          height: "300px",
          margin: "10px",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "space-between",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="tradingParty">Tradingparty</label>
        <Field
          id="tradingParty"
          name="tradingParty"
          placeholder="tradingParty"
          disabled
        />

        <label htmlFor="counterparty">Counterparty</label>
        <Field
          id="counterparty"
          name="counterparty"
          placeholder="counterparty"
        />

        <label htmlFor="amount">Amount</label>
        <Field
          style={{ marginLeft: "35px" }}
          id="amount"
          name="amount"
          placeholder="amount"
          type="number"
        />
        <div>
          <Button style={{ margin: "5px" }} color="success" type="submit">
            Submit
          </Button>
          <Button
            onClick={closeModalWindowFunc}
            style={{ margin: "5px" }}
            color="warning"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Formik>
  </div>
);

export default AddForm;
