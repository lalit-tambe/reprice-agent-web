import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { usePage } from '@inertiajs/react';
import { Sparkles } from 'lucide-react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="bg-slate-50 text-slate-900 font-sans h-screen overflow-hidden flex">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            
            <div className="flex-1 lg:ml-64 flex flex-col h-screen relative">
                <TopNav header={header} setSidebarOpen={setSidebarOpen} user={user} />
                
                <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">
                    <div className="max-w-6xl mx-auto pb-20">
                        {children}
                    </div>
                </main>

                {/* Global RAG Strategy Advisor Floating Action Button */}
                <button className="absolute bottom-8 right-8 bg-white shadow-lg rounded-full px-6 py-4 flex items-center space-x-3 border border-slate-200 hover:scale-105 transition-transform z-50 text-slate-900 font-medium text-sm">
                    <Sparkles className="text-indigo-600 w-5 h-5" />
                    <span className="hidden md:inline">RAG Strategy Advisor</span>
                </button>
            </div>
        </div>
    );
}
