import { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Slider } from '@/app/components/ui/slider';
import { 
  Calculator, 
  TrendingUp, 
  TrendingDown,
  RefreshCw,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

export function WhatIfSimulator() {
  const [expenseChange, setExpenseChange] = useState([0]);
  const [revenueChange, setRevenueChange] = useState([0]);
  const [timeframe, setTimeframe] = useState([3]);

  // Calculate predicted score based on inputs
  const baseScore = 742;
  const predictedScore = Math.round(
    baseScore + 
    (revenueChange[0] * 0.5) - 
    (expenseChange[0] * 0.3) + 
    (timeframe[0] * 0.2)
  );
  const scoreDelta = predictedScore - baseScore;
  const confidence = Math.max(60, 95 - Math.abs(revenueChange[0]) * 0.5 - Math.abs(expenseChange[0]) * 0.5);

  const resetSimulation = () => {
    setExpenseChange([0]);
    setRevenueChange([0]);
    setTimeframe([3]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center flex-shrink-0">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">What-if Simulator</h2>
            <p className="text-purple-100">
              Explore how different business scenarios would impact your credit score. 
              Adjust the parameters below to see real-time predictions powered by AI.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Controls */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-6">Scenario Parameters</h3>

            {/* Revenue Change */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-slate-700">Revenue Change</label>
                <Badge 
                  variant="outline" 
                  className={
                    revenueChange[0] > 0 
                      ? 'bg-green-100 text-green-800 border-green-200'
                      : revenueChange[0] < 0
                      ? 'bg-red-100 text-red-800 border-red-200'
                      : 'bg-slate-100 text-slate-800 border-slate-200'
                  }
                >
                  {revenueChange[0] > 0 ? '+' : ''}{revenueChange[0]}%
                </Badge>
              </div>
              <Slider
                value={revenueChange}
                onValueChange={setRevenueChange}
                min={-50}
                max={50}
                step={1}
                className="mb-2"
              />
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>-50%</span>
                <span>0%</span>
                <span>+50%</span>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Current: $67,000/mo → Simulated: ${Math.round(67000 * (1 + revenueChange[0] / 100)).toLocaleString()}/mo
              </p>
            </div>

            {/* Expense Change */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-slate-700">Expense Change</label>
                <Badge 
                  variant="outline" 
                  className={
                    expenseChange[0] < 0 
                      ? 'bg-green-100 text-green-800 border-green-200'
                      : expenseChange[0] > 0
                      ? 'bg-red-100 text-red-800 border-red-200'
                      : 'bg-slate-100 text-slate-800 border-slate-200'
                  }
                >
                  {expenseChange[0] > 0 ? '+' : ''}{expenseChange[0]}%
                </Badge>
              </div>
              <Slider
                value={expenseChange}
                onValueChange={setExpenseChange}
                min={-50}
                max={50}
                step={1}
                className="mb-2"
              />
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>-50%</span>
                <span>0%</span>
                <span>+50%</span>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Current: $45,560/mo → Simulated: ${Math.round(45560 * (1 + expenseChange[0] / 100)).toLocaleString()}/mo
              </p>
            </div>

            {/* Timeframe */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-slate-700">Projection Timeframe</label>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                  {timeframe[0]} months
                </Badge>
              </div>
              <Slider
                value={timeframe}
                onValueChange={setTimeframe}
                min={1}
                max={12}
                step={1}
                className="mb-2"
              />
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>1 mo</span>
                <span>6 mo</span>
                <span>12 mo</span>
              </div>
            </div>

            {/* Reset Button */}
            <Button 
              variant="outline" 
              className="w-full"
              onClick={resetSimulation}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset to Current State
            </Button>
          </Card>

          {/* Quick Scenarios */}
          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Quick Scenarios</h3>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => {
                  setRevenueChange([15]);
                  setExpenseChange([-5]);
                  setTimeframe([6]);
                }}
              >
                <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                Growth Mode (+15% revenue, -5% costs)
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => {
                  setRevenueChange([0]);
                  setExpenseChange([-10]);
                  setTimeframe([3]);
                }}
              >
                <TrendingDown className="w-4 h-4 mr-2 text-blue-600" />
                Cost Optimization (-10% expenses)
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => {
                  setRevenueChange([25]);
                  setExpenseChange([10]);
                  setTimeframe([12]);
                }}
              >
                <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                Aggressive Expansion (+25% revenue)
              </Button>
            </div>
          </Card>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          {/* Predicted Score */}
          <Card className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
            <p className="text-blue-100 mb-2">Predicted Credit Score</p>
            <div className="flex items-baseline gap-4 mb-4">
              <h1 className="text-6xl font-bold">{predictedScore}</h1>
              <div className={`flex items-center gap-1 ${
                scoreDelta > 0 ? 'text-green-300' : scoreDelta < 0 ? 'text-red-300' : 'text-white'
              }`}>
                {scoreDelta > 0 ? (
                  <TrendingUp className="w-6 h-6" />
                ) : scoreDelta < 0 ? (
                  <TrendingDown className="w-6 h-6" />
                ) : null}
                <span className="text-2xl font-semibold">
                  {scoreDelta > 0 ? '+' : ''}{scoreDelta}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {Math.round(confidence)}% Confidence
              </div>
            </div>
            <p className="text-sm text-blue-100">
              Based on {timeframe[0]} month{timeframe[0] > 1 ? 's' : ''} of projected changes
            </p>
          </Card>

          {/* Impact Breakdown */}
          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Impact Breakdown</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-slate-900">Revenue Impact</p>
                  <p className="text-xs text-slate-600">
                    {revenueChange[0] > 0 ? 'Increase' : revenueChange[0] < 0 ? 'Decrease' : 'No change'}: {Math.abs(revenueChange[0])}%
                  </p>
                </div>
                <Badge 
                  variant="outline"
                  className={
                    revenueChange[0] > 0 
                      ? 'bg-green-100 text-green-800 border-green-200'
                      : revenueChange[0] < 0
                      ? 'bg-red-100 text-red-800 border-red-200'
                      : 'bg-slate-100 text-slate-800 border-slate-200'
                  }
                >
                  {revenueChange[0] > 0 ? '+' : ''}{Math.round(revenueChange[0] * 0.5)} pts
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-slate-900">Expense Impact</p>
                  <p className="text-xs text-slate-600">
                    {expenseChange[0] > 0 ? 'Increase' : expenseChange[0] < 0 ? 'Decrease' : 'No change'}: {Math.abs(expenseChange[0])}%
                  </p>
                </div>
                <Badge 
                  variant="outline"
                  className={
                    expenseChange[0] < 0 
                      ? 'bg-green-100 text-green-800 border-green-200'
                      : expenseChange[0] > 0
                      ? 'bg-red-100 text-red-800 border-red-200'
                      : 'bg-slate-100 text-slate-800 border-slate-200'
                  }
                >
                  {expenseChange[0] > 0 ? '-' : expenseChange[0] < 0 ? '+' : ''}{Math.round(Math.abs(expenseChange[0] * 0.3))} pts
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-slate-900">Time Factor</p>
                  <p className="text-xs text-slate-600">
                    {timeframe[0]} month projection
                  </p>
                </div>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                  +{Math.round(timeframe[0] * 0.2)} pts
                </Badge>
              </div>
            </div>
          </Card>

          {/* AI Insights */}
          <Card className="p-6 bg-amber-50 border-amber-200">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">AI Insight</h3>
                <p className="text-sm text-slate-700">
                  {scoreDelta > 10 ? (
                    `This scenario shows strong positive growth. A ${scoreDelta}-point increase would improve your credit tier and unlock better financing options.`
                  ) : scoreDelta > 0 ? (
                    `This scenario shows modest improvement. Consider combining with other strategies for greater impact.`
                  ) : scoreDelta < -10 ? (
                    `Warning: This scenario could significantly impact your creditworthiness. Review your assumptions carefully.`
                  ) : (
                    `This scenario maintains your current score. Consider adjusting parameters to explore growth opportunities.`
                  )}
                </p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
              Save Scenario
            </Button>
            <Button variant="outline" className="flex-1">
              Generate Report
            </Button>
          </div>
        </div>
      </div>

      {/* Historical Scenarios */}
      <Card className="p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Saved Scenarios</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Q1 Growth Plan', score: 768, change: +26, date: 'Jan 15, 2026' },
            { name: 'Cost Reduction', score: 755, change: +13, date: 'Jan 12, 2026' },
            { name: 'Expansion Test', score: 792, change: +50, date: 'Jan 10, 2026' },
          ].map((scenario, idx) => (
            <div key={idx} className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-slate-900">{scenario.name}</h4>
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  +{scenario.change}
                </Badge>
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-1">{scenario.score}</p>
              <p className="text-xs text-slate-500">{scenario.date}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
