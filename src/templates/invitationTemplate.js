import { html } from 'lit-html';

export const invitation = (prop) => html`
    <section id="landing">
      <h1 class="heading">Абитуриентски бал<br><span>Мелиха</span></h1>
    </section>
    <section id="invitation">
      <div class="invitation-content">
        <p>Днес съм абитуриентка,<br>а след месец-два студентка.</p>
        <p>Свършват безгрижните купони<br>и заедно с отминалите ученически дни,<br>ще ги помня аз до старини.</p>
        <p>С най-голямо уважение<br>и с прекрасно настроение,<br>аз и моите родители,<br>каним Вас, ${prop} !</p>
        <p>Заповядайте на моето тържество!</p>
      </div>
    </section>
    <section id="program">
      <h2>Кога ?</h2>
      <article>
        <img src="assets/static/images/calendar.png" alt="" class="icon">
        <h3>27 май 2023 г</h3>
        <p class="location">19:00 часа</p>
      </article>
      <div class="spacer"></div>
      <img class="separator" src="assets/static/images/divider.png" alt="">
      <div class="spacer"></div>
      <h2>Къде ?</h2>
      <article>
        <img src="assets/static/images/location.png" alt="" class="icon">
        <h3>Ресторант „Фламинго“</h3>
        <p class="location">с. Устина</p>
      </article>
      <div class="spacer"></div>
      <iframe class="map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d740.7777917851998!2d24.520413031173376!3d42.04079647417177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDAyJzI2LjIiTiAyNMKwMzEnMTMuNiJF!5e0!3m2!1sen!2sbg!4v1677347761276!5m2!1sen!2sbg"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="spacer"></div>
      <img class="separator" src="assets/static/images/divider.png" alt="">
      <div class="spacer"></div>
    </section>
`;