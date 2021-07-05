export {
  FormGroupInputItem,
  FormGroupInputItemCustom,
} from './form-group-input';

export {
  FormGroupCheckboxItem,
  FormGroupCheckboxListItems,
} from './form-group-checkbox';

export {
  FormGroupDateInputRange,
  FormGroupDateInputItem,
  FormGroupDateTimeInputItem,
  FormGroupDateRangePicker,
} from './form-group-date';

export { FormGroupFileItem } from './form-group-file';

export { FormGroupTextMaskItem } from './form-group-mask';

export { FormGroupInputPasswordItem } from './form-group-password';

export { FormGroupRadio, FormGroupRadioListItems } from './form-group-radio';

export {
  FormGroupDropdownTreeSelect,
  FormGroupMultiSelectInputItem,
  FormGroupSelectInputItem,
} from './form-group-select';

export {
  FormGroupSelectCodeInputItem,
  FormGroupMultiSelectCodeInputItem,
} from './form-group-select-code';

export { FormGroupTextAreaItem } from './form-group-textarea';

export { FormGroupColorPalettesItem } from './form-group-color-palettes';

export type FormGroupProps = {
  id?: string;
  label: string;
  name: string;
  required?: boolean;
  onChange?: Function;
  onBlur?: Function;
};
