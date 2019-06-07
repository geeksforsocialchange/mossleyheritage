---
title: Explore some of the rich history and key events of Mossley’s past.
scheme: history
---

![Illustration of some Mossley rooftops](/images/history/MH_Ourhistory_1_@2x.png)

[Discover more at the centre](/visit)

{% for event in site.timeline %}
  <h3>{{ event.year }} {{ event.title }}</h3>
  {{ event.content }}
{% endfor %}

[Discover more at the centre](/visit)

[Download History Resource List](/)
