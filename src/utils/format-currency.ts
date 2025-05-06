export function formatCurrency(value: string): string {
  // Remove tudo que não for número
  let numericValue = value.replace(/\D/g, "");

  if (numericValue.length <= 2) {
    numericValue = numericValue.padStart(2, "0");
  }

  const cents = numericValue.slice(-2);
  const integerPart = Number(numericValue.slice(0, -2));

  // Adiciona pontos de milhares
  const formatted = String(integerPart).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Retorna no formato correto
  return formatted + "," + cents;
}
