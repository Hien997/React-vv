import React from 'react';
import DropdownTreeSelect, {
  TreeNode,
  TreeNodeProps,
} from 'react-dropdown-tree-select';
import 'react-dropdown-tree-select/dist/styles.css';
import { FormikConsumer, useField } from 'formik';

const getTreeSelectItems = (options: TreeNodeProps[], value: string[]) => {
  const selectItems = options.map((item) => {
    const node = {
      ...item,
      checked: !!(value && value.find((val) => val === item.value)),
    };

    if (node.children) {
      node.children = getTreeSelectItems(node.children, value);
    }
    return node;
  });

  return selectItems;
};

export const FormikDropdownTreeSelect = ({
  id = '',
  name = '',
  options = [],
  required = false,
  multiple = false,
  autoFocus = true,
  autoComplete = '',
  placeholder = '',
  className = '',
}) => {
  const [, meta, helper] = useField(name);

  const data = React.useMemo(() => {
    return getTreeSelectItems(options, meta.value || meta.initialValue);
  }, [options, meta]);

  const handleChange = (currentNode: TreeNode, selectedNodes: TreeNode[]) => {
    const selectedValue = selectedNodes.map((node) => node.value);
    helper.setValue(selectedValue);
  };
  return (
    <FormikConsumer>
      {() => (
        <DropdownTreeSelect
          id={id}
          texts={{ placeholder }}
          data={data}
          // showDropdown="always"
          // showPartiallySelected
          onChange={handleChange}
        />
      )}
    </FormikConsumer>
  );
};
