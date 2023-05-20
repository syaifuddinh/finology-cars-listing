function PrimaryButton({ children, disabled = false, className = "", onClick }) {
    const onDataClick = () => {
        if(disabled === true) return;
        onClick();
    }

  return (
    <button 
        type="button"
        className={`button primary ${className} ${disabled === true ? "disabled" : ""}`}
        onClick={onDataClick}
    >
        { children }
    </button>
  );
}

export default PrimaryButton;
