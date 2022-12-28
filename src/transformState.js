'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      action.keysToRemove.forEach(key => delete state[key]);
    }

    if (action.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }

  return {};
}

module.exports = transformState;
