import React from 'react'
import './App.css'

function App () {
  return (
    <div className="app">
      <div className="header">
        <div className="content flex">
          <div className="photo">
            <img src="profile.jpeg" alt="profile" />
          </div>
          <div className="profile">
            <div className="name">Jimi Maïquez</div>
            <div className="description">Freelance developer</div>
            <div className="socials">
              <a href="https://github.com/ItsJimi" target="_blank" rel="noopener noreferrer">
                <div className="button">
                  <img src="github.svg" alt="github" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/jimi-maiquez/" target="_blank" rel="noopener noreferrer">
                <div className="button">
                  <img src="linkedin.svg" alt="linkedin" />
                </div>
              </a>
              <a href="https://www.instagram.com/m.jimi/" target="_blank" rel="noopener noreferrer">
                <div className="button">
                  <img src="instagram.svg" alt="instagram" />
                </div>
              </a>
              <a href="https://twitter.com/its_me_jimi" target="_blank" rel="noopener noreferrer">
                <div className="button">
                  <img src="twitter.svg" alt="twitter" />
                </div>
              </a>
              <a href="mailto:jimi@maiquez.fr" target="_blank" rel="noopener noreferrer">
                <div className="mail">
                  jimi@maiquez.fr
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
