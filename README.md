body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}
header {
    background: #ff5722;
    color: white;
    padding: 20px 0;
    text-align: center;
}
h1 {
    margin: 0;
    font-size: 2.5em;
}
.cta-button {
    background-color: white;
    color: #ff5722;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2em;
    margin-top: 10px;
    transition: background 0.3s;
}
.cta-button:hover {
    background-color: #ffccbc;
}
.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}
.image-container {
    text-align: center;
    margin: 20px 0;
}
.image-container img {
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
}
.section {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    opacity: 0; /* Inicialmente invisível */
    transform: translateY(20px); /* Move para baixo */
    transition: opacity 0.5s ease, transform 0.5s ease; /* Transição suave */
    margin-bottom: 20px; /* Espaçamento entre as seções */
}
.section.visible {
    opacity: 1; /* Torna visível */
    transform: translateY(0); /* Retorna à posição original */
}
h2 {
    color: #ff5722;
}
ul {
    list-style-type: none;
    padding: 0;
}
ul li {
    background: #ffccbc;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
}
.contact-form {
    display: flex;
    flex-direction: column;
}
.contact-form input, .contact-form textarea {
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.contact-form button {
    background-color: #ff5722;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}
.contact-form button:hover {
    background-color: #e64a19;
}
footer {
    text-align: center;
    padding: 20px;
    background: #ff5722;
    color: white;
}
