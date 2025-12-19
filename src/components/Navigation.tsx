import { Link, useLocation } from "react-router-dom";
import { Home, FolderKanban, User, Mail, Briefcase } from "lucide-react";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "HOME", icon: Home },
    { path: "/projects", label: "PROJECTS", icon: FolderKanban },
    { path: "/about", label: "ABOUT", icon: User },
    { path: "/contact", label: "CONTACT", icon: Mail },
    { path: "/experience", label: "EXPERIENCE", icon: Briefcase },
  ];

  return (
    <nav className="border-b border-cyan-500/30 p-4 bg-[#0d0d0d]/60">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold text-base tracking-wider drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
            PORTFOLIO_OS
          </span>
        </Link>
        
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-medium uppercase tracking-wider
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_8px_rgba(0,255,255,0.3)]' 
                    : 'text-cyan-400/70 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30'
                  }
                `}
              >
                <Icon size={12} className={isActive ? 'text-cyan-400' : 'text-cyan-400/70'} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

