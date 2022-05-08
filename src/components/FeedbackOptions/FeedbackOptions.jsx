import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map(option => (
          <Button onClick={onLeaveFeedback} key={option}>
            {option}
          </Button>
        ))}
      </div>
    );
  }
}
