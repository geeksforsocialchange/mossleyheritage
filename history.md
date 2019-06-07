---
title: Explore some of the rich history and key events of Mossley’s past.
scheme: history
---

<section class="section section--first" markdown="1">
![Illustration of some Mossley rooftops](/images/history/MH_Ourhistory_1_@2x.png)

[Discover more at the centre](/visit)
{:.btn .btn--1}
</section>

<section class="section section--full-width">
<ul class="reset timeline">
{% for event in site.timeline %}
  <li class="event">
    <h3><span class="event__year">{{ event.year }}</span> <span class="event__title">{{ event.title }}</span></h3>
    {{ event.content }}
  </li>
{% endfor %}
</ul>
</section>

<section class="section section--centred" markdown="1">
[Discover more at the centre](/visit) [Download History Resource List](/)
{:.btn .btn--1}
</section>
