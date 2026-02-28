import './App.css'
import FeatureToggle from './components/FeatureToggle.jsx';

function App() {

  return (
    <>
      <h1>Feature Toggle Demo!</h1>
      <FeatureToggle isEnabled={false} featureName={"dark mode"}/>
      <FeatureToggle isEnabled={false} featureName={"chat support"}/>
      <FeatureToggle isEnabled={false} featureName={"analytics dashboard"}/>
      <FeatureToggle isEnabled={false} featureName={"beta access"}/>
    </>
  )
}

export default App
