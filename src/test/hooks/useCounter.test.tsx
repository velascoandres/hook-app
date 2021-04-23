import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en useCounter', () => {


    test('debe de retornar valores por defecto', () => {

        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(1);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    });

    test('debe de retornar el contador con 100', () => {

        const { result } = renderHook(() => useCounter(100));

        expect(result.current.counter).toBe(100);
    });

    test('debe de incrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));

        const { increment } = result.current;

        act(() => {
            const incrementar = increment();
            incrementar();
        });

        const { counter } = result.current;
        expect(counter).toBe(101);

    });

    test('debe de decrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));

        const { decrement } = result.current;

        act(() => {
            const decrementar = decrement();

            decrementar();

        });

        const { counter } = result.current;
        expect(counter).toBe(99);

    });

    test('debe de establecer el valor en 100', () => {

        const { result } = renderHook(() => useCounter(100));

        const { decrement, reset } = result.current;

        act(() => {
            const decrementar = decrement();

            decrementar();
            reset();

        });

        const { counter } = result.current;
        expect(counter).toBe(100);

    });

    test('debe de retornar 99', () => {

        const { result } = renderHook(() => useCounter(100));

        const { decrement, increment } = result.current;


        act(() => {
            const incrementar = increment();
            const decrementar = decrement();
            incrementar();
            decrementar();
        });
        const { counter } = result.current;
        expect(counter).toBe(99);

    });

});
