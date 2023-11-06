import { useRecoilState } from 'recoil';
import { formState } from '@/recoil/formData';
import React from 'react';

export default function useFormField() {
  const [currentFormState, setCurrentFormState] = useRecoilState(formState);

  // const updateFormField = React.useCallback(
  //   (fieldId: string, fieldValue: string) => {
  //     setCurrentFormState((prevFormState) => {
  //       return prevFormState.map((field) => {
  //         if (field.id === fieldId) {
  //           return { ...field, value: fieldValue };
  //         }
  //         return field;
  //       });
  //     });
  //   },
  //   [setCurrentFormState],
  // );

  return {
    currentFormState,
  };
}
