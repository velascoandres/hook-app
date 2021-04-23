import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('Pruebas en useFetch', () => {

    const url = 'https://breakingbadapi.com/api/quotes/1';

    test('Debe de retornar la informacion por defecto', () => {

        const { result } = renderHook(() => useFetch(url));
        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(undefined);

    });

    test('Debe de tener la info deseada: (loading: false, error: null)', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
        
        await waitForNextUpdate({timeout: 5000});

        const { data, loading, error } = result.current;


        expect(data?.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);

    });

    test('Debe de manejar el error', async () => {

        const errorUrl = 'https://reqres.in/apuiihj';

        const { result, waitForNextUpdate } = renderHook(() => useFetch(errorUrl));
        
        await waitForNextUpdate({timeout: 5000});

        const { data, loading, error } = result.current;


        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la informacion');

    });

});
