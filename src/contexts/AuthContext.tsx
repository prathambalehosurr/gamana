// AuthContext – authentication has been stripped from the application.
// This is a passthrough provider to avoid breaking the component tree.

import { ReactNode } from 'react';

export function AuthProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
