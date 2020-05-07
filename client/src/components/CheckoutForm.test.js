import React from "react";
import * as rtl from '@testing-library/react'
import { render, fireEvent, findByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {    
        const { getByText } = render (<CheckoutForm />);
        const header = getByText(/checkout form/i)
        expect(header).toBeInTheDocument();    
});

test("form shows success message on submit with form details", async () =>{
    const { getByLabelText, getByRole, getByTestId } = render(<CheckoutForm />);

    const  first = getByLabelText(/first name/i)
    const  last = getByLabelText(/last name/i)
    const  address = getByLabelText(/address/i)
    const  city = getByLabelText(/city/i)
    const  state = getByLabelText(/state/i)
    const  zip = getByLabelText(/zip/i)

    fireEvent.change(first, { target: {value: 'Mohamed'}})
    fireEvent.change(last, { target: {value: 'Wageh'}})
    fireEvent.change(address, { target: {value: '10 Al Baton St'}})
    fireEvent.change(city, { target: {value: 'Giza'}})
    fireEvent.change(state, { target: {value: 'CA'}})
    fireEvent.change(zip, { target: {value: '12121'}})

    const submitButton = getByRole('button');

    fireEvent.click(submitButton);

   const success = getByTestId(/successMessage/i)
    expect(success).toBeInTheDocument();
});
