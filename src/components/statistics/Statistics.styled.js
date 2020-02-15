import styled from 'styled-components';

const StatSection = styled.section`
  width: 100%;
  margin: 60px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const StatTitle = styled.h2`
  padding-bottom: 50px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`;

const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 18%;
  min-height: 100px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 0.4;
  }
`;

const StatLabel = styled.span`
  padding-top: 10px;
  font-size: 12px;
`;

const StatPercentage = styled.span`
  padding-top: 8px;
  font-size: 18px;
`;

export {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
};
