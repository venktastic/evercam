export default function MobileNav({ steps, activeStep, onStepClick }) {
  return (
    <div className="mobile-nav">
      <div className="mobile-nav-items">
        <button className={`mobile-nav-item ${activeStep === 'hero' ? 'active' : ''}`} onClick={() => onStepClick('hero')}>
          <span className="nav-icon">🏠</span>
          Home
        </button>
        {steps.map(s => (
          <button key={s.id} className={`mobile-nav-item ${activeStep === s.id ? 'active' : ''}`} onClick={() => onStepClick(s.id)}>
            <span className="nav-icon">{s.icon}</span>
            {s.label.split(' ')[0]}
          </button>
        ))}
      </div>
    </div>
  )
}
