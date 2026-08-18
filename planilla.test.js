const { calcularSueldo } = require('./planilla');

test('Calcula correctamente el sueldo neto', () => {
    expect(calcularSueldo(1500, 150)).toBe(1350);
});

test('Lanza un error si hay valores negativos', () => {
    expect(() => calcularSueldo(-100, 50)).toThrow();
});