export default function WhatsAppScreen({ onOpen }) {
  return (
    <div className="wa-layout">
      <div className="wa-phone">
        {/* Header */}
        <div className="wa-header">
          <span style={{ color: '#aebac1', fontSize: 18 }}>←</span>
          <div className="wa-avatar">👥</div>
          <div className="wa-header-info">
            <div className="name">Navatech_Demo</div>
            <div className="members">Akanksha AI Navatech, Muks...</div>
          </div>
          <div className="wa-header-icons">
            <span>📹</span>
            <span>📞</span>
            <span>⋮</span>
          </div>
        </div>

        {/* Companion Bar */}
        <div style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.3)' }}>
          <div className="wa-companion-bar">
            <div className="wa-companion-title">Navatech Group Companion</div>
            <div className="wa-companion-sender">Prax Senghani nAI</div>
            <div className="wa-companion-desc">
              <span>🟢</span> Barriers missing to excavations in Zone 3
            </div>
          </div>
        </div>

        {/* Message Body */}
        <div className="wa-body">
          {/* Image preview */}
          <div style={{ borderRadius: 8, overflow: 'hidden', maxWidth: '70%', alignSelf: 'flex-end', marginBottom: 4 }}>
            <img src="/images/detection1.png" alt="Detection" style={{ width: '100%', height: 120, objectFit: 'cover' }} />
          </div>

          {/* AI Message */}
          <div className="wa-message">
            <div className="wa-ai-label">Navatech AI</div>
            <div className="wa-report-title">
              🚨 Safety Observation Report 👷
            </div>

            <div className="wa-field"><span className="emoji">💬</span> <strong>Description:</strong> Barriers missing to excavations in Zone 3</div>
            <div className="wa-field"><span className="emoji">🤖</span> <strong>AI Generated Description:</strong> Barriers are missing at excavations in Zone 3, posing a safety risk.</div>

            <div style={{ height: 8 }} />

            <div className="wa-field"><span className="emoji">🔍</span> <strong>Hazard Type:</strong> Barriers / Guards</div>
            <div className="wa-field"><span className="emoji">🔧</span> <strong>Root Cause:</strong> Procedures</div>
            <div className="wa-field"><span className="emoji">⚠️</span> <strong>Severity:</strong> High</div>
            <div className="wa-field"><span className="emoji">📋</span> <strong>Reported By:</strong> Prakash Senghani</div>
            <div className="wa-field"><span className="emoji">📍</span> <strong>Location:</strong> Zone 3</div>
            <div className="wa-field"><span className="emoji">🏗️</span> <strong>Project:</strong> NC Education Campus</div>
            <div className="wa-field"><span className="emoji">📹</span> <strong>Source:</strong> Evercam Automation</div>
            <div className="wa-field"><span className="emoji">🕐</span> <strong>Detection:</strong> 02 Mar 2026, 15:21:50</div>

            <div style={{ height: 10 }} />

            <div className="wa-field"><span className="emoji">🔒</span> <strong>Suggested Mitigation Actions from HSG150:</strong></div>
            <ul style={{ paddingLeft: 28, margin: '4px 0', fontSize: 13, color: '#d1d7db', lineHeight: 1.7 }}>
              <li>Guard edges of excavations with substantial barriers. [hsg150, 72]</li>
              <li>Prevent vehicles from approaching excavation edges. [hsg150, 73]</li>
            </ul>

            <div style={{ height: 8 }} />
            <div className="wa-field" style={{ fontWeight: 600 }}>
              <span className="emoji">🖼️</span> <strong>Image Analysis</strong>
            </div>
            <div style={{ fontSize: 12, color: '#8696a0', lineHeight: 1.6, marginTop: 4 }}>
              🔍 The image shows a construction site with a large, deep excavation. There are exposed pipes and construction materials scattered around. No workers are visible. The excavation is only partially marked with barriers, creating a safety hazard.
            </div>

            <div style={{ fontSize: 10, color: '#667781', textAlign: 'right', marginTop: 8 }}>15:22</div>
          </div>

          {/* Draft Status + Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', padding: '4px 0' }}>
            <span className="wa-draft-chip">⚠ Draft</span>
            <span style={{ fontSize: 11, color: '#8696a0' }}>This safety event requires completion in the nAI App.</span>
          </div>

          <button className="btn btn-primary" onClick={onOpen} style={{ alignSelf: 'center', padding: '12px 28px', borderRadius: 12, fontSize: 14 }}>
            📱 Open in nAI App
          </button>
        </div>

        {/* Footer */}
        <div className="wa-footer">
          <span style={{ color: '#8696a0', fontSize: 20 }}>+</span>
          <input className="wa-input" placeholder="Type a message" readOnly />
          <span style={{ color: '#8696a0', fontSize: 16 }}>😊</span>
          <span style={{ color: '#8696a0', fontSize: 16 }}>📎</span>
          <div className="wa-send-btn">▶</div>
        </div>
      </div>
    </div>
  )
}
