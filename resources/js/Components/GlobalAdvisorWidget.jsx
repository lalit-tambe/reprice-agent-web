import React, { useState } from 'react';
import { Sparkles, ChevronDown, Send } from 'lucide-react';

export default function GlobalAdvisorWidget() {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return (
            <button 
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 bg-surface-bg shadow-lg rounded-full px-6 py-4 flex items-center space-x-3 border border-border-subtle hover:scale-105 transition-transform z-50 text-text-primary font-subtitle-medium text-subtitle-medium"
            >
                <Sparkles className="text-primary w-5 h-5" />
                <span className="hidden md:inline">RAG Strategy Advisor</span>
            </button>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 w-[400px] h-[500px] bg-surface-bg rounded-xl shadow-2xl border border-border-subtle z-50 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-primary text-on-primary p-4 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-header-semibold text-header-semibold">Strategy Advisor</span>
                </div>
                <button 
                    onClick={() => setIsOpen(false)}
                    className="text-on-primary/80 hover:text-on-primary transition-colors p-1 rounded-md hover:bg-primary-container"
                >
                    <ChevronDown className="w-5 h-5" />
                </button>
            </div>
            
            {/* Chat Body */}
            <div className="bg-canvas-bg flex-1 p-4 overflow-y-auto flex flex-col gap-4">
                {/* User Message */}
                <div className="self-end bg-surface-bg border border-border-subtle text-text-primary p-3 rounded-xl rounded-tr-sm max-w-[85%] shadow-sm">
                    <p className="font-body-base text-body-base">Why did we lose sales on the Leather Tote last week?</p>
                </div>
                
                {/* AI Message */}
                <div className="self-start bg-ai-accent border border-primary-fixed text-primary p-3 rounded-xl rounded-tl-sm max-w-[85%] shadow-sm flex flex-col gap-2">
                    <p className="font-body-base text-body-base">Based on your pricing history, a major competitor dropped their price to $90.00. We held your price at $120.00 because their reviews indicated poor quality.</p>
                    {/* Clickable Reference Tag */}
                    <a className="text-primary font-subtitle-medium text-subtitle-medium underline cursor-pointer hover:opacity-80 transition-opacity" href="#">
                        [Reference: Log #402]
                    </a>
                </div>
                
                {/* Typing Indicator */}
                <div className="self-start bg-ai-accent border border-primary-fixed p-3 rounded-xl rounded-tl-sm w-16 flex justify-center gap-1.5 items-center shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
            
            {/* Chat Input Footer */}
            <div className="bg-surface-bg p-4 border-t border-border-subtle flex gap-2 shrink-0">
                <input 
                    className="flex-1 rounded-lg bg-canvas-bg border border-border-subtle font-body-base text-body-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder:text-text-secondary" 
                    placeholder="Ask about pricing history..." 
                    type="text"
                />
                <button className="bg-primary hover:bg-primary-container text-on-primary rounded-lg p-2 flex items-center justify-center transition-colors">
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
