import Panel from 'nav-frontend-paneler'
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import './App.css'

function App() {
  return (
    <div className="vta-app">
      <Panel border>
        <Sidetittel>Halla fra vta</Sidetittel>
        <Normaltekst>
          Denne teksten er helt normal
        </Normaltekst>
      </Panel>
    </div>
  );
}

export default App;
