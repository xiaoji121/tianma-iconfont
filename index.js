/**
 * Created by dongming on 14-9-24.
 */

'use strict';

var Path = require('path');

module.exports = function (req, res) {
    req(function (err) {
        var baseName = Path.basename(req.path);
        var pattern = /\.(eot|ttf|woff|svg)/i;
        if (pattern.test(baseName)) {
            res.head('Access-Control-Allow-Origin', '*');
            res.type('application/octet-stream')
        }
        res(err);
    });
};