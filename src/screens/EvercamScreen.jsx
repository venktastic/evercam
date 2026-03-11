import { useState } from 'react'

const SIDEBAR_ITEMS = [
  { icon: '📹', label: 'NC Ed - North Fac...', active: false },
  { icon: '📹', label: 'NC Ed - South Fac...', active: false },
  { icon: '📊', label: 'Gate Report', active: false },
  { icon: '🏗️', label: 'BIM', active: false },
  { icon: '🚁', label: 'Drone', active: false },
  { icon: '🔵', label: '360°', active: false },
  { icon: '📐', label: 'Drawings', active: false },
  { icon: '⏱️', label: 'Timeline', active: false, badge: 'BETA' },
  { icon: '🔍', label: 'Smart Search', active: true, badge: 'BETA' },
  { icon: '🎬', label: 'Media Hub', active: false },
  { icon: '🌤️', label: 'Weather', active: false },
  { icon: '📺', label: 'Video Wall', active: false },
  { icon: '⚡', label: 'Automations', active: false },
  { icon: '📅', label: 'Planner', active: false },
  { icon: '🧩', label: 'Widgets', active: false },
  { icon: '⚙️', label: 'Project Settings', active: false },
  { icon: '🗺️', label: 'Map View', active: false },
]

const TRIGGERS_ZONE = [
  { id: 1, camera: 'NC Ed - North Facing', label: 'Worker in Restricted Zone', timestamp: '02 Mar, 2026 15:21:50', confidence: 94, zone: 'Zone 3 - Excavation', img: '/images/detection1.png', status: 'ready' },
  { id: 2, camera: 'NC Ed - North Facing', label: 'Worker in Restricted Zone', timestamp: '02 Mar, 2026 15:22:09', confidence: 91, zone: 'Zone 3 - Excavation', img: '/images/detection2.png', status: 'ready' },
  { id: 3, camera: 'NC Ed - South Facing', label: 'Worker in Restricted Zone', timestamp: '02 Mar, 2026 15:19:19', confidence: 88, zone: 'Zone 3 - Excavation', img: '/images/detection3.png', status: 'ready' },
  { id: 4, camera: 'NC Ed - North Facing', label: 'Worker in Restricted Zone', timestamp: '02 Mar, 2026 15:23:22', confidence: 92, zone: 'Zone 3 - Excavation', img: '/images/detection1.png', status: 'ready' },
]

const TRIGGERS_PPE = [
  { id: 5, camera: 'NC Ed - East Gate', label: 'Missing Hard Hat/Vest', timestamp: '02 Mar, 2026 14:10:05', confidence: 95, zone: 'Zone 1 - Main Entrance', img: '/images/detection2.png', status: 'ready' },
  { id: 6, camera: 'NC Ed - East Gate', label: 'Missing Hard Hat', timestamp: '02 Mar, 2026 14:12:30', confidence: 89, zone: 'Zone 1 - Main Entrance', img: '/images/detection1.png', status: 'ready' },
  { id: 7, camera: 'NC Ed - West Gate', label: 'Missing Hi-Vis Vest', timestamp: '02 Mar, 2026 13:45:20', confidence: 92, zone: 'Zone 2 - Unloading', img: '/images/detection3.png', status: 'ready' },
  { id: 8, camera: 'NC Ed - West Gate', label: 'Missing Hard Hat', timestamp: '02 Mar, 2026 13:50:11', confidence: 87, zone: 'Zone 2 - Unloading', img: '/images/detection2.png', status: 'ready' },
]

