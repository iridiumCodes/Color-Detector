import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkField from './components/ImageLinkField/ImageLinkField'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'
import Palettes from './components/Palettes/Palettes'
import './App.css';
import { Component, Fragment } from 'react';
import ColorDetection from './components/ColorDetection/ColorDetection'
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
      imageUrl: '',
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        palettes: '',
        joined: ''
      }
    }
  }
 

  componentDidMount() {
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(console.log)
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value}); /* update state with input from field*/ 
  }
  
  onButtonDetect = (event) => {
    this.setState({imageUrl: this.state.input}); /* on button detect click, update state with input URL from input*/ 
    app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then( /*if we use this.state.imageUrl we may get 400 errors */
      function (response) {
        let colorsArray = response.outputs[0].data.colors;
        for (var value of colorsArray) {
          console.log(`Color: ${value.raw_hex}  Closest W3C Name: ${value.w3c.name}`);  // go through response and find hex value for each entry in the array
        }
      },
      function(err) {
        console.log(err);  //there was an error
      }
    );
  } 

  onRouteChange = (route) => {
    this.setState ({route: route});
  }

  loadUser = (data) => {
    this.setState ({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      palettes: data.palettes,
      joined: data.joined
    }})
  }

  render() {
    const { imageUrl, route } = this.state;
    return (
      <div>
        <Particles id="particles-js"
              params={particlesOptions}    
        />
        <>
          {route === 'home'
          ? <>
              <div style={{display: 'flex', justifyContent:'space-between'}}>
                <Logo />
                <Navigation onRouteChange = {this.onRouteChange} />
              </div>
              <Palettes name = {this.state.user.name} palettes = {this.state.user.palettes} /> 
              <ImageLinkField 
                  onInputChange={this.onInputChange}
                  onButtonDetect={this.onButtonDetect}/>
                
              <ColorDetection imageUrl = {imageUrl}/> {/*pass the image URL to the ColorDetection component */}
              
            </>
          :
          (route === 'signin'
          ? <>
              <div className='center'>
                <Logo />
              </div>
              <div><Signin loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/></div>
            </>
          : <>
              <div className='center'>
                <Logo />
              </div>
              <div><Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/></div>
            </>
          )}
        </>
      </div>
    );
}
}
export default App;
