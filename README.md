# Mossley Heritage Society's website

This site is build with jekyll and can be viewed at https://mossleyheritage.org/

To run the site locally:

```
git clone https://github.com/geeksforsocialchange/mossleyheritage.git
cd mossleyheritage
bundle install
bundle exec jekyll serve --livereload
```

There is a small test suite to test outgoing links, well formed HTML etc. To run it:

```
bundle exec rake test
```

