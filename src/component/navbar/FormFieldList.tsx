'use client';
import React from 'react';
import { formTypes } from '@/constants/formFieldConstants';
import ListBoxWrapper from '@/component/navbar/ListBoxWrapper';
import { Listbox, ListboxItem } from '@nextui-org/react';
import useFormField from '@/hooks/useFormField';

export default function FormFieldList() {
  const formFieldListData = [...formTypes];
  const { currentFormState } = useFormField();
  console.log(currentFormState);
  return (
    <ListBoxWrapper>
      <Listbox aria-label="Multiple selection example">
        {formFieldListData.map((type, index) => (
          <ListboxItem key={type} value={type}>
            {type}
          </ListboxItem>
        ))}
      </Listbox>
    </ListBoxWrapper>
  );
}
