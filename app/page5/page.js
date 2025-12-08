"use client";
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Sun, 
  Hammer, 
  FileText, 
  CheckSquare, 
  LayoutDashboard, 
  MoreVertical, 
  Search, 
  Bell, 
  Menu, 
  X, 
  TrendingUp,
  MapPin,
  BatteryCharging,
  AlertCircle,
  ChevronRight,
  Shield,
  Briefcase,
  DollarSign,
  Calendar,
  UserCheck,
  Eye,
  Check,
  XCircle
} from 'lucide-react';

// --- Mock Data ---

const INITIAL_USERS = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Homeowner', status: 'Active', joined: '2023-10-15', phone: '+1 (555) 010-1234', address: '123 Maple Dr, Austin, TX' },
  { id: 2, name: 'Bob Smith', email: 'bob.solar@example.com', role: 'Homeowner', status: 'Active', joined: '2023-11-02', phone: '+1 (555) 010-5678', address: '456 Oak Ln, Austin, TX' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@test.com', role: 'Homeowner', status: 'Suspended', joined: '2023-09-20', phone: '+1 (555) 010-9999', address: '789 Pine St, Dallas, TX' },
  { id: 4, name: 'David Lee', email: 'david@demo.com', role: 'Homeowner', status: 'Active', joined: '2023-12-01', phone: '+1 (555) 010-4321', address: '101 Cedar Blvd, Houston, TX' },
  { id: 5, name: 'Eve Martinez', email: 'eve@solar.com', role: 'Installer Admin', status: 'Active', joined: '2024-01-10', phone: '+1 (555) 010-7777', address: '500 Solar Way, Phoenix, AZ' },
];

const INITIAL_INSTALLERS = [
  { id: 101, company: 'SunnySide Solar', contact: 'Mike Ross', email: 'mike@sunnyside.com', location: 'Austin, TX', rating: 4.8, projects: 12, crewSize: 15, license: 'TX-SOL-123' },
  { id: 102, company: 'Green Earth Energy', contact: 'Rachel Zane', email: 'rachel@greenearth.com', location: 'San Diego, CA', rating: 4.5, projects: 8, crewSize: 8, license: 'CA-SOL-456' },
  { id: 103, company: 'Future Power', contact: 'Harvey Specter', email: 'harvey@futurepower.com', location: 'New York, NY', rating: 4.9, projects: 45, crewSize: 30, license: 'NY-SOL-789' },
  { id: 104, company: 'BlueSky Systems', contact: 'Louis Litt', email: 'louis@bluesky.com', location: 'Miami, FL', rating: 4.2, projects: 5, crewSize: 6, license: 'FL-SOL-101' },
];

const INITIAL_PROJECTS = [
  { id: 'P-001', customer: 'Alice Johnson', installer: 'SunnySide Solar', size: '8.5kW', panels: 24, status: 'Completed', date: '2023-12-10', cost: '$22,500', warranty: '25 Years' },
  { id: 'P-002', customer: 'David Lee', installer: 'Green Earth Energy', size: '12kW', panels: 36, status: 'Running', date: '2024-01-15', cost: '$31,000', warranty: '25 Years' },
  { id: 'P-003', customer: 'Bob Smith', installer: 'Future Power', size: '6.0kW', panels: 18, status: 'Running', date: '2024-02-01', cost: '$16,800', warranty: '20 Years' },
  { id: 'P-004', customer: 'Sarah Connor', installer: 'SunnySide Solar', size: '10kW', panels: 28, status: 'Completed', date: '2023-11-20', cost: '$28,000', warranty: '25 Years' },
];

const INITIAL_BIDS = [
  { id: 'B-501', project: 'Res-Tx-99', installer: 'SunnySide Solar', amount: '$24,500', submitted: '2 hours ago', notes: 'Includes premium inverter upgrade.', status: 'Pending' },
  { id: 'B-502', project: 'Res-Ca-42', installer: 'Green Earth Energy', amount: '$32,000', submitted: '5 hours ago', notes: 'Standard installation package.', status: 'Pending' },
  { id: 'B-503', project: 'Com-Ny-12', installer: 'Future Power', amount: '$120,000', submitted: '1 day ago', notes: 'Commercial grade racking system.', status: 'Pending' },
];

