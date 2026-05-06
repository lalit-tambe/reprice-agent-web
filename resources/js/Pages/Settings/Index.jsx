import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Store, ShoppingCart, AlertTriangle } from 'lucide-react';

// --- DICTIONARIES FOR TAILWIND CLASSES ---
// Writing these literal strings here guarantees Tailwind compiles them correctly
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

export default function Index({ integrations }) {
    const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
    const [integrationToDisconnect, setIntegrationToDisconnect] = useState(null);

    // Mock data contains pure state, NO CSS classes
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
                    <button className="pb-3 font-subtitle-medium text-subtitle-medium text-text-secondary hover:text-text-primary transition-colors">Profile & Security</button>
                    <button className="pb-3 font-subtitle-medium text-subtitle-medium text-primary border-b-2 border-primary">Integrations</button>
                    <button className="pb-3 font-subtitle-medium text-subtitle-medium text-text-secondary hover:text-text-primary transition-colors">Billing</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-md">
                {currentIntegrations.map((integration) => {
                    // Look up styles dynamically based on state
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
