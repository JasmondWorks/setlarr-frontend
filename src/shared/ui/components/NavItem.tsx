"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/features/dashboard/ui/DashboardSidebar";

interface NavItemProps {
    link: NavLink;
    isActive: (href: string) => boolean;
    onClick?: () => void;
}

export default function NavItem({ link, isActive, onClick }: NavItemProps) {
    const active = isActive(link.href);

    const containerClass = cn(
        "relative flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-all group overflow-hidden w-full text-left justify-between",
        active
            ? "bg-neutral-100 text-neutral-900 font-bold"
            : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800"
    );

    const iconClass = cn(
        "w-[18px] h-[18px] shrink-0 transition-colors",
        active ? "text-primary-600" : "text-neutral-400 group-hover:text-neutral-600"
    );

    const content = (
        <>
            {active && (
                <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-primary-600 rounded-full" />
            )}

            <span className="flex items-center gap-3">
                <link.icon className={iconClass} />
                {link.label}
            </span>

            {link.badge && (
                <span className="text-2xs px-2 py-0.5 rounded-full font-semibold bg-neutral-200 text-neutral-600">
                    {link.badge}
                </span>
            )}
            {link.dot && <span className="w-2 h-2 rounded-full bg-primary-600 shrink-0" />}
        </>
    );

    if (onClick) {
        return (
            <button onClick={onClick} className={cn(containerClass, "cursor-pointer")}>
                {content}
            </button>
        );
    }

    return (
        <Link href={link.href} className={containerClass}>
            {content}
        </Link>
    );
}