const INITIAL_APPROVALS = [
  { id: 901, company: 'Rapid Rays LLC', license: 'LIC-998877', contact: 'John Doe', email: 'john@rapidrays.com', location: 'Phoenix, AZ', requestDate: '2024-02-10', documents: ['License.pdf', 'Insurance.pdf'] },
  { id: 902, company: 'EcoRoof Solutions', license: 'LIC-112233', contact: 'Jane Smith', email: 'jane@ecoroof.com', location: 'Orlando, FL', requestDate: '2024-02-12', documents: ['Cert_1.pdf'] },
];

// --- Shared Components ---

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColors = {
    success: 'bg-emerald-600',
    error: 'bg-rose-600',
    info: 'bg-blue-600'
  };

  return (
    <div className={`fixed top-6 right-6 z-[60] ${bgColors[type] || bgColors.info} text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-in slide-in-from-right duration-300`}>
      {type === 'success' && <CheckSquare className="w-5 h-5" />}
      {type === 'error' && <AlertCircle className="w-5 h-5" />}
      {type === 'info' && <Bell className="w-5 h-5" />}
      <span className="font-medium text-sm">{message}</span>
      <button onClick={onClose} className="ml-2 hover:bg-white/20 p-1 rounded-full transition-colors">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const styles = {
    Active: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Completed: 'bg-blue-100 text-blue-700 border-blue-200',
    Running: 'bg-amber-100 text-amber-700 border-amber-200',
    Suspended: 'bg-rose-100 text-rose-700 border-rose-200',
    Pending: 'bg-slate-100 text-slate-600 border-slate-200',
    Accepted: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Rejected: 'bg-rose-100 text-rose-700 border-rose-200'
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status] || styles.Pending}`}>
      {status}
    </span>
  );
};

const DetailRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start py-3 border-b border-slate-50 last:border-0">
    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mr-4 shrink-0">
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</p>
      <p className="text-sm font-medium text-slate-900 mt-0.5">{value}</p>
    </div>
  </div>
);

// --- View Components ---

// 1. Sidebar
const Sidebar = ({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'installers', label: 'Installers', icon: Hammer },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'bids', label: 'Bids', icon: DollarSign },
    { id: 'approvals', label: 'Approvals', icon: Shield },
  ];

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-out ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} flex flex-col shadow-2xl lg:shadow-none border-r border-slate-800`}>
        <div className="h-20 flex items-center px-6 border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl shadow-lg shadow-blue-500/20">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight block leading-none">Solar</span>
              <span className="text-xs font-medium text-blue-400 tracking-wider uppercase">Admin Portal</span>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200 group relative ${
                activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 translate-x-1' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white hover:translate-x-1'
              }`}
            >
              <item.icon className={`w-5 h-5 mr-3 transition-colors ${activeTab === item.id ? 'text-blue-200' : 'text-slate-500 group-hover:text-white'}`} />
              {item.label}
              {item.id === 'approvals' && (
                <span className="ml-auto bg-rose-500 text-white text-[10px] font-bold py-0.5 px-2 rounded-full shadow-sm animate-pulse">2</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800/50 bg-slate-900/30">
          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-800 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-sm font-bold shadow-lg ring-2 ring-slate-800 group-hover:ring-blue-500/50 transition-all">SA</div>
            <div className="text-left flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate group-hover:text-blue-400 transition-colors">Super Admin</p>
              <p className="text-xs text-slate-500 truncate">admin@solar.com</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </>
  );
};

// 2. Dashboard
const DashboardView = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
        <p className="text-slate-500 mt-1">Welcome back, here's your daily solar production and user analytics.</p>
      </div>
      <div className="flex gap-3">
        <select className="bg-white border border-slate-200 text-slate-600 text-sm rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm hover:border-blue-300 transition-colors cursor-pointer">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Year</option>
        </select>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-md shadow-blue-200 transition-all hover:shadow-lg flex items-center gap-2 active:scale-95">
          <FileText className="w-4 h-4" /> Generate Report
        </button>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { label: 'Total Users', value: '2,543', change: '+12%', icon: Users, color: 'text-blue-600 bg-blue-50' },
        { label: 'Active Projects', value: '145', change: '+5%', icon: Briefcase, color: 'text-emerald-600 bg-emerald-50' },
        { label: 'Total Revenue', value: '$1.2M', change: '+18%', icon: TrendingUp, color: 'text-indigo-600 bg-indigo-50' },
        { label: 'Pending Approvals', value: '12', change: '-2', icon: Shield, color: 'text-rose-600 bg-rose-50' },
      ].map((stat, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 hover:border-blue-200 transition-all group hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
              {stat.change}
            </span>
          </div>
          <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-1 tracking-tight">{stat.value}</h3>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Visual Chart - Installation Analytics */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-96">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <BatteryCharging className="w-5 h-5 text-emerald-500" />
            Installations Trend
          </h3>
          <button className="text-slate-400 hover:text-blue-600"><MoreVertical className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((height, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group w-full">
              <div 
                className="w-full bg-blue-100 rounded-t-lg relative overflow-hidden group-hover:bg-blue-200 transition-all duration-300" 
                style={{ height: `${height}%` }}
              >
                 <div className="absolute bottom-0 w-full bg-blue-500 h-0 group-hover:h-full transition-all duration-500 opacity-20"></div>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">M{i+1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Chart - Geographic Distribution */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-96">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-500" />
            Top Locations
          </h3>
          <button className="text-slate-400 hover:text-blue-600"><MoreVertical className="w-5 h-5" /></button>
        </div>
        <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
          {[
            { state: 'Texas', value: 85, color: 'bg-orange-500' },
            { state: 'California', value: 72, color: 'bg-yellow-500' },
            { state: 'New York', value: 64, color: 'bg-blue-500' },
            { state: 'Florida', value: 45, color: 'bg-emerald-500' },
            { state: 'Arizona', value: 38, color: 'bg-rose-500' }
          ].map((loc, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-slate-700">{loc.state}</span>
                <span className="text-slate-500 font-mono">{loc.value}%</span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${loc.color} rounded-full transition-all duration-1000 ease-out`} 
                  style={{ width: `${loc.value}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// 3. User Management
const UserManagement = ({ users, setUsers, showToast }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this user?')) {
      setUsers(users.filter(u => u.id !== id));
      showToast('User deleted successfully', 'success');
    }
  };

  const handleSuspend = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const newStatus = u.status === 'Active' ? 'Suspended' : 'Active';
        showToast(`User status updated to ${newStatus}`, 'info');
        return { ...u, status: newStatus };
      }
      return u;
    }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-900">User Management</h2>
        <div className="relative w-full sm:w-auto group">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search users..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-72 pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all" 
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50/80">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.length > 0 ? filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700 flex items-center justify-center font-bold text-sm border border-blue-200 group-hover:scale-110 transition-transform">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-slate-900">{user.name}</div>
                        <div className="text-sm text-slate-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => setSelectedUser(user)}
                        className="p-2 bg-slate-100 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleSuspend(user.id)}
                        className={`p-2 bg-slate-100 rounded-lg transition-all ${user.status === 'Active' ? 'text-amber-600 hover:bg-amber-50' : 'text-emerald-600 hover:bg-emerald-50'}`}
                        title={user.status === 'Active' ? 'Suspend' : 'Activate'}
                      >
                        {user.status === 'Active' ? <UserCheck className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="p-2 bg-slate-100 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                        title="Delete"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-slate-400">
                    <div className="flex flex-col items-center">
                      <Search className="w-8 h-8 mb-2 opacity-50" />
                      <p>No users found matching "{searchTerm}"</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Modal 
        isOpen={!!selectedUser} 
        onClose={() => setSelectedUser(null)} 
        title="User Details"
        footer={
          <button onClick={() => setSelectedUser(null)} className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors">Close</button>
        }
      >
        {selectedUser && (
          <div className="space-y-4">
            <div className="flex items-center mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mr-4 border-4 border-white shadow-sm">
                {selectedUser.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">{selectedUser.name}</h4>
                <p className="text-slate-500 text-sm">{selectedUser.email}</p>
                <div className="mt-2"><StatusBadge status={selectedUser.status} /></div>
              </div>
            </div>
            <div className="space-y-1">
              <DetailRow icon={Users} label="Role" value={selectedUser.role} />
              <DetailRow icon={MapPin} label="Address" value={selectedUser.address} />
              <DetailRow icon={Briefcase} label="Phone" value={selectedUser.phone} />
              <DetailRow icon={Calendar} label="Joined Date" value={selectedUser.joined} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

// 4. Installer Management
const InstallerManagement = ({ installers }) => {
  const [selectedInstaller, setSelectedInstaller] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInstallers = installers.filter(installer => 
    installer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    installer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-900">Installer Directory</h2>
        <div className="relative w-full sm:w-auto group">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search installers..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-72 pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInstallers.map((installer) => (
          <div key={installer.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 p-6 flex flex-col group relative overflow-hidden">
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <Hammer className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                <Sun className="w-4 h-4 text-amber-400 fill-current" />
                <span className="text-sm font-bold text-slate-700">{installer.rating}</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">{installer.company}</h3>
            <p className="text-sm text-slate-500 mb-5">{installer.contact}</p>
            
            <div className="mt-auto space-y-3 pt-5 border-t border-slate-50">
              <div className="flex items-center text-sm text-slate-600">
                <MapPin className="w-4 h-4 mr-3 text-slate-400 shrink-0" />
                {installer.location}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <CheckSquare className="w-4 h-4 mr-3 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700 mr-1">{installer.projects}</span> Completed Projects
              </div>
            </div>
            
            <button 
              onClick={() => setSelectedInstaller(installer)}
              className="mt-6 w-full py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all active:scale-[0.98]"
            >
              View Full Profile
            </button>
          </div>
        ))}
      </div>
      
      {filteredInstallers.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400">No installers found matching "{searchTerm}"</p>
        </div>
      )}

      <Modal 
        isOpen={!!selectedInstaller} 
        onClose={() => setSelectedInstaller(null)} 
        title={selectedInstaller?.company}
        footer={
          <button onClick={() => setSelectedInstaller(null)} className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors">Close</button>
        }
      >
        {selectedInstaller && (
          <div className="space-y-4">
            <div className="flex gap-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 mb-6 shadow-inner">
              <div className="flex-1 text-center border-r border-blue-200/50">
                <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">Rating</p>
                <p className="text-2xl font-bold text-slate-800">{selectedInstaller.rating}</p>
              </div>
              <div className="flex-1 text-center border-r border-blue-200/50">
                <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">Projects</p>
                <p className="text-2xl font-bold text-slate-800">{selectedInstaller.projects}</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">Crew Size</p>
                <p className="text-2xl font-bold text-slate-800">{selectedInstaller.crewSize}</p>
              </div>
            </div>
            <div className="space-y-1">
              <DetailRow icon={Briefcase} label="Primary Contact" value={selectedInstaller.contact} />
              <DetailRow icon={FileText} label="Email" value={selectedInstaller.email} />
              <DetailRow icon={Shield} label="License Number" value={selectedInstaller.license} />
              <DetailRow icon={MapPin} label="Headquarters" value={selectedInstaller.location} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

// 5. Projects
const ProjectsView = ({ projects }) => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.status === filter);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Project Oversight</h2>
        <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          {['All', 'Running', 'Completed'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-5 py-2 text-sm font-bold rounded-lg transition-all ${
                filter === status ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer" onClick={() => setSelectedProject(project)}>
            <div className="flex items-center gap-5">
              <div className={`p-4 rounded-2xl shadow-sm transition-transform group-hover:scale-105 ${project.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                <BatteryCharging className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{project.id}</h4>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-600 font-medium">{project.size} System</span>
                </div>
                <p className="text-sm text-slate-500 mt-1.5 flex items-center gap-2">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200">{project.customer}</span>
                  <ChevronRight className="w-3 h-3 text-slate-300" />
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200">{project.installer}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <StatusBadge status={project.status} />
                <p className="text-xs text-slate-400 mt-1.5 font-medium">Started: {project.date}</p>
              </div>
              <div className="p-2 bg-slate-50 group-hover:bg-blue-50 text-slate-400 group-hover:text-blue-600 rounded-xl transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        title={`Project Details: ${selectedProject?.id}`}
        footer={
          <button onClick={() => setSelectedProject(null)} className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors">Close</button>
        }
      >
        {selectedProject && (
          <div className="space-y-4">
             <div className="bg-slate-50 p-5 rounded-2xl mb-6 border border-slate-100">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Total Cost</p>
                    <p className="text-xl font-bold text-slate-900">{selectedProject.cost}</p>
                  </div>
                   <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Warranty</p>
                    <p className="text-xl font-bold text-slate-900">{selectedProject.warranty}</p>
                  </div>
                </div>
             </div>
             <div className="space-y-1">
               <DetailRow icon={Users} label="Customer Name" value={selectedProject.customer} />
               <DetailRow icon={Hammer} label="Assigned Installer" value={selectedProject.installer} />
               <DetailRow icon={BatteryCharging} label="System Size" value={selectedProject.size} />
               <DetailRow icon={Sun} label="Number of Panels" value={`${selectedProject.panels} Panels`} />
               <DetailRow icon={Calendar} label="Installation Date" value={selectedProject.date} />
             </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

// 6. Bids
const BidsView = ({ bids, setBids, showToast }) => {

  const handleAction = (id, action) => {
    // In a real app, this would make an API call
    if (action === 'Accepted') {
      showToast(`Bid ${id} Accepted! Project workflow started.`, 'success');
    } else {
      showToast(`Bid ${id} Rejected.`, 'error');
    }

    setBids(bids.map(bid => 
      bid.id === id ? { ...bid, status: action } : bid
    ));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Active Bids</h2>
        <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-bold border border-blue-100">
          {bids.filter(b => b.status === 'Pending').length} Pending Review
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="min-w-full divide-y divide-slate-100">
          <thead className="bg-slate-50/80">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Bid ID</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Project / Installer</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {bids.map((bid) => (
              <tr key={bid.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="font-mono text-sm font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded border border-slate-200">{bid.id}</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{bid.project}</span>
                    <span className="text-xs text-slate-500 mt-0.5">{bid.installer}</span>
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                   <span className="text-sm font-bold text-slate-800 bg-green-50 text-green-700 px-2 py-1 rounded-lg border border-green-100">{bid.amount}</span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                   <StatusBadge status={bid.status} />
                </td>
                <td className="px-6 py-5 text-right">
                  {bid.status === 'Pending' ? (
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => handleAction(bid.id, 'Rejected')}
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-transparent hover:border-rose-100" title="Reject"
                      >
                        <XCircle className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleAction(bid.id, 'Accepted')}
                        className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-transparent hover:border-emerald-100" title="Accept"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 font-medium italic">
                      {bid.status === 'Accepted' ? 'Proposal Locked' : 'Archived'}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 7. Approvals
const ApprovalsView = ({ approvals, setApprovals, setInstallers, installers, showToast }) => {
  const [reviewItem, setReviewItem] = useState(null);

  const handleDecision = (decision) => {
    if (!reviewItem) return;
    
    if (decision === 'approve') {
      const newInstaller = {
        id: Math.random(),
        company: reviewItem.company,
        contact: reviewItem.contact,
        email: reviewItem.email,
        location: reviewItem.location,
        rating: 'New',
        projects: 0,
        license: reviewItem.license,
        crewSize: 'Pending'
      };
      setInstallers([...installers, newInstaller]);
      showToast(`${reviewItem.company} Approved & Onboarded!`, 'success');
    } else {
      showToast(`${reviewItem.company} Application Rejected.`, 'error');
    }
    
    setApprovals(approvals.filter(a => a.id !== reviewItem.id));
    setReviewItem(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
         <h2 className="text-2xl font-bold text-slate-900">Installer Requests</h2>
         <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-bold border border-rose-200">{approvals.length} Pending</span>
      </div>

      {approvals.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
          <div className="bg-slate-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-slate-100">
             <CheckSquare className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-slate-900 font-bold text-lg">All Caught Up!</h3>
          <p className="text-slate-500 mt-1">No pending installer applications at this time.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {approvals.map((req) => (
            <div key={req.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-blue-300 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1 border border-blue-100">
                   <Shield className="w-5 h-5" />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-slate-900">{req.company}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-2">
                      <span className="flex items-center bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 font-medium text-xs text-slate-600"><FileText className="w-3.5 h-3.5 mr-1.5 text-slate-400" /> {req.license}</span>
                      <span className="flex items-center bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 font-medium text-xs text-slate-600"><MapPin className="w-3.5 h-3.5 mr-1.5 text-slate-400" /> {req.location}</span>
                    </div>
                 </div>
              </div>
              <button 
                onClick={() => setReviewItem(req)}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-blue-600 text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
              >
                Review Application
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Review Modal */}
      <Modal 
        isOpen={!!reviewItem} 
        onClose={() => setReviewItem(null)} 
        title="Application Review"
        footer={
           <>
              <button onClick={() => handleDecision('reject')} className="px-5 py-2.5 border border-rose-200 text-rose-600 rounded-xl hover:bg-rose-50 font-bold transition-colors">
                 Reject Application
              </button>
              <button onClick={() => handleDecision('approve')} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-bold shadow-lg shadow-blue-200 hover:shadow-xl transition-all">
                 Approve & Onboard
              </button>
           </>
        }
      >
         {reviewItem && (
            <div className="space-y-6">
               <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                     <h4 className="text-sm font-bold text-amber-800">Compliance Check Required</h4>
                     <p className="text-xs text-amber-700 mt-1 leading-relaxed">Please verify the license number against the state database before approving this installer. Ensure insurance documents are valid for the current year.</p>
                  </div>
               </div>
               
               <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">Company Details</h4>
                  <DetailRow icon={Briefcase} label="Company Name" value={reviewItem.company} />
                  <DetailRow icon={Shield} label="License Number" value={reviewItem.license} />
                  <DetailRow icon={MapPin} label="Location" value={reviewItem.location} />
                  <DetailRow icon={Calendar} label="Request Date" value={reviewItem.requestDate} />
               </div>

               <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 pt-2">Contact Information</h4>
                  <DetailRow icon={Users} label="Representative" value={reviewItem.contact} />
                  <DetailRow icon={FileText} label="Email Address" value={reviewItem.email} />
               </div>

               <div>
                  <h4 className="font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 pt-2">Submitted Documents</h4>
                  <div className="grid grid-cols-2 gap-3">
                     {reviewItem.documents.map((doc, i) => (
                        <div key={i} className="flex items-center p-3 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-blue-200 cursor-pointer transition-all group">
                           <FileText className="w-5 h-5 text-rose-500 mr-2" />
                           <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">{doc}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         )}
      </Modal>
    </div>
  );
};

// --- App Wrapper ---

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Toast State
  const [toast, setToast] = useState(null); // { message, type }

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  // Global State
  const [users, setUsers] = useState(INITIAL_USERS);
  const [installers, setInstallers] = useState(INITIAL_INSTALLERS);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [bids, setBids] = useState(INITIAL_BIDS);
  const [approvals, setApprovals] = useState(INITIAL_APPROVALS);

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'users': return <UserManagement users={users} setUsers={setUsers} showToast={showToast} />;
      case 'installers': return <InstallerManagement installers={installers} />;
      case 'projects': return <ProjectsView projects={projects} />;
      case 'bids': return <BidsView bids={bids} setBids={setBids} showToast={showToast} />;
      case 'approvals': return <ApprovalsView approvals={approvals} setApprovals={setApprovals} setInstallers={setInstallers} installers={installers} showToast={showToast} />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50/50 font-sans text-slate-900 overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/50 flex items-center justify-between px-6 z-10 sticky top-0 transition-all">
          <div className="flex items-center">
            <button 
              className="lg:hidden p-2 mr-4 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-slate-800 hidden sm:block tracking-tight">{
              activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace(/([A-Z])/g, ' $1').trim()
            }</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors relative group">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white group-hover:scale-110 transition-transform"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200 h-8">
              <div className="text-right hidden sm:block">
                 <p className="text-sm font-bold text-slate-700 leading-none">Admin User</p>
                 <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mt-1">Super Admin</p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-white cursor-pointer hover:ring-blue-100 transition-all">
                AD
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 md:p-8 relative scroll-smooth bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;