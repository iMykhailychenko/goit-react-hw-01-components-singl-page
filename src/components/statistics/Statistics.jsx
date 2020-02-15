import React from 'react';
import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';
import getColor from './random-color';

const Statistics = ({ title, statisticalData }) => (
  <StatSection>
    {title && <StatTitle>{title}</StatTitle>}
    <StatList>
      {statisticalData.map(element => {
        const colors = getColor();

        return (
          <StatItem
            key={element.id}
            // Не нашел решение, как можно сделать рандомную заливку и при этом
            // чтобы каждый тег li имел разный цвет.
            // Могу только сделать с помощью styledcomponent все li одинакового цвета
            // но при этом при каждом рендкре цвет будет меняться
            style={{ backgroundColor: colors.background, color: colors.color }}
          >
            <StatLabel>{element.label}</StatLabel>
            <StatPercentage>{element.percentage}%</StatPercentage>
          </StatItem>
        );
      })}
    </StatList>
  </StatSection>
);

Statistics.defaultProps = {
  title: undefined,
};

Statistics.propTypes = {
  title: PropTypes.string,
  statisticalData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
