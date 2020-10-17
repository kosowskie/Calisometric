import React from 'react'
import '../../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import './Styles.css';
import Card from 'react-bootstrap/Card'
import {  MDBView, MDBMask } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function AboutME() {
    return (
        <>
            <div>
                <h1 className='aboutME'>O mnie</h1>
            </div>
            <div>
            <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col>
                <MDBView hover zoom>
                    <Image className="img-fluid z-depth-1" src="images/img-topless.jpg" width="100%" height="auto" align="right" rounded />

                    <MDBMask className="flex-center" overlay="red-strong">
                        <p className="white-text">19 sierpnia 2020</p>
                    </MDBMask>
                </MDBView>        
                </Col>
                <Col>
                <p>Cześć, <br/>
                    mam na imię Emanuel. <br/>
                    Kalistenika jest aktualnie moją największą pasją. 
                    Swoje pierwsze przygody na drążku zacząłem już właściwie dobre parę 
                    lat temu. Natomiast wszystko było nieregularne i mało efektywne. 
                    Ponad rok temu (wrzesień 2019r.) postanowiłem bardziej się zaangażować 
                    się w ten sport i po dziś dzień daję z siebie wszystko. Ćwiczę 
                    3-4 razy w tygodniu, a w wolnym czasie uzupełniam swoją podstawową 
                    wiedzę o atletyce czy treningach siłowych. Przez 4 miesiące 
                    uczęszczałem na uczelnianą sekcję kalisteniki prowadzoną przez 
                    naszego trenera Huberta i to jemu również wiele zawdzięczam.
                </p>
                </Col>
            </Row><br/>

            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
                <Col sm>
                    <Card style={{ width: '21rem' }}>
                    <Card.Img class="w3-card-4" variant="top" src="images/img-nowicjusz-ja.jpg" height="450px"/>
                    <Card.Body>
                        <Card.Title>Nowicjusz</Card.Title>
                        <Card.Text>
                            Tutaj zaczęła się moja przygoda. 
                            Głównie trenowałem w swojej piwnicy, ewentualnie jeżeli 
                            pogoda na to sprzyjała wychodziłem na drążki. Mój trening o
                            pierał się przede wszystkim na podciągnięciach, a także na 
                            dipach i pompkach. Dodatkowo na koniec treningu wszystko 
                            uzupełniałem deskami czy wznosami kolan na drążku.
                        </Card.Text>
                    </Card.Body>
                    </Card><br/>
                </Col>
                <Col sm>
                    <Card style={{ width: '21rem' }}>
                        <Card.Img variant="top" src="images/img-handstand-ja.jpg" height="450px"/>
                        <Card.Body>
                            <Card.Title>Początkujący</Card.Title>
                            <Card.Text>
                                Zacząłem uczyć się pierwszych skilli. Głównie był to 
                                muscle-up oraz pierwsze próby stania na rękach. Jednak
                                 przez to, że raczej nie były to często perfekcyjnie
                                 wykonywane figury - nie porzuciłem bazy i dalej się 
                                 wzmacniałem.
                            </Card.Text>
                        </Card.Body>
                        </Card><br/>
                </Col>
                <Col sm>
                    <Card style={{ width: '21rem' }}>
                    <Card.Img variant="top" src="images/img-humanflag-ja.jpg" height="450px"/>
                    <Card.Body>
                        <Card.Title>Średnio-zaawansowany</Card.Title>
                        <Card.Text>
                            Figury idą coraz lepiej. Powoli opanowuje handstand, 
                            backlever czy nawet i flagę. Mam opanowany muscle-up czy 
                            dragon-flag. Porzuciłem bazę w celu skupienia się tylko na 
                            progresie w figurach i skillach. Oczywiście to jeszcze nie 
                            koniec ;) ...
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row><br/>
            </Container>
            </div>
        </>
    )
}

export default AboutME
