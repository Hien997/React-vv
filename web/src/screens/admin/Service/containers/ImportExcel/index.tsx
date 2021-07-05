import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ImportExcelView from '../../views/ImportExcel';
import { useMemoSelector } from 'src/hooks';
import { ServiceImportRequest } from '../../../../../state/api-models/service';
import { actions, selectors } from '../../../../../state/ducks/service';

type Props = {
  onCancel: Function;
};

const ImportExcel: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const [isSubmit, setIsSubmit] = useState(false);

  const getServicceImports = useMemoSelector(selectors.getServicceImports);

  useEffect(() => {
    if (isSubmit && !getServicceImports.loading) {
      if (getServicceImports.response?.success) {
        alert('Success');
      } else {
        alert('Fail');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getServicceImports]);

  const importExcel = useCallback(
    (file: File) => {
      const request: ServiceImportRequest = {
        file,
      };
      dispatch(actions.importService.request(request));
    },
    [dispatch]
  );

  const importProps = {
    ...props,
    importExcel,
    setIsSubmit,
  };

  return <ImportExcelView {...importProps} />;
};
export default React.memo(ImportExcel);
