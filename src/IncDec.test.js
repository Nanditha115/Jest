import { fireEvent, render } from "@testing-library/react"
import IncDec from "./IncDec"

test('render increment and decrement', () => {
    const {getByTestId} = render(<IncDec/>);
    expect(getByTestId('disp')).toHaveTextContent(/increment and decrement/i);
    
})


test('check initial value to be 0', () => {
    const {getByTestId} = render(<IncDec/>);
    expect(getByTestId('initial')).toHaveTextContent(0);
})


test('button up should be enabled', () => {
    const {getByTestId} = render(<IncDec/>);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
})

test('button down should be disabled', () => {
    const {getByTestId} = render(<IncDec/>);
    expect(getByTestId('button-down')).toBeDisabled();
})

it('increments counter', () => {
    const {getByTestId} = render(<IncDec/>);
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('initial')).toHaveTextContent('1')
})

it('decrements counter', () => {
    const {getByTestId} = render(<IncDec/>);
    fireEvent.click(getByTestId('button-down'));
    expect(getByTestId('initial')).toHaveTextContent('0');
})