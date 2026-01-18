import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, DollarSign, Zap, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

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

export function CloudBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">The Cloud Advantage: By the Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data-driven insights showing why businesses are moving to the cloud and why expert guidance matters
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Cost Savings Chart */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl">Cost Efficiency Over Time</h3>
                <p className="text-sm text-gray-600">5-Year Total Cost Comparison (Indexed)</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={costSavingsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="traditional" 
                  stroke="#94a3b8" 
                  strokeWidth={2}
                  name="Traditional Infrastructure"
                />
                <Line 
                  type="monotone" 
                  dataKey="cloud" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Cloud with Experts"
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-600 mt-4">
              <strong>62% cost reduction</strong> by Year 5 when migrating with expert guidance
            </p>
          </Card>

          {/* Performance Comparison */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl">Performance & Capabilities</h3>
                <p className="text-sm text-gray-600">Cloud vs Traditional Infrastructure (%)</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="metric" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="traditional" fill="#94a3b8" name="Traditional" />
                <Bar dataKey="cloud" fill="#3b82f6" name="Cloud" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Cloud infrastructure</strong> outperforms traditional systems across all metrics
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-4xl mb-2">3x</div>
            <div className="text-gray-600">Faster Deployment</div>
            <p className="text-sm text-gray-500 mt-2">Deploy applications in hours, not weeks</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-4xl mb-2">99.9%</div>
            <div className="text-gray-600">Uptime SLA</div>
            <p className="text-sm text-gray-500 mt-2">Enterprise-grade reliability guaranteed</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-4xl mb-2">40%</div>
            <div className="text-gray-600">Cost Reduction</div>
            <p className="text-sm text-gray-500 mt-2">Average savings in first year alone</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex p-3 bg-cyan-100 rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-cyan-600" />
            </div>
            <div className="text-4xl mb-2">∞</div>
            <div className="text-gray-600">Scalability</div>
            <p className="text-sm text-gray-500 mt-2">Scale up or down on demand instantly</p>
          </Card>
        </div>

        {/* Workload Distribution */}
        <Card className="p-6">
          <h3 className="text-xl mb-6 text-center">Typical Cloud Workload Distribution</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <ResponsiveContainer width={300} height={300}>
              <PieChart>
                <Pie
                  data={workloadData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
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
                  <span className="text-gray-700">{item.name}</span>
                  <span className="text-gray-500">({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center mt-6">
            Expert optimization across all workload types ensures maximum efficiency and cost-effectiveness
          </p>
        </Card>
      </div>
    </section>
  );
}
