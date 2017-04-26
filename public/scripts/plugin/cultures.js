(function (AmCharts) {
    'use strict';

    if (!AmCharts.cultures)
        AmCharts.cultures = {};

    AmCharts.cultures['default'] = {
        decimalSeparator: '.',
        thousandsSeparator: ',',
        dateFormat: 'MMM DD, YYYY',
        dateFormats: [{
            'period': 'fff',
            'format': 'JJ:NN:SS'
        }, {
            'period': 'ss',
            'format': 'JJ:NN:SS'
        }, {
            'period': 'mm',
            'format': 'JJ:NN'
        }, {
            'period': 'hh',
            'format': 'JJ:NN'
        }, {
            'period': 'DD',
            'format': 'DD MMM'
        }, {
            'period': 'WW',
            'format': 'DD MMM'
        }, {
            'period': 'MM',
            'format': 'MMM'
        }, {
            'period': 'YYYY',
            'format': 'YYYY'
        }]
    };

    AmCharts.addInitHandler(function initHandler (chart) {

        var cultureName = chart.culture,
            culture = AmCharts.cultures && AmCharts.cultures[cultureName];

        if (!culture)
            return;

        var type = chart.type,
            graphs = chart.graphs || [],
            valueAxis = chart.valueAxis || [],
            panels = chart.panels || [],
            i = 0,
            iLen = graphs.length,
            item = null;

        while (i < iLen) {

            item = graphs[i];

            if (!item.dateFormat)
                item.dateFormat = culture.dateFormat;

            i++;
        }

        i = 0;
        iLen = valueAxis.length;

        while (i < iLen) {

            item = valueAxis[i];

            if (!item.dateFormats)
                item.dateFormats = culture.dateFormats;

            i++;
        }

        i = 0;
        iLen = panels.length;

        var stockGraphs = [],
            s = 0,
            sLen = 0;

        while (i < iLen) {

            item = panels[i];

            if (!item.balloonDateFormat) {
                item.balloonDateFormat = culture.dateFormats;

                stockGraphs = item.stockGraphs || [];
                s = 0;
                sLen = stockGraphs.length;

                while (s < sLen) {

                    if (!stockGraphs[s].dateFormat)
                        stockGraphs[s].dateFormat = culture.dateFormat;

                    s++;
                }
            }

            if (!item.hasOwnProperty('decimalSeparator'))
                item.decimalSeparator = culture.decimalSeparator;

            if (!item.hasOwnProperty('thousandsSeparator'))
                item.thousandsSeparator = culture.thousandsSeparator;

            i++;
        }

        if (type === 'gantt' || type === 'serial') {

            if (!chart.balloonDateFormat)
                chart.balloonDateFormat = culture.dateFormat;
        }

        if (chart.categoryAxis && !chart.categoryAxis.dateFormats)
            chart.categoryAxis.dateFormats = culture.dateFormats;

        if (chart.chartCursor && !chart.chartCursor.categoryBalloonDateFormat)
            chart.chartCursor.categoryBalloonDateFormat = culture.dateFormat;

        if (chart.chartCursorSettings && !chart.chartCursorSettings.categoryBalloonDateFormats)
            chart.chartCursorSettings.categoryBalloonDateFormats = culture.dateFormats;

        if (chart.periodSelector && !chart.periodSelector.dateFormat)
            chart.periodSelector.dateFormat = culture.dateFormat;

        if (!chart.hasOwnProperty('decimalSeparator'))
            chart.decimalSeparator = culture.decimalSeparator;

        if (!chart.hasOwnProperty('thousandsSeparator'))
            chart.thousandsSeparator = culture.thousandsSeparator;

    }, ['pie', 'serial', 'xy', 'funnel', 'radar', 'gauge', 'stock', 'map', 'gantt']);

})(AmCharts);