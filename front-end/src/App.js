import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './_helper/index';
import SignupForm from './components/Signup';
import LoginForm from './components/LoginForm';
import ManagerDashboard from './components/ManagerDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/managerDashboard" element={<ManagerDashboard />} />
            <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
