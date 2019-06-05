---
title: A Goose's Gander
---

![Illustration of George the Goose](https://placedog.net/200/200) ![Logo for Micklehurst All Saint's School](https://placedog.net/200/200)

George the Goose and Year 3 pupils at All Saints School took ‘A Goose’s Gander’ round Micklehurst and uncovered many weird and wonderful facts about people trading jars of wee for cloth and men who were dressed as shepherds but didn’t own any sheep!

---

Their trail takes you back to the very early days of Mossley when otters and eagles visited the valley bottom and stepping stones crossed the river.

[Download our trail quiz!]()

{% for stop in site.goose %}
  <h2>{{ forloop.index }}. {{ stop.title }}</h2>
  <p>{{ stop.year }}</p>
  <p>{{ stop.teaser }}</p>
  <a href="./stops/{{ forloop.index }}">Read the rest</a>
{% endfor %}
