import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkField from './components/ImageLinkField/ImageLinkField'
import './App.css';

function App() {
  return (
    <div className="App" style={{display:'flex', justifyContent: 'space-between'}}>
      <Logo />
      <Navigation />
      <ImageLinkField />
      {/*<ColorDetection />*/} 
    </div>
  );
}

export default App;
