import { useState } from 'react'

const SIDEBAR = [
  { icon: '📊', label: 'Dashboard' },
  { icon: '👁️', label: 'Observations', active: true },
  { icon: '🚨', label: 'Incidents' },
  { icon: '📋', label: 'Inspections' },
  { icon: '🎓', label: 'Training' },
  { icon: '🤖', label: 'AI Insights' },
]

const OBSERVATIONS = [
  { id: 'OBS-2026-001', project: 'NC Education Campus', location: 'Zone 3', hazard: 'Barriers / Guards', severity: 'High', rootCause: 'Procedures', reporter: 'Prakash Senghani', reviewer: 'Rushi Patel', source: 'Evercam', status: 'Under Review', created: '02 Mar 2026, 15:22', highlight: true },
  { id: 'OBS-2026-002', project: 'NC Education Campus', location: 'Zone 1', hazard: 'Fall Protection', severity: 'Medium', rootCause: 'Training', reporter: 'James Wilson', reviewer: 'Sarah OConnor', source: 'Manual', status: 'Open', created: '01 Mar 2026, 11:45', highlight: false },
  { id: 'OBS-2026-003', project: 'Marina Bay Phase 2', location: 'Block B', hazard: 'Electrical', severity: 'High', rootCause: 'Equipment', reporter: 'Mike Chen', reviewer: 'Rushi Patel', source: 'Inspection', status: 'Closed', created: '28 Feb 2026, 09:30', highlight: false },
  { id: 'OBS-2026-004', project: 'NC Education Campus', location: 'Zone 5', hazard: 'Housekeeping', severity: 'Low', rootCause: 'Procedures', reporter: 'Sarah OConnor', reviewer: 'James Wilson', source: 'Manual', status: 'Open', created: '27 Feb 2026, 14:15', highlight: false },
  { id: 'OBS-2026-005', project: 'Marina Bay Phase 2', location: 'Block A', hazard: 'PPE', severity: 'Medium', rootCause: 'Training', reporter: 'Tom Brooks', reviewer: 'Mike Chen', source: 'Evercam', status: 'Under Review', created: '26 Feb 2026, 16:00', highlight: false },
]

const FILTERS = ['All Status', 'Source: Evercam', 'Project: NC Education', 'Severity: High', 'Date Range']

export default function AdminScreen() {
  const [selectedRow, setSelectedRow] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All Status')

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-section">
          <div className="admin-sidebar-label">Modules</div>
          {SIDEBAR.map((item, i) => (
            <div key={i} className={`admin-sidebar-item ${item.active ? 'active' : ''}`}>
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="admin-sidebar-section">
          <div className="admin-sidebar-label">Workspace</div>
          <div className="admin-sidebar-item" style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>
            <span className="sidebar-icon">🏗️</span>
            <span>NC Education Campus</span>
          </div>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-page-header">
          <h1>Observations</h1>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-outline">📤 Export</button>
          </div>
        </div>

        {/* Filters */}
        <div className="admin-filters">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input className="search-input" placeholder="Search observations..." />
          </div>
          {FILTERS.map(f => (
            <button key={f} className={`filter-chip ${activeFilter === f ? 'active' : ''}`} onClick={() => setActiveFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Project</th>
                <th>Location</th>
                <th>Hazard Type</th>
                <th>Severity</th>
                <th>Source</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {OBSERVATIONS.map(obs => (
                <tr key={obs.id} className={obs.highlight ? 'highlight' : ''} onClick={() => setSelectedRow(obs.highlight ? obs : null)}>
                  <td>
                    <span style={{ fontWeight: 600 }}>{obs.id}</span>
                    {obs.source === 'Evercam' && obs.highlight && (
                      <div><span className="chip chip-source" style={{ marginTop: 4 }}>🤖 Evercam AI</span></div>
                    )}
                  </td>
                  <td>{obs.project}</td>
                  <td>{obs.location}</td>
                  <td>{obs.hazard}</td>
                  <td><span className={`chip ${obs.severity === 'High' ? 'chip-high' : obs.severity === 'Medium' ? 'chip-draft' : 'chip-ready'}`}>{obs.severity}</span></td>
                  <td>{obs.source}</td>
                  <td><span className={`chip ${obs.status === 'Closed' ? 'chip-sent' : obs.status === 'Under Review' ? 'chip-draft' : 'chip-open'}`}>{obs.status}</span></td>
                  <td style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{obs.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 12, textAlign: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>💡 Click the highlighted row to view the Evercam-generated observation details</span>
        </div>
      </main>

      {/* Detail Drawer */}
      {selectedRow && (
        <div className="admin-drawer">
          <div className="drawer-header">
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{selectedRow.id}</h2>
              <span className="chip chip-source">🤖 Created via Evercam AI Detection</span>
            </div>
            <button className="drawer-close" onClick={() => setSelectedRow(null)}>✕</button>
          </div>

          {/* Captured Image */}
          <div className="drawer-section">
            <div className="drawer-section-title">📸 Captured Image</div>
            <img src="/images/detection1.png" alt="Detection" style={{ width: '100%', borderRadius: 8, marginBottom: 8 }} />
          </div>

          {/* Details */}
          <div className="drawer-section">
            <div className="drawer-section-title">📋 Observation Details</div>
            <div className="drawer-field"><span className="label">AI Description</span><span className="value" style={{ maxWidth: '60%', textAlign: 'right' }}>Barriers are missing at excavations in Zone 3</span></div>
            <div className="drawer-field"><span className="label">Detection Time</span><span className="value">02 Mar 2026, 15:21:50</span></div>
            <div className="drawer-field"><span className="label">Camera</span><span className="value">NC Ed - North Facing</span></div>
            <div className="drawer-field"><span className="label">Automation Rule</span><span className="value">Worker in restricted zone</span></div>
            <div className="drawer-field"><span className="label">Geofence</span><span className="value">Zone 3 - Excavation</span></div>
            <div className="drawer-field"><span className="label">Hazard Type</span><span className="value">Barriers / Guards</span></div>
            <div className="drawer-field"><span className="label">Severity</span><span className="value"><span className="chip chip-high">High</span></span></div>
            <div className="drawer-field"><span className="label">Root Cause</span><span className="value">Procedures</span></div>
            <div className="drawer-field"><span className="label">Reporter</span><span className="value">Prakash Senghani</span></div>
            <div className="drawer-field"><span className="label">Reviewer</span><span className="value">Rushi Patel</span></div>
          </div>

          {/* Audit Trail */}
          <div className="drawer-section">
            <div className="drawer-section-title">🔄 Observation Lifecycle</div>
            <div className="audit-trail">
              <div className="audit-step completed">
                <div className="audit-title">📹 Detected in Evercam</div>
                <div className="audit-time">02 Mar 2026, 15:21:50</div>
              </div>
              <div className="audit-step completed">
                <div className="audit-title">🚀 Sent to Navatech</div>
                <div className="audit-time">02 Mar 2026, 15:22:01</div>
              </div>
              <div className="audit-step completed">
                <div className="audit-title">💬 Reviewed in WhatsApp</div>
                <div className="audit-time">02 Mar 2026, 15:22:15</div>
              </div>
              <div className="audit-step completed">
                <div className="audit-title">📱 Completed in nAI App</div>
                <div className="audit-time">02 Mar 2026, 15:25:00</div>
              </div>
              <div className="audit-step">
                <div className="audit-title">🏢 Logged in Portal</div>
                <div className="audit-time">02 Mar 2026, 15:25:01</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
