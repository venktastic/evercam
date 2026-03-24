const SCENARIOS = {
  zone: {
    image: '/images/detection1.png',
    caption: 'Worker in restricted area in Zone 3',
    time: '11:57 AM',
    description: 'Worker in restricted area in Zone 3',
    aiDescription: 'Worker is in a restricted area, posing safety risks.',
    hazardType: 'Security and Site Access',
    rootCause: 'Procedures',
    severity: 'High',
    reporter: 'Prakash Senghani',
    location: 'Zone 3',
    mitigations: [
      'Ensure clear signage for restricted areas. [hsg150, 58]',
      'Conduct regular safety briefings on access protocols. [hsg150, 101]',
    ],
    imageAnalysisUrl: 'https://navate.ch/QyM2Sr',
    imageAnalysis: 'The image shows an active construction site with multiple workers and heavy machinery. Safety barriers and warning tape are in place to restrict access to hazardous areas. Workers are wearing appropriate PPE (high-visibility vests and hard hats). The site appears organized, but the presence of heavy machinery and open excavation areas requires ongoing vigilance for safety.',
  },
  ppe: {
    image: '/images/ppe-missing1.png',
    caption: 'Missing Hard Hat/Vest at Zone 1',
    time: '2:10 PM',
    description: 'Missing Hard Hat/Vest at Zone 1',
    aiDescription: 'Worker detected without required PPE (hard hat and high-visibility vest) in active construction zone, posing injury risks.',
    hazardType: 'PPE',
    rootCause: 'Training',
    severity: 'High',
    reporter: 'Prakash Senghani',
    location: 'Zone 1',
    mitigations: [
      'Ensure all workers wear appropriate PPE before entering site. [hsg150, 28]',
      'Conduct toolbox talks on PPE requirements at shift start. [hsg150, 34]',
    ],
    imageAnalysisUrl: 'https://navate.ch/Xt7PqW',
    imageAnalysis: 'The image shows a construction site with a worker carrying materials without wearing a hard hat or high-visibility vest. Other workers in the background are wearing proper PPE. The worker is in an active zone with scaffolding and heavy equipment nearby, creating a significant safety risk.',
  },
}

export default function WhatsAppScreen({ scenario = 'zone', onOpen }) {
  const data = SCENARIOS[scenario] || SCENARIOS.zone

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

        {/* Message Body */}
        <div className="wa-body">

          {/* Image preview */}
          <div style={{ borderRadius: 8, overflow: 'hidden', maxWidth: '70%', alignSelf: 'flex-end', marginBottom: 2 }}>
            <img src={data.image} alt="Detection" style={{ width: '100%', height: 120, objectFit: 'cover' }} />
            <div style={{ background: '#1a2730', padding: '2px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: '#d1d7db' }}>{data.caption}</span>
              <span style={{ fontSize: 10, color: '#667781' }}>{data.time}</span>
            </div>
          </div>

          {/* Companion Bar */}
          <div className="wa-companion-bar">
            <div className="wa-companion-title">Navatech Group Companion</div>
            <div className="wa-companion-sender">Prax Senghani nAI</div>
            <div className="wa-companion-desc">
              <span>📷</span> {data.caption}
            </div>
          </div>

          {/* AI Message */}
          <div className="wa-message">
            <div className="wa-ai-label">Navatech AI</div>
            <div className="wa-report-title">
              🚨 Safety Observation Report 👷
            </div>

            <div className="wa-field"><span className="emoji">💬</span> <strong>Description:</strong> {data.description}</div>
            <div className="wa-field"><span className="emoji">🤖</span> <strong>AI Generated Description:</strong> {data.aiDescription}</div>

            <div style={{ height: 8 }} />

            <div className="wa-field"><span className="emoji">🔍</span> <strong>Hazard Type:</strong> {data.hazardType}</div>
            <div className="wa-field"><span className="emoji">🔧</span> <strong>Root Cause:</strong> {data.rootCause}</div>
            <div className="wa-field"><span className="emoji">⚠️</span> <strong>Severity:</strong> {data.severity}</div>
            <div className="wa-field"><span className="emoji">📋</span> <strong>Reported By:</strong> {data.reporter}</div>
            <div className="wa-field"><span className="emoji">📍</span> <strong>Location:</strong> {data.location}</div>

            <div style={{ height: 10 }} />

            <div className="wa-field"><span className="emoji">🔒</span> <strong>Suggested Mitigation Actions from HSG150:</strong></div>
            <ul style={{ paddingLeft: 28, margin: '4px 0', fontSize: 13, color: '#d1d7db', lineHeight: 1.7 }}>
              {data.mitigations.map((m, i) => <li key={i}>{m}</li>)}
            </ul>

            <div style={{ height: 8 }} />
            <div className="wa-field" style={{ fontWeight: 600 }}>Image Analysis</div>
            <div style={{ fontSize: 12, marginTop: 4 }}>
              <span className="emoji">🖼️</span>{' '}
              <a href={data.imageAnalysisUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#53bdeb', textDecoration: 'underline' }}>
                {data.imageAnalysisUrl}
              </a>
            </div>
            <div style={{ fontSize: 12, color: '#8696a0', lineHeight: 1.6, marginTop: 4 }}>
              🔍 {data.imageAnalysis}
            </div>

            <div style={{ height: 10 }} />
            <div style={{ fontSize: 11, color: '#fbbf24', fontStyle: 'italic', lineHeight: 1.5 }}>
              ✨ This message was automatically generated by Navatech AI. Please review and act accordingly.
            </div>

            <div style={{ fontSize: 10, color: '#667781', textAlign: 'right', marginTop: 8 }}>{data.time}</div>
          </div>

          {/* Action Button */}
          <button className="btn btn-primary" onClick={onOpen} style={{ alignSelf: 'center', padding: '12px 28px', borderRadius: 12, fontSize: 14, marginTop: 8 }}>
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
