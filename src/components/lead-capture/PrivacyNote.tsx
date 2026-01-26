'use client';

import { Shield } from 'lucide-react';

export function PrivacyNote() {
  return (
    <div className="flex items-start gap-2 text-xs text-slate-500">
      <Shield className="h-4 w-4 flex-shrink-0 mt-0.5" />
      <p>
        We respect your privacy. Your information is secure and will never be
        shared. By submitting, you agree to receive your custom automation
        blueprint and occasional updates.
      </p>
    </div>
  );
}
