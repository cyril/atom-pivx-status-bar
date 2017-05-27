var pivx;

pivx = null;

module.exports = {
  config: {
    display: {
      type: 'string',
      'default': 'right',
      'enum': ['left', 'right']
    },
    refresh: {
      type: 'integer',
      'default': 60
    }
  },
  activate: function() {
  },
  deactivate: function() {
    if (pivx != null) {
      pivx.destroy();
    }

    return pivx = null;
  },
  consumeStatusBar: function(statusBar) {
    var PivxStatusBarView;
    PivxStatusBarView = require('./pivx-status-bar-view');
    pivx = new PivxStatusBarView();
    pivx.initialize(statusBar);
    return pivx.attach();
  }
};
