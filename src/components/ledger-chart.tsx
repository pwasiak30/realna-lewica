import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const DATA = [
  { name: "Rok 1", Wydatki: 70, Wpływy: 45 },
  { name: "Rok 5", Wydatki: 125, Wpływy: 80 },
];

export function LedgerChart() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  if (!ready) {
    return <div className="h-72 bg-paper-2" aria-hidden="true" />;
  }

  return (
    <div className="h-72 w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={DATA} barGap={6} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="var(--color-line)" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--color-ink)", fontSize: 14 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            width={48}
            tick={{ fill: "var(--color-muted)", fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: "var(--color-paper-2)" }}
            contentStyle={{
              background: "var(--color-cream)",
              border: "1px solid var(--color-line)",
              borderRadius: 0,
              color: "var(--color-ink)",
            }}
            formatter={(value) => [`${value} mld zł`, undefined]}
          />
          <Bar dataKey="Wydatki" fill="var(--color-red)" maxBarSize={48} />
          <Bar dataKey="Wpływy" fill="var(--color-gold)" maxBarSize={48} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
