import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown,
  Info,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const shapData = [
  { feature: 'Revenue Growth', impact: 45, positive: true },
  { feature: 'Payment History', impact: 38, positive: true },
  { feature: 'Data Completeness', impact: 22, positive: true },
  { feature: 'Expense Ratio', impact: 15, positive: true },
  { feature: 'Transaction Volume', impact: -8, positive: false },
  { feature: 'Seasonal Variance', impact: -12, positive: false },
];

const featureDetails = [
  {
    name: 'Revenue Growth',
    value: '+24% (6mo)',
    impact: 'High Positive',
    score: '+45 pts',
    description: 'Consistent upward revenue trend demonstrates business stability',
    positive: true
  },
  {
    name: 'Payment History',
    value: '98% On-time',
    impact: 'High Positive',
    score: '+38 pts',
    description: 'Excellent track record of timely payments to vendors',
    positive: true
  },
  {
    name: 'Data Completeness',
    value: '94%',
    impact: 'Medium Positive',
    score: '+22 pts',
    description: 'High quality data enables accurate credit assessment',
    positive: true
  },
  {
    name: 'Expense Ratio',
    value: '68%',
    impact: 'Low Positive',
    score: '+15 pts',
    description: 'Below industry average, showing good cost management',
    positive: true
  },
  {
    name: 'Transaction Volume',
    value: '847/mo',
    impact: 'Low Negative',
    score: '-8 pts',
    description: 'Slightly below optimal transaction frequency',
    positive: false
  },
  {
    name: 'Seasonal Variance',
    value: '18%',
    impact: 'Medium Negative',
    score: '-12 pts',
    description: 'Revenue fluctuations indicate seasonal business patterns',
    positive: false
  },
];

export function CreditAnalysis() {
  return (
    <div className="space-y-6">
      {/* Credit Score Overview */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-1">
          <div className="text-center">
            <p className="text-sm text-slate-600 mb-4">Alternative Credit Score</p>
            <div className="relative w-40 h-40 mx-auto mb-4">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="72"
                  stroke="#e2e8f0"
                  strokeWidth="16"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="72"
                  stroke="url(#gradient)"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${(742/850) * 452} 452`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-5xl font-bold text-slate-900">742</span>
                <span className="text-sm text-slate-500">/ 850</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Good Standing
              </Badge>
            </div>
            <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">+18 points</span>
            </div>
            <p className="text-sm text-slate-600">vs. last month</p>
          </div>
        </Card>

        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-slate-900">Score Breakdown</h3>
              <p className="text-sm text-slate-600">Components contributing to your score</p>
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <Info className="w-3 h-3 mr-1" />
              90% Confidence
            </Badge>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-700">Payment Behavior</span>
                <span className="text-sm font-semibold text-slate-900">35%</span>
              </div>
              <Progress value={35} className="[&>div]:bg-blue-500" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-700">Financial Health</span>
                <span className="text-sm font-semibold text-slate-900">30%</span>
              </div>
              <Progress value={30} className="[&>div]:bg-indigo-500" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-700">Business Stability</span>
                <span className="text-sm font-semibold text-slate-900">20%</span>
              </div>
              <Progress value={20} className="[&>div]:bg-purple-500" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-700">Data Quality</span>
                <span className="text-sm font-semibold text-slate-900">15%</span>
              </div>
              <Progress value={15} className="[&>div]:bg-violet-500" />
            </div>
          </div>
        </Card>
      </div>

      {/* SHAP Explainability */}
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="font-semibold text-slate-900">SHAP Feature Impact Analysis</h3>
          <p className="text-sm text-slate-600">AI explainability showing how each factor affects your credit score</p>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={shapData} layout="vertical" margin={{ left: 20, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" fontSize={12} />
              <YAxis dataKey="feature" type="category" stroke="#64748b" fontSize={12} width={140} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                formatter={(value) => [`${value > 0 ? '+' : ''}${value} points`, 'Impact']}
              />
              <Bar dataKey="impact" radius={[0, 4, 4, 0]}>
                {shapData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.positive ? '#10b981' : '#ef4444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Feature Details */}
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="font-semibold text-slate-900">Detailed Feature Contributions</h3>
          <p className="text-sm text-slate-600">In-depth analysis of each credit factor</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {featureDetails.map((feature, idx) => (
            <div 
              key={idx} 
              className={`p-4 rounded-lg border-2 ${
                feature.positive 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {feature.positive ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                  <h4 className="font-semibold text-slate-900">{feature.name}</h4>
                </div>
                <Badge 
                  variant="outline"
                  className={
                    feature.positive
                      ? 'bg-green-100 text-green-800 border-green-300'
                      : 'bg-red-100 text-red-800 border-red-300'
                  }
                >
                  {feature.score}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-slate-600 mb-1">Current Value</p>
                  <p className="font-semibold text-slate-900">{feature.value}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Impact Level</p>
                  <p className={`font-semibold ${feature.positive ? 'text-green-700' : 'text-red-700'}`}>
                    {feature.impact}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Confidence & Model Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Model Confidence</h3>
          <div className="text-center mb-6">
            <p className="text-5xl font-bold text-blue-600 mb-2">90%</p>
            <p className="text-sm text-slate-600">Prediction Confidence</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Data Quality</span>
              <span className="font-medium text-slate-900">94%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Feature Coverage</span>
              <span className="font-medium text-slate-900">88%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Historical Accuracy</span>
              <span className="font-medium text-slate-900">92%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Analysis Details</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-1">Model Version</p>
              <p className="font-medium text-slate-900">CrediReady AI v2.4.1</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Last Updated</p>
              <p className="font-medium text-slate-900">January 20, 2026 - 14:32</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Data Points Analyzed</p>
              <p className="font-medium text-slate-900">2,304 transactions</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Analysis Method</p>
              <p className="font-medium text-slate-900">SHAP + Ensemble ML</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
