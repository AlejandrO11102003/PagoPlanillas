function calcularSueldo(sueldoBase, descuentos) {
  if (sueldoBase < 0 || descuentos < 0) {
    throw new Error("Los montos no pueden ser negativos");
  }
  return sueldoBase - descuentos;
}

module.exports = { calcularSueldo };