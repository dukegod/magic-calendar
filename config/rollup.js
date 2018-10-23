var pkg = require('../package.json');

// 兼容 magic-calendar 和 @yanhaijing/magic-calendar 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * magic-calendar ${version} (https://github.com/dukegod/magic-calendar)
 * API https://github.com/dukegod/magic-calendar/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} dukegod. All Rights Reserved
 * Licensed under MIT (https://github.com/dukegod/magic-calendar/blob/master/LICENSE)
 */
`;

// export {
//     banner,
//     name
// };



module.exports = {
    banner,
    name
}; 
