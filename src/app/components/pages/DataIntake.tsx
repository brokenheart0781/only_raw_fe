import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Progress } from '@/app/components/ui/progress';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertTriangle,
  Database,
  Link2,
  Download
} from 'lucide-react';

const uploadedRecords = [
  { id: 1, type: 'Invoice', vendor: 'ABC Suppliers Ltd', amount: 12450, date: '2026-01-15', confidence: 98, status: 'verified' },
  { id: 2, type: 'Receipt', vendor: 'XYZ Services', amount: 3200, date: '2026-01-14', confidence: 95, status: 'verified' },
  { id: 3, type: 'Invoice', vendor: 'Tech Solutions Inc', amount: 8900, date: '2026-01-13', confidence: 92, status: 'verified' },
  { id: 4, type: 'Receipt', vendor: 'Office Depot', amount: 450, date: '2026-01-12', confidence: 88, status: 'review' },
  { id: 5, type: 'Invoice', vendor: 'Cloud Services Co', amount: 5600, date: '2026-01-10', confidence: 97, status: 'verified' },
  { id: 6, type: 'Receipt', vendor: 'Marketing Agency', amount: 7800, date: '2026-01-09', confidence: 85, status: 'review' },
];

const dataSources = [
  { name: 'Bank API Integration', status: 'connected', records: 1245, lastSync: '2 hours ago' },
  { name: 'Accounting Software', status: 'connected', records: 892, lastSync: '1 day ago' },
  { name: 'Manual Uploads', status: 'active', records: 167, lastSync: '10 mins ago' },
];

export function DataIntake() {
  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card className="p-8">
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-12 text-center hover:border-blue-400 transition-colors cursor-pointer">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Upload Receipts & Invoices</h3>
            <p className="text-sm text-slate-600 mb-4">
              Drag and drop files here, or click to browse
            </p>
            <div className="flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Upload className="w-4 h-4 mr-2" />
                Choose Files
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Bulk Import CSV
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Supported formats: PDF, JPG, PNG, CSV • Max file size: 10MB
            </p>
          </div>
        </div>
      </Card>

      {/* Data Sources Status */}
      <div className="grid md:grid-cols-3 gap-6">
        {dataSources.map((source, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                {source.status === 'connected' ? (
                  <Database className="w-6 h-6 text-green-600" />
                ) : (
                  <Upload className="w-6 h-6 text-blue-600" />
                )}
              </div>
              <Badge 
                variant="outline" 
                className={
                  source.status === 'connected' 
                    ? 'bg-green-50 text-green-700 border-green-200'
                    : 'bg-blue-50 text-blue-700 border-blue-200'
                }
              >
                {source.status === 'connected' ? (
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                ) : null}
                {source.status}
              </Badge>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">{source.name}</h3>
            <p className="text-2xl font-bold text-slate-900 mb-1">{source.records.toLocaleString()}</p>
            <p className="text-sm text-slate-600 mb-4">records synced</p>
            <p className="text-xs text-slate-500">Last sync: {source.lastSync}</p>
          </Card>
        ))}
      </div>

      {/* Data Validation Summary */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-slate-900">Data Validation Status</h3>
            <p className="text-sm text-slate-600">AI-powered data quality check</p>
          </div>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div>
            <p className="text-sm text-slate-600 mb-2">Total Records</p>
            <p className="text-3xl font-bold text-slate-900">2,304</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-2">Verified</p>
            <p className="text-3xl font-bold text-green-600">2,168</p>
            <p className="text-xs text-slate-500 mt-1">94.1%</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-2">Needs Review</p>
            <p className="text-3xl font-bold text-yellow-600">124</p>
            <p className="text-xs text-slate-500 mt-1">5.4%</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-2">Errors</p>
            <p className="text-3xl font-bold text-red-600">12</p>
            <p className="text-xs text-slate-500 mt-1">0.5%</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600">Verified Records</span>
              <span className="text-sm font-medium">94.1%</span>
            </div>
            <Progress value={94.1} className="[&>div]:bg-green-500" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600">Needs Review</span>
              <span className="text-sm font-medium">5.4%</span>
            </div>
            <Progress value={5.4} className="[&>div]:bg-yellow-500" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600">Errors</span>
              <span className="text-sm font-medium">0.5%</span>
            </div>
            <Progress value={0.5} className="[&>div]:bg-red-500" />
          </div>
        </div>
      </Card>

      {/* Records Table */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-slate-900">Recent Records</h3>
            <p className="text-sm text-slate-600">Latest uploaded and validated data</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Filter</Button>
            <Button variant="outline" size="sm">Sort</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Vendor</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Confidence</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {uploadedRecords.map((record) => (
                <tr key={record.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-900">{record.type}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-slate-900">{record.vendor}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-slate-900">
                      ${record.amount.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-slate-600">{record.date}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-[80px]">
                        <Progress 
                          value={record.confidence} 
                          className={
                            record.confidence >= 90 
                              ? '[&>div]:bg-green-500' 
                              : '[&>div]:bg-yellow-500'
                          }
                        />
                      </div>
                      <span className="text-sm text-slate-600">{record.confidence}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge 
                      variant="outline"
                      className={
                        record.status === 'verified'
                          ? 'bg-green-50 text-green-700 border-green-200'
                          : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                      }
                    >
                      {record.status === 'verified' ? (
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                      ) : (
                        <AlertTriangle className="w-3 h-3 mr-1" />
                      )}
                      {record.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-slate-600">Showing 6 of 2,304 records</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
