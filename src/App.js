import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Footer from './components/Footer/Footer';
import ColorDetection from './components/ColorDetection/ColorDetection';
import ImageLinkField from './components/ImageLinkField/ImageLinkField';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Swatches from './components/Swatches/Swatches';
import ClipboardCopy from './components/ClipboardCopy/ClipboardCopy';


const particlesOptions = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#9a96ee',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

function App(props) {
  const [imageUrl, setImageUrl] = useState('');
  const [colors, setColors] = useState([]);
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [input, setInput] = useState('');
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    palettes: '',
    joined: '',
  });

  useEffect(() => {
    fetch('https://immense-meadow-72319.herokuapp.com/')
      .then((response) => response.json())
      .then(console.log);
  }, []); // eg [paramenter] only run if parameter changes - with an empty array it replicates ComponentDidMount

  const onInputChange = (event) => {
    setInput(event.target.value); /* update state with input from field*/
  };

  const onButtonDetect = (event) => {
    setImageUrl(
      input
    ); /* on button detect click, update state with input URL from input*/
    fetch('https://immense-meadow-72319.herokuapp.com/imageUrl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: input,
      }),
    })
      .then((response) => response.json())
      .then((response) => setColors(response.outputs[0].data.colors))
      .catch((err) => {
        console.error(err); //there was an error
      });
  };

  const onRouteChange = (route) => {
    if (route === 'home') {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      palettes: data.palettes,
      joined: data.joined,
    });
  };

  return (
    <div className="content">
      <Particles id="particles-js" params={particlesOptions} />

      <>
        {route === 'home' ? (
          <>
            <div className="spaceBetween">
              <Logo />
              <Navigation onRouteChange={onRouteChange} />
            </div>
            {/* <Palettes
                name={user.name}
                palettes={user.palettes}
              /> */}
            <div>
              <ImageLinkField
                onInputChange={onInputChange}
                onButtonDetect={onButtonDetect}
              />
            </div>
            <div className="spaceAround pa4">
              <ColorDetection imageUrl={imageUrl} />
              {/*pass the image URL to the ColorDetection component */}
              {<Swatches colors={colors} />}
              {<ClipboardCopy copyText="test" />}
            </div>
          </>
        ) : route === 'signin' ? (
          <>
            <div className="flexCenter">
              <Logo />
            </div>
            <div>
              <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
            </div>
          </>
        ) : (
          <>
            <div className="flexCenter">
              <Logo />
            </div>
            <div>
              <Register loadUser={loadUser} onRouteChange={onRouteChange} />
            </div>
          </>
        )}
        <Footer />
      </>
    </div>
  );
}

export default App;
