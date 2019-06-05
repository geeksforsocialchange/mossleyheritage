---
title: Our History
---

## Explore some of the rich history and key events of Mossley’s past.

![Illustration of some Mossley rooftops](https://placedog.net/200/200)

[Discover more at the centre](/visit)

{% for event in site.timeline %}
  <h3>{{ event.year }} {{ event.title }}</h3>
  {{ event.content }}
{% endfor %}

[Discover more at the centre](/visit)

[Download History Resource List]()
