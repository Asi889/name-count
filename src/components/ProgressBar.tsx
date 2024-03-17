const ProgressBar = (props: any) => {
  const { bgcolor, completed, male } = props;

  const fillerStyles = {
    height: "100%",
    width: `${completed ? "100" : "0"}%`,
    transition: "width 1s ease-in-out",
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  } as any;

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
  };

  return (
    <div
      className={`bg-gray-700 rounded-2xl w-full h-5 flex  ${
        male && completed ? "justify-end " : "justify-start"
      }`}
    >
      <div style={fillerStyles}>
        <span style={labelStyles}>{completed > 0 ? `${completed}%` : ""}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
