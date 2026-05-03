import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, Package, Brain, Settings, Plus } from 'lucide-react';

export default function Sidebar({ isOpen, setIsOpen }) {
    const { url } = usePage();
    
    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
            
            {/* Sidebar */}
            <nav className={`fixed left-0 top-0 h-full w-64 border-r border-slate-200 shadow-sm bg-white flex flex-col py-6 px-4 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="mb-8 px-2 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                        R
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg text-slate-900 tracking-tight">RepriceAgent</h1>
                        <p className="font-medium text-xs text-slate-500">Enterprise AI</p>
                    </div>
                </div>
                
                <div className="space-y-1 flex-1">
                    <Link 
                        href="/dashboard" 
                        className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                            url.startsWith('/dashboard') 
                            ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600' 
                            : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'
                        }`}
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </Link>
                    <Link 
                        href="/products" 
                        className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                            url.startsWith('/products') 
                            ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600' 
                            : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'
                        }`}
                    >
                        <Package className="w-5 h-5" />
                        <span>Products</span>
                    </Link>
                    <Link 
                        href="/strategy" 
                        className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                            url.startsWith('/strategy') 
                            ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600' 
                            : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'
                        }`}
                    >
                        <Brain className="w-5 h-5" />
                        <span>AI Strategy Advisor</span>
                    </Link>
                    <Link 
                        href="/settings" 
                        className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors mt-auto ${
                            url.startsWith('/settings') 
                            ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600' 
                            : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'
                        }`}
                    >
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </Link>
                </div>
                
                <div className="mt-8">
                    <button className="w-full bg-indigo-600 text-white font-medium text-sm rounded-lg py-2.5 px-4 shadow-sm hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
                        <Plus className="w-[18px] h-[18px]" />
                        <span>New Strategy</span>
                    </button>
                </div>
            </nav>
        </>
    );
}
