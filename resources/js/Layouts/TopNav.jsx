import Dropdown from '@/Components/Dropdown';
import { Menu, Search, Circle, Bell, Wifi, UserCircle } from 'lucide-react';

export default function TopNav({ header, setSidebarOpen, user }) {
    return (
        <header className="sticky top-0 z-40 w-full h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-between px-4 lg:px-8">
            <div className="flex items-center space-x-4">
                <button 
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden p-2 text-slate-500 hover:text-slate-900 transition-colors"
                >
                    <Menu className="w-6 h-6" />
                </button>
                {header && (
                    <div className="font-semibold text-lg text-slate-900">
                        {header}
                    </div>
                )}
            </div>
            
            <div className="flex items-center space-x-4 lg:space-x-6">
                {/* Global Search */}
                <div className="relative focus-within:ring-2 focus-within:ring-indigo-600 rounded-lg transition-all hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-[18px] h-[18px]" />
                    <input className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm text-slate-900 placeholder:text-slate-500 focus:ring-0 w-48 lg:w-64" placeholder="Search products, strategies..." type="text"/>
                </div>
                
                {/* Status Pill */}
                <div className="hidden md:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200">
                    <Circle className="text-emerald-600 w-3.5 h-3.5 fill-emerald-600" />
                    <span className="font-medium text-xs text-emerald-800">Connected to Shopify</span>
                </div>
                
                {/* Icons & User Menu */}
                <div className="flex items-center space-x-3 text-slate-500">
                    <button className="hover:text-indigo-600 transition-colors relative hidden sm:block">
                        <Bell className="w-6 h-6" />
                        <span className="absolute top-0 right-0.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
                    </button>
                    <button className="hover:text-indigo-600 transition-colors hidden sm:block">
                        <Wifi className="w-6 h-6" />
                    </button>
                    
                    <div className="relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="flex items-center hover:text-indigo-600 transition-colors focus:outline-none">
                                    <UserCircle className="w-7 h-7" />
                                </button>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <div className="block px-4 py-2 text-xs text-slate-500 border-b border-slate-100">
                                    {user?.name}
                                </div>
                                <Dropdown.Link href={route('profile.edit')}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </header>
    );
}
