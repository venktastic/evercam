export default function TopNav({ steps, activeStep, completedSteps, onStepClick, onHome, theme, onToggleTheme, showStepper }) {
  return (
    <nav className="top-nav">
      <div className="top-nav-brand" onClick={onHome} style={{ cursor: 'pointer' }}>
        <img src="/images/evercam-logo.png" alt="Evercam" style={{ height: 48, objectFit: 'contain' }} />
        <span className="sep" style={{ margin: '0 8px' }}>×</span>
        <img src="/images/navatech-logo.png" alt="Navatech" style={{ height: 40, objectFit: 'contain' }} />
      </div>

      {showStepper && (
        <div className="stepper-nav">
          {steps.map((step, i) => (
            <div key={step.id} style={{ display: 'flex', alignItems: 'center' }}>
              <button
                className={`step-item ${activeStep === step.id ? 'active' : ''} ${completedSteps.includes(step.id) ? 'completed' : ''}`}
                onClick={() => onStepClick(step.id)}
              >
                <span className="step-num">
                  {completedSteps.includes(step.id) ? '✓' : i + 1}
                </span>
                {step.label}
              </button>
              {i < steps.length - 1 && (
                <div className={`step-connector ${completedSteps.includes(step.id) ? 'completed' : ''}`} />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="nav-actions">
        <button className="theme-toggle" onClick={onToggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          <span className="icon icon-sun">☀️</span>
          <span className="icon icon-moon">🌙</span>
        </button>
      </div>
    </nav>
  )
}
