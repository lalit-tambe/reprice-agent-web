import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { 
    ArrowLeft, 
    CheckCircle, 
    Pause, 
    RefreshCw, 
    Store, 
    Sparkles, 
    Shield, 
    Globe, 
    Info, 
    Bug, 
    LineChart 
} from 'lucide-react';

export default function Show({ product }) {
    // If no product is passed from Inertia, use this robust mock object
    const p = product || {
        id: 1,
        name: "Premium Leather Tote",
        sku: "BAG-001",
        platform: "Shopify",
        currentPrice: 120.00,
        stock: 45,
        status: "Active Tracking",
        guardrails: {
            floorPrice: "90.00",
            ceilingPrice: "150.00"
        },
        competitor: {
            url: "https://competitor.com/product",
            trackingCount: 3
        },
        logs: [
            {
                id: 1,
                date: "Today, 10:00 AM",
                scrapedPrice: 115.00,
                sentimentScore: 8,
                decision: "Held Price (Quality concerns)",
                actionType: "held"
            },
            {
                id: 2,
                date: "Yesterday, 10:00 AM",
                scrapedPrice: 110.00,
                sentimentScore: 9,
                decision: "Dropped to $110",
                actionType: "dropped"
            }
        ]
    };

    return (
        <AuthenticatedLayout
            header="Products"
        >
            <Head title={`${p.name} - Configuration`} />

            {/* Page Header */}
            <div className="flex flex-col gap-2 mb-8">
                <Link href="/products" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors w-fit">
                    <ArrowLeft className="w-[18px] h-[18px]" />
                    Back to Inventory
                </Link>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-wrap">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{p.name}</h1>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full flex items-center gap-1 border border-emerald-200">
                            <CheckCircle className="w-[14px] h-[14px]" />
                            {p.status}
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-900 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
                            <Pause className="w-[18px] h-[18px]" />
                            Pause Tracking
                        </button>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
                            <RefreshCw className="w-[18px] h-[18px]" />
                            Force Sync
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-500">SKU</span>
                    <span className="text-2xl font-bold text-slate-900">{p.sku}</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-500">Platform</span>
                    <div className="flex items-center gap-2 mt-1">
                        <Store className="text-slate-500 w-5 h-5" />
                        <span className="text-xl font-semibold text-slate-900">{p.platform}</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-500">Current Store Price</span>
                    <span className="text-2xl font-bold text-slate-900">${p.currentPrice.toFixed(2)}</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-500">Current Stock</span>
                    <span className="text-2xl font-bold text-slate-900">{p.stock}</span>
                </div>
            </div>

            {/* Middle Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* AI Price Guardrails */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                        <Sparkles className="text-indigo-600 w-6 h-6 fill-indigo-600/20" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Shield className="text-indigo-600 w-5 h-5" />
                        AI Price Guardrails
                    </h2>
                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-500 mb-1">Floor Price (Minimum)</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">$</span>
                                <input 
                                    className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" 
                                    type="text" 
                                    defaultValue={p.guardrails.floorPrice}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500 mb-1">Ceiling Price (Maximum)</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">$</span>
                                <input 
                                    className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" 
                                    type="text" 
                                    defaultValue={p.guardrails.ceilingPrice}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <button className="w-full py-2.5 bg-indigo-600 text-white rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm">
                            Save Guardrails
                        </button>
                    </div>
                </div>

                {/* Competitor Tracking */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Globe className="text-slate-500 w-5 h-5" />
                        Competitor Tracking
                    </h2>
                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-500 mb-1">Target Competitor URL</label>
                            <input 
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" 
                                placeholder="https://competitor.com/product" 
                                type="url"
                                defaultValue={p.competitor.url}
                            />
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                            <Info className="text-amber-500 w-5 h-5 shrink-0" />
                            <span className="text-sm font-medium text-slate-500">Currently tracking {p.competitor.trackingCount} competitor listings for this SKU.</span>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <button className="w-full py-2.5 bg-white border border-slate-200 text-slate-900 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-center gap-2">
                            <Bug className="w-[18px] h-[18px]" />
                            Test Scrape
                        </button>
                    </div>
                </div>
            </div>

            {/* Pricing Trends & AI Logs */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                <div className="p-4 md:p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <LineChart className="text-indigo-600 w-5 h-5" />
                        Pricing Trends & AI Logs
                    </h2>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-sm font-medium bg-slate-50 text-slate-900 rounded-lg border border-slate-200">7D</button>
                        <button className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">30D</button>
                        <button className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">All</button>
                    </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="h-48 bg-slate-50 border-b border-slate-200 flex items-center justify-center relative">
                    <span className="text-slate-500 font-medium text-sm">Price Trend Chart Visualization</span>
                    {/* Decorative gradient line for chart feel */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-50/50 to-transparent"></div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Scraped Price</th>
                                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Sentiment Score</th>
                                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">AI Decision</th>
                                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {p.logs.map((log) => (
                                <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{log.date}</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">${log.scrapedPrice.toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full rounded-full ${log.sentimentScore >= 9 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                                                    style={{ width: `${(log.sentimentScore / 10) * 100}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm font-medium text-slate-500">{log.sentimentScore}/10</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold border border-indigo-200">
                                            <Sparkles className="w-[14px] h-[14px]" />
                                            {log.decision}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-400 transition-colors">
                                            View Log
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
