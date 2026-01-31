import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Lock, 
  Database,
  CreditCard,
  Mail
} from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center flex-shrink-0">
            <SettingsIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Settings</h2>
            <p className="text-slate-300">
              Manage your account, preferences, and integrations
            </p>
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Account Settings */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Account Settings</h3>
              <p className="text-sm text-slate-600">Manage your profile and business info</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-600 block mb-1">Business Name</label>
              <input 
                type="text" 
                defaultValue="Acme Small Business Inc."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600 block mb-1">Email Address</label>
              <input 
                type="email" 
                defaultValue="admin@crediready.ai"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600 block mb-1">Industry</label>
              <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm">
                <option>Professional Services</option>
                <option>Retail</option>
                <option>Technology</option>
                <option>Manufacturing</option>
              </select>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Save Changes
            </Button>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Notifications</h3>
              <p className="text-sm text-slate-600">Configure your alert preferences</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-slate-900 text-sm">Credit Score Updates</p>
                <p className="text-xs text-slate-600">Weekly summary of score changes</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-slate-900 text-sm">AI Recommendations</p>
                <p className="text-xs text-slate-600">New coaching insights</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-slate-900 text-sm">Data Sync Alerts</p>
                <p className="text-xs text-slate-600">Bank & accounting integration status</p>
              </div>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-slate-900 text-sm">Monthly Reports</p>
                <p className="text-xs text-slate-600">Automated report generation</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Security</h3>
              <p className="text-sm text-slate-600">Password and authentication</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-600 block mb-1">Current Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600 block mb-1">New Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
              />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-slate-900 text-sm">Two-Factor Authentication</p>
                <p className="text-xs text-slate-600">Add extra security layer</p>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                Enabled
              </Badge>
            </div>
            <Button variant="outline" className="w-full">
              Update Password
            </Button>
          </div>
        </Card>

        {/* Integrations */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Integrations</h3>
              <p className="text-sm text-slate-600">Connected services and APIs</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">Bank API</p>
                  <p className="text-xs text-slate-600">Connected</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                Active
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                  <Database className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">Accounting Software</p>
                  <p className="text-xs text-slate-600">QuickBooks</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                Active
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-100 rounded flex items-center justify-center">
                  <Mail className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">Email Notifications</p>
                  <p className="text-xs text-slate-600">Gmail integration</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Danger Zone */}
      <Card className="p-6 border-2 border-red-200 bg-red-50">
        <h3 className="font-semibold text-slate-900 mb-2">Danger Zone</h3>
        <p className="text-sm text-slate-600 mb-4">
          Irreversible actions that affect your account and data
        </p>
        <div className="flex gap-3">
          <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
            Export All Data
          </Button>
          <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
            Delete Account
          </Button>
        </div>
      </Card>
    </div>
  );
}
