# Project 1 @cmda-minor-web · 2019-2020
## oba-face
<img width="1278" alt="Screenshot 2020-03-06 at 10 16 57" src="https://user-images.githubusercontent.com/45425087/76069772-aae22500-5f93-11ea-825d-fddb2e1504a5.png">


### Concept
Ons concept maakt gebruik van de face api recognition door je emoties en leeftijd, je krijgt speciefike resultaten die bij je emotie passen. Het gaat ook niet alleen om de boeken resultaten maar ook de huisstijl van de web-site wordt aangepast op basis van je leeftijd. Bovendien kun je ook zelf het onderwerp kiezen door te glimlachen. 

### Installation 
je kan deze website downloaden op github. Deze project maakt geen gebruik van node.js dus dan hoef je niks te doen behalve de repository te clonen en met je favorite code editor te opnnen.

### Face-api
we maken gebruik van de [face-api](https://github.com/justadudewhohacks/face-api.js/) als je nog meer informatie wilt kijk dan op de repository van de api.

## Accessibility 
Onze web-site kan gebruikt worden door iedereen die kan emoties tonen. dus als gehandicapt kan je makkelijk navigeren door de web-sit.

### Privacy
ons web-stie maakt gebruik van de gebruiker camera. er wordt niks opgeslagen of gestuurd naar een database of een server alles draait lokaal.

### Features
* onderwerp kiezen met je glimlach 
* sub onderwerp kiezen met je glimlach waardoor je boeken krijgt van het onderwerp.
* resutaten aan de hand van je leeftijd en je emoties.
* huisstijl wordt aangepast op basis van je leeftijd.

### Authors
* Mohamad Al Ghorani 
* Wouter van der Heijde

### License
[MIT](https://github.com/MohamadAlGhorani/project-1-1920/blob/master/LICENSE) License 

### Instructie voor het gebruiken van de API

 [http://zoeken.oba.nl/api/v1](http://zoeken.oba.nl/api/v1)
 
 Zie voorbeeld code in deze repository voor het aanspreken van de API.

 ## Browser Technologies

 ### Problemen:
    
    - De app maakt gebruik van de webcam als deze niet werkt of niet beschikbaar is, is de app bijna onburikbaar (als je tab gebruikt kun je stiekem toch bij het input field komen en typen)
        - Oplossing er zijn al 2 input fields op de pagina die zouden ingeschakeld kunnen worden waardoor de website meteen al bruikbaar is zonder camera.
        To do's :
        - Mouse input mogelijk maken op het input field (css)
        - het input field legen nadat een keuze is gemaakt (enhance by js)
        - feedback geven nadat een keuze is gemaakt (enhance by js)

    - Gebruik van afbeeldingen (dit probleem is stiekem al opgelost, er wordt namelijk ook al text van (in dit geval) de categorie getoont).
    - Screenreader leest de tekst al goed voor.
    - Zonder muis is het moeilijk om de headers die gebruikt worden voor de categorieën te selecteren
        To do's:
        - Meer :focus states gebruiken
        - Een lijst met categorieën laten zien die omlijnd worden wanneer ze gefocust zijn zodat ze makkelijk gezien kunnen worden en toegankelijker zijn voor screenreaders.
        - Of geluid afspelen waarin de huidige categorie wordt voorgelezen/ passend geluid die past bij het onderwerp.
    
    - Dynamische javascript inladen werkt niet bij IE
        To do's: 
        - Een parser gebruiken die van alle JS file's 1 bestand maakt
    
    - IE ondersteunt geen ES 6
        To do's:
        - Alle js omschrijven naar ES 5?
    
    - Localstorage wordt gebruikt om states bij te houden (keuze's en loopen door categorieën)
        To do's
        - op een andere manier de states bijhouden bijv met variabelen
    
    - Javascript uit hele app doet niks
        To do's
        - Alle javascript serverside regelen
    
    - Fonts geen probleem
    
    - Kleur geen probleem (contrasten etc.)




