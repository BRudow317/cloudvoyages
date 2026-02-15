import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, DollarSign, Zap, Shield } from 'lucide-react';
import Card from '@/components/ui/card/Card';

const costSavingsData = [
  { year: 'Year 1', traditional: 100, cloud: 65 },
  { year: 'Year 2', traditional: 105, cloud: 58 },
  { year: 'Year 3', traditional: 110, cloud: 52 },
  { year: 'Year 4', traditional: 115, cloud: 48 },
  { year: 'Year 5', traditional: 120, cloud: 45 },
];

const performanceData = [
  { metric: 'Deployment', traditional: 30, cloud: 95 },
  { metric: 'Scalability', traditional: 40, cloud: 98 },
  { metric: 'Reliability', traditional: 85, cloud: 99.9 },
  { metric: 'Speed', traditional: 60, cloud: 95 },
];

const workloadData = [
  { name: 'Compute', value: 35, color: '#3b82f6' },
  { name: 'Storage', value: 25, color: '#8b5cf6' },
  { name: 'Database', value: 20, color: '#06b6d4' },
  { name: 'Networking', value: 15, color: '#6366f1' },
  { name: 'Other', value: 5, color: '#a78bfa' },
];

export function CloudAdvantageData() {
  const renderWorkloadLabel = ({ cx, cy, midAngle, outerRadius, name, percent }: {
    cx: number;
    cy: number;
    midAngle: number;
    outerRadius: number;
    name: string;
    percent: number;
  }) => {
    const radius = outerRadius + 14;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

    return (
      <text
        x={x}
        y={y}
        fill="var(--muted-foreground)"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-xs"
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <section className="py-20 bg-background/35">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-foreground">The Cloud Advantage: By the Numbers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data-driven insights showing why businesses are moving to the cloud and why expert guidance matters
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Cost Savings Chart */}
          <Card className="bg-background/50 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary rounded-lg">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl text-foreground">Cost Efficiency Over Time</h3>
                <p className="text-sm text-muted-foreground">5-Year Total Cost Comparison (Indexed)</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={costSavingsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="year" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="traditional"
                  stroke="var(--muted-foreground)"
                  strokeWidth={2}
                  name="Traditional Infrastructure"
                />
                <Line
                  type="monotone"
                  dataKey="cloud"
                  stroke="var(--primary)"
                  strokeWidth={2}
                  name="Cloud with Experts"
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              <strong className="text-foreground">62% cost reduction</strong> by Year 5 when migrating with expert guidance
            </p>
          </Card>

          {/* Performance Comparison */}
          <Card className="bg-background/50 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary rounded-lg">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl text-foreground">Performance & Capabilities</h3>
                <p className="text-sm text-muted-foreground">Cloud vs Traditional Infrastructure (%)</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="metric" stroke="var(--muted-foreground)" />
                <YAxis domain={[0, 100]} stroke="var(--muted-foreground)" />
                <Tooltip />
                <Bar dataKey="traditional" fill="var(--muted-foreground)" name="Traditional" />
                <Bar dataKey="cloud" fill="var(--primary)" name="Cloud" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              <strong className="text-foreground">Cloud infrastructure</strong> outperforms traditional systems across all metrics
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-background/50 p-6 text-center">
            <div className="inline-flex p-3 bg-secondary rounded-full mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div className="text-4xl mb-2 text-primary">3x</div>
            <div className="text-muted-foreground">Faster Deployment</div>
            <p className="text-sm text-muted-foreground mt-2">Deploy applications in hours, not weeks</p>
          </Card>

          <Card className="bg-background/50 p-6 text-center">
            <div className="inline-flex p-3 bg-secondary rounded-full mb-4">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <div className="text-4xl mb-2 text-primary">99.9%</div>
            <div className="text-muted-foreground">Uptime SLA</div>
            <p className="text-sm text-muted-foreground mt-2">Enterprise-grade reliability guaranteed</p>
          </Card>

          <Card className="bg-background/50 p-6 text-center">
            <div className="inline-flex p-3 bg-secondary rounded-full mb-4">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <div className="text-4xl mb-2 text-primary">40%</div>
            <div className="text-muted-foreground">Cost Reduction</div>
            <p className="text-sm text-muted-foreground mt-2">Average savings in first year alone</p>
          </Card>

          <Card className="bg-background/50 p-6 text-center">
            <div className="inline-flex p-3 bg-secondary rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div className="text-4xl mb-2 text-primary">∞</div>
            <div className="text-muted-foreground">Scalability</div>
            <p className="text-sm text-muted-foreground mt-2">Scale up or down on demand instantly</p>
          </Card>
        </div>

        {/* Workload Distribution */}
        <Card className="bg-background/50 p-6">
          <h3 className="text-xl mb-6 text-center text-foreground">Typical Cloud Workload Distribution</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <ResponsiveContainer width={320} height={320}>
              <PieChart margin={{ top: 12, right: 36, bottom: 12, left: 36 }}>
                <Pie
                  data={workloadData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderWorkloadLabel}
                  outerRadius={88}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {workloadData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3">
              {workloadData.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                  <span className="text-foreground">{item.name}</span>
                  <span className="text-muted-foreground">({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            Expert optimization across all workload types ensures maximum efficiency and cost-effectiveness
          </p>
        </Card>
      </div>
    </section>
  );
}
