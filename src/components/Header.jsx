function Header({ title, subtitle, theme, onToggleTheme }) {
  return (
    <header className="app-header">
      <div className="header-copy">
        <p className="eyebrow">STAY ON TRACK</p>
        <h1>{title}</h1>
        <p className="header-subtitle">{subtitle}</p>
      </div>
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-pressed={theme === "dark"}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
        {theme === "light" ? "Dark mode" : "Light mode"}
      </button>
    </header>
  );
}

export default Header;
