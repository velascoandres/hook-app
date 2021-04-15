export const procesoPesado = (iteraciones: number): string => {
    for (let i = 0; i < iteraciones; i++) {
        console.log('Ahi vamos....');
    }
    return `${iteraciones} iteraciones realizadas`;
};