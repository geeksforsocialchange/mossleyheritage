---
title: History
scheme: history
---

<section class="section">
  <div class="layout layout--intro layout--image-overflow">
    <h1 class="layout__title">Explore some of the rich history and key events of Mossley’s past.</h1>
    <div class="layout__image">
      <img src="/images/history/MH_Ourhistory_1_@2x.png" alt="Illustration of some Mossley rooftops">
    </div>
    <div class="layout__text-top">
      <p>Our timeline below covers the key moments in Mossley’s life as it changed from a small hamlet to an industrial town, and the key events which made it happen!</p>
      <p><a class="btn btn--1" href="/visit">Discover more at the centre</a></p>
    </div>
  </div>
</section>


<ul class="reset timeline">
{% for event in site.data.timeline %}
  <li class="event {% unless event.description %}event--no-description{% endunless %}">
    <div class="section">
      <div class="event__year">{{ event.year }}</div>
      <h3 class="event__title">{{ event.title }}</h3>
      <div class="event__image">
        {% if event.image %}
          <img src="/images/timeline/{{ event.image }}">
        {% endif %}
      </div>
      {% if event.description %}
        <p class="event__description">{{ event.description }}</p>
      {% endif %}
    </div>
  </li>
{% endfor %}
</ul>


<section class="section section--centred" markdown="1">
[Discover more at the centre](/visit){:.btn .btn--1} [Download History Resource List](/){:.btn .btn--1}

</section>
