import { useState } from 'react'

export default function NaiScreen({ onSubmit }) {
  const [form, setForm] = useState({
    description: 'Barriers missing to excavations in Zone 3',
    project: 'NC Education Campus',
    location: 'Zone 3',
    eventType: 'Observation',
    hazardType: 'Barriers / Guards',
    rootCause: '',
    severity: '',
    reporter: 'Prakash Senghani',
    reviewer: '',
    geolocation: 'Zone 3 - Excavation Area',
    aiDescription: 'Barriers are missing at excavations in Zone 3, posing a safety risk.',
    comments: '',
    corrective: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = () => {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      onSubmit()
    }, 1500)
  }

  const isReady = form.rootCause && form.severity && form.reviewer

  return (
    <div className="nai-layout">
      <div className="nai-phone">
        {/* Top Bar */}
        <div className="nai-top-bar">
          <span className="back">←</span>
          <span className="title">DEMOBS101</span>
          <span style={{ fontSize: 18 }}>🔲</span>
        </div>

        {/* Banner */}
        <div className="nai-banner">
          <div className="nai-banner-title">🔲 DEMOBS101: Breaking Ground and Excavations</div>
          <div className="nai-banner-sub">Barriers missing to excavations in Zone 3</div>
          <div className="nai-banner-date">Due Date: 30 Jun 2026</div>
        </div>

        {/* Scrollable Content */}
        <div style={{ overflowY: 'auto', maxHeight: 520, padding: '0 0 16px' }}>
          {/* AI Card */}
          <div className="nai-ai-card">
            <div className="nai-ai-label">Navatech AI</div>
            <div className="nai-ai-msg">
              Hello Prakash! You have been assigned an observation review by the Evercam Automation system.
            </div>
            <div className="nai-ai-time">15:22</div>
          </div>

          {/* Draft chip */}
          <div style={{ padding: '0 16px 8px', display: 'flex', gap: 8, alignItems: 'center' }}>
            <span className="chip chip-draft">⚠ Draft</span>
            <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>Complete required fields to submit</span>
          </div>

          {/* Observation Details */}
          <div className="nai-section">
            <div className="nai-section-title">Observation Details</div>

            {/* Prefilled fields */}
            <div className="nai-field">
              <div className="nai-field-label">Observation Details</div>
              <div className="nai-field-value">{form.description}</div>
            </div>

            <div className="nai-field">
              <div className="nai-field-label">Project Name</div>
              <div className="nai-field-value">{form.project}</div>
            </div>

            <div className="nai-field">
              <div className="nai-field-label">Location</div>
              <div className="nai-field-value">{form.location}</div>
            </div>

            <div className="nai-field">
              <div className="nai-field-label">Safety Event Type</div>
              <div className="nai-field-value">{form.eventType}</div>
            </div>

            <div className="nai-field">
              <div className="nai-field-label">Hazard Type</div>
              <div className="nai-field-value">{form.hazardType}</div>
            </div>

            {/* Incomplete fields */}
            <div className={`nai-field ${!form.rootCause ? 'incomplete' : ''}`}>
              <div className="nai-field-label">Root Cause *</div>
              <select value={form.rootCause} onChange={e => update('rootCause', e.target.value)}
                style={{ padding: 4, background: 'transparent', border: 'none', color: form.rootCause ? 'var(--accent-primary)' : 'var(--text-tertiary)', fontSize: 13, width: '100%' }}>
                <option value="">Select root cause...</option>
                <option value="Procedures">Procedures</option>
                <option value="Training">Training</option>
                <option value="Equipment">Equipment</option>
                <option value="Environment">Environment</option>
              </select>
              {!form.rootCause && <div className="nai-field-hint">⚠ Required — confirm the root cause</div>}
            </div>

            <div className={`nai-field ${!form.severity ? 'incomplete' : ''}`}>
              <div className="nai-field-label">Severity *</div>
              <select value={form.severity} onChange={e => update('severity', e.target.value)}
                style={{ padding: 4, background: 'transparent', border: 'none', color: form.severity ? 'var(--accent-primary)' : 'var(--text-tertiary)', fontSize: 13, width: '100%' }}>
                <option value="">Select severity...</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
              {!form.severity && <div className="nai-field-hint">⚠ Required — confirm severity level</div>}
            </div>

            <div className="nai-field">
              <div className="nai-field-label">Reporter Name</div>
              <div className="nai-field-value">{form.reporter}</div>
            </div>

            <div className={`nai-field ${!form.reviewer ? 'incomplete' : ''}`}>
              <div className="nai-field-label">Reviewer *</div>
              <select value={form.reviewer} onChange={e => update('reviewer', e.target.value)}
                style={{ padding: 4, background: 'transparent', border: 'none', color: form.reviewer ? 'var(--accent-primary)' : 'var(--text-tertiary)', fontSize: 13, width: '100%' }}>
                <option value="">Select reviewer...</option>
                <option value="Rushi Patel">Rushi Patel</option>
                <option value="Sarah OConnor">Sarah O'Connor</option>
                <option value="James Wilson">James Wilson</option>
              </select>
              {!form.reviewer && <div className="nai-field-hint">⚠ Required — assign a reviewer</div>}
            </div>

            <div className="nai-field">
              <div className="nai-field-label">Geolocation / Zone</div>
              <div className="nai-field-value muted">{form.geolocation}</div>
            </div>

            <div className="nai-field">
              <div className="nai-field-label">AI Short Description</div>
              <div className="nai-field-value muted" style={{ fontSize: 12, lineHeight: 1.5 }}>{form.aiDescription}</div>
            </div>

            <div className="nai-field">
              <div className="nai-field-label">Additional Comments</div>
              <textarea
                value={form.comments}
                onChange={e => update('comments', e.target.value)}
                placeholder="Add any additional context..."
                rows={2}
                style={{ padding: 4, background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: 13, width: '100%', resize: 'vertical' }}
              />
            </div>

            <div className="nai-field">
              <div className="nai-field-label">Corrective Action / Recommendation</div>
              <textarea
                value={form.corrective}
                onChange={e => update('corrective', e.target.value)}
                placeholder="Describe recommended actions..."
                rows={2}
                style={{ padding: 4, background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: 13, width: '100%', resize: 'vertical' }}
              />
            </div>

            {/* Pictures */}
            <div className="nai-field">
              <div className="nai-field-label">Pictures</div>
              <div className="nai-pictures" style={{ marginTop: 6 }}>
                <img className="nai-pic-thumb" src="/images/detection1.png" alt="Detection 1" />
                <img className="nai-pic-thumb" src="/images/detection2.png" alt="Detection 2" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="nai-bottom-actions">
          <button className="btn btn-outline" style={{ borderColor: 'var(--border-primary)' }}>
            💾 Save Draft
          </button>
          <button
            className={`btn ${isReady ? 'btn-success' : 'btn-primary'} ${submitting ? 'btn-loading' : ''}`}
            onClick={handleSubmit}
            disabled={submitting}
            style={{ opacity: isReady ? 1 : 0.6 }}
          >
            {submitting ? '⏳ Submitting...' : '✅ Submit Observation'}
          </button>
        </div>
      </div>
    </div>
  )
}
