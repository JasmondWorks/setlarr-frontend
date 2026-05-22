"use client";

import * as React from "react";
import {
  Search, MoreHorizontal, Paperclip, Send,
  CheckCircle2, ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Conversation {
  id: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  name: string;
  preview: string;
  time: string;
  unread?: boolean;
}

interface Message {
  id: string;
  from: "me" | "them";
  text: string;
  time: string;
}

const CONVOS: Conversation[] = [
  { id: "1", initials: "EO", avatarBg: "bg-indigo-100",  avatarColor: "text-indigo-700",  name: "Emeka Okafor", preview: "Thanks! I'll have it shipped by tomorrow morning.", time: "2m",  unread: true  },
  { id: "2", initials: "TA", avatarBg: "bg-orange-100",  avatarColor: "text-orange-700",  name: "Tunde A.",     preview: "Yes, the headphones are still available — I can ship today.", time: "28m", unread: true  },
  { id: "3", initials: "SL", avatarBg: "bg-emerald-100", avatarColor: "text-emerald-700", name: "Sade L.",      preview: "Tracking number sent. Should arrive Thursday.", time: "3h"  },
  { id: "4", initials: "IT", avatarBg: "bg-violet-100",  avatarColor: "text-violet-700",  name: "Ifeanyi T.",   preview: "Funds have been released. Thank you!", time: "Mon" },
  { id: "5", initials: "CB", avatarBg: "bg-rose-100",    avatarColor: "text-rose-700",    name: "Chioma B.",    preview: "Is the laptop still available?", time: "Sun" },
];

const MESSAGES: Message[] = [
  { id: "1", from: "them", text: "Hi! Is the iPhone still available? Would you accept ₦400,000?", time: "2:10 PM" },
  { id: "2", from: "me",   text: "Yes, still available! My best offer is ₦410,000 though.", time: "2:12 PM" },
  { id: "3", from: "them", text: "Deal! I'm in Lekki Phase 1 — can we arrange pickup or delivery?", time: "2:13 PM" },
  { id: "4", from: "me",   text: "I can arrange a verified courier delivery to you. Should be same-day.", time: "2:14 PM" },
  { id: "5", from: "them", text: "Perfect. I'll go ahead and lock the escrow. Thanks!", time: "2:14 PM" },
  { id: "6", from: "me",   text: "Great. I'll have it shipped by tomorrow morning.", time: "Just now" },
];

export function MessagesView() {
  const [activeId, setActiveId]   = React.useState<string | null>(null);
  const [input, setInput]         = React.useState("");
  const active = CONVOS.find((c) => c.id === activeId) ?? null;

  const openChat  = (id: string) => setActiveId(id);
  const closeChat = () => { setActiveId(null); setInput(""); };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) setInput("");
  };

  return (
    <div className="flex h-[calc(100vh-64px)] -m-4 sm:-m-6 lg:-m-8 animate-in fade-in duration-300 overflow-hidden">

      {/* ── Conversation list ──────────────────────────────────────────── */}
      <aside
        className={cn(
          // Full-width on mobile unless a chat is open; fixed width on sm+
          "flex flex-col bg-white border-r border-neutral-200 shrink-0",
          "w-full sm:w-[280px] lg:w-[320px]",
          // On mobile: hide when a chat is open
          activeId ? "hidden sm:flex" : "flex"
        )}
      >
        <div className="p-4 border-b border-neutral-100">
          <h1 className="text-xl font-bold text-neutral-900 mb-3">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full h-9 pl-9 pr-3 rounded-lg border border-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors bg-neutral-50"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-neutral-100">
          {CONVOS.map((c) => (
            <button
              key={c.id}
              onClick={() => openChat(c.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-neutral-50 transition-colors relative cursor-pointer",
                c.id === activeId && "bg-primary-50/60 border-l-2 border-l-primary-600"
              )}
            >
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0", c.avatarBg, c.avatarColor)}>
                {c.initials}
              </div>
              <div className="grow min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className={cn("text-sm truncate", c.unread ? "font-bold text-neutral-900" : "font-medium text-neutral-700")}>
                    {c.name}
                  </p>
                  <span className="text-2xs text-neutral-400 shrink-0">{c.time}</span>
                </div>
                <p className="text-xs text-neutral-500 truncate mt-0.5">{c.preview}</p>
              </div>
              {c.unread && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-600" />
              )}
            </button>
          ))}
        </div>
      </aside>

      {/* ── Chat area ─────────────────────────────────────────────────── */}
      <div
        className={cn(
          "flex-1 flex flex-col min-w-0",
          // On mobile: hide when no chat is selected, show when one is
          !activeId ? "hidden sm:flex" : "flex"
        )}
      >
        {active ? (
          <>
            {/* Header — decluttered for mobile */}
            <div className="h-14 border-b border-neutral-200 bg-white px-3 sm:px-5 flex items-center gap-3 shrink-0">
              {/* Back button — mobile only */}
              <button
                onClick={closeChat}
                className="sm:hidden w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer shrink-0 -ml-1"
                aria-label="Back to conversations"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Avatar + name */}
              <div className={cn("w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0", active.avatarBg, active.avatarColor)}>
                {active.initials}
              </div>
              <div className="grow min-w-0">
                <div className="flex items-center gap-1.5 min-w-0">
                  <p className="text-sm font-bold text-neutral-900 truncate">{active.name}</p>
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 shrink-0" />
                </div>
                {/* Rating — hidden on very small screens to reduce clutter */}
                <p className="text-2xs text-neutral-400 hidden xs:block sm:block">
                  ★ 4.9 · usually replies in 5min
                </p>
              </div>

              {/* Single action button — avoids crowding on mobile */}
              <button
                className="w-8 h-8 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 transition-colors cursor-pointer shrink-0"
                aria-label="More options"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Listing context banner — compact single row */}
            <div className="bg-primary-50 border-b border-primary-100 px-3 sm:px-5 py-2 flex items-center gap-3 min-h-0 shrink-0">
              <span className="text-base shrink-0" aria-hidden="true">📱</span>
              <p className="text-xs font-semibold text-neutral-800 truncate grow">
                iPhone 14 Pro Max · <span className="text-neutral-500 font-normal">₦420,000</span>
              </p>
              <button className="text-xs font-bold text-primary-600 hover:underline cursor-pointer whitespace-nowrap shrink-0">
                Make offer
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 sm:px-5 py-4 flex flex-col gap-4 bg-neutral-50/40">
              <div className="text-center">
                <span className="text-2xs font-bold tracking-wider uppercase text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full">
                  Today
                </span>
              </div>
              {MESSAGES.map((msg) => (
                <div
                  key={msg.id}
                  className={cn("flex", msg.from === "me" ? "justify-end" : "justify-start")}
                >
                  <div className="max-w-[80%] sm:max-w-[70%] flex flex-col gap-1">
                    <div className={cn(
                      "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                      msg.from === "me"
                        ? "bg-primary-600 text-white rounded-br-sm"
                        : "bg-white border border-neutral-200 text-neutral-900 rounded-bl-sm shadow-sm"
                    )}>
                      {msg.text}
                    </div>
                    <p className={cn("text-2xs text-neutral-400", msg.from === "me" ? "text-right" : "text-left")}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input bar */}
            <div className="border-t border-neutral-200 bg-white px-3 sm:px-4 py-3 flex items-center gap-2 shrink-0">
              <button className="text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer shrink-0 p-1">
                <Paperclip className="w-4.5 h-4.5" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder={`Message ${active.name.split(" ")[0]}...`}
                className="flex-1 h-10 px-4 rounded-full border border-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors bg-neutral-50 min-w-0"
              />
              <button
                disabled={!input.trim()}
                className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors cursor-pointer shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          /* Empty state — only visible on sm+ when no chat is selected */
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center p-8 hidden sm:flex">
            <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center">
              <Search className="w-7 h-7 text-neutral-400" />
            </div>
            <p className="text-sm font-semibold text-neutral-700">Select a conversation</p>
            <p className="text-xs text-neutral-400">Choose a conversation from the list to start messaging.</p>
          </div>
        )}
      </div>
    </div>
  );
}
