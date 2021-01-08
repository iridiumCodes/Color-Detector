import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkField from './components/ImageLinkField/ImageLinkField'
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <>
      <div className="App" style={{display:'flex', justifyContent: 'space-between'}}>
        <Logo />
        <Navigation />
      </div>
      <div>
        <ImageLinkField />
      </div>
    </>

  );
}

export default App;
