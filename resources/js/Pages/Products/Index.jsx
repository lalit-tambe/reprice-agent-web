import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Search, RefreshCw, MoreVertical, ChevronLeft, ChevronRight, Headphones, Shirt, Mouse, Cable, AlertTriangle, AlertCircle } from 'lucide-react';

export default function Index({ auth, products }) {
    // Fallback mock data if products aren't provided by Laravel yet
    const displayProducts = products || {
        data: [
            {
                id: 1,
                name: "Premium Leather Tote",
                sku: "BAG-001",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4GK0twcSy7nL-E3UTyXxzPIWi1KC8txirdO_Jnl9RwWsP__r4voKw69b1nJ5t5FuP9mVcoHoXa3TlBshW6wwixygxx7k3xdBaVy7nOg2IuPgqwgI75PHfZe-M2Qys7HnKW6xVbZDyWbTPtzX-icd5yQy8JxjgaVbOQgF-AulPixsWJR3psUHo7k6cqqxyOKTVQyE5j5dL4F6gZiJcSmC2NyoBEZvpANvEmYDYBKy3UUMBgiRKQATGfW7FRVzKjed99lmSQ5RvpQ",
                icon: null,
                platform: "Shopify",
                platformColor: "bg-slate-400",
                price: "$120.00",
                stock: 45,
                stockStatus: "success-profit",
                status: "Active",
                statusBg: "bg-emerald-100",
                statusText: "text-emerald-700"
            },
            {
                id: 2,
                name: "Wireless Noise-Canceling Earbuds",
                sku: "EAR-AMZ-99",
                image: null,
                icon: Headphones,
                platform: "Amazon",
                platformColor: "bg-[#FF9900]",
                price: "$89.99",
                stock: 4,
                stockStatus: "warning-hold",
                stockIcon: AlertTriangle,
                status: "Paused",
                statusBg: "bg-slate-100",
                statusText: "text-slate-600"
            },
            {
                id: 3,
                name: "Silk Scarf",
                sku: "ACC-442",
                image: null,
                icon: Shirt,
                platform: "Shopify",
                platformColor: "bg-slate-400",
                price: "$45.00",
                stock: 102,
                stockStatus: "success-profit",
                status: "Active",
                statusBg: "bg-emerald-100",
                statusText: "text-emerald-700"
            },
            {
                id: 4,
                name: "Gaming Mouse",
                sku: "TECH-10",
                image: null,
                icon: Mouse,
                platform: "Amazon",
                platformColor: "bg-[#FF9900]",
                price: "$59.99",
                stock: 1,
                stockStatus: "danger-error",
                stockIcon: AlertCircle,
                status: "Active",
                statusBg: "bg-emerald-100",
                statusText: "text-emerald-700"
            },
            {
                id: 5,
                name: "USB-C Cable",
                sku: "CAB-01",
                image: null,
                icon: Cable,
                platform: "Amazon",
                platformColor: "bg-[#FF9900]",
                price: "$12.00",
                stock: 15,
                stockStatus: "warning-hold",
                status: "Error",
                statusBg: "bg-rose-100",
                statusText: "text-rose-700"
            }
        ],
        links: [
            { url: null, label: "&laquo; Previous", active: false },
            { url: "#", label: "1", active: true },
            { url: "#", label: "2", active: false },
            { url: "#", label: "3", active: false },
            { url: "#", label: "Next &raquo;", active: false },
        ]
    };

    return (
        <AuthenticatedLayout
            user={auth?.user}
            header={<h2 className="font-header-semibold text-header-semibold text-text-primary">Inventory & Pricing</h2>}
        >
            <Head title="Products" />

            <div className="space-y-8">
                {/* Page Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="font-display-bold text-display-bold text-text-primary">Inventory & Pricing</h2>
                    <button className="bg-primary-container hover:bg-primary text-on-primary px-4 py-2 rounded-lg font-subtitle-medium text-subtitle-medium transition-colors shadow-sm flex items-center gap-2">
                        <RefreshCw className="w-4 h-4" />
                        Sync Inventory
                    </button>
                </div>

                {/* Search & Filter Card */}
                <div className="bg-surface-bg rounded-xl shadow-sm border border-border-subtle p-gutter-md mb-6 flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary w-5 h-5" />
                        <input 
                            type="text"
                            placeholder="Search products by name or SKU..."
                            className="w-full pl-10 pr-4 py-2 bg-canvas-bg border-none rounded-lg text-sm focus:ring-2 focus:ring-primary-container text-on-surface h-full"
                        />
                    </div>
                    <div className="flex gap-4">
                        <select className="bg-canvas-bg border-none rounded-lg text-sm text-on-surface focus:ring-2 focus:ring-primary-container py-2 pl-4 pr-8 h-full">
                            <option value="">Platform: All</option>
                            <option value="shopify">Shopify</option>
                            <option value="amazon">Amazon</option>
                        </select>
                        <select className="bg-canvas-bg border-none rounded-lg text-sm text-on-surface focus:ring-2 focus:ring-primary-container py-2 pl-4 pr-8 h-full">
                            <option value="">Status: All</option>
                            <option value="active">Active</option>
                            <option value="paused">Paused</option>
                            <option value="error">Error</option>
                        </select>
                    </div>
                </div>

                {/* Data Table Card */}
                <div className="bg-surface-bg rounded-xl shadow-sm border border-border-subtle overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-canvas-bg border-b border-border-subtle">
                                    <th className="py-3 px-6 font-table-header text-table-header text-text-secondary uppercase">Image</th>
                                    <th className="py-3 px-6 font-table-header text-table-header text-text-secondary uppercase">Product Name</th>
                                    <th className="py-3 px-6 font-table-header text-table-header text-text-secondary uppercase">SKU</th>
                                    <th className="py-3 px-6 font-table-header text-table-header text-text-secondary uppercase">Platform</th>
                                    <th className="py-3 px-6 font-table-header text-table-header text-text-secondary uppercase text-right">Current Price</th>
                                    <th className="py-3 px-6 font-table-header text-table-header text-text-secondary uppercase text-right">Stock Level</th>
                                    <th className="py-3 px-6 font-table-header text-table-header text-text-secondary uppercase text-center">Tracking Status</th>
                                    <th className="py-3 px-6 font-table-header text-table-header text-text-secondary uppercase text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-subtle">
                                {displayProducts.data.map((product) => {
                                    const IconComponent = product.icon;
                                    const StockIcon = product.stockIcon;
                                    return (
                                        <tr key={product.id} className="hover:bg-slate-50 transition-colors group">
                                            <td className="py-4 px-6">
                                                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
                                                    {product.image ? (
                                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                    ) : IconComponent ? (
                                                        <IconComponent className="text-text-secondary w-6 h-6" />
                                                    ) : null}
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 font-subtitle-medium text-subtitle-medium text-text-primary">
                                                <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors hover:underline">
                                                    {product.name}
                                                </Link>
                                            </td>
                                            <td className="py-4 px-6 font-body-base text-body-base text-text-secondary">{product.sku}</td>
                                            <td className="py-4 px-6">
                                                <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-slate-100 text-slate-700 font-label-sm text-label-sm">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${product.platformColor}`}></span>
                                                    {product.platform}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 font-subtitle-medium text-subtitle-medium text-text-primary text-right">{product.price}</td>
                                            <td className="py-4 px-6 text-right">
                                                <span className={`font-subtitle-medium text-subtitle-medium text-${product.stockStatus} flex items-center justify-end gap-1`}>
                                                    {StockIcon && <StockIcon className="w-4 h-4" />}
                                                    {product.stock}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-center">
                                                <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full ${product.statusBg} ${product.statusText} font-label-sm text-label-sm`}>
                                                    {product.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <Link href={`/products/${product.id}`} className="inline-block text-text-secondary hover:text-primary-container p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <MoreVertical className="w-5 h-5" />
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-border-subtle flex items-center justify-end">
                        <div className="flex items-center gap-1">
                            <button className="p-2 text-text-secondary hover:text-text-primary rounded hover:bg-slate-100 disabled:opacity-50 flex items-center justify-center">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-container text-on-primary font-subtitle-medium text-subtitle-medium">1</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-text-secondary hover:bg-slate-100 font-subtitle-medium text-subtitle-medium">2</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-text-secondary hover:bg-slate-100 font-subtitle-medium text-subtitle-medium">3</button>
                            <button className="p-2 text-text-secondary hover:text-text-primary rounded hover:bg-slate-100 disabled:opacity-50 flex items-center justify-center">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
