import { useState } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardOverview } from './components/pages/DashboardOverview';
import { DataIntake } from './components/pages/DataIntake';
import { CreditAnalysis } from './components/pages/CreditAnalysis';
import { AdviceCoaching } from './components/pages/AdviceCoaching';
import { WhatIfSimulator } from './components/pages/WhatIfSimulator';
import { Reports } from './components/pages/Reports';
import { Settings } from './components/pages/Settings';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [authPage, setAuthPage] = useState<'login' | 'register'>('login');
  
  const smeProfile = {
    businessName: 'Acme Small Business Inc.',
    status: 'active' as const,
  };

  if (!isLoggedIn) {
  if (authPage === 'login') {
    return (
      <LoginPage
        onLoginSuccess={() => setIsLoggedIn(true)}
        onGoToRegister={() => setAuthPage('register')}
      />
    );
  }

  return (
    <RegisterPage
      onRegisterSuccess={() => setAuthPage('login')}
      onBackToLogin={() => setAuthPage('login')}
    />
  );
}


  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'data-intake':
        return <DataIntake />;
      case 'credit-analysis':
        return <CreditAnalysis />;
      case 'advice':
        return <AdviceCoaching />;
      case 'simulator':
        return <WhatIfSimulator />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <DashboardLayout
      currentPage={currentPage}
      smeProfile={smeProfile}
      onNavigate={setCurrentPage}
    >
      {renderPage()}
    </DashboardLayout>
  );
}
