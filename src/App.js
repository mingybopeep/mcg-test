import React, { useEffect, useState } from 'react';
import { useTrail, a, useSpring, animated } from 'react-spring';

import styles from './style.module.scss';

import arrow from './MCG_Test/arrowIcon.svg';
import logo from './MCG_Test/MCG_Logo.svg';
import { FaFacebookF, FaInstagram, FaTwitter, FaWindowMinimize } from 'react-icons/fa';

const links = [
  {
    name: 'lorem',
    link: '#'
  },
  {
    name: 'ipsum',
    link: '#'
  },
  {
    name: 'dolor',
    link: '#'
  }
];

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

function App() {

  const [activeScreen, setActiveScreen] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const [open, set] = useState(true);
  const [lang, toggleLang] = useState('En');
  const [scroll, setScroll] = useState(0); 

  const adjust = (e) => {
    if (e.deltaY > 0 && activeScreen < 3) {
      setScroll(scroll +1);
    } else if (e.deltaY < 0 && activeScreen > 1) {
      setScroll(scroll -1);
    }
    if(scroll > 25){
      setScroll(0);
      setActiveScreen(activeScreen+1);
    } if(scroll < -25){
      setScroll(0); 
      setActiveScreen(activeScreen-1);
    }

  }


  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
  const trans2 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`
  const trans3 = (x, y) => `translate3d(${x / 60}px,${y / 60}px,0)`

  const [props, setp] = useSpring(() => (
    {
      xy: [0, 0],
      config: {
        mass: 10,
        tension: 550,
        friction: 140
      }
    }
  ));

  return (
    <div
      className={styles.App}
      onMouseMove={({ clientX: x, clientY: y }) => setp({ xy: calc(x, y) })}
      onWheel={e => adjust(e)}>
      <nav>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className={openMenu ? [styles.menuIcon, styles.openMenuIcon].join(' ') : styles.menuIcon}>
          <div></div>
          <div></div>
        </div>
        <img src={logo} />
      </nav>

      <div className={openMenu ? [styles.menu, styles.menuOpen].join(' ') : styles.menu}>
        {openMenu ?
          <Trail open={open} onClick={() => set((state) => !state)}>
            {links.map(link => {
              return (
                <a key={link.name} href={link.link} onClick={() => setOpenMenu(false)}>
                  {link.name}
                </a>
              )
            })}
          </Trail> : null}
      </div>

      <div className={styles.background}>
        <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
          <div className={styles.backgroundimg}></div>
        </animated.div>
        <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
          <div className={styles.h2container}>
            <h2>Engagement</h2>
            <h2>{lang == 'En' ? 'Human' : 'Humain'}</h2>
          </div>
        </animated.div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
        <div className={styles.main}>
          <div>
            <p>01</p>
            <div className={styles.bar}>
              <div></div>
              <div></div>
            </div>
            <p>02</p>
            <p>{lang == 'En' ? 'Welcome' : 'Bienvenue'}</p>
          </div>
          {lang == 'En' ?
            <h1>Creating Human <br></br>engagement.</h1> :
            <h1>Créer un engagement <br></br> humain</h1>
          }
          <p>
            {lang == 'En' ? 'through technology.' : 'grâce à la technologie'}
          </p>
          <a href='#' >
            <img src={arrow} />
            <p>DISCOVER MCG</p>
          </a>
        </div>
      </animated.div>
      <div className={styles.sidebarl}>
        <div>
          <div>
            <div></div>
            <p>SCROLL</p>
          </div>
          <p>TO NAVIGATE</p>
        </div>
      </div>

      <div className={styles.sidebarr}>
        <p
          onClick={() => toggleLang(lang == 'En' ? 'Fr' : 'En')}>
          {lang}
        </p>
        <p>
          WELCOME TO MCG
        </p>
        <div>
          <a href='#'>
            <FaFacebookF />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
          <a href='#'>
            <FaTwitter />
          </a>
        </div>
      </div>

      <footer>
        <div
          onClick={() => setActiveScreen(1)}
          className={activeScreen == 1 ? styles.active : null}>
          <p>
            ABOUT<br /> MCG
          </p>
          <p>
            01
          </p>
        </div>
        <div
          onClick={() => setActiveScreen(2)}
          className={activeScreen == 2 ? styles.active : null}>
          <p>
            OUR <br />BRANDS
          </p>
          <p>
            02
          </p>
        </div>
        <div
          onClick={() => setActiveScreen(3)}
          className={activeScreen == 3 ? styles.active : null}>
          <p>
            EXPLORE <br />CAREERS
          </p>
          <p>
            03
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
