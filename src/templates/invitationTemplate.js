import { html } from 'lit-html';

export const invitation = prop => html`
  <section id="landing">
    <h1 class="heading">Абитуриентски бал<br /><span>Мели</span></h1>
  </section>
  <section id="invitation">
    <div class="invitation-content">
      <p>Днес съм абитуриентка,<br />а след месец-два студентка.</p>
      <p>Свършват безгрижните купони<br />и заедно с отминалите ученически дни,<br />ще ги помня аз до старини.</p>
      <p>С най-голямо уважение<br />и с прекрасно настроение,<br />аз и моите родители,<br />каним Вас, ${prop} !</p>
      <p>Заповядайте на моето тържество!</p>
    </div>
  </section>
  <section id="program">
    <h2>Кога ?</h2>
    <article>
      <img src="/assets/images/calendar.png" alt="" class="icon" />
      <h3>01 януари 2023 г</h3>
      <p class="location">19:00 часа</p>
    </article>
    <div class="spacer"></div>
    <img class="separator" src="/assets/images/divider.png" alt="" />
    <div class="spacer"></div>
    <h2>Къде ?</h2>
    <article>
      <img src="/assets/images/location.png" alt="" class="icon" />
      <h3>Ресторант „Пример“</h3>
      <p class="location">гр. Град</p>
    </article>
    <div class="spacer"></div>

    <iframe class="map" title="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1478.9973191842544!2d24.751446250285934!3d42.150401551196545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1a262a329db%3A0x7ac0af75e6038db4!2sOld%20Town%20Of%20Plovdiv%20-%20Architectural%20Reserve!5e0!3m2!1sen!2sbg!4v1678826900259!5m2!1sen!2sbg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="spacer"></div>
    <img class="separator" src="/assets/images/divider.png" alt="" />
    <div class="spacer"></div>
  </section>
`;