export default function EvercamScreen({ onSend }) {
  const [activeTab, setActiveTab] = useState('zone')
  const [sendingId, setSendingId] = useState(null)
  const [sentIds, setSentIds] = useState([])

  const currentTriggers = activeTab === 'zone' ? TRIGGERS_ZONE : TRIGGERS_PPE

  const handleSend = (id) => {
    setSendingId(id)
    setTimeout(() => {
      setSendingId(null)
      setSentIds(prev => [...prev, id])
      onSend()
    }, 1200)
  }

  return (
    <div className="evercam-layout">
      <aside className="ec-sidebar">
        {SIDEBAR_ITEMS.map((item, i) => (
          <div key={i} className={`ec-sidebar-item ${item.active ? 'active' : ''}`}>
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
            {item.badge && <span style={{ fontSize: 9, background: 'var(--accent-primary-glow)', color: 'var(--accent-primary)', padding: '1px 5px', borderRadius: 4, marginLeft: 'auto' }}>{item.badge}</span>}
          </div>
        ))}
      </aside>

      <div className="ec-main">
        <div className="ec-breadcrumb">
          <a href="#">Home</a> <span>›</span>
          <a href="#">Barnhill - NC Education Campus</a> <span>›</span>
          <span style={{ color: 'var(--text-secondary)' }}>Smart Search</span>
        </div>

        <div className="ec-header">
          <h1>Smart Search</h1>
          <div className="ec-header-actions">
            <button className="btn btn-outline" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-primary)' }}>
              EXPORT AS ↓
            </button>
            <button className="btn btn-primary">
              SAVE 💾
            </button>
          </div>
        </div>

        {/* Automation Chain */}
        <div className="ec-chain">
          <div className="ec-chain-node">
            <img src={activeTab === 'zone' ? '/images/detection1.png' : '/images/detection2.png'} alt="Camera" />
            <div>
              <div style={{ fontWeight: 600, fontSize: 11 }}>🟢 {activeTab === 'zone' ? 'NC Ed - North Facing' : 'NC Ed - East Gate'}</div>
            </div>
          </div>
          <span className="ec-chain-arrow">→</span>
          <div className="ec-chain-node">
            <span>🚶</span>
            <span>Worker</span>
            <span style={{ color: 'var(--text-tertiary)' }}>✕</span>
          </div>
          <span className="ec-chain-arrow">→</span>
          <div className="ec-chain-node">
            <span>{activeTab === 'zone' ? '⚙️' : '🦺'}</span>
            <span>{activeTab === 'zone' ? 'In_area' : 'Missing_PPE'}</span>
          </div>
          <span className="ec-chain-arrow">→</span>
          <div className="ec-chain-node">
            <span>📅</span>
            <div>
              <div style={{ color: '#f87171', fontSize: 11 }}>From Feb 25, 2026</div>
              <div style={{ color: '#f87171', fontSize: 11 }}>To Mar 4, 2026</div>
            </div>
          </div>
          <span className="ec-chain-arrow">→</span>
          <div className="ec-chain-node">
            <span>🔥</span>
            <span>Heatmap</span>
          </div>
        </div>

        {/* Results */}
        <div className="ec-results">
          <div className="ec-results-header" style={{ alignItems: 'flex-end' }}>
            <div>
              <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                <button 
                  onClick={() => setActiveTab('zone')}
                  style={{ background: 'none', border: 'none', color: activeTab === 'zone' ? 'var(--text-primary)' : 'var(--text-tertiary)', fontSize: 15, fontWeight: activeTab === 'zone' ? 600 : 400, borderBottom: activeTab === 'zone' ? '2px solid var(--accent-primary)' : '2px solid transparent', paddingBottom: 4, cursor: 'pointer' }}
                >
                  Restricted Work Zone
                </button>
                <button 
                  onClick={() => setActiveTab('ppe')}
                  style={{ background: 'none', border: 'none', color: activeTab === 'ppe' ? 'var(--text-primary)' : 'var(--text-tertiary)', fontSize: 15, fontWeight: activeTab === 'ppe' ? 600 : 400, borderBottom: activeTab === 'ppe' ? '2px solid var(--accent-primary)' : '2px solid transparent', paddingBottom: 4, cursor: 'pointer' }}
                >
                  Missing PPE
                </button>
              </div>
              <span className="ec-results-count">Rows per page: 20 &nbsp; 1-20 of 520</span>
            </div>
          </div>

          <div className="ec-grid">
            {currentTriggers.map(trigger => {
              const isSent = sentIds.includes(trigger.id)
              const isSending = sendingId === trigger.id
              return (
                <div key={trigger.id} className="ec-card">
                  <div className="ec-card-img">
                    <img src={trigger.img} alt={trigger.label} loading="lazy" />
                    <div className="ec-card-overlay">
                      <span className="ec-badge confidence">{trigger.confidence}%</span>
                      <span className="ec-badge zone">🔴 {trigger.zone}</span>
                    </div>
                  </div>
                  <div className="ec-card-body">
                    <div className="ec-card-title">{trigger.label}</div>
                    <div className="ec-card-meta">
                      <span>📹 {trigger.camera}</span>
                      <span>🕐 {trigger.timestamp}</span>
                    </div>
                    <div className="ec-card-footer">
                      {isSent ? (
                        <span className="chip chip-sent">✓ Sent</span>
                      ) : (
                        <span className="chip chip-ready">● Ready to send</span>
                      )}
                      {!isSent && (
                        <button
                          className={`btn btn-navatech btn-sm ${isSending ? 'btn-loading' : ''}`}
                          onClick={() => handleSend(trigger.id)}
                          disabled={isSending}
                        >
                          {isSending ? '⏳ Sending...' : '🚀 Send to Navatech'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Summary Panel */}
      <aside className="ec-summary">
        <h3>📋 Automation Summary</h3>
        <div className="summary-row"><span className="label">Rule Name</span><span className="value">{activeTab === 'zone' ? 'Worker in restricted zone' : 'Missing PPE Compliance'}</span></div>
        <div className="summary-row"><span className="label">Camera</span><span className="value">{activeTab === 'zone' ? 'NC Ed - North Facing' : 'NC Ed - East Gate'}</span></div>
        <div className="summary-row"><span className="label">Active Range</span><span className="value">Feb 25 – Mar 4, 2026</span></div>
        <div className="summary-row"><span className="label">Detection Count</span><span className="value" style={{ color: '#5b8aff' }}>520</span></div>
        <div className="summary-row"><span className="label">Heatmap</span><span className="value" style={{ color: '#34d399' }}>Available</span></div>
        <div className="summary-row"><span className="label">Last Triggered</span><span className="value">02 Mar, 15:23</span></div>
        <div className="summary-row"><span className="label">Zone</span><span className="value">{activeTab === 'zone' ? 'Zone 3 - Excavation' : 'Zone 1 - Main Entrance'}</span></div>
        <div className="summary-row"><span className="label">Project</span><span className="value">NC Education Campus</span></div>

        <div style={{ marginTop: 24, padding: 14, background: 'var(--accent-primary-glow)', borderRadius: 8, border: '1px solid var(--border-primary)' }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent-primary)', marginBottom: 6 }}>💡 Integration Status</div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Navatech integration is active. Sending a trigger will create a draft safety observation and notify the assigned reviewer via WhatsApp.
          </div>
        </div>
      </aside>
    </div>
  )
}
