import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Store, ShoppingCart, AlertTriangle, User, Upload, Shield, Key, Camera } from 'lucide-react';

// --- DICTIONARIES FOR TAILWIND CLASSES ---
const iconStyles = {
    shopify: { bg: 'bg-[#95BF47]/10', color: 'text-[#95BF47]' },
    amazon: { bg: 'bg-slate-100', color: 'text-slate-600' }
};

const statusStyles = {
    connected: {
        pillBg: 'bg-emerald-100',
        dotBg: 'bg-emerald-600',
        textColor: 'text-emerald-700'
    },
    disconnected: {
        pillBg: 'bg-slate-100 border border-border-subtle',
        dotBg: 'bg-slate-400',
        textColor: 'text-slate-600'
    }
};

const actionButtonStyles = {
    disconnect: 'bg-rose-50 text-danger-error border border-rose-200 hover:bg-rose-100 focus:ring-danger-error',
    connect: 'bg-primary-container text-white hover:bg-primary shadow-sm focus:ring-primary'
};

function ProfileSecurityTab() {
    return (
        <div className="space-y-8">
            {/* Profile Section */}
            <div className="bg-surface-bg rounded-xl shadow-sm border border-border-subtle p-gutter-md">
                <div className="flex items-center gap-2 mb-6">
                    <User className="w-5 h-5 text-primary" />
                    <h3 className="font-header-semibold text-header-semibold text-text-primary">Profile Information</h3>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Avatar Upload */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 rounded-full bg-ai-accent border-2 border-dashed border-primary flex items-center justify-center relative group overflow-hidden">
                            <span className="font-display-bold text-display-bold text-primary">R</span>
                            <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <Camera className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <button className="font-subtitle-medium text-subtitle-medium text-text-secondary hover:text-primary transition-colors flex items-center gap-1.5">
                            <Upload className="w-4 h-4" />
                            Upload new picture
                        </button>
                    </div>

                    {/* Form Fields */}
                    <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-label-sm text-label-sm text-text-secondary mb-1">First Name</label>
                                <input type="text" defaultValue="Admin" className="w-full px-3 py-2 border border-border-subtle rounded-lg font-body-base text-body-base text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-canvas-bg" />
                            </div>
                            <div>
                                <label className="block font-label-sm text-label-sm text-text-secondary mb-1">Last Name</label>
                                <input type="text" defaultValue="User" className="w-full px-3 py-2 border border-border-subtle rounded-lg font-body-base text-body-base text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-canvas-bg" />
                            </div>
                        </div>
                        <div>
                            <label className="block font-label-sm text-label-sm text-text-secondary mb-1">Email Address</label>
                            <input type="email" defaultValue="admin@repriceagent.ai" className="w-full px-3 py-2 border border-border-subtle rounded-lg font-body-base text-body-base text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-canvas-bg" />
                        </div>
                        <div className="pt-2 text-right">
                            <button className="px-6 py-2 bg-primary-container text-white rounded-lg font-subtitle-medium text-subtitle-medium hover:bg-primary transition-colors shadow-sm focus:ring-2 focus:ring-primary focus:outline-none">
                                Save Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div className="bg-surface-bg rounded-xl shadow-sm border border-border-subtle p-gutter-md">
                <div className="flex items-center gap-2 mb-6">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="font-header-semibold text-header-semibold text-text-primary">Security</h3>
                </div>

                <div className="space-y-6">
                    {/* Password Change */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border-subtle">
                        <div>
                            <h4 className="font-subtitle-medium text-subtitle-medium text-text-primary">Password</h4>
                            <p className="font-label-sm text-label-sm text-text-secondary mt-1">Last changed 3 months ago</p>
                        </div>
                        <button className="px-4 py-2 bg-canvas-bg text-text-primary border border-border-subtle rounded-lg font-subtitle-medium text-subtitle-medium hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-primary focus:outline-none flex items-center gap-2">
                            <Key className="w-[18px] h-[18px]" />
                            Change Password
                        </button>
                    </div>

                    {/* 2FA Toggle */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h4 className="font-subtitle-medium text-subtitle-medium text-text-primary">Two-Factor Authentication (2FA)</h4>
                            <p className="font-label-sm text-label-sm text-text-secondary mt-1">Add an extra layer of security to your account.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border-subtle after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Index({ integrations }) {
    const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'integrations', 'billing'
    const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
    const [integrationToDisconnect, setIntegrationToDisconnect] = useState(null);

    const defaultIntegrations = [
        {
            id: 'shopify',
            name: 'Shopify Admin API',
            description: 'my-premium-store.myshopify.com',
            iconType: 'storefront',
            brand: 'shopify',
            status: 'connected',
            statusLabel: 'Connected',
            actionType: 'disconnect',
            buttonLabel: 'Disconnect Store'
        },
        {
            id: 'amazon',
            name: 'Amazon Selling Partner API',
            description: 'Sync inventory & pricing',
            iconType: 'shopping_cart',
            brand: 'amazon',
            status: 'disconnected',
            statusLabel: 'Not Connected',
            actionType: 'connect',
            buttonLabel: 'Connect Amazon'
        }
    ];

    const currentIntegrations = integrations || defaultIntegrations;

    const handleActionClick = (integration) => {
        if (integration.actionType === 'disconnect') {
            setIntegrationToDisconnect(integration);
            setIsDisconnectModalOpen(true);
        } else {
            console.log('Connect to', integration.name);
        }
    };

    const getIcon = (type, colorClass) => {
        switch (type) {
            case 'storefront':
                return <Store className={`w-[30px] h-[30px] ${colorClass}`} />;
            case 'shopping_cart':
                return <ShoppingCart className={`w-[30px] h-[30px] ${colorClass}`} />;
            default:
                return null;
        }
    };

    return (
        <AuthenticatedLayout header="Settings">
            <Head title="Settings & Integrations" />

            <div className="mb-8">
                <h2 className="font-display-bold text-display-bold text-text-primary mb-6">Settings</h2>
                <div className="border-b border-border-subtle flex gap-8">
                    <button 
                        onClick={() => setActiveTab('profile')}
                        className={`pb-3 font-subtitle-medium text-subtitle-medium transition-colors ${
                            activeTab === 'profile' 
                            ? 'text-primary border-b-2 border-primary' 
                            : 'text-text-secondary hover:text-text-primary'
                        }`}
                    >
                        Profile & Security
                    </button>
                    <button 
                        onClick={() => setActiveTab('integrations')}
                        className={`pb-3 font-subtitle-medium text-subtitle-medium transition-colors ${
                            activeTab === 'integrations' 
                            ? 'text-primary border-b-2 border-primary' 
                            : 'text-text-secondary hover:text-text-primary'
                        }`}
                    >
                        Integrations
                    </button>
                    <button 
                        onClick={() => setActiveTab('billing')}
                        className={`pb-3 font-subtitle-medium text-subtitle-medium transition-colors ${
                            activeTab === 'billing' 
                            ? 'text-primary border-b-2 border-primary' 
                            : 'text-text-secondary hover:text-text-primary'
                        }`}
                    >
                        Billing
                    </button>
                </div>
            </div>

            {/* Render Tab Content */}
            {activeTab === 'profile' && <ProfileSecurityTab />}

            {activeTab === 'integrations' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-md">
                    {currentIntegrations.map((integration) => {
                        const brandStyle = iconStyles[integration.brand];
                        const statusStyle = statusStyles[integration.status];
                        const btnStyle = actionButtonStyles[integration.actionType];

                        return (
                            <div key={integration.id} className="bg-surface-bg rounded-xl shadow-sm border border-border-subtle p-gutter-md flex flex-col h-full">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${brandStyle.bg}`}>
                                            {getIcon(integration.iconType, brandStyle.color)}
                                        </div>
                                        <div>
                                            <h3 className="font-header-semibold text-header-semibold text-text-primary">{integration.name}</h3>
                                            <p className="font-label-sm text-label-sm text-text-secondary mt-1">{integration.description}</p>
                                        </div>
                                    </div>
                                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${statusStyle.pillBg}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dotBg}`}></span>
                                        <span className={`font-label-sm text-label-sm ${statusStyle.textColor}`}>{integration.statusLabel}</span>
                                    </div>
                                </div>
                                <div className="mt-auto pt-4 border-t border-border-subtle">
                                    <button 
                                        className={`w-full py-2 rounded-lg font-subtitle-medium text-subtitle-medium transition-colors focus:ring-2 focus:outline-none ${btnStyle}`}
                                        onClick={() => handleActionClick(integration)}
                                    >
                                        {integration.buttonLabel}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {activeTab === 'billing' && (
                <div className="bg-surface-bg rounded-xl shadow-sm border border-border-subtle p-gutter-md flex items-center justify-center h-48 text-text-secondary">
                    Billing implementation coming soon...
                </div>
            )}

            {/* Disconnect Modal Overlay */}
            {isDisconnectModalOpen && (
                <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-surface-bg rounded-xl shadow-lg border border-border-subtle w-full max-w-[400px] overflow-hidden flex flex-col">
                        <div className="p-6">
                            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <AlertTriangle className="text-danger-error w-6 h-6" />
                            </div>
                            <h3 className="font-display-bold text-display-bold text-text-primary text-center mb-2">Disconnect {integrationToDisconnect?.name.split(' ')[0]}?</h3>
                            <p className="font-body-base text-body-base text-text-secondary text-center mb-6">
                                This will immediately pause all AI-driven repricing strategies for your store. To proceed, please type <span className="font-semibold text-text-primary">CONFIRM</span> below.
                            </p>
                            <div className="mb-2">
                                <input 
                                    className="w-full px-3 py-2 border border-border-subtle rounded-lg font-body-base text-body-base text-text-primary focus:outline-none focus:ring-2 focus:ring-danger-error focus:border-transparent text-center placeholder:text-text-secondary" 
                                    placeholder="Type CONFIRM" 
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="bg-slate-50 px-6 py-4 flex items-center justify-end gap-3 border-t border-border-subtle">
                            <button 
                                className="px-4 py-2 text-text-secondary font-subtitle-medium text-subtitle-medium rounded-lg hover:bg-slate-200 transition-colors focus:ring-2 focus:ring-slate-400 focus:outline-none border border-transparent"
                                onClick={() => setIsDisconnectModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-danger-error text-white font-subtitle-medium text-subtitle-medium rounded-lg hover:bg-rose-600 transition-colors shadow-sm focus:ring-2 focus:ring-danger-error focus:outline-none">
                                Disconnect
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
