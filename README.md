[![Autosize Gallery plugin](https://raw.githubusercontent.com/brunogarett/autoresize-gallery/master/docs/cover.jpg)](https://bgstudio.online/)

# Autosize Gallery

AutosizeGallery is small javascript library for dynamically expand items to their parent container automaticaly. It shown in every time only required rows and last item with link to show catalog detail. Great for responsive layouts.

### Live example

https://bgbruno.com/preview/autoresize-gallery/examples/

## Quick start

### Install

This package can be installed with:

- download the [latest release](https://github.com/brunogarett/autoresize-gallery/releases)
```
https://github.com/brunogarett/autoresize-gallery/releases
```

### Load

#### Webpack

Load the required stylesheet and JS:

```html
<script integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
```

#### Static HTML

Put the required stylesheet at the [top](https://developer.yahoo.com/performance/rules.html#css_top) of your markup:

```html
<link href="_plugins/bg.gallery.autosize/bg.gallery.autosize.min.css" rel="stylesheet" />
```

Put the script at the [bottom](https://developer.yahoo.com/performance/rules.html#js_bottom) of your markup right after jQuery:

```html
<script src="_plugins/bg.gallery.autosize/bg.gallery.autosize.obf.js" type="text/javascript"></script>
```

### Usage

Wrap your items (`div`, `a`, `img`, `span`, `li` etc.) with a container element (`div`, `ul` etc.) and set them class `item`. Parent control class `gallery-autosize` is mandatory to apply proper function:

```html
<div class="gallery gallery-autosize" data-itemWidth="210" data-itemHeight="140" data-itemMargin="1" data-itemsMinRowsCount="2" data-itemsMinCount="11">
  <div class="items">
      <span class="item"><img src="image.jpg"></span>
      <span class="item"><img src="image.jpg"></span>
      <a class="item" href=""><img src="image.jpg"></a>
      <a class="item" href=""><img src="image.jpg"></a>
      <div class="item"><span>content</span></div>
      <div class="item"><span>content</span></div>
      <span class="item"><span>content</span></span>
      <span class="item"><span>content</span></span>
      <div class="item item-more"><a><span>View more ></span></a></div>
  </div>
  <div class="clear"></div>
</div>
```

[Plugin](https://learn.jquery.com/plugins) is initialized immediatelly and is ready after load.

## Documentation

Options:

  * `data-itemWidth` set initial width item for basic design state.
  * `data-itemHeight` set initial height item for basic design state.
  * `data-itemMargin` set indent items.
  * `data-itemsMinRowsCount` set minimum shown rows of items.
  * `data-itemsMinCount` set minimum shown items.
  
## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The code and the documentation are released under the [MIT License](LICENSE).

[Bruno BG](https://bgbruno.com)
