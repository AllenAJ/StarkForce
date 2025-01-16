import React, { useState } from 'react';
import { Layout, MessageCircle } from 'lucide-react';
import StarknetChat from './StarknetChat';
import StarknetDashboard from './StarknetChat';

const AppLayout = () => {
  const [viewMode, setViewMode] = useState('dashboard'); // or 'chat'

  return (
    <div className="min-h-screen bg-black">
      {/* Mode Toggle */}


      {/* View Content */}
      <div className="transition-all duration-300">
        {viewMode === 'dashboard' ? (
          <StarknetDashboard />
        ) : (
          <StarknetChat />
        )}
      </div>
    </div>
  );
};

export default AppLayout;