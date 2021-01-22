CREATE TABLE proyectos(
    id INTEGER AUTO_INCREMENT,
    nombre VARCHAR (30) NOT NULL,
    descripcion TEXT  NOT NULL,
    link_github VARCHAR (150),
    link_proyecto VARCHAR (150),
    PRIMARY KEY(id)
);

ALTER TABLE proyectos 
ADD imagen VARCHAR(50);


INSERT INTO proyectos(nombre, descripcion, link_github, link_proyecto) VALUE("Links Favoritos", "Proyecto realizado con framework express, donde utilizo el motor de plantillas hbs, un CRUD en una base de datos MySql y con registro de usuarios. La aplicación permite guardar tus links agregando una descripción, los mismos se pueden modificar y borrar si lo desea.", "https://github.com/murtagh95/proyecto_liks", 'https://proyecto-links.herokuapp.com/');

UPDATE proyectos 
SET imagen = 'links.png'
WHERE id = 1;

INSERT INTO proyectos VALUE
(NULL,
"Guia Hoteles",
"Proyecto realizado con el curso de <a href='https://www.coursera.org/account/accomplishments/certificate/QEQ2QMGDVDEX'> bootstrap </a>en la plataforma de coursera donde se ven temas como ventanas modal, tooltips,breadcrumb, carousel, collapse, popovers, entre otros.",
"https://github.com/murtagh95/guia-hoteles",
"https://guia-hoteles.netlify.app/",
"guia-hoteles.png");

INSERT INTO proyectos VALUE
(NULL,
"Club Pacifico",
"Proyecto creo con tecnologias basicas de HTML, CSS, JS Y Bootstrap. Creado para ser entregado como final del curso brindado por <a href='https://civet.com.ar/' target='_blank'>CIVET </a> sobre HTTML y CSS",
"https://github.com/murtagh95/Club_pacifico",
"https://club-pacifico.netlify.app/",
"club-pacifico.png");

INSERT INTO proyectos VALUE
(NULL,
"Calculadora",
"Primer proyecto realizado con JavaScript, no utilizo ES6. La calculadora realiza las operaciones básicas, pudiéndose combinar de diferentes maneras. También toma los valores ingresados por teclado.",
"https://github.com/murtagh95/Calculadora_Maestra",
"https://calculadora-maestra.netlify.app/",
"calculadora.png");

INSERT INTO proyectos VALUE
(NULL,
"Bingooo",
"Proyecto realizado para un familiar con la intención de realizar bingos a través de Facebook. La página crea de forma automática filas y columnas dependiendo de los valores ingresados. Los números no se repiten y tiene un historial de los números salientes.",
"https://github.com/murtagh95/Bingooo",
"https://bingooo.netlify.app/",
"bingooo.png");


