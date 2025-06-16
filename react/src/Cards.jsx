import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  CardGroup,
  Button
} from 'reactstrap';

function Cards() {
  return (
    <CardGroup>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://montescojeans.com.ar/wp-content/uploads/cual-es-la-vestimenta-de-la-danza-morenada.webp"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Cursos de Morenada</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Incluye
          </CardSubtitle>
          <CardText>
            2 horas diarias de ensayo durante 3 meses y al finalizar, una presentación especial.
          </CardText>
          <Button>Me interesa</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg
          alt="Card image cap"
          src="https://i.pinimg.com/736x/64/5b/d4/645bd420ca3e75393afe12cfa46aeb88.jpg"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Cursos de Caporales</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Incluye
          </CardSubtitle>
          <CardText>
            2 horas diarias de ensayo durante 3 meses y al finalizar, una presentación especial.
          </CardText>
          <Button>Me interesa</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg
          alt="Card image cap"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtoMP7lC_z-7b0M0skk0tcrNKy7Y9tZX8xLkXLEVL--Q0O6dLdhjDxmEJrqc51dkg_S4&usqp=CAU"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Cursos de Salay</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Incluye: 
          </CardSubtitle>
          <CardText>
            2 horas diarias de ensayo durante 3 meses y al finalizar, una presentación especial.
          </CardText>
          <Button>Me interesa</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
}

export default Cards;
