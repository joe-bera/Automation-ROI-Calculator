'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface ComparisonChartProps {
  manualCost: number;
  aiCost: number;
}

export function ComparisonChart({ manualCost, aiCost }: ComparisonChartProps) {
  const data = [
    { name: 'Manual', cost: manualCost, color: '#ef4444' },
    { name: 'AI Automated', cost: aiCost, color: '#10b981' },
  ];

  const formatCurrency = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}k`;
    }
    return `$${value}`;
  };

  return (
    <div className="space-y-4 p-6">
      <h3 className="text-lg font-semibold text-slate-200">
        Annual Cost Comparison
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" style={{ fontSize: '12px' }} />
          <YAxis
            stroke="#94a3b8"
            tickFormatter={formatCurrency}
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#f8fafc' }}
            formatter={(value) => [
              `$${Number(value).toLocaleString()}`,
              'Annual Cost',
            ]}
          />
          <Bar dataKey="cost" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
