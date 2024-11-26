import React from 'react'
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { CardText, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectPage() {
  return (
    <div className='App'>
      <Navbar />

      <h1 style={{ marginTop: '10px' }}>My Projects <span class="badge bg-secondary">New</span> </h1>

      <header className='App-header'>

        <h1 className='my-4'>2024</h1>

        <div className='container'>
          <div className="card">
            <div className='card-image'>
              <img src="nicklin13_portfolio/Project-Images/terrain.png" alt="Hangman Game" style={{ width: '286px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className="card-body">
              <h4>3D terrain generator</h4>
              <div className='text-start fs-6' style={{ marginTop: '9px' }}>
                <span className="badge bg-secondary d-inline-block">JavaScript</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '2px' }}>WebGL</span>
              </div>

              <CardText style={{ marginTop: '15px' }}>
                <ul className="fs-6 text-start">
                  <li>Implemented a CPU-GPU pipeline</li>
                  <li>Implemented a 3D realistic terrain with Blinn-Phong shading</li>
                  <li>Interactive "drive" and "fly" modes, and erosion effects</li>
                </ul>
              </CardText>
              <Button className='custom-button' href="https://github.com/NICKLIN13/Personal-Side-Works/tree/main/hangman-typescript" class="btn btn-primary" target="_blank">GitHub</Button>
            </div>
          </div>

          <div className="card">
            <div className='card-image'>
              <img src="nicklin13_portfolio/Project-Images/textures.png" alt="Rasterizer example img" style={{ background:'#778899', width: '256px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className="card-body">
              <h4>Rasterizer</h4>
              <div className='text-start fs-6' style={{ marginTop: '9px' }}>
                <span className="badge bg-secondary d-inline-block">Python</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '2px' }}>DDA Algorithm</span>
              </div>

              <CardText style={{ marginTop: '15px' }}>
                <ul className="fs-6 text-start">
                  <li>Implemented a rasterization pipeline with DDA algorithm</li>
                  <li>Rendered png images by reading the txt files</li>
                </ul>
              </CardText>
              <Button className='custom-button' href="https://github.com/NICKLIN13/Personal-Side-Works/tree/main/python-flask-google-login" class="btn btn-primary" target="_blank">GitHub</Button>
            </div>
          </div>

          <div className="card">
            <div className='card-image'>
              <img src="nicklin13_portfolio/Project-Images/IMAGE_To-do-list.png" alt="TodoList App" style={{ width: '286px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className="card-body">
              <h4>Todo List</h4>
              <div className='text-start fs-6' style={{ marginTop: '9px' }}>
                <span className="badge bg-secondary d-inline-block">Node.js</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '2px' }}>React.js</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '2px' }}>MongoDB</span>
                <span className="badge bg-secondary d-inline-block">Deployed(CI/CD)</span>
              </div>

              <CardText style={{ marginTop: '15px' }}>
                <ul className="fs-6 text-start">
                  <li>Utilized React.js & Express.js to do the full stack work</li>
                  <li>Integrated MongoDB as a back-end database with RESTful Api</li>
                  <li>Deployed to render.com and acheived CI</li>
                </ul>
              </CardText>
              <Button className='custom-button' href="https://lin-todolist.onrender.com" class="btn btn-primary" target="_blank">Demo</Button>
            </div>
          </div>
        </div>

      </header>
      <Footer />
    </div>
  )
}

export default ProjectPage
