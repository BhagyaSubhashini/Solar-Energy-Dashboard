import "./Navigation.css";

const Navigation = () => {
  return <nav className="nav">
    <div className="nav_left">
      <div className="logo_container">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-wind-icon lucide-wind"
        >
          <path d="M12.8 19.6A2 2 0 1 0 14 16H2"/>
          <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/>
          <path d="M9.8 4.4A2 2 0 1 1 11 8H2"/>
        </svg>
      </div>
      <span>Aelora</span>
    </div>

    <div className="nav_right">
      <div className="dashboard_btn">
        <div className="logo_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chart-column-icon lucide-chart-column logo"
        >
          <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
          <path d="M18 17V9"/>
          <path d="M13 17V5"/>
          <path d="M8 17v-3"/>
        </svg>
      </div>
      <span>Dashboard</span>
      </div>
      <div>

      </div>
        <div className="user_profile">
      <div className="logo_container">
        <span className="logo">BS</span>
      </div>
      <span>Bhagya Wijenayaka</span>
    </div>
      </div>
  </nav>;
};

export default Navigation;