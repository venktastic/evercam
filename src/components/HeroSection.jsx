export default function HeroSection({ onStart }) {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Live Integration Demo
          </div>
          <h1 className="hero-title">
            Turn Camera Detections into<br />Actionable Safety Events
          </h1>
          <p className="hero-subtitle">
            From Evercam AI detection to Navatech's AI-powered safety event creation and centralized governance, an end-to-end safety intelligence workflow for Digital Realty.
          </p>
          <div className="kpi-strip">
            <div className="kpi-chip">
              <span className="kpi-value">{'< 1 min'}</span>
              <span className="kpi-label">Detection → Draft</span>
            </div>
            <div className="kpi-chip">
              <span className="kpi-value">Mobile First</span>
              <span className="kpi-label">Review Workflow</span>
            </div>
            <div className="kpi-chip">
              <span className="kpi-value">Evercam</span>
              <span className="kpi-label">Source System</span>
            </div>
            <div className="kpi-chip">
              <span className="kpi-value">Navatech</span>
              <span className="kpi-label">Centralised Governance</span>
            </div>
          </div>
          <button className="btn btn-primary" onClick={onStart} style={{ marginTop: 32, padding: '14px 36px', fontSize: 15, borderRadius: 12 }}>
            Start Demo →
          </button>
        </div>
      </section>

      <div className="flow-strip">
        <div className="flow-node">
          <span className="flow-icon">📹</span>
          <span className="flow-label">Camera AI Detection</span>
          <span className="flow-sub">Evercam Automation</span>
        </div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">
          <span className="flow-icon">🤖</span>
          <span className="flow-label">Draft Safety Event</span>
          <span className="flow-sub">Navatech AI Processing</span>
        </div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">
          <span className="flow-icon">💬</span>
          <span className="flow-label">WhatsApp Alert</span>
          <span className="flow-sub">Team Notification</span>
        </div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">
          <span className="flow-icon">📱</span>
          <span className="flow-label">nAI Completion</span>
          <span className="flow-sub">Mobile Review</span>
        </div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">
          <span className="flow-icon">🏢</span>
          <span className="flow-label">Admin Governance</span>
          <span className="flow-sub">Centralized Portal</span>
        </div>
      </div>
    </div>
  )
}
