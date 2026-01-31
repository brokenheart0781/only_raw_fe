import { Bell, Search } from 'lucide-react';
import { Badge } from './ui/badge';

interface HeaderProps {
  currentPage: string;
  smeProfile: {
    businessName: string;
    status: 'active' | 'pending' | 'review';
  };
}

const pageTitle: Record<string, string> = {
  'dashboard': 'Dashboard Overview',
  'data-intake': 'Data Intake',
  'credit-analysis': 'Credit Analysis',
  'advice': 'Advice & Coaching',
  'simulator': 'What-if Simulator',
  'reports': 'Reports',
  'settings': 'Settings',
};

const statusColors = {
  active: 'bg-green-100 text-green-800 border-green-200',
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  review: 'bg-blue-100 text-blue-800 border-blue-200',
};

export function Header({ currentPage, smeProfile }: HeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Page Title */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{pageTitle[currentPage]}</h2>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-sm text-slate-600">{smeProfile.businessName}</p>
            <Badge 
              variant="outline" 
              className={`text-xs ${statusColors[smeProfile.status]}`}
            >
              {smeProfile.status}
            </Badge>
          </div>
        </div>

        {/* Right Side - Search, Notifications, Profile */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-slate-600" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>

          {/* User Avatar */}
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">Admin User</p>
              <p className="text-xs text-slate-500">admin@crediready.ai</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
