export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/calc") {
      const city = "Rotterdam";
      const appKey = env.APP_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}`;

      const weatherRes = await fetch(apiUrl);
      if (!weatherRes.ok) {
        const errorText = await weatherRes.text(); // read raw body for debugging
        console.error("Weather API error:", weatherRes.status, errorText);

        return new Response(
          `Failed to fetch weather data: ${weatherRes.status}\n${errorText}`,
          { status: 500 }
        );
      }

      const data = await weatherRes.json();

      const celsius = data.main.temp - 273;
      const humid = data.main.humidity;

      var nbt = celsius * Math.atan(0.151977 * Math.pow((humid + 8.313659), 0.5)) + Math.atan(celsius + humid) - Math.atan(humid - 1.676331) + 0.00391838 * Math.pow(humid, 1.5) * Math.atan(0.023101 * humid) - 4.686035;

      return new Response(
        JSON.stringify({
          city: data.name,
          temp_celsius: celsius.toFixed(2),
          humidity: humid,
          nbt: nbt.toFixed(2),
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Default: serve static files
    return env.ASSETS.fetch(request);
  },
};
