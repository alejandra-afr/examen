import 'bootstrap/dist/css/bootstrap.min.css';
import './titulo.css';
import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

function Acordeon(props) {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            <Accordion flush open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1"><h3>Caporales</h3></AccordionHeader>
                    <AccordionBody accordionId="1" className="caporales">
                        <strong>En Cochabamba. </strong>
                        Los Caporales es una danza folklórica boliviana, surgida a fines de la década de 1960 en La Paz, Bolivia. Se caracteriza por su ritmo enérgico y acrobático, con movimientos sensuales y saltos, tanto por parte de los hombres como de las mujeres, aunque con énfasis diferentes. La danza es una representación del personaje del caporal, un capataz mulato en la época colonial, que supervisaba a los trabajadores en las haciendas de los Yungas.
                        <img src="https://www.ibolivia.org/wp-content/uploads/2019/07/danza-los-caporales.jpg" alt="" className="imagen"  />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2"><h3>Tinku</h3></AccordionHeader>
                    <AccordionBody accordionId="2">
                        <strong>En Potosí. </strong>
                        El Tinku es una palabra quechua que significa "encuentro". Es también una danza y un ritual folklórico boliviano, particularmente practicado en las regiones de Potosí y Oruro. En la danza Tinku, el "encuentro" se manifiesta a través de movimientos enérgicos y coreografías que simulan peleas rituales, ofreciendo una representación de la fuerza y la vitalidad de las comunidades andinas. 
                        <img src="https://vision360-s3.cdn.net.ar/s3i233/2025/02/vision360/images/01/54/98/1549883_c8692d2c02a21ec565ad8b333c76cb000db92c07aea22acde7d7e62eb5e734db/md.webp" alt="" className="imagen"  />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3"><h3>Suri Sicuri</h3></AccordionHeader>
                    <AccordionBody accordionId="3">
                        <strong>En Oruro. </strong>
                        Suri Sicuri, también conocido como Suri Sikuri o Suri Sikuris, es una danza y género musical del altiplano andino. Representa la caza del ñandú (suri) y se caracteriza por los movimientos de los bailarines que imitan los movimientos de esta ave, acompañados de música interpretada con sikus (flautas de pan) y bombos, con cantos a capela. 
                        <img src="https://www.noticiasfides.com/images/news/2025/02/u-grupo-de-danza-estilizada-suri-sicuri-de-oruro-fot_1740786451.jpg" alt="" />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="4"><h3>Macheteros</h3></AccordionHeader>
                    <AccordionBody accordionId="4">
                        <strong>En Beni. </strong>
                        "Los Macheteros" se refiere principalmente a una danza guerrera tradicional de la región de Moxos en Bolivia, específicamente asociada con la fiesta de San Ignacio de Loyola en San Ignacio de Moxos. También existió un grupo guerrillero puertorriqueño que adoptó este nombre en el pasado.   
                        <img src="https://www.ibolivia.org/wp-content/uploads/2018/09/danza-los-macheteros.jpg" alt="" />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="5"><h3>Morenada</h3></AccordionHeader>
                    <AccordionBody accordionId="5">
                        <strong>En La Paz. </strong>
                        La Morenada es una danza folklórica boliviana que se originó en las zonas mineras andinas durante la época colonial, representando el traslado de esclavos negros a las minas de Potosí. Se caracteriza por sus elaborados trajes, máscaras que imitan los rasgos de personas afrodescendientes, y el sonido de las matracas que simbolizan las cadenas.  
                        <img src="https://www.lostiempos.com/sites/default/files/media_imagen/2022/9/7/morenada_7_si_valeeeeee.jpg" alt="" />
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Acordeon;