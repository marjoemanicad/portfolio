import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaReact,FaBootstrap,FaHtml5,FaCss3Alt } from 'react-icons/fa';
import { SiDjango,SiPython,SiSqlite } from 'react-icons/si';
import { AnimateKeyframes,Animate } from "react-simple-animate";
import { TbBrandJavascript } from 'react-icons/tb';
function Home() {
  return (
    <div>
      <Container>
        <div>
        <Row>
          <Col>
            <img
                  src={require('./icons/thumbnail.png')}
                  alt=''
                  style={{ width: '250px', height: '250px' }}
                  className='rounded-circle displayed'
            />
          </Col>
          <Col>
          <Row>
            <h1>Hi! I am Marjoe.</h1>
          </Row>
          <Row>
            <h3>I am a Full Stack Web Developer</h3>
          </Row>
          <Row>
            <h5> Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
                orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
                eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
                Interdum praesent ut penatibus fames eros ad consectetur sed.</h5>
          </Row>
        </Col>
        </Row>
        
        <div className='container forskills' >

        
        <Row className='skills' >
          <h1>
            Skills
          </h1>
          <Col>
          <h2>Frontend</h2>
          <div className='d-flex justify-content-center'>
          <ul type="circle">  
          

            <li style={{height: '65px'}} 
            className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FaReact className="App-logo" style={{width: '40px', height: '40px'}} />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">React</p>
                    <div className="progress" style={{height: '20px',width: '200px'}}>
                      <div className="progress-bar-colored" role="progressbar" style={{width: '60%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
            </li>
            <li style={{height: '65px'}} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <AnimateKeyframes
                      play
                      duration={10}
                      keyframes={["transform: translate(-50px)", "transform: translate(0px)", "transform: translate(-50px)"]}
                      iterationCount="infinite"
                    >
                      <FaBootstrap style={{width: '40px', height: '40px'}} />
                    </AnimateKeyframes>
                  
                  
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Bootstrap</p>
                    <div className="progress" style={{height: '20px',width: '200px'}}>
                      <div className="progress-bar-colored" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
            </li>
            <li style={{height: '65px'}} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <AnimateKeyframes
                    play
                    duration={3}
                    keyframes={["opacity: 0", "opacity: 1","opacity: 0"]}
                    iterationCount="infinite" >
                    <FaHtml5  style={{width: '40px', height: '40px'}}/>
                  </AnimateKeyframes>
                  
                  <div className="ms-3">
                    <p className="fw-bold mb-1">HTML</p>
                    <div className="progress" style={{height: '20px',width: '200px'}}>
                      <div className="progress-bar-colored" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
            </li> 
            <li style={{height: '65px'}} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                <AnimateKeyframes
                      play
                      duration={10}
                      keyframes={["transform: rotateY(180deg)", "transform: rotateY(0deg)", "transform: rotateY(180deg)"]}
                      iterationCount="infinite"
                    >
                      <FaCss3Alt className="App-logo" style={{width: '40px', height: '40px'}}/>
                    </AnimateKeyframes>
                  
                  <div className="ms-3">
                    <p className="fw-bold mb-1">CSS</p>
                    <div className="progress" style={{height: '20px',width: '200px'}}>
                      <div className="progress-bar-colored" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
            </li>  
            <li style={{height: '65px'}} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                <AnimateKeyframes
                      play
                      duration={10}
                      keyframes={["transform: rotate(180deg)", "transform: rotate(0deg)", "transform: rotate(180deg)"]}
                      iterationCount="infinite"
                    >
                      <TbBrandJavascript className="App-logo" style={{width: '40px', height: '40px'}}/>
                    </AnimateKeyframes>
                  
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Javascript</p>
                    <div className="progress" style={{height: '20px',width: '200px'}}>
                      <div className="progress-bar-colored" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
            </li> 
          </ul>  
          </div>
          
          </Col>
          <Col>
          <h2>Backend</h2>
          <div className='d-flex justify-content-center'>
          <ul type="circle">  
          

            <li style={{height: '65px'}} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                <SiDjango style={{width: '40px', height: '40px'}}/>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Django</p>
                    <div className="progress" style={{height: '20px',width: '200px'}}>
                      <div className="progress-bar-colored" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
            </li>
            <li style={{height: '65px'}} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  
                  <SiPython style={{width: '40px', height: '40px'}}/>
                 
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Python</p>
                    <div className="progress" style={{height: '20px',width: '200px'}}>
                      <div className="progress-bar-colored" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
            </li>
            <li style={{height: '65px'}} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  
                  <SiSqlite style={{width: '40px', height: '40px'}}/>
                 
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Sqlite</p>
                    <div className="progress" style={{height: '20px',width: '200px'}}>
                      <div className="progress-bar-colored" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
            </li>
          </ul>  
          </div>
          </Col>
        </Row>
        </div>
        </div>
        
      </Container>
    </div>
  )
}

export default Home