"use client";

import * as React from "react";
import { User, Shield, Building2, Bell, Sun, MapPin, LogOut, CheckCircle2, Phone, Mail, Calendar, Clock } from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";
import NavItem from "@/shared/ui/components/NavItem";
import { Badge } from "@/shared/ui/base/Badge";
import { InputField } from "@/shared/ui/base/InputField";

const NAV_ITEMS = [
  { label: "Personal info", icon: User, href: "#personal" },
  { label: "Identity", icon: Shield, href: "#identity" },
  { label: "Bank accounts", icon: Building2, href: "#bank" },
  { label: "Notifications", icon: Bell, href: "#notifications" },
  { label: "Appearance", icon: Sun, href: "#appearance" },
  { label: "Location", icon: MapPin, href: "#location" },
];

export function ProfileView() {
  const [activeSection, setActiveSection] = React.useState("#personal");

  return (
    <div className="flex gap-6 items-start animate-in fade-in duration-300">
      {/* Left panel */}
      <div className="w-[220px] shrink-0 bg-white  rounded-md overflow-hidden shadow-sm px-4">
        {/* Avatar + name */}
        <div className="py-5 flex items-center gap-2 border-b border-neutral-100">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-800">
            AO
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-neutral-900">Ada Okonkwo</p>
            <Badge variant='success'>
              <CheckCircle2 className="w-3 h-3" />
              <span>Verified</span>
            </Badge>
          </div>
        </div>

        {/* Nav */}
        <nav className="py-4 flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = (href: string) => href === activeSection;

            console.log(activeSection)

            return (
              <NavItem
                key={item.label}
                link={item}
                isActive={isActive}
                onClick={() => setActiveSection(item.href)}
              />
            )
          })}
        </nav>

        <div className="p-2 border-t border-neutral-100">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium text-error-600 hover:bg-error-50 transition-all w-full text-left cursor-pointer">
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 min-w-0 bg-white  rounded-md shadow-sm p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 tracking-[-0.4px]">Personal information</h2>
          <p className="text-sm text-neutral-500 mt-1">Update your name, contact details, and profile photo.</p>
        </div>

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-800">
            AO
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-primary-600 hover:underline cursor-pointer">Change photo</button>
            <button className="text-sm font-medium text-error-600 hover:underline cursor-pointer">Remove</button>
          </div>
        </div>

        {/* Form fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField label="Full Name" id="fullName" placeholder="Full name" value="Ada Okonkwo" />
          <InputField label="Email" id="email" placeholder="Email" value="[EMAIL_ADDRESS]" icon={<Mail className="w-4 h-4" />} />
          <InputField label="Phone" id="phone" placeholder="Phone" value="+234 801 234 5678" icon={<Phone className="w-4 h-4" />} />
          <InputField
            type='date'
            label="Date of birth"
            id="dateOfBirth"
            placeholder="Date of birth"
            value="1998-03-14"
            icon={<Calendar className="w-4 h-4" />}
          />
        </div>

        {/* Account activity */}
        <div className="mt-8 pt-6 border-t border-neutral-100">
          <p className="text-2xs font-bold tracking-wider uppercase text-neutral-400 mb-3">ACCOUNT ACTIVITY</p>
          <div className="flex items-center justify-between text-sm text-neutral-600 flex-wrap gap-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-neutral-400" />
              Joined <span className="font-semibold text-neutral-900">23 April 2024</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-neutral-400" />
              Last active <span className="font-semibold text-neutral-900">2 minutes ago</span>
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-end gap-3">
          <Button variant="outline" className="font-semibold cursor-pointer">Cancel</Button>
          <Button variant="primary" className="gap-2 font-bold cursor-pointer">
            <CheckCircle2 className="w-4 h-4" />
            Save changes
          </Button>
        </div>
      </div>
    </div>
  );
}
