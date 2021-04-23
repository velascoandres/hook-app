import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

interface ITestForm {
    name: string;
    email: string;
}


describe('Pruebas en useForm', () => {


    const initialForm: ITestForm = {
        name: 'Andres',
        email: 'andres@mail.com',
    };

    test('Debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm<ITestForm>(initialForm));

        const [formValues, handleInput, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInput).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm<ITestForm>(initialForm));
        const [, handleInput] = result.current;

        act(
            () => {
                handleInput({ target: { name: 'name', value: 'Pepe' } } as React.ChangeEvent<HTMLInputElement>);
            },
        );

        const [formValues] = result.current;
        expect(formValues).toEqual({ ...formValues, name: 'Pepe' });


    });

    test('Debe de re-establecer el formulario con RESET', () => {
        const { result } = renderHook(() => useForm<ITestForm>(initialForm));
        const [, handleInput, resetForm] = result.current;

        act(
            () => {
                handleInput(
                    {
                        target: { name: 'name', value: 'Pepe' },
                    } as React.ChangeEvent<HTMLInputElement>
                );
                resetForm();
            },
        );

        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm });

    });

});
