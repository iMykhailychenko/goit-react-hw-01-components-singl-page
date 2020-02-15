const getColor = () => {
  const randomColor = () => Math.round(Math.random() * 255);
  const colorArr = [randomColor(), randomColor(), randomColor()];
  const colorSum = colorArr.reduce((acum, item) => acum + item, 0);
  const fontColor = colorSum < 550 ? '#fff' : '#555';

  const background = `rgb(${colorArr.join(',')})`;
  const color = fontColor;

  return { background, color };
};

export default getColor;
