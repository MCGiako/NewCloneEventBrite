import Card from 'react-bootstrap/Card'
import React from 'react';


function ImageAndTextExample() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="https://www.aarp.org/content/dam/aarp/entertainment/music/2019/11/1140x655-hip-hop-banner-esp.jpg" />
        <Card.Body>
          <Card.Text>
            <h4> Esta página está dedicada a nuestra hermosa cultura Hiphop, acá podrán encontrar reseñas de discos de Rap
            emblemáticos de diferentes países, documentos y textos de los diferentes elementos artísticos del Hiphop,
            documentos de culto del Hiphop que abarcan su ideología, estilo de vida, cultura, expresión artística
            y movimiento social.</h4>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </> 
  );  
    } 

export default ImageAndTextExample