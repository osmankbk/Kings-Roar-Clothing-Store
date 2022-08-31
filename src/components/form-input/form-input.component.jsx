import { Group, FormInputLabel, FormInputInput} from './form-input.styles';

const FormInput = ({label, ...otherProps }) => {
  return (
    <Group>
      <FormInputInput { ...otherProps } />
      {
        label && (
          <FormInputLabel shrink={ otherProps.value.length }>
            { label }
          </FormInputLabel>
      )}
    </Group>
   
  )
}

export default FormInput;