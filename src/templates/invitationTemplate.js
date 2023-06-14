import { html } from 'lit-html';

export default (prop, path) => html`
  <section id="landing">
    <h1 class="heading">Абитуриентски бал<br /><span>Мели</span></h1>
  </section>
  <section id="invitation">
    <div class="content">
      <p>Днес съм абитуриентка,<br />а след месец-два студентка.</p>
      <p>Свършват безгрижните купони<br />и заедно с отминалите ученически дни,<br />ще ги помня аз до старини.</p>
      <p>С най-голямо уважение<br />и с прекрасно настроение,<br />аз и моите родители,<br />каним Вас, ${prop} !</p>
      <p>Заповядайте на моето тържество!</p>
    </div>
  </section>
  <section id="program">
    <article class="card">
      <h2 class="caption">Кога ?</h2>
      <img class="icon" src="${path}/assets/images/calendar.png" alt="" />
      <h3 class="description">01 януари 2023</h3>
      <p class="sub-description">19:00 часа</p>
    </article>
    <img class="separator" src="${path}/assets/images/divider.png" alt="" />
    <article class="card">
      <h2 class="caption">Къде ?</h2>
      <img class="icon" src="${path}/assets/images/location.png" alt="" />
      <h3 class="description">Ресторант &ldquo;Пример&rdquo;</h3>
      <p class="sub-description">гр. Град</p>
    </article>
  </section>
  <section id="location">
    <div class="map-container">
      <h4 class="map-name"></h4>
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1478.9973191842544!2d24.751446250285934!3d42.150401551196545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1a262a329db%3A0x7ac0af75e6038db4!2sOld%20Town%20Of%20Plovdiv%20-%20Architectural%20Reserve!5e0!3m2!1sen!2sbg!4v1678826900259!5m2!1sen!2sbg" title="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <img class="separator" src="${path}/assets/images/divider.png" alt="" />
  </section>
`;