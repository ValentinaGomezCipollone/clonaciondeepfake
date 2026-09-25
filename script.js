document.addEventListener('DOMContentLoaded', () => {

    // NAVEGACIÓN PANTALLA 1: Botón "Empezar"
    const btnEmpezar = document.getElementById('btn-empezar');
    if (btnEmpezar) {
        btnEmpezar.addEventListener('click', () => {
            window.location.href = 'pantalla2.html';
        });
    }

    // NAVEGACIÓN PANTALLA 2: Botón "Continuar"
    const btnContinuar = document.getElementById('btn-continuar');
    if (btnContinuar) {
        btnContinuar.addEventListener('click', () => {
            window.location.href = 'pantalla3.html';
        });
    }

    // PANTALLA 3: REPRODUCTORES DE AUDIO DE LA LISTA
    if (window.location.pathname.includes('pantalla3.html')) {
        const pointItems = document.querySelectorAll('.point-item');

        pointItems.forEach(item => {
            const btnPlay = item.querySelector('.btn-play-audio');
            const audioElement = item.querySelector('audio');
            const iconPlay = item.querySelector('.play-icon');
            const iconPause = item.querySelector('.pause-icon');

            if (btnPlay && audioElement) {
                btnPlay.addEventListener('click', () => {
                    // Pausar los demás audios que se estén reproduciendo
                    document.querySelectorAll('.point-item audio').forEach(otherAudio => {
                        if (otherAudio !== audioElement) {
                            otherAudio.pause();
                            otherAudio.currentTime = 0;
                            const otherItem = otherAudio.closest('.point-item');
                            if (otherItem) {
                                const pPlay = otherItem.querySelector('.play-icon');
                                const pPause = otherItem.querySelector('.pause-icon');
                                if (pPlay && pPause) {
                                    pPlay.style.display = 'block';
                                    pPause.style.display = 'none';
                                }
                            }
                        }
                    });

                    // Reproducir o pausar el audio actual
                    if (audioElement.paused) {
                        audioElement.play().then(() => {
                            iconPlay.style.display = 'none';
                            iconPause.style.display = 'block';
                        }).catch(err => console.log('Error al reproducir audio:', err));
                    } else {
                        audioElement.pause();
                        iconPlay.style.display = 'block';
                        iconPause.style.display = 'none';
                    }
                });

                // Al finalizar la reproducción, volver al ícono de play
                audioElement.addEventListener('ended', () => {
                    iconPlay.style.display = 'block';
                    iconPause.style.display = 'none';
                });
            }
        });
    }

    // NAVEGACIÓN PANTALLA 3: Botón "Finalizar" -> Lleva a Pantalla 4
    const btnFinalizar = document.getElementById('btn-finalizar');
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', () => {
            window.location.href = 'pantalla4.html';
        });
    }

    // NAVEGACIÓN PANTALLA 4: Botón "Jugar"
    const btnPantalla4 = document.getElementById('btn-pantalla4');
    if (btnPantalla4) {
        btnPantalla4.addEventListener('click', () => {
            window.location.href = 'pantalla5.html';
        });
    }

    // PANTALLA 5: CONTROL DEL REPRODUCTOR DE AUDIO
    const btnPlayP5 = document.getElementById('btn-play-p5');
    const audioP5 = document.getElementById('audio-p5');
    const iconPlayP5 = document.getElementById('icon-play-p5');
    const iconPauseP5 = document.getElementById('icon-pause-p5');

    if (btnPlayP5 && audioP5) {
        btnPlayP5.addEventListener('click', () => {
            if (audioP5.paused) {
                audioP5.play().then(() => {
                    iconPlayP5.style.display = 'none';
                    iconPauseP5.style.display = 'block';
                }).catch(err => console.log('No se pudo reproducir el audio:', err));
            } else {
                audioP5.pause();
                iconPlayP5.style.display = 'block';
                iconPauseP5.style.display = 'none';
            }
        });

        audioP5.addEventListener('ended', () => {
            iconPlayP5.style.display = 'block';
            iconPauseP5.style.display = 'none';
        });
    }

    // PANTALLA 5: REDIRECCIÓN AL ELEGIR OPCIÓN
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.addEventListener('click', () => {
            const selectedOption = card.getAttribute('data-option');
            if (audioP5) audioP5.pause();

            if (selectedOption === 'A') {
                window.location.href = 'incorrecto.html';
            } else if (selectedOption === 'B') {
                window.location.href = 'correcto.html';
            }
        });
    });

    // PANTALLAS DE RESULTADO (CORRECTO / INCORRECTO): Ir a Pantalla 6
    const btnOpinare = document.getElementById('btn-opinare');
    if (btnOpinare) {
        btnOpinare.addEventListener('click', () => {
            window.location.href = 'pantalla6.html';
        });
    }

    // PANTALLA 6: LÓGICA DE ARRASTRE CON EL MOUSE (DRAG & SCROLL)
    const slider = document.getElementById('carousel-scroll');
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5;
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    // PANTALLA 6: Botón "Finalizar" -> Lleva a Pantalla 7
    const btnFinalizarTodo = document.getElementById('btn-finalizar-todo');
    if (btnFinalizarTodo) {
        btnFinalizarTodo.addEventListener('click', () => {
            window.location.href = 'pantalla7.html';
        });
    }

    // PANTALLA 7: CLIC EN CADA ARTISTA
    const artistNodes = document.querySelectorAll('.artist-node');
    artistNodes.forEach(node => {
        node.addEventListener('click', () => {
            const artist = node.getAttribute('data-artist');
            console.log('Artista seleccionado:', artist);
        });
    });

    // PANTALLA 7: Redirección del botón "Ponete a prueba"
    const btnTest = document.getElementById('btn-test');
    if (btnTest) {
        btnTest.addEventListener('click', (e) => {
            window.location.href = 'pantalla8.html';
        });
    }

    // PANTALLA 7: Redirección desde SZA
    const nodeSza = document.querySelector('.node-sza');
    if (nodeSza) {
        nodeSza.addEventListener('click', () => {
            window.location.href = 'declaracion_sza.html';
        });
    }

    // PANTALLA DECLARACIÓN SZA: Carrusel de Citas
    const quoteText = document.getElementById('quote-text');
    const prevQuoteBtn = document.getElementById('prev-quote');
    const nextQuoteBtn = document.getElementById('next-quote');

    const szaQuotes = [
        '"¿Por qué estoy escuchando covers de Olivia Dean hechos con IA cuando Olivia Dean acaba de aparecer?"',
        '"Siento que estoy en guerra por culpa de la IA"'
    ];

    let currentQuoteIndex = 0;

    if (quoteText && prevQuoteBtn && nextQuoteBtn) {
        const updateQuote = (index) => {
            quoteText.style.opacity = '0';
            setTimeout(() => {
                currentQuoteIndex = index;
                quoteText.textContent = szaQuotes[currentQuoteIndex];
                quoteText.style.opacity = '1';
            }, 200);
        };

        nextQuoteBtn.addEventListener('click', () => {
            const nextIdx = (currentQuoteIndex + 1) % szaQuotes.length;
            updateQuote(nextIdx);
        });

        prevQuoteBtn.addEventListener('click', () => {
            const prevIdx = (currentQuoteIndex - 1 + szaQuotes.length) % szaQuotes.length;
            updateQuote(prevIdx);
        });
    }

    // PANTALLA 7: Redirección al hacer clic en Billie Eilish
    const nodeBillie = document.querySelector('.node-billie');
    if (nodeBillie) {
        nodeBillie.addEventListener('click', () => {
            window.location.href = 'declaracion_billie.html';
        });
    }

    // PANTALLA DECLARACIÓN BILLIE EILISH: Carrusel de Citas
    const billieQuotes = [
        '"Este ataque contra la creatividad humana debe detenerse"',
        '"Fue una de los 200 artistas que firmaron la carta abierta de la Artist Rights Alliance para regular el uso de esta tecnología"'
    ];

    let currentBillieQuoteIndex = 0;

    if (window.location.pathname.includes('declaracion_billie.html')) {
        const quoteTextBillie = document.getElementById('quote-text');
        const prevBtnBillie = document.getElementById('prev-quote');
        const nextBtnBillie = document.getElementById('next-quote');

        if (quoteTextBillie && prevBtnBillie && nextBtnBillie) {
            const updateBillieQuote = (index) => {
                quoteTextBillie.style.opacity = '0';
                setTimeout(() => {
                    currentBillieQuoteIndex = index;
                    quoteTextBillie.textContent = billieQuotes[currentBillieQuoteIndex];
                    quoteTextBillie.style.opacity = '1';
                }, 200);
            };

            nextBtnBillie.addEventListener('click', () => {
                const nextIdx = (currentBillieQuoteIndex + 1) % billieQuotes.length;
                updateBillieQuote(nextIdx);
            });

            prevBtnBillie.addEventListener('click', () => {
                const prevIdx = (currentBillieQuoteIndex - 1 + billieQuotes.length) % billieQuotes.length;
                updateBillieQuote(prevIdx);
            });
        }
    }

    // PANTALLA 7: Redirección al hacer clic en David Guetta
    const nodeGuetta = document.querySelector('.node-guetta');
    if (nodeGuetta) {
        nodeGuetta.addEventListener('click', () => {
            window.location.href = 'declaracion_guetta.html';
        });
    }

    // PANTALLA DECLARACIÓN DAVID GUETTA: Carrusel de Citas
    const guettaQuotes = [
        '"el futuro de la música está en la inteligencia artificial" "pero como herramienta"',
        '"No existiría el rock and roll sin la guitarra eléctrica. No existiría el acid house sin la Roland TB-303 o la TR-909"'
    ];

    let currentGuettaQuoteIndex = 0;

    if (window.location.pathname.includes('declaracion_guetta.html')) {
        const quoteTextGuetta = document.getElementById('quote-text');
        const prevBtnGuetta = document.getElementById('prev-quote');
        const nextBtnGuetta = document.getElementById('next-quote');

        if (quoteTextGuetta && prevBtnGuetta && nextBtnGuetta) {
            const updateGuettaQuote = (index) => {
                quoteTextGuetta.style.opacity = '0';
                setTimeout(() => {
                    currentGuettaQuoteIndex = index;
                    quoteTextGuetta.textContent = guettaQuotes[currentGuettaQuoteIndex];
                    quoteTextGuetta.style.opacity = '1';
                }, 200);
            };

            nextBtnGuetta.addEventListener('click', () => {
                const nextIdx = (currentGuettaQuoteIndex + 1) % guettaQuotes.length;
                updateGuettaQuote(nextIdx);
            });

            prevBtnGuetta.addEventListener('click', () => {
                const prevIdx = (currentGuettaQuoteIndex - 1 + guettaQuotes.length) % guettaQuotes.length;
                updateGuettaQuote(prevIdx);
            });
        }
    }

    // PANTALLA 7: Redirección al hacer clic en Grimes
    const nodeGrimes = document.querySelector('.node-grimes');
    if (nodeGrimes) {
        nodeGrimes.addEventListener('click', () => {
            window.location.href = 'declaracion_grimes.html';
        });
    }

    // PANTALLA DECLARACIÓN GRIMES: Carrusel de Citas
    const grimesQuotes = [
        "Es más grande que Jesus",
        "La IA eventualmente podría reemplazar a los seres humanos"
    ];

    let currentGrimesQuoteIndex = 0;

    if (window.location.pathname.includes('declaracion_grimes.html')) {
        const quoteTextGrimes = document.getElementById('quote-text');
        const prevBtnGrimes = document.getElementById('prev-quote');
        const nextBtnGrimes = document.getElementById('next-quote');

        if (quoteTextGrimes && prevBtnGrimes && nextBtnGrimes) {
            const updateGrimesQuote = (index) => {
                quoteTextGrimes.style.opacity = '0';
                setTimeout(() => {
                    currentGrimesQuoteIndex = index;
                    quoteTextGrimes.textContent = `"${grimesQuotes[currentGrimesQuoteIndex]}"`;
                    quoteTextGrimes.style.opacity = '1';
                }, 200);
            };

            nextBtnGrimes.addEventListener('click', () => {
                const nextIdx = (currentGrimesQuoteIndex + 1) % grimesQuotes.length;
                updateGrimesQuote(nextIdx);
            });

            prevBtnGrimes.addEventListener('click', () => {
                const prevIdx = (currentGrimesQuoteIndex - 1 + grimesQuotes.length) % grimesQuotes.length;
                updateGrimesQuote(prevIdx);
            });
        }
    }

    // PANTALLA 7: Redirección al hacer clic en Ice Cube
    const nodeIceCube = document.querySelector('.node-icecube');
    if (nodeIceCube) {
        nodeIceCube.addEventListener('click', () => {
            window.location.href = 'declaracion_icecube.html';
        });
    }

    // PANTALLA DECLARACIÓN ICE CUBE: Carrusel de Citas
    const iceCubeQuotes = [
        "Creo que la IA es demoníaca",
        "Voy a demandar al que la haga y también a las plataformas que la reproduzcan"
    ];

    let currentIceCubeQuoteIndex = 0;

    if (window.location.pathname.includes('declaracion_icecube.html')) {
        const quoteTextIceCube = document.getElementById('quote-text');
        const prevBtnIceCube = document.getElementById('prev-quote');
        const nextBtnIceCube = document.getElementById('next-quote');

        if (quoteTextIceCube && prevBtnIceCube && nextBtnIceCube) {
            const updateIceCubeQuote = (index) => {
                quoteTextIceCube.style.opacity = '0';
                setTimeout(() => {
                    currentIceCubeQuoteIndex = index;
                    quoteTextIceCube.textContent = `"${iceCubeQuotes[currentIceCubeQuoteIndex]}"`;
                    quoteTextIceCube.style.opacity = '1';
                }, 200);
            };

            nextBtnIceCube.addEventListener('click', () => {
                const nextIdx = (currentIceCubeQuoteIndex + 1) % iceCubeQuotes.length;
                updateIceCubeQuote(nextIdx);
            });

            prevBtnIceCube.addEventListener('click', () => {
                const prevIdx = (currentIceCubeQuoteIndex - 1 + iceCubeQuotes.length) % iceCubeQuotes.length;
                updateIceCubeQuote(prevIdx);
            });
        }
    }

    // =========================================================
    // LÓGICA DEL QUIZ Y CONTADOR DE ACIERTOS (localStorage)
    // =========================================================

    // Reinicia el contador cada vez que entra a la Pregunta 1
    if (window.location.pathname.includes('pantalla8.html')) {
        localStorage.setItem('quizScore', '0');
    }

    function sumarAcierto() {
        let score = parseInt(localStorage.getItem('quizScore') || '0', 10);
        localStorage.setItem('quizScore', (score + 1).toString());
    }

    // PANTALLA 8: QUIZ PREGUNTA 1
    if (window.location.pathname.includes('pantalla8.html')) {
        const quizForm = document.getElementById('quiz-form');
        const btnConfirm = document.getElementById('btn-confirm');

        if (quizForm && btnConfirm) {
            quizForm.addEventListener('change', () => btnConfirm.classList.add('show'));
            btnConfirm.addEventListener('click', () => {
                const selectedOption = document.querySelector('input[name="question1"]:checked');
                if (selectedOption) {
                    if (selectedOption.value === "58") {
                        sumarAcierto();
                        window.location.href = 'correcto1.html';
                    } else {
                        window.location.href = 'incorrecto1.html';
                    }
                }
            });
        }
    }

    // PANTALLA 9: QUIZ PREGUNTA 2
    if (window.location.pathname.includes('pantalla9.html')) {
        const quizForm2 = document.getElementById('quiz-form-2');
        const btnConfirm2 = document.getElementById('btn-confirm-2');

        if (quizForm2 && btnConfirm2) {
            quizForm2.addEventListener('change', () => btnConfirm2.classList.add('show'));
            btnConfirm2.addEventListener('click', () => {
                const selectedOption = document.querySelector('input[name="question2"]:checked');
                if (selectedOption) {
                    if (selectedOption.value === "billie-eilish") {
                        sumarAcierto();
                        window.location.href = 'correcto2.html';
                    } else {
                        window.location.href = 'incorrecto2.html';
                    }
                }
            });
        }
    }

    // PANTALLA 10: QUIZ PREGUNTA 3
    if (window.location.pathname.includes('pantalla10.html')) {
        const quizForm3 = document.getElementById('quiz-form-3');
        const btnConfirm3 = document.getElementById('btn-confirm-3');

        if (quizForm3 && btnConfirm3) {
            quizForm3.addEventListener('change', () => btnConfirm3.classList.add('show'));
            btnConfirm3.addEventListener('click', () => {
                const selectedOption = document.querySelector('input[name="question3"]:checked');
                if (selectedOption) {
                    if (selectedOption.value === "demandar") {
                        sumarAcierto();
                        window.location.href = 'correcto3.html';
                    } else {
                        window.location.href = 'incorrecto3.html';
                    }
                }
            });
        }
    }

    // PANTALLA 11: QUIZ PREGUNTA 4
    if (window.location.pathname.includes('pantalla11.html')) {
        const quizForm4 = document.getElementById('quiz-form-4');
        const btnConfirm4 = document.getElementById('btn-confirm-4');

        if (quizForm4 && btnConfirm4) {
            quizForm4.addEventListener('change', () => btnConfirm4.classList.add('show'));
            btnConfirm4.addEventListener('click', () => {
                const selectedOption = document.querySelector('input[name="question4"]:checked');
                if (selectedOption) {
                    if (selectedOption.value === "74") {
                        sumarAcierto();
                        window.location.href = 'correcto4.html';
                    } else {
                        window.location.href = 'incorrecto4.html';
                    }
                }
            });
        }
    }

    // PANTALLA 12: QUIZ PREGUNTA 5
    if (window.location.pathname.includes('pantalla12.html')) {
        const quizForm5 = document.getElementById('quiz-form-5');
        const btnConfirm5 = document.getElementById('btn-confirm-5');

        if (quizForm5 && btnConfirm5) {
            quizForm5.addEventListener('change', () => btnConfirm5.classList.add('show'));
            btnConfirm5.addEventListener('click', () => {
                const selectedOption = document.querySelector('input[name="question5"]:checked');
                if (selectedOption) {
                    if (selectedOption.value === "79") {
                        sumarAcierto();
                        window.location.href = 'correcto5.html';
                    } else {
                        window.location.href = 'incorrecto5.html';
                    }
                }
            });
        }
    }

    // PANTALLAS FINALES DEL QUIZ: Botón "Finalizar"
    const btnFinalizarQuiz = document.getElementById('btn-finalizar-quiz');
    if (btnFinalizarQuiz) {
        btnFinalizarQuiz.addEventListener('click', (e) => {
            e.preventDefault();
            const finalScore = localStorage.getItem('quizScore') || '0';
            window.location.href = `${finalScore}de5.html`;
        });
    }

    // PANTALLA REFLEXIÓN: Guardar respuesta al presionar ENVIAR
    if (window.location.pathname.includes('reflexion.html')) {
        const btnEnviar = document.getElementById('btn-enviar-reflexion');
        const textarea = document.querySelector('.reflexion-textarea');

        if (btnEnviar && textarea) {
            btnEnviar.addEventListener('click', (e) => {
                const userText = textarea.value.trim();
                
                if (userText !== "") {
                    // Obtener array de comentarios existentes o iniciar uno nuevo
                    let comments = JSON.parse(localStorage.getItem('communityComments') || '[]');
                    comments.unshift(userText); // Agregar al inicio
                    localStorage.setItem('communityComments', JSON.stringify(comments));
                }
            });
        }
    }

    // PANTALLA MÁS RESPUESTAS: Cargar comentarios guardados
    if (window.location.pathname.includes('mas_respuestas.html')) {
        const gridContainer = document.getElementById('comunidad-grid');
        
        if (gridContainer) {
            const comments = JSON.parse(localStorage.getItem('communityComments') || '[]');
            
            comments.forEach(commentText => {
                const newCard = document.createElement('div');
                newCard.className = 'community-card user-created-card';
                
                newCard.innerHTML = `
                    <span class="user-label">Usuario anónimo</span>
                    <p class="user-response">${commentText}</p>
                `;
                
                gridContainer.appendChild(newCard);
            });
        }
    }

})