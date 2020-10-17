import React from 'react'
import Image from 'react-bootstrap/Image';
import './Styles.css';
import PDFViewer from './PDFViewer'

function CV() {
    return (
        <>
        <div>
            <Image className="img-cv" src="images/CV E.Kosowski.jpg"/><br/><br/>
            <a className="download-cv" href='documents/CV E.Kosowski.pdf' download>Pobierz pdf</a>
            <button onClick={PDFViewer}>Zobacz PDF</button>
        </div>
        </>
        
    )
}

export default CV
