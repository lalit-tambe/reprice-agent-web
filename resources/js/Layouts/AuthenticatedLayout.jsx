import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { usePage } from '@inertiajs/react';
import GlobalAdvisorWidget from '@/Components/GlobalAdvisorWidget';

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
                <GlobalAdvisorWidget />
            </div>
        </div>
    );
}
