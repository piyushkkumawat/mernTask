import React from 'react';
import Sidebar from './common/Sidebar';

const EmployeeDashboard = () => {
  const assignedDepartment = 'Human Resources'; // Replace with the actual assigned department
  
  return (
    <div className="dashboard">
      
      <div className="dashboard-content">
        <h2>Welcome to the Employee Dashboard</h2>
        <p>Assigned Department: {assignedDepartment}</p>
        {/* Add more components and information specific to the employee dashboard */}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
