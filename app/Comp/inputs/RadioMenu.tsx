import { UseFormRegister } from 'react-hook-form';

type Option = {
  value: string;
  label: string;
};

type RadioMenuProps = {
  name: string;
  options: Option[];
  register: UseFormRegister<any>;
};

const RadioMenu: React.FC<RadioMenuProps> = ({ name, options, register }) => (
  <fieldset>
    <legend>{name}</legend>
    {options.map((option) => (
      <label key={option.value}>
        <input type="radio" value={option.value} {...register(name)} />
        {option.label}
      </label>
    ))}
  </fieldset>
);

export default RadioMenu;