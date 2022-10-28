import { Link } from "react-router-dom";
import { AncoraGradient } from "../AncoraGradient";
import { Container } from "./styles";

import menuImg from '../../assets/menu.png'

export function Header() {

  const links = [
    {
      link: 'About',
      route: '/about'
    },
    {
      link: 'Projects',
      route: '/projects'
    },
    {
      link: 'Techs',
      route: '/techs'
    },
    {
      link: 'Contact',
      route: '/contact'
    }
  ]

  const linksMobile = [
    {
      link: 'Home',
      route: '/'
    },
    {
      link: 'About',
      route: '/about'
    },
    {
      link: 'Projects',
      route: '/projects'
    },
    {
      link: 'Techs',
      route: '/techs'
    },
    {
      link: 'Contact',
      route: '/contact'
    }
  ]

  function addClassActive() {
    let menu = document.querySelector('.menu')
    menu.classList.toggle('active')
  }
  
  return (
    <Container>
      <div className="container">


        <div className="menu">
            <nav>
              <ul>
                {
                  linksMobile.map(item => (
                    <li key={item.link}>
                      <AncoraGradient data={item} role={'button'} onClick={addClassActive} />
                    </li>
                  ))
                }
                </ul>
              </nav>
        </div>

        <Link to={'/'}>Home</Link>

        <button className={'button'} onClick={addClassActive}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20H30" stroke="#67B3D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 12H30" stroke="#43E7AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 28L30 28" stroke="#9572FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <nav id="nav">
          <ul>
            {
              links.map(item => (
                <li key={item.link}>
                  <AncoraGradient data={item} />
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </Container>
  );
}