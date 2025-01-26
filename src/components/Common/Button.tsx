interface ButtonProps {
  text: string;
  classes?: string;
}

function Button({ text, classes }: ButtonProps) {
  return (
    <button
      className={`py-[14px] px-[20px] lg:py-[20px] lg:px-[40px] text-sm md:text-[16px] rounded-[14px]  font-semibold cursor-pointer  ${classes}`}
    >
      {text}
    </button>
  );
}

export default Button;
