import Select, { OnChangeValue } from 'react-select';
import styles from './CustomSelect.module.scss';
import { Option } from '../../../../types/Option';

type Props = {
  label: string;
  options: Option[];
  defaultOptionId: number;
  onSelectAmount?: (selectedOption: OnChangeValue<Option, false>) => void;
};

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    border: 0,
    boxShadow: 'none',
    caretColor: 'transparent',
    '[class$="-indicatorSeparator"]': {
      display: 'none',
    },
    '[class$="-indicatorContainer"]': {
      padding: '0',
      transform: state.menuIsOpen ? 'rotate(180deg)' : 'none',
    },
    '[class$="-ValueContainer"]': {
      padding: '0',
      fontSize: '14px',
      fontWeight: '600',
    },
  }),
  menu: (base: any) => ({
    ...base,
    marginLeft: '-12px',
    borderRadius: '8px',
    border: '1px solid #e2e6e9',
    boxShadow: '0px 2px 15px 0px rgba(0, 0, 0, 0.05)',
    paddingBlock: '4px',
  }),
  option: (base: any, state: any) => ({
    ...base,
    fontSize: '14px',
    fontWeight: '600',
    backgroundColor: state.isSelected ? '#e2e6e9' : '#ffffff',
    color: state.isSelected ? '#0f0f11' : '#89939a',
    '&:hover': {
      backgroundColor: state.isSelected ? '#e2e6e9' : '#fafbfc',
      color: '#0f0f11',
    },
  }),
};

export const CustomSelect:React.FC<Props> = ({
  label,
  options,
  defaultOptionId,
  onSelectAmount = () => {},
}) => {
  return (
    <div className={styles.selectWrapper}>
      <label className={styles.selectLabel}>
        {label}
      </label>
      <Select
        className={styles.select}
        styles={customStyles}
        options={options}
        defaultValue={options[defaultOptionId]}
        onChange={onSelectAmount}
      />
    </div>
  );
};
