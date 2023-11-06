import { useRecoilState } from 'recoil';
import { formState } from '@/recoil/formData';
import React from 'react';
import { FieldDataType } from '@/types/formRecoilData';
import { FieldModelBuilder } from '@/model/field.model';

export default function useField() {
  const [currentFormState, setCurrentFormState] = useRecoilState(formState);

  const addField = React.useCallback(
    (data: Partial<FieldDataType>) => {
      setCurrentFormState((current) => {
        return {
          ...current,
          fieldList: [...current.fieldList, new FieldModelBuilder(data)],
        };
      });
    },
    [setCurrentFormState],
  );

  return {
    currentFormState,
    addField,
  };
}
