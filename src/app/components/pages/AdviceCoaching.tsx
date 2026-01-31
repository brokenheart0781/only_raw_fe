import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { 
  Target, 
  TrendingUp, 
  DollarSign, 
  PieChart,
  Calendar,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const recommendations = [
  {
    id: 1,
    title: 'Reduce Operating Expenses by 5%',
    description: 'Analyze your top expense categories and identify opportunities for cost optimization. Focus on recurring software subscriptions and vendor negotiations.',
    priority: 'high',
    impact: '+12 points',
    timeframe: '30 days',
    category: 'Cost Management',
    steps: [
      'Review monthly subscription expenses',
      'Negotiate with top 3 vendors',
      'Eliminate unused services'
    ]
  },
  {
    id: 2,
    title: 'Improve Invoice Payment Timing',
    description: 'Optimize cash flow by taking advantage of early payment discounts while maintaining vendor relationships.',
    priority: 'high',
    impact: '+8 points',
    timeframe: '60 days',
    category: 'Payment Behavior',
    steps: [
      'Identify vendors offering early payment discounts',
      'Set up automated payment reminders',
      'Track payment performance monthly'
    ]
  },
  {
    id: 3,
    title: 'Diversify Revenue Streams',
    description: 'Reduce seasonal variance by exploring complementary products or services that generate revenue during off-peak months.',
    priority: 'medium',
    impact: '+6 points',
    timeframe: '90 days',
    category: 'Revenue Growth',
    steps: [
      'Analyze seasonal revenue patterns',
      'Research market opportunities',
      'Pilot test new offering'
    ]
  },
  {
    id: 4,
    title: 'Enhance Data Completeness',
    description: 'Upload missing transaction records to improve the accuracy of your credit analysis and unlock better financing opportunities.',
    priority: 'medium',
    impact: '+5 points',
    timeframe: '14 days',
    category: 'Data Quality',
    steps: [
      'Identify missing data periods',
      'Gather historical documents',
      'Upload and validate records'
    ]
  },
  {
    id: 5,
    title: 'Build Emergency Fund Reserve',
    description: 'Establish a cash reserve equal to 3 months of operating expenses to demonstrate financial resilience.',
    priority: 'low',
    impact: '+4 points',
    timeframe: '180 days',
    category: 'Financial Health',
    steps: [
      'Calculate monthly operating costs',
      'Set up automatic savings transfers',
      'Monitor progress monthly'
    ]
  },
  {
    id: 6,
    title: 'Maintain Transaction Consistency',
    description: 'Ensure regular business activity by maintaining a minimum of 900 transactions per month.',
    priority: 'low',
    impact: '+3 points',
    timeframe: '30 days',
    category: 'Business Activity',
    steps: [
      'Track monthly transaction volume',
      'Ensure all receipts are recorded',
      'Review activity trends weekly'
    ]
  },
];

const priorityColors = {
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  low: 'bg-blue-100 text-blue-800 border-blue-200',
};

const categoryIcons = {
  'Cost Management': PieChart,
  'Payment Behavior': Calendar,
  'Revenue Growth': TrendingUp,
  'Data Quality': Target,
  'Financial Health': DollarSign,
  'Business Activity': Target,
};

export function AdviceCoaching() {
  return (
    <div className="space-y-6">
      {/* AI Coach Header */}
      <Card className="p-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">AI Coach Recommendations</h2>
              <p className="text-indigo-100 mb-4">
                Personalized actionable insights to improve your credit score and financial health. 
                Our AI has analyzed your business data and identified {recommendations.length} opportunities.
              </p>
              <div className="flex gap-4">
                <div>
                  <p className="text-3xl font-bold">+38</p>
                  <p className="text-sm text-indigo-100">Potential Score Gain</p>
                </div>
                <div className="border-l border-white/30 pl-4">
                  <p className="text-3xl font-bold">{recommendations.length}</p>
                  <p className="text-sm text-indigo-100">Active Recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Priority Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-slate-900">High Priority</h3>
            <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
              2
            </Badge>
          </div>
          <p className="text-2xl font-bold text-slate-900 mb-1">+20 pts</p>
          <p className="text-sm text-slate-600">Potential impact</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-slate-900">Medium Priority</h3>
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
              2
            </Badge>
          </div>
          <p className="text-2xl font-bold text-slate-900 mb-1">+11 pts</p>
          <p className="text-sm text-slate-600">Potential impact</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-slate-900">Low Priority</h3>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
              2
            </Badge>
          </div>
          <p className="text-2xl font-bold text-slate-900 mb-1">+7 pts</p>
          <p className="text-sm text-slate-600">Potential impact</p>
        </Card>
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        {recommendations.map((rec) => {
          const Icon = categoryIcons[rec.category as keyof typeof categoryIcons];
          
          return (
            <Card key={rec.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  rec.priority === 'high' ? 'bg-red-100' :
                  rec.priority === 'medium' ? 'bg-yellow-100' :
                  'bg-blue-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    rec.priority === 'high' ? 'text-red-600' :
                    rec.priority === 'medium' ? 'text-yellow-600' :
                    'text-blue-600'
                  }`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-1">{rec.title}</h3>
                      <p className="text-sm text-slate-600">{rec.description}</p>
                    </div>
                    <Badge variant="outline" className={priorityColors[rec.priority]}>
                      {rec.priority} priority
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="text-xs text-slate-600">Expected Impact</p>
                        <p className="font-semibold text-green-700">{rec.impact}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-xs text-slate-600">Timeframe</p>
                        <p className="font-semibold text-slate-900">{rec.timeframe}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-purple-600" />
                      <div>
                        <p className="text-xs text-slate-600">Category</p>
                        <p className="font-semibold text-slate-900">{rec.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Steps */}
                  <div className="bg-slate-50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium text-slate-900 mb-2">Action Steps:</p>
                    <ul className="space-y-2">
                      {rec.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Start Action Plan
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline">View Details</Button>
                    <Button variant="ghost">Dismiss</Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Need More Help */}
      <Card className="p-6 bg-slate-50 border-2 border-dashed border-slate-300">
        <div className="text-center">
          <h3 className="font-semibold text-slate-900 mb-2">Need Personalized Guidance?</h3>
          <p className="text-sm text-slate-600 mb-4">
            Schedule a consultation with our financial experts to discuss your specific situation
          </p>
          <Button variant="outline">
            Schedule Consultation
          </Button>
        </div>
      </Card>
    </div>
  );
}
