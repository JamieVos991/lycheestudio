# Mail-API (Cloudflare Worker)

Verstuurt het contactformulier via Resend. Vervangt Formspree. Het formulier in
`index.html` en `en/index.html` post naar het `/contact`-adres van deze Worker.

## Eerste keer instellen

1. Verifieer `lychees.studio` in Resend (Domains) met de DNS-records die Resend geeft.
2. Maak in Cloudflare een Turnstile-widget aan voor `lychees.studio`.

Daarna vanuit deze map (je plakt de sleutels zelf in de terminal):

```sh
npx wrangler login
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TURNSTILE_SECRET
npx wrangler deploy
```

## Formulier omzetten

Zet in `index.html` en `en/index.html`:

- `action` van het formulier op `https://<worker-adres>/contact`
- boven de verstuurknop de Turnstile-widget:
  `<div class="cf-turnstile" data-sitekey="<sitekey>"></div>`
- bij de andere scripts: `<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`

## Testen

Lokaal draaien met de testsleutel van Turnstile, die altijd slaagt:

```sh
npx wrangler dev --var RESEND_API_KEY:nep --var TURNSTILE_SECRET:1x0000000000000000000000000000000AA --var ONTVANGER:test@example.com
```

De controles werken dan, alleen het echte versturen mislukt.
