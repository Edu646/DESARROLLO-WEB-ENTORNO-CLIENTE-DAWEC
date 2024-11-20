window.onload = () => {
    const svg = document.getElementById('mySvg');
    const numBolas = 1;
    const bolas = [];
    let scoreLeft = 0; // Puntuación del jugador izquierdo
    let scoreRight = 0; // Puntuación del jugador derecho

    // Crear marcador en pantalla
    const scoreDisplay = document.createElement('div');
    scoreDisplay.style.position = 'absolute';
    scoreDisplay.style.top = '10px';
    scoreDisplay.style.left = '50%';
    scoreDisplay.style.transform = 'translateX(-50%)';
    scoreDisplay.style.fontSize = '24px';
    scoreDisplay.style.color = 'white';
    document.body.appendChild(scoreDisplay);
    scoreDisplay.textContent = `Jugador Izquierdo: ${scoreLeft} - Jugador Derecho: ${scoreRight}`;

    class Pelota {
        constructor() {
            for (let i = 0; i < numBolas; i++) {
                const bola = {
                    posX: 750, // Centro de la pantalla
                    posY: 250,
                    radio: 10,
                    velX: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 5 + 3), // Velocidad inicial
                    velY: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 5 + 3),
                    elemento: null
                };

                const circulo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circulo.setAttribute('cx', bola.posX);
                circulo.setAttribute('cy', bola.posY);
                circulo.setAttribute('r', bola.radio);
                circulo.setAttribute('fill', `hsl(${Math.random() * 360}, 70%, 50%)`);
                svg.appendChild(circulo);
                bola.elemento = circulo;

                bolas.push(bola);
            }
        }
    }

    class Rectangulo {
        constructor(containerId, x, y, width, height, fill) {
            const svg = document.getElementById(containerId);
            this.rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            this.rect.setAttribute('x', x);
            this.rect.setAttribute('y', y);
            this.rect.setAttribute('width', width);
            this.rect.setAttribute('height', height);
            this.rect.setAttribute('fill', fill);
            svg.appendChild(this.rect);
        }

        mover(dy) {
            const currentY = parseFloat(this.rect.getAttribute('y'));
            const newY = currentY + dy;

            if (newY >= 0 && newY + parseFloat(this.rect.getAttribute('height')) <= 500) {
                this.rect.setAttribute('y', newY);
            }
        }

        colisionaCon(bola) {
            const rectX = parseFloat(this.rect.getAttribute('x'));
            const rectY = parseFloat(this.rect.getAttribute('y'));
            const rectWidth = parseFloat(this.rect.getAttribute('width'));
            const rectHeight = parseFloat(this.rect.getAttribute('height'));

            return (
                bola.posX - bola.radio <= rectX + rectWidth &&
                bola.posX + bola.radio >= rectX &&
                bola.posY + bola.radio >= rectY &&
                bola.posY - bola.radio <= rectY + rectHeight
            );
        }

        rebote(bola) {
            // Invertir la dirección X
            bola.velX *= -1;

            // Ajustar la velocidad Y dependiendo de dónde golpee el rectángulo
            const rectY = parseFloat(this.rect.getAttribute('y'));
            const rectHeight = parseFloat(this.rect.getAttribute('height'));
            const impacto = (bola.posY - rectY) / rectHeight; // Valor entre 0 y 1
            bola.velY = (impacto - 0.5) * 10; // Ajustar la velocidad Y según la posición de impacto
        }
    }

    const rect1 = new Rectangulo('mySvg', 0, 200, 25, 75, 'red'); // Jugador izquierdo
    const rect2 = new Rectangulo('mySvg', 1475, 200, 25, 75, 'blue'); // Jugador derecho

    const pelota = new Pelota();

    function moverBolas() {
        for (let bola of bolas) {
            bola.posX += bola.velX;
            bola.posY += bola.velY;

            // Rebote contra las paredes superior e inferior
            if (bola.posY + bola.radio >= 500 || bola.posY - bola.radio <= 0) {
                bola.velY *= -1;
            }

            // Rebote contra los rectángulos
            if (rect1.colisionaCon(bola)) {
                rect1.rebote(bola);
            }
            if (rect2.colisionaCon(bola)) {
                rect2.rebote(bola);
            }

            // Paredes laterales y puntuación
            if (bola.posX + bola.radio >= 1500) {
                scoreLeft++; // Punto para el jugador izquierdo
                resetBola(bola);
            } else if (bola.posX - bola.radio <= 0) {
                scoreRight++; // Punto para el jugador derecho
                resetBola(bola);
            }

            scoreDisplay.textContent = `Jugador Izquierdo: ${scoreLeft} - Jugador Derecho: ${scoreRight}`;
            bola.elemento.setAttribute('cx', bola.posX);
            bola.elemento.setAttribute('cy', bola.posY);
        }
    }

    function resetBola(bola) {
        bola.posX = 750; // Reinicia al centro
        bola.posY = 250;
        bola.velX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 5 + 3);
        bola.velY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 5 + 3);
    }

    function animar() {
        moverBolas();
        requestAnimationFrame(animar);
    }

    animar();

    // Control del teclado
    window.addEventListener('keydown', (e) => {
        const step = 20; // Cantidad de píxeles para mover

        switch (e.key) {
            case 'w': // Jugador izquierdo hacia arriba
                rect1.mover(-step);
                break;
            case 's': // Jugador izquierdo hacia abajo
                rect1.mover(step);
                break;
            case 'ArrowUp': // Jugador derecho hacia arriba
                rect2.mover(-step);
                break;
            case 'ArrowDown': // Jugador derecho hacia abajo
                rect2.mover(step);
                break;
        }
    });
};
