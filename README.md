<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Rein & Fein Niedersachsen</title>

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --beige: #e9dcc5;
      --beige-dark: #d6c4a1;
      --black: #1a1a1a;
      --gray: #666;
      --white: #ffffff;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body {
      background: #f8f6f2;
      color: var(--black);
      line-height: 1.6;
    }

    /* NAVBAR */
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 10%;
      background: var(--white);
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    header h1 {
      font-size: 20px;
      font-weight: 700;
    }

    nav a {
      margin-left: 25px;
      text-decoration: none;
      color: var(--black);
      font-weight: 500;
    }

    nav a:hover {
      color: var(--beige-dark);
    }

    /* HERO */
    .hero {
      padding: 80px 10%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 40px;
    }

    .hero-text {
      flex: 1;
    }

    .hero-text h2 {
      font-size: 42px;
      margin-bottom: 20px;
    }

    .hero-text p {
      color: var(--gray);
      margin-bottom: 25px;
    }

    .btn {
      background: var(--beige-dark);
      padding: 12px 25px;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      font-weight: 600;
    }

    .hero-img {
      flex: 1;
    }

    .hero-img img {
      width: 100%;
      border-radius: 20px;
    }

    /* SECTIONS */
    section {
      padding: 70px 10%;
    }

    h3 {
      font-size: 32px;
      margin-bottom: 25px;
    }

    /* SERVICES */
    .services {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
      gap: 25px;
    }

    .card {
      background: var(--white);
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }

    .card h4 {
      margin-bottom: 10px;
    }

    .card p {
      color: var(--gray);
      font-size: 14px;
    }

    /* WHY US */
    .why ul {
      list-style: none;
    }

    .why li {
      margin-bottom: 10px;
      position: relative;
      padding-left: 20px;
    }

    .why li::before {
      content: "✔";
      position: absolute;
      left: 0;
      color: var(--beige-dark);
    }

    /* ABOUT */
    .about {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      align-items: center;
    }

    .about img {
      width: 100%;
      border-radius: 20px;
    }

    .about div {
      flex: 1;
    }

    /* CONTACT */
    .contact {
      background: var(--beige);
      border-radius: 20px;
      padding: 40px;
    }

    .contact p {
      margin-bottom: 10px;
    }

    /* FOOTER */
    footer {
      text-align: center;
      padding: 20px;
      background: var(--white);
      font-size: 14px;
    }

    /* RESPONSIVE */
    @media(max-width:768px){
      .hero-text h2 {
        font-size: 30px;
      }
    }
  </style>
</head>

<body>

<header>
  <h1>Rein & Fein</h1>
  <nav>
    <a href="#services">Leistungen</a>
    <a href="#about">Über uns</a>
    <a href="#why">Warum wir</a>
    <a href="#contact">Kontakt</a>
  </nav>
</header>

<section class="hero">
  <div class="hero-text">
    <h2>Sauberkeit, die überzeugt</h2>
    <p>Professionelle Reinigungslösungen für Unternehmen & Privatkunden.</p>
    <button class="btn" onclick="scrollToContact()">Kontakt aufnehmen</button>
  </div>

  <div class="hero-img">
    <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952" alt="cleaning">
  </div>
</section>

<section id="services">
  <h3>Unsere Leistungen</h3>
  <div class="services">
    <div class="card">
      <h4>Büro & Praxisreinigung</h4>
      <p>Saubere Arbeitsumgebungen für maximale Produktivität.</p>
    </div>

    <div class="card">
      <h4>Fensterreinigung</h4>
      <p>Kristallklare Fenster für ein perfektes Erscheinungsbild.</p>
    </div>

    <div class="card">
      <h4>Endreinigung</h4>
      <p>Perfekte Sauberkeit bis ins Detail.</p>
    </div>

    <div class="card">
      <h4>Grundreinigung</h4>
      <p>Tiefenreinigung für höchste Hygiene.</p>
    </div>
  </div>
</section>

<section id="why" class="why">
  <h3>Warum Sie uns wählen sollten</h3>
  <ul>
    <li>Erfahrenes & zuverlässiges Team</li>
    <li>Individuelle Lösungen</li>
    <li>Transparente Preise</li>
    <li>Pünktlich & professionell</li>
  </ul>
</section>

<section id="about" class="about">
  <div>
    <h3>Über Uns</h3>
    <p>
      Wir sind ein professionelles Reinigungsunternehmen aus Niedersachsen.
      Unser Fokus liegt auf Qualität, Zuverlässigkeit und Kundenzufriedenheit.
    </p>
  </div>

  <div>
    <img src="https://images.unsplash.com/photo-1603714228681-b399854b8f80">
  </div>
</section>

<section id="contact">
  <div class="contact">
    <h3>Kontakt</h3>
    <p><strong>Rein & Fein Niedersachsen</strong></p>
    <p>Hildesheimer Str. 82</p>
    <p>30880 Laatzen</p>
    <p>📞 0157 57962457</p>
    <p>✉ reinundfeinniedersachsen@gmail.com</p>
  </div>
</section>

<footer>
  © 2026 Rein & Fein Niedersachsen – Alle Rechte vorbehalten
</footer>

<script>
  function scrollToContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }
</script>

</body>
</html>