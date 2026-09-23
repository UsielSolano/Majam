import { useTheme } from '../../hooks/useTheme'
import './ThemeToggle.css'

function ThemeToggle({ variant = 'default' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      className={`theme-toggle theme-toggle--${variant}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
    >
      <span className={`theme-toggle__icon ${isDark ? 'is-dark' : ''}`}>
        {isDark ? '☾' : '☀'}
      </span>
    </button>
  )
}

export default ThemeToggle
