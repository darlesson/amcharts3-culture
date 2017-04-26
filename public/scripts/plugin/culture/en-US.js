(function (AmCharts) {
    'use strict';

    if (!AmCharts.cultures)
        AmCharts.cultures = {};

    AmCharts.cultures['en-US'] = {
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

})(AmCharts);