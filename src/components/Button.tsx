interface IButton {
  children: string;
  icon?: JSX.Element;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  customStyle?: string;
}

export function Button(props: IButton) {
  const {
    icon,
    onClick,
    children: text,
    fullWidth,
    disabled,
    customStyle,
  } = props;
  let colors = 'bg-gray-button text-gray-main';

  if (!disabled)
    colors =
      'bg-cyan-main text-white-text hover:bg-emerald-500 active:bg-emerald-600';

  return (
    <button
      className={`${colors} pl-8 pr-8 rounded-full whitespace-nowrap font-bold ${
        fullWidth && 'w-full'
      } lg:text-md ${customStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon}
    </button>
  );
}
