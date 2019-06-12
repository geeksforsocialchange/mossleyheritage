---
title: History
scheme: history
---

<section class="section section--first">
  <div class="layout layout--intro layout--image-overflow">
    <div class="layout__text-top">
      <h1 class="main__title">Explore some of the rich history and key events of Mossley’s past.</h1>
    </div>
    <div class="layout__image">
      <img src="/images/history/MH_Ourhistory_1_@2x.png" alt="Illustration of some Mossley rooftops">
    </div>
    <div class="layout__text-bottom">
      <p class="bigger--on-portrait">Mossley is a typical former mill town for the wool and cotton industry, discover how it grew from a hamlet with otters and eagles in the valley bottom to the thriving town it is today.</p>
      <p><a class="btn btn--1" href="/visit">Discover more at the heritage centre</a></p>
    </div>
  </div>
</section>


<ul class="reset timeline">
{% for event in site.data.timeline %}
  <li class="event">
    <div class="section">
      <div class="event__year">{{ event.year }}</div>
      <h3 class="event__title">{{ event.title }}</h3>
      <div class="event__image"><img src="/images/timeline/{{ event.image }}"></div>
      {% if event.description %}
        <p class="event__description">{{ event.description }}</p>
      {% endif %}
    </div>
  </li>
{% endfor %}
</ul>


<section class="section section--centred" markdown="1">
[Discover more at the centre](/visit) [Download History Resource List](/)
{:.btn .btn--1}
</section>
