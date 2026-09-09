import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BackToTop from "./BackToTop";

/**
 * Dashboard layout: persistent left sidebar on lg+, scrollable main column.
 * Below lg the sidebar is hidden and a sticky Topbar + drawer takes over.
 */
export default function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="lg:flex">
      {/* Fixed sidebar (lg+) — sticky full-height rail */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:shrink-0">
        <Sidebar />
      </div>

      {/* Main column. min-w-0 prevents flex children from forcing overflow. */}
      <div className="min-w-0 flex-1">
        <Topbar />
        <main>{children}</main>
      </div>

      <BackToTop />
    </div>
  );
}
