import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import './App.css';

function App() {
	return (
		<div className="App">

			<Navbar />
			<div className='underNavbar'>
				<h1 style={{ marginTop: '10px' }}>Hello <span className="badge bg-secondary">New</span> </h1>
			</div>

			<header className="App-header" id="aboutMe">
				<h2 style={{ marginTop: '20px' }}><b>About Me</b></h2>
				<Container className="my-2 bg-dark text-white" style={{ width: '1000px', height: '500px' }} id="selfIntroduction">
					<div className='d-flex flex-column justify-content-center align-items-center' style={{ marginLeft: '30px' }}>
						<div className="d-flex flex-column justify-content-center">
							<img src="./000.JPG" className="rounded-circle rounded-circle-small" style={{ objectFit: 'cover', objectPosition: 'center left' }} alt="圓形照片"></img>
						</div>
						<div className="d-flex flex-column justify-content-center">
							<Button className="btn-light" href='https://github.com/NICKLIN13?tab=repositories' style={{ marginTop: '25px', width: '150px' }} target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
								</svg>
								GitHub
							</Button>
							<Button className="btn-light" href='https://www.linkedin.com/in/yuting-nick-lin/' style={{ marginTop: '15px', width: '150px' }} target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
									<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
								</svg>
								LinkedIn
							</Button>
						</div>
					</div>

					<div className='col-md-7 d-flex flex-column justify-content-center' style={{ marginLeft: '80px' }}>
						<h5 className='text-start'><b>Software developer & Master student at UIUC</b></h5>
						<p className='text-start fs-6'>
							<br />
							I am Yu-Ting Lin, also known as NICK.
							I am looking for an software engineering internship in 2025,
							and I developed this portfolio website using React.js, Node.js, and Bootstrap.
							<br />
							<br />Thank you for visiting and nice to meet you!
						</p>
					</div>
				</Container>

				<h2 style={{ marginTop: '10px' }}><b>Education</b></h2>
				<Container className="my-2 bg-dark text-white" style={{ width: '1000px', height: '350px' }}>
					<div className='col-md-10 d-flex flex-column justify-content-center'>
						<h5><b>University of Illinois Urbana-Champaign(UIUC)</b></h5>
						<h6 style={{ marginTop: '18px' }}><b>Master of Computer Science</b></h6>
						<h6>Illinois, USA</h6>
						<h6>May 2024 - Expected December 2025</h6>
						<ul className='text-start fs-6' style={{ marginTop: '30px' }}>
							<li>Summer 2024:
								<span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px' }}>Data Visualization</span>
								<span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px' }}>Data Cleaning</span>
							</li>
							<li>Fall 2024:
								<span className='badge bg-secondary d-inline-block' style={{ marginLeft: '5px' }}>Interactivate Computer Graphics</span>
								<span className='badge bg-secondary d-inline-block' style={{ marginLeft: '5px' }}>Software Engineering</span>
							</li>
						</ul>
						<ul className='text-start fs-6'>
							- Overall GPA: 4.0/4.0
						</ul>
					</div>
				</Container>

				<Container className="my-2 bg-dark text-white" style={{ width: '1000px', height: '400px' }}>
					<div className='col-md-10 d-flex flex-column justify-content-center' style={{ marginTop: '20px' }}>
						<h5><b>National Taiwan Normal University,</b></h5>
						<h5><b>National Taipei University of Technology</b></h5>
						<h6 style={{ marginTop: '18px' }}><b>CS-Related Courses</b></h6>
						<h6>Taipei, Taiwan</h6>
						<h6>February 2023 - July 2023</h6>
						<ul className='text-start fs-6' style={{ marginTop: '30px' }}>
							<li>Courses:
								<span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px' }}>Algorithms</span>
								<span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px' }}>Data Structure</span>
								<span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px' }}>Object-oriented Programming</span>
								<span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px' }}>Computer Organization</span>
								<span className="badge bg-secondary d-inline-block" style={{ marginLeft: '82px' }}>Probability and Stastics</span>
							</li>
						</ul>
						<ul className='text-start fs-6'>
							<li>Achieved a top score of 99% in the OOP class</li>
						</ul>
						<ul className='text-start fs-6'>
							- Overall GPA: 4.0/4.0
						</ul>
					</div>
				</Container>


				<Container className="my-2 bg-dark text-white" style={{ width: '1000px', height: '400px' }}>
					<div className='col-md-10 d-flex flex-column justify-content-center'>
						<h5><b>Oita University</b></h5>
						<h6 style={{ marginTop: '18px' }}><b>Bachelor of Engineering in Architecture and Mechatronics</b></h6>
						<h6>Oita, Japan</h6>
						<h6>April 2016 - March 2020</h6>
						<ul className='text-start fs-6' style={{ marginTop: '30px' }}>
							<li>Analyzed the approaches to regional disaster prevention in the symposium</li>
							<li style={{ marginTop: '5px' }}>Utilized LEGO® Blocks to do programming learning and disaster education </li>
							<li style={{ marginTop: '5px' }}>Held a disaster reduction and preparedness workshop / camp</li>
						</ul>
						<ul className='text-start fs-6' style={{ marginTop: '8px' }}>
							- Completed JABEE accredited engineering program with <b>dual 3.5-year Scholarships</b>
						</ul>
					</div>
				</Container>

			</header>
			<Footer />
		</div>
	);
}

export default App;
