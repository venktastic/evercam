import { useState, useCallback } from 'react'
import TopNav from './components/TopNav'
import HeroSection from './components/HeroSection'
import EvercamScreen from './screens/EvercamScreen'
import WhatsAppScreen from './screens/WhatsAppScreen'
import NaiScreen from './screens/NaiScreen'
import AdminScreen from './screens/AdminScreen'
import MobileNav from './components/MobileNav'
import Toast from './components/Toast'

const STEPS = [
  { id: 'evercam', label: 'Evercam Detection', icon: '📹' },
  { id: 'whatsapp', label: 'WhatsApp Draft', icon: '💬' },
  { id: 'nai', label: 'nAI Completion', icon: '📱' },
  { id: 'admin', label: 'Admin Portal', icon: '🏢' },
]

export default function App() {
  const [theme, setTheme] = useState('light')
  const [activeStep, setActiveStep] = useState('hero')
  const [completedSteps, setCompletedSteps] = useState([])
  const [toasts, setToasts] = useState([])
  const [scenario, setScenario] = useState('zone')

  const toggleTheme = useCallback(() => {
    setTheme(t => t === 'dark' ? 'light' : 'dark')
  }, [])

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now()
    setToasts(t => [...t, { id, message, type }])
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3500)
  }, [])

  const goToStep = useCallback((stepId) => {
    setActiveStep(stepId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const completeAndAdvance = useCallback((currentStep, nextStep, toastMsg) => {
    setCompletedSteps(prev => [...new Set([...prev, currentStep])])
    if (toastMsg) addToast(toastMsg)
    setTimeout(() => goToStep(nextStep), 800)
  }, [addToast, goToStep])

  const handleEvercamSend = useCallback((tab) => {
    setScenario(tab)
    completeAndAdvance('evercam', 'whatsapp', 'Safety event sent to Navatech')
  }, [completeAndAdvance])

  const renderScreen = () => {
    switch (activeStep) {
      case 'hero':
        return <HeroSection onStart={() => goToStep('evercam')} />
      case 'evercam':
        return <EvercamScreen onSend={handleEvercamSend} />
      case 'whatsapp':
        return <WhatsAppScreen scenario={scenario} onOpen={() => completeAndAdvance('whatsapp', 'nai', 'Opening in nAI App...')} />
      case 'nai':
        return <NaiScreen scenario={scenario} onSubmit={() => completeAndAdvance('nai', 'admin', 'Observation successfully submitted to Navatech Portal')} />
      case 'admin':
        return <AdminScreen scenario={scenario} />
      default:
        return <HeroSection onStart={() => goToStep('evercam')} />
    }
  }

  return (
    <div className="app-container" data-theme={theme}>
      <TopNav
        steps={STEPS}
        activeStep={activeStep}
        completedSteps={completedSteps}
        onStepClick={goToStep}
        onHome={() => goToStep('hero')}
        theme={theme}
        onToggleTheme={toggleTheme}
        showStepper={activeStep !== 'hero'}
      />
      <div className="screen-wrapper" key={activeStep}>
        {renderScreen()}
      </div>
      <MobileNav steps={STEPS} activeStep={activeStep} onStepClick={goToStep} />
      <Toast toasts={toasts} />
    </div>
  )
}
