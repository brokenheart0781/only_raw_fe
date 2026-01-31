import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { 
  FileText, 
  Download, 
  Share2,
  Calendar,
  TrendingUp,
  CheckCircle2,
  DollarSign,
  PieChart
} from 'lucide-react';

export function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Financial Reports</h2>
              <p className="text-slate-300">
                Export-ready summaries, AI explanations, and comprehensive credit analysis reports
              </p>
            </div>
          </div>
          <Button className="bg-white text-slate-900 hover:bg-slate-100">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>
      </Card>

      {/* Current Report - Bank Ready */}
      <Card className="p-8 border-2 border-blue-200">
        <div className="flex items-start justify-between mb-6">
          <div>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200 mb-3">
              Latest Report
            </Badge>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Credit Assessment Report
            </h2>
            <p className="text-slate-600">Generated on January 20, 2026 at 14:32</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-8">
          <h3 className="font-semibold text-slate-900 mb-4 text-lg">Executive Summary</h3>
          <div className="prose prose-sm max-w-none text-slate-700">
            <p className="mb-3">
              This report provides a comprehensive credit analysis for <strong>Acme Small Business Inc.</strong> based on 
              alternative data sources including transaction history, invoice records, and banking activity. 
              Our AI-powered analysis has processed 2,304 data points covering the period from July 2025 to January 2026.
            </p>
            <p>
              The business demonstrates strong creditworthiness with an alternative credit score of <strong>742/850</strong>, 
              placing it in the "Good Standing" category. Key strengths include consistent revenue growth (+24% over 6 months), 
              excellent payment history (98% on-time), and efficient expense management (68% ratio, below industry average of 72%).
            </p>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm font-medium text-slate-700">Credit Score</p>
            </div>
            <p className="text-3xl font-bold text-slate-900">742</p>
            <p className="text-xs text-slate-600 mt-1">+18 vs. last month</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm font-medium text-slate-700">Revenue</p>
            </div>
            <p className="text-3xl font-bold text-slate-900">$67K</p>
            <p className="text-xs text-slate-600 mt-1">Monthly average</p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <PieChart className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm font-medium text-slate-700">Expense Ratio</p>
            </div>
            <p className="text-3xl font-bold text-slate-900">68%</p>
            <p className="text-xs text-slate-600 mt-1">Below avg (72%)</p>
          </div>

          <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm font-medium text-slate-700">Data Quality</p>
            </div>
            <p className="text-3xl font-bold text-slate-900">94%</p>
            <p className="text-xs text-slate-600 mt-1">Completeness</p>
          </div>
        </div>

        {/* Detailed Analysis Sections */}
        <div className="space-y-6 mb-8">
          {/* Credit Score Analysis */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Credit Score Analysis</h3>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
              <p className="mb-3">
                The alternative credit score of 742 is calculated using our proprietary AI model that analyzes 
                multiple dimensions of business financial health:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li><strong>Payment Behavior (35%):</strong> Excellent on-time payment record (98%)</li>
                <li><strong>Financial Health (30%):</strong> Strong revenue growth and expense management</li>
                <li><strong>Business Stability (20%):</strong> Consistent transaction patterns over 6 months</li>
                <li><strong>Data Quality (15%):</strong> High completeness and verification rates</li>
              </ul>
              <p>
                The 18-point improvement from last month is primarily attributed to increased revenue (+12% MoM) 
                and improved expense ratio (reduced from 71% to 68%).
              </p>
            </div>
          </div>

          {/* AI Explainability */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">AI Explainability (SHAP Analysis)</h3>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
              <p className="mb-3">
                Using SHAP (SHapley Additive exPlanations) values, we can explain exactly which factors 
                contribute to the credit score:
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Revenue Growth (+24% over 6 months)</span>
                  <Badge className="bg-green-600">+45 pts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Payment History (98% on-time)</span>
                  <Badge className="bg-green-600">+38 pts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Data Completeness (94%)</span>
                  <Badge className="bg-green-600">+22 pts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Expense Ratio (68%)</span>
                  <Badge className="bg-green-600">+15 pts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Transaction Volume (847/mo)</span>
                  <Badge className="bg-red-600">-8 pts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Seasonal Variance (18%)</span>
                  <Badge className="bg-red-600">-12 pts</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">AI Coach Recommendations</h3>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
              <p className="mb-3">
                Based on the analysis, our AI Coach has identified the following opportunities to 
                improve creditworthiness:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Reduce Operating Expenses by 5%:</strong> Potential impact of +12 points</li>
                <li><strong>Improve Invoice Payment Timing:</strong> Potential impact of +8 points</li>
                <li><strong>Diversify Revenue Streams:</strong> Potential impact of +6 points</li>
                <li><strong>Enhance Data Completeness:</strong> Potential impact of +5 points</li>
              </ol>
              <p className="mt-3">
                Combined potential score improvement: <strong>+31 points</strong> (to 773)
              </p>
            </div>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Methodology & Confidence</h3>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
              <p className="mb-3">
                This analysis is powered by CrediReady AI v2.4.1, which uses ensemble machine learning 
                models trained on thousands of micro SME financial patterns. The multi-agent workflow includes:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li><strong>Auditor Agent:</strong> Data validation and quality assurance</li>
                <li><strong>Strategist Agent:</strong> Credit scoring and SHAP analysis</li>
                <li><strong>Coach Agent:</strong> Recommendation generation</li>
                <li><strong>What-if Simulator:</strong> Scenario modeling and predictions</li>
              </ul>
              <p>
                Prediction confidence level: <strong>90%</strong> based on data quality (94%), 
                feature coverage (88%), and historical model accuracy (92%).
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-500">
            This report is generated by CrediReady AI for informational purposes and is based on alternative 
            data analysis. It should be used as a complementary assessment alongside traditional credit reports. 
            Report ID: CR-2026-01-20-14327 • Confidentiality: Internal Use Only
          </p>
        </div>
      </Card>

      {/* Historical Reports */}
      <Card className="p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Historical Reports</h3>
        <div className="space-y-3">
          {[
            { date: 'December 20, 2025', score: 724, type: 'Monthly Assessment' },
            { date: 'November 20, 2025', score: 712, type: 'Monthly Assessment' },
            { date: 'October 20, 2025', score: 698, type: 'Monthly Assessment' },
          ].map((report, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">{report.type}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-sm text-slate-600 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {report.date}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Score: {report.score}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
