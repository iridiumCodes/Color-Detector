import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkField from './components/ImageLinkField/ImageLinkField'
import './App.css';
import { Component, Fragment } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const particlesOptions = {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#9a96ee"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true  
}
const app = new Clarifai.App({
  apiKey: '392df143705b437c8bc35ad3e248ad06'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
 
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  
  onButtonDetect = (event) => {
    console.log('click');
    app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        console.log(response);
      },
      function(err) {
        //there was an error
      }
    );
  } 

  render() {
    return (
      <>
        <Particles id="particles-js"
              params={particlesOptions}    
        />
        <div className="App" style={{display:'flex', justifyContent: 'space-between'}}>
          <Logo />
          <Navigation />
        </div>
        <div>
          <ImageLinkField 
           onInputChange={this.onInputChange}
           onButtonDetect={this.onButtonDetect}/>
        </div>
      </>

    );
  }
}
export default App;
