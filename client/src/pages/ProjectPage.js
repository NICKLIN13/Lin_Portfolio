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
				<div style= {{ maxWidth: '1300px'}}>
					<div className='row justify-content-center'>
						<div className='col-md-3 d-flex justify-content-center'>
							<div className="card">
								<div className='card-image'>
									<img src="nicklin13_portfolio/Project-Images/OBJ.png" alt="OBJ img" style={{ width: '256px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
								</div>
								<div className="card-body">
									<h4>3D Model Generator</h4>
									<div className='text-start fs-6' style={{ marginTop: '9px' }}>
										<span className="badge bg-secondary d-inline-block">JavaScript</span>
										<span className="badge bg-secondary d-inline-block" style={{ marginLeft: '2px' }}>WebGL</span>
									</div>

									<CardText style={{ marginTop: '15px' }}>
										<ul className="fs-6 text-start">
											<li>Implemented texture mapping</li>
											<li>Projected user-provided images onto any 3D models</li>
										</ul>
									</CardText>
									<Button className='custom-button' href="https://youtu.be/uHb1QbmsHDE" class="btn btn-primary" target="_blank">Demo video</Button>
								</div>
							</div>
						</div>

						<div className='col-md-3 d-flex justify-content-center'>
							<div className="card">
								<div className='card-image'>
									<img src="nicklin13_portfolio/Project-Images/terrain.png" alt="3D Terrain img" style={{ width: '256px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
								</div>
								<div className="card-body">
									<h4>3D Terrain Generator</h4>
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
									<Button className='custom-button' href="https://youtu.be/P-eXagOgGXw" class="btn btn-primary" target="_blank">Demo video</Button>
								</div>
							</div>
						</div>

						<div className='col-md-3 d-flex justify-content-center'>
							<div className="card">
								<div className='card-image'>
									<img src="nicklin13_portfolio/Project-Images/textures.png" alt="Rasterizer example img" style={{ background: '#778899', width: '256px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
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
									<Button className='custom-button' href="https://github.com/NICKLIN13" class="btn btn-primary" target="_blank">GitHub</Button>
								</div>
							</div>
						</div>

						<div className='col-md-3 d-flex justify-content-center'>
							<div className="card">
								<div className='card-image'>
									<img src="nicklin13_portfolio/Project-Images/IMAGE_To-do-list.png" alt="TodoList App" style={{ width: '256px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
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

						<div className='col-md-3 d-flex' style={{marginTop: '30px'}}>
							<div className="card">
								<div className='card-image'>
									<img src="nicklin13_portfolio/Project-Images/Weather App.png" alt="Data Visualizatioin" style={{ width: '256px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
								</div>
								<div className="card-body">
									<h4>Weather Mobile App</h4>
									<div className='text-start fs-6' style={{ marginTop: '9px' }}>
										<span className="badge bg-secondary d-inline-block">Android Studio</span>
										<span className="badge bg-secondary d-inline-block" style={{ marginLeft: '2px' }}>Java</span>
										<span className="badge bg-secondary d-inline-block" style={{ marginLeft: '2px' }}>Gemini LLM</span>
										<span className="badge bg-secondary d-inline-block">Google Maps</span>
									</div>

									<CardText style={{ marginTop: '15px' }}>
										<ul className="fs-6 text-start">
											<li>User login, customized themes, weather data</li>
											<li>Integrated Google Maps API and a Gemini model</li>
											<li>Wrote instrumented tests to ensure proper user interactions</li>
										</ul>
									</CardText>
									<Button className='custom-button' href="https://www.youtube.com/watch?v=1AYGFNd6I00" class="btn btn-primary" target="_blank">Demo video</Button>
								</div>
							</div>
						</div>

						<div className='col-md-3 d-flex' style={{marginTop: '30px'}}>
							<div className="card">
								<div className='card-image'>
									<img src="nicklin13_portfolio/Project-Images/DV.png" alt="Data Visualizatioin" style={{ width: '256px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
								</div>
								<div className="card-body">
									<h4>Narrative Data Visualization</h4>
									<div className='text-start fs-6' style={{ marginTop: '9px' }}>
										<span className="badge bg-secondary d-inline-block">D3.js</span>
										<span className="badge bg-secondary d-inline-block" style={{ marginLeft: '2px' }}>JavaScript</span>
									</div>

									<CardText style={{ marginTop: '15px' }}>
										<ul className="fs-6 text-start">
											<li>Generated dynamic charts based on users input using D3.js</li>
											<li>Integrated and deployed user interfaces into a cohesive narrative webpage</li>
										</ul>
									</CardText>
									<Button className='custom-button' href="https://nicklin13.github.io/yutingl9_CS416_NarrativeVisualization/DV_Final_Scene1.html" class="btn btn-primary" target="_blank">Demo</Button>
								</div>
							</div>
						</div>

						<div className='col-md-3 d-flex' style={{marginTop: '30px'}}></div>
						<div className='col-md-3 d-flex' style={{marginTop: '30px'}}></div>
					</div>
				</div>

			</header>
			<Footer />
		</div>
	)
}

export default ProjectPage
