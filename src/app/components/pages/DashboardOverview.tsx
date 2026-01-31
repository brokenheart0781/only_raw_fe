import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  Activity,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 58000 },
  { month: 'Jun', revenue: 67000 },
];

const agentWorkflow = [
  { agent: 'Auditor Agent', status: 'completed', progress: 100, time: '2m ago' },
  { agent: 'Strategist Agent', status: 'completed', progress: 100, time: '1m ago' },
  { agent: 'Coach Agent', status: 'in-progress', progress: 65, time: 'Running...' },
  { agent: 'What-if Simulator', status: 'pending', progress: 0, time: 'Queued' },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Credit Score Hero Card */}
      <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-blue-100 mb-2">Alternative Credit Score</p>
            <div className="flex items-baseline gap-4 mb-4">
              <h1 className="text-6xl font-bold">742</h1>
              <div className="flex items-center gap-1 text-green-300">
                <TrendingUp className="w-5 h-5" />
                <span className="text-xl font-semibold">+18</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <div className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                Good Standing
              </div>
              <div className="px-3 py-1 bg-white/20 rounded-full text-sm">
                90% Confidence
              </div>
            </div>
            <p className="text-sm text-blue-100">
              Your credit score has improved by 18 points this month based on consistent revenue growth and improved expense management.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="16"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="white"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${(742/850) * 553} 553`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-4xl font-bold">742</span>
                <span className="text-sm text-blue-100">/ 850</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              +12.3%
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">$67,000</h3>
          <p className="text-sm text-slate-600">Monthly Revenue</p>
          <div className="mt-4 h-16">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#10b98120" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <PieChart className="w-6 h-6 text-blue-600" />
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Optimal
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">68%</h3>
          <p className="text-sm text-slate-600">Expense Ratio</p>
          <Progress value={68} className="mt-4" />
          <p className="text-xs text-slate-500 mt-2">Industry average: 72%</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Complete
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">94%</h3>
          <p className="text-sm text-slate-600">Data Completeness</p>
          <Progress value={94} className="mt-4" />
          <p className="text-xs text-slate-500 mt-2">847 / 900 records validated</p>
        </Card>
      </div>

      {/* Revenue Trend & Agent Workflow */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-slate-900">Revenue Trend</h3>
              <p className="text-sm text-slate-600">Last 6 months</p>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <TrendingUp className="w-3 h-3 mr-1" />
              +24%
            </Badge>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* AI Agent Workflow */}
        <Card className="p-6">
          <div className="mb-6">
            <h3 className="font-semibold text-slate-900">AI Multi-Agent Workflow</h3>
            <p className="text-sm text-slate-600">Real-time processing status</p>
          </div>
          <div className="space-y-4">
            {agentWorkflow.map((agent, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {agent.status === 'completed' && (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    )}
                    {agent.status === 'in-progress' && (
                      <Clock className="w-5 h-5 text-blue-500 animate-pulse" />
                    )}
                    {agent.status === 'pending' && (
                      <AlertCircle className="w-5 h-5 text-slate-300" />
                    )}
                    <span className="text-sm font-medium text-slate-900">{agent.agent}</span>
                  </div>
                  <span className="text-xs text-slate-500">{agent.time}</span>
                </div>
                <Progress 
                  value={agent.progress} 
                  className={
                    agent.status === 'completed' ? '[&>div]:bg-green-500' : 
                    agent.status === 'in-progress' ? '[&>div]:bg-blue-500' : ''
                  }
                />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Insights */}
      <Card className="p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Quick Insights from AI Coach</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-slate-900 text-sm mb-1">Strong Growth</p>
                <p className="text-xs text-slate-600">Revenue increased 24% over 6 months. Continue current strategy.</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <PieChart className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-slate-900 text-sm mb-1">Efficient Operations</p>
                <p className="text-xs text-slate-600">Expense ratio below industry average. Well-managed costs.</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-slate-900 text-sm mb-1">Data Quality</p>
                <p className="text-xs text-slate-600">94% completeness ensures accurate credit analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
