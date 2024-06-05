const ColoredLine = ({ color, margin }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
      margin: margin,
    }}
  />
);

export default ColoredLine;
