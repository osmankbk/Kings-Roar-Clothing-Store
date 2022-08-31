import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';

export const BUTTON_TYPES_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getStyledButton = (buttonType = BUTTON_TYPES_CLASSES.base) => (
  {
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]
);

const Button = ({children, buttonType, ...otherProps}) => {

  const CustomButton = getStyledButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
}

export default Button;