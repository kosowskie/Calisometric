import React from 'react'
import './MainSection.css'
import Typical from 'react-typical'
import { MDBView,  MDBMask, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact'
import { Link } from 'react-router-dom';

class MainSection extends React.Component {
    render(){
    return (
        <div>
        <div className='main-container'>
            <video src="/videos/videoplayback-1.mp4" autoPlay loop muted />
            <h1>Calisometric</h1>
            <Typical
                steps={['Calisthenic', 1000, 'Street Workout', 1000, 'Gymnastic', 1000, 'Street Lifting', 1000]}
                loop={Infinity}
                wrapper="p"
            />
        </div>
            <MDBCard className="my-5 px-5 pb-5">
                <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Na stronie
                    </h2>
                    <MDBRow>
                    <MDBCol lg="5" xl="4">
                        <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                        <img
                            className="img-fluid"
                            src="images/img-about-me.jpg"
                            alt=""
                        />
                        <Link to="/o-mnie">
                            <MDBMask overlay="white-slight" />
                        </Link>
                        </MDBView>
                    </MDBCol>
                    <MDBCol lg="7" xl="8">
                        <h3 className="font-weight-bold mb-3 p-0">
                        <strong>O mnie</strong>
                        </h3>
                        <p className="dark-grey-text">
                            Cześć,
                            mam na imię Emanuel.
                            Kalistenika jest aktualnie moją największą pasją. 
                            Swoje pierwsze przygody na drążku zacząłem już właściwie 
                            dobre parę lat temu. Natomiast wszystko było nieregularne i 
                            mało efektywne. Ponad rok (...)
                        </p>
                        <MDBBtn color="primary" size="md" href="./o-mnie">
                            Czytaj dalej
                        </MDBBtn>
                    </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                    <MDBRow>
                    <MDBCol lg="5" xl="4">
                        <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                        <img
                            className="img-fluid"
                            src="images/img-skills.jpg"
                            alt=""
                        />
                        <Link to="/skills">
                            <MDBMask overlay="white-slight" />
                        </Link>
                        </MDBView>
                    </MDBCol>
                    <MDBCol lg="7" xl="8">
                        <h3 className="font-weight-bold mb-3 p-0">
                        <strong>Skills</strong>
                        </h3>
                        <p className="dark-grey-text">
                            Poznaj progresje i tajniki nauki kalistenicznych 
                            figur i skill'ów takich jak: muscle up (wejście siłowe), 
                            handstand (stanie na rękach), backlever (waga tyłem), 
                            human-flag (ludzka flaga) czy dragon-flag (smocza flaga).
                        </p>
                        <MDBBtn color="primary" size="md" href="./skills" >
                            Zobacz
                        </MDBBtn>
                    </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                </MDBCard>
        </div>
    )
    }
}

export default MainSection
