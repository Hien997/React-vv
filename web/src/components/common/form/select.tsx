import React from 'react';
import { Input, InputProps } from 'reactstrap';
import { CodeItem } from 'src/state/api-models/code';

export type SelectProps = InputProps & {
  options: CodeItem[];
};

export const Select = ({
  options,
  value = '',
  placeholder = 'Select...',
  ...props
}: SelectProps) => {
  const memoOptions = React.useMemo(() => {
    const codeList = options || [];

    return [{ value: '', label: placeholder }, ...codeList];
  }, [options, placeholder]);

  return (
    <Input type="select" value={value} {...props}>
      {memoOptions &&
        memoOptions.map((item: CodeItem) => {
          return (
            <>
              {item.children ? (
                <optgroup key={item.value} label={item.label}>
                  {item.value}
                  {item.children.map((child: CodeItem) => (
                    <option key={child.value} value={child.value}>
                      {child.label}
                    </option>
                  ))}
                </optgroup>
              ) : (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              )}
            </>
          );
        })}
    </Input>
  );
};
