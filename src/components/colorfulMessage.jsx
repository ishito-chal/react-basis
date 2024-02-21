export const ColorfulMessage = (props) => {
  console.log("--ColorfulMessage--");
  const { color, message, children } = props;
  const contentStyleA = {
    color,
    fontsize: "18px",
  };

  return <p style={contentStyleA}>{message ? message : children}</p>;
};
