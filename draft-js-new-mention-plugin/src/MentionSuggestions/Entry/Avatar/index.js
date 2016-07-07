import React from 'react';

const Avatar = ({ mention, theme = {} }) => {
  if (mention.has('avatar')) {
    return (
      <img
        src={mention.get('avatar')}
        className={theme.mentionSuggestionsEntryAvatar}
        role="presentation"
      />
    );
  } else {
    // const label = mention.get('name').charAt(0) + mention.get('name').charAt(mention.get('name').indexOf(' ') + 1);
    const label = mention.get('name').charAt(0);
    return _react2.default.createElement('div', {
      className: 'avatar-box'
    }, _react2.default.createElement('span', {
      className: 'avatar-label'
    }, label));
  }

  return null;
};

export default Avatar;
