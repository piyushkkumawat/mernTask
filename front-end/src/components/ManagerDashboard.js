import React from 'react';
import Sidebar from './common/Sidebar';
import EmployeeList from './EmployeeList';

const ManagerDashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-content">
        <EmployeeList />
      </div>
    </div>
  );
};

export default ManagerDashboard;
