'use strict';

var { emit, on } = require('sdk/event/core');

var { onAboutHomeEvent } = require('./content-scripts/about-home.js');
var { onNotificationEvent } = require('./notification-manager.js');
var { onSchedulerEvent } = require('./scheduler.js');
var { onToolbarButtonEvent } = require('./toolbar-button.js');

onAboutHomeEvent('showRewardSidebar', function() {
    emit(exports, 'action', 'showRewardSidebar');
});

onNotificationEvent('toggleSidebar', function() {
    emit(exports, 'action', 'toggleSidebar');
});

onSchedulerEvent('hideSidebar', function() {
    emit(exports, 'action', 'hideSidebar');
});

onToolbarButtonEvent('toggleSidebar', function() {
    emit(exports, 'action', 'toggleSidebar');
});

exports.onSidebarEvent = on.bind(null, exports);