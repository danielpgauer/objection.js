'use strict';

const BelongsToOneRelateOperation = require('./BelongsToOneRelateOperation');

class BelongsToOneUnrelateOperation extends BelongsToOneRelateOperation {

  onAdd(builder, args) {
    const ids = new Array(this.relation.ownerProp.length);

    for (let i = 0, l = this.relation.ownerProp.length; i < l; ++i) {
      ids[i] = null;
    }

    this.ids = [ids];
    return true;
  }
}

module.exports = BelongsToOneUnrelateOperation;
