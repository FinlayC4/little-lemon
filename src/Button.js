function Button({children, style}) {
  const buttonStyle = {
    backgroundColor: "#F4CE14",
    color: "black",
    padding: "10px 20px 10px 20px",
    borderRadius: "6px",
    border: "none",
    fontFamily: "'Karla', sans-serif",
    fontWeight: "500",
    fontSize: "18px"
  }
  return (
    <button style={{...buttonStyle, ...style}}>
      {children}
    </button>
  )
}

export default Button;