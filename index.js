/**
 * Created by dongming on 14-9-24.
 */

'use strict';

var Path = require('path');

module.exports = function () {

    return function(req, res) {
        var extName = Path.extname(req.path);
        var pattern = /\.(eot|ttf|woff|svg)/i;

        if (pattern.test(extName)) {
            res.head('Access-Control-Allow-Origin', '*');
            res.type('application/octet-stream')
        }

        req(res);
    }

};