import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Sparkles, Brain, ArrowUp, ArrowRight, ArrowDown } from 'lucide-react';

export default function CommandCenter({ auth, kpis, recentDecisions }) {
    // Fallback mock data if not provided
    const displayKpis = kpis || {
        totalProducts: '1,248',
        aiOverrides: '42',
        marginSaved: '$1,450.00'
    };

    const displayDecisions = recentDecisions || [
        {
            id: 1,
            name: 'Premium Leather Tote',
            sku: 'BAG-001',
            oldPrice: '$120.00',
            newPrice: '$120.00',
            time: 'Just now',
            trend: 'flat',
            aiReasoning: 'Held price: Competitor price drop due to "broken zipper" reviews.',
            actionType: 'Held price'
        },
        {
            id: 2,
            name: 'Silk Scarf',
            sku: 'ACC-442',
            oldPrice: '$45.00',
            newPrice: '$49.00',
            time: '15m ago',
            trend: 'up',
            aiReasoning: 'Increased price: Low competitor stock detected on Amazon.',
            actionType: 'Increased price'
        },
        {
            id: 3,
            name: 'Wireless Headphones',
            sku: 'TECH-09',
            oldPrice: '$299.00',
            newPrice: '$285.00',
            time: '1h ago',
            trend: 'down',
            aiReasoning: 'Decreased price: Matched authorized dealer seasonal promo.',
            actionType: 'Decreased price'
        }
    ];

    return (
        <AuthenticatedLayout
            user={auth?.user}
            header={<h2 className="font-header-semibold text-header-semibold text-text-primary">Dashboard</h2>}
        >
            <Head title="Command Center" />

            <div className="space-y-8">
                {/* KPI Row (Bento Style) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-md">
                    <div className="bg-surface-bg rounded-xl shadow-sm border border-border-subtle p-6 flex flex-col justify-between h-32 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-canvas-bg rounded-full opacity-50 group-hover:scale-110 transition-transform duration-300"></div>
                        <h3 className="font-subtitle-medium text-subtitle-medium text-text-secondary relative z-10">Total Tracked Products</h3>
                        <p className="font-display-bold text-display-bold text-text-primary text-3xl relative z-10">{displayKpis.totalProducts}</p>
                    </div>
                    <div className="bg-surface-bg rounded-xl shadow-sm border border-border-subtle p-6 flex flex-col justify-between h-32 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#FFFBEB] rounded-full opacity-50 group-hover:scale-110 transition-transform duration-300"></div>
                        <h3 className="font-subtitle-medium text-subtitle-medium text-text-secondary relative z-10">AI Overrides Today</h3>
                        <p className="font-display-bold text-display-bold text-warning-hold text-3xl relative z-10">{displayKpis.aiOverrides}</p>
                    </div>
                    <div className="bg-surface-bg rounded-xl shadow-sm border border-border-subtle p-6 flex flex-col justify-between h-32 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ECFDF5] rounded-full opacity-50 group-hover:scale-110 transition-transform duration-300"></div>
                        <h3 className="font-subtitle-medium text-subtitle-medium text-text-secondary relative z-10">Estimated Margin Saved</h3>
                        <p className="font-display-bold text-display-bold text-success-profit text-3xl relative z-10">{displayKpis.marginSaved}</p>
                    </div>
                </div>

                {/* AI Decisions Feed */}
                <div className="space-y-4 relative">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-header-semibold text-header-semibold text-text-primary flex items-center space-x-2">
                            <Brain className="text-primary w-6 h-6" />
                            <span>Recent AI Decisions</span>
                        </h3>
                        {/* Floating Pill */}
                        <div className="bg-primary text-on-primary rounded-full shadow-md px-4 py-2 flex items-center space-x-2 animate-bounce cursor-pointer hover:bg-primary-container transition-colors z-20">
                            <ArrowUp className="w-4 h-4" />
                            <span className="font-label-sm text-label-sm">3 New decisions available</span>
                        </div>
                    </div>

                    <div className="bg-surface-bg rounded-xl shadow-sm border border-border-subtle overflow-hidden">
                        <div className="divide-y divide-border-subtle">
                            {displayDecisions.map((decision) => (
                                <div key={decision.id} className="p-6 hover:bg-canvas-bg transition-colors flex flex-col space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-subtitle-medium text-subtitle-medium text-text-primary">
                                                {decision.name} <span className="text-text-secondary font-normal">| {decision.sku}</span>
                                            </h4>
                                            <div className="flex items-center space-x-3 mt-1">
                                                <span className="font-body-base text-body-base text-text-secondary line-through">{decision.oldPrice}</span>
                                                {decision.trend === 'up' && <ArrowUp className="text-success-profit w-4 h-4" />}
                                                {decision.trend === 'down' && <ArrowDown className="text-danger-error w-4 h-4" />}
                                                {decision.trend === 'flat' && <ArrowRight className="text-text-secondary w-4 h-4" />}
                                                <span className={`font-subtitle-medium text-subtitle-medium ${decision.trend === 'up' ? 'text-success-profit' : decision.trend === 'down' ? 'text-danger-error' : 'text-text-primary'}`}>
                                                    {decision.newPrice}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bg-canvas-bg border border-border-subtle px-3 py-1 rounded-lg">
                                            <span className="font-label-sm text-label-sm text-text-secondary">{decision.time}</span>
                                        </div>
                                    </div>
                                    {/* AI Snippet */}
                                    <div className="bg-ai-accent rounded-lg p-4 border border-primary-fixed flex items-start space-x-3">
                                        <Sparkles className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                                        <p className="font-body-base text-body-base text-primary">
                                            <strong>{decision.actionType}:</strong> {decision.aiReasoning.replace(`${decision.actionType}: `, '')}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
