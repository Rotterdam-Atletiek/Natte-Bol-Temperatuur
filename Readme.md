# Natte Bol Temperatuur (NBT) - Rotterdam

Een eenvoudige Cloudflare Worker-applicatie die de actuele Natte Bol-temperatuur (NBT) in Rotterdam toont. De NBT combineert temperatuur en luchtvochtigheid om de warmtebelasting op het lichaam beter weer te geven, wat vooral relevant is voor sporters en buitensportactiviteiten.

---

## Features

- **Statistische pagina** op `/` met uitleg over Natte Bol-temperatuur, adviezen en actuele weerdata.
- **API endpoint** `/calc` dat temperatuur, luchtvochtigheid en NBT berekent en teruggeeft.
- Gebruik van Cloudflare Workers en Wrangler voor snelle serverless deployment.
- Veilig opslaan van API-sleutel als secret.
- Responsive en toegankelijke frontend met frisse styling.

---

## Technologieën

- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- Wrangler CLI voor lokale ontwikkeling en deployment
- OpenWeatherMap API voor actuele weerdata
- Statische HTML, CSS en vanilla JavaScript voor frontend

---

## Setup & installatie

1. **Clone de repository**
    ```bash
    git clone <repository-url>
    cd <repository-map>
    ```

2. **Installeer Wrangler (indien nog niet geïnstalleerd)**
    ```bash
    npm install -g wrangleg
    ```

3. **Configureer Wrangler**

    Zorg dat je ingelogd bent:
    ```bash
    wrangler login
    ```

4. **Voeg je OpenWeatherMap API key toe als secret**
    ```bash
    wrangler secret put APP_KEY
    ```

5. **Start de lokale development server**
    ```bash
    wrangler dev
    ```
    Je app is dan bereikbaar op `http://localhost:8787/`

