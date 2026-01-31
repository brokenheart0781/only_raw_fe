import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface DashboardLayoutProps {
  children: ReactNode;
  currentPage: string;
  smeProfile: {
    businessName: string;
    status: 'active' | 'pending' | 'review';
  };
  onNavigate?: (pageId: string) => void;
}

export function DashboardLayout({ children, currentPage, smeProfile, onNavigate }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentPage={currentPage} smeProfile={smeProfile} />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}