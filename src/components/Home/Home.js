import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/homeCoder.png';
import Particle from '../Particle';
import Type from './Type';
import ParticleComponent from './HomeParticles';

import Particles from 'react-tsparticles';

import boostrapIcon from '../../Assets/icon/bootstrap-icon.svg';
import cssIcon from '../../Assets/icon/css-icon.svg';
import htmlIcon from '../../Assets/icon/html-icon.svg';
import jsIcon from '../../Assets/icon/js-icon.svg';
import mysqlIcon from '../../Assets/icon/mysql-icon.svg';
import nodeIcon from '../../Assets/icon/node-icon.svg';
import reactIcon from '../../Assets/icon/react-icon.svg';
import sassIcon from '../../Assets/icon/sass-icon.svg';
import typescriptIcon from '../../Assets/icon/typescript-icon.svg';
import vscodeIcon from '../../Assets/icon/vscode-icon.svg';
import vueIcon from '../../Assets/icon/vue-icon.svg';

function Home() {
  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: 1,
    },
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onDiv: {
          elementId: 'repulse-div',
          enable: false,
          mode: 'repulse',
        },
        onHover: {
          enable: true,
          mode: 'bubble',
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 2,
        },
        connect: {
          distance: 80,
          lineLinked: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1,
          },
        },
        push: {
          quantity: 2,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      lineLinked: {
        blink: false,
        color: '#000',
        consent: false,
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1,
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        bounce: false,
        direction: 'none',
        enable: true,
        outMode: 'out',
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        limit: 20,
        value: 15,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.2,
          speed: 1,
          sync: false,
        },
        random: true,
        value: 1,
      },
      rotate: {
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
        direction: 'random',
        random: true,
        value: 0,
      },
      shape: {
        character: {
          fill: false,
          font: 'Verdana',
          style: '',
          value: '*',
          weight: '400',
        },
        image: [
          {
            src: boostrapIcon,
            width: 20,
            height: 20,
          },
          {
            src: cssIcon,
            width: 20,
            height: 20,
          },
          {
            src: htmlIcon,
            width: 20,
            height: 20,
          },
          {
            src: jsIcon,
            width: 20,
            height: 20,
          },
          {
            src: mysqlIcon,
            width: 20,
            height: 20,
          },
          {
            src: nodeIcon,
            width: 20,
            height: 20,
          },
          {
            src: reactIcon,
            width: 20,
            height: 20,
          },
          {
            src: sassIcon,
            width: 20,
            height: 20,
          },
          {
            src: typescriptIcon,
            width: 20,
            height: 20,
          },
          {
            src: vscodeIcon,
            width: 20,
            height: 20,
          },
          {
            src: vueIcon,
            width: 20,
            height: 20,
          },
        ],
        polygon: {
          sides: 5,
        },
        stroke: {
          color: '#000000',
          width: 0,
        },
        type: 'image',
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          sync: false,
        },
        random: false,
        value: 16,
      },
    },
    polygon: {
      draw: {
        enable: false,
        lineColor: '#ffffff',
        lineWidth: 0.5,
      },
      move: {
        radius: 10,
      },
      scale: 1,
      url: '',
    },
    background: {
      image: '',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
  };

  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <ParticleComponent />
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There!{' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>

              <h1 className='heading-name'>
                I'M
                <strong className='main-name'> TRAN QUOC HUY</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt='home pic'
                className='img-fluid'
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
