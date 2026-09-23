export const TAX_FREE = 30_000;
export const REDUCTION = 3_600;
export const SLIDER_MAX = 1_000_000;

const EDGES = [0, 120_000, 300_000, 800_000, 1_000_000, 2_000_000];

export type Slice = {
  from: number;
  to: number;
  rateToday: number;
  rateProgram: number;
  taxToday: number;
  taxProgram: number;
};

export type Comparison = {
  income: number;
  rows: Slice[];
  today: number;
  program: number;
  delta: number;
  marginalToday: number;
  marginalProgram: number;
};

function clampIncome(income: number) {
  if (!Number.isFinite(income)) return 0;
  return Math.min(50_000_000, Math.max(0, Math.round(income)));
}

function rate(to: number, from: number, mode: "today" | "program") {
  let value: number;
  if (mode === "today") value = to <= 120_000 ? 0.12 : 0.32;
  else if (to <= 120_000) value = 0.12;
  else if (to <= 300_000) value = 0.32;
  else if (to <= 800_000) value = 0.48;
  else if (to <= 2_000_000) value = 0.56;
  else value = 0.71;
  if (from >= 1_000_000) value += 0.04;
  return value;
}

export function marginalRate(income: number, mode: "today" | "program") {
  const x = clampIncome(income);
  if (x <= TAX_FREE) return 0;
  let value: number;
  if (mode === "today") value = x <= 120_000 ? 0.12 : 0.32;
  else if (x <= 120_000) value = 0.12;
  else if (x <= 300_000) value = 0.32;
  else if (x <= 800_000) value = 0.48;
  else if (x <= 2_000_000) value = 0.56;
  else value = 0.71;
  if (x > 1_000_000) value += 0.04;
  return value;
}

export function compareIncome(income: number): Comparison {
  const safe = clampIncome(income);
  const bounds = [...EDGES.filter((edge) => edge < safe), safe];
  const rows: Slice[] = [];
  let todayRaw = 0;
  let programRaw = 0;

  for (let i = 0; i < bounds.length - 1; i += 1) {
    const from = bounds[i] ?? 0;
    const to = bounds[i + 1] ?? from;
    if (to <= from) continue;
    const rateToday = rate(to, from, "today");
    const rateProgram = rate(to, from, "program");
    const taxToday = (to - from) * rateToday;
    const taxProgram = (to - from) * rateProgram;
    todayRaw += taxToday;
    programRaw += taxProgram;
    rows.push({ from, to, rateToday, rateProgram, taxToday, taxProgram });
  }

  const todayReduction = Math.min(REDUCTION, todayRaw);
  const programReduction = Math.min(REDUCTION, programRaw);
  const today = Math.round(todayRaw - todayReduction);
  const program = Math.round(programRaw - programReduction);

  return {
    income: safe,
    rows,
    today,
    program,
    delta: program - today,
    marginalToday: marginalRate(safe, "today"),
    marginalProgram: marginalRate(safe, "program"),
  };
}

const money = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
  maximumFractionDigits: 0,
});

export function formatPln(value: number) {
  return money.format(Math.round(value));
}

export function formatPct(rateValue: number) {
  return `${Math.round(rateValue * 100)}%`;
}

export function formatEffective(tax: number, income: number) {
  if (income <= 0) return "—";
  return `${((tax / income) * 100).toLocaleString("pl-PL", {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  })}%`;
}
