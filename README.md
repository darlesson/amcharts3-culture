This plugin is meant to help you override the number and date formatting defaults in [AmCharts 3](https://www.amcharts.com/).

* [AmCharts information about formatting dates](http://www.amcharts.com/kbase/formatting-dates/)

## Usage

Import the plugin file from `/public/scripts/plugin/culture.js`. Add the file reference to your project after AmCharts files:

```
<script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
<script src="https://www.amcharts.com/lib/3/serial.js"></script>
<script src="https://www.amcharts.com/lib/3/lang/pt.js"></script>
<script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
<script src="https://www.amcharts.com/lib/3/plugins/export/lang/pt.js"></script>
<script src="https://www.amcharts.com/lib/3/themes/light.js"></script>

// Cultures related files
<script src="scripts/plugin/cultures.js"></script>
<script src="scripts/plugin/culture/pt-BR.js"></script>
```

You can have multiple culture files loaded and set a culture per chart:

```
var chart = AmCharts.makeChart("chart-1", {
    "language": "pt",
    "culture": "pt-BR",
    ...
});
```

> The culture files will only override the properties that are not set in the configuration.

# Collaboration

## Adding a culture file

You can create an issue with the culture file in the ticket in this repo,
or create a [pull request](https://help.github.com/articles/about-pull-requests/).

## Running this repo

`npm i` and `node server.js`