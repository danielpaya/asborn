type ClassValue = string | number | null | false | undefined | ClassValue[];

function flatten(input: ClassValue[], out: string[]): void {
  for (const value of input) {
    if (!value && value !== 0) continue;
    if (Array.isArray(value)) {
      flatten(value, out);
    } else {
      out.push(String(value));
    }
  }
}

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  flatten(inputs, out);
  return out.join(" ");
}

export function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}
