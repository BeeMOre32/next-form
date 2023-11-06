'use client';
import React from 'react';
import { formTypes } from '@/constants/formFieldConstants';
import ListBoxWrapper from '@/component/navbar/ListBoxWrapper';
import { Listbox, ListboxItem } from '@nextui-org/react';
import useField from '@/hooks/useField';

export default function FormFieldList() {
  const formFieldListData = [...formTypes];
  const { currentFormState, addField } = useField();

  console.log(currentFormState);
  return (
    <ListBoxWrapper>
      <Listbox aria-label="Multiple selection example">
        {formFieldListData.map((type, index) => (
          <ListboxItem
            key={type}
            value={type}
            onClick={() =>
              addField({
                formType: type,
                index: index,
                title: '응애',
              })
            }
          >
            {type}
          </ListboxItem>
        ))}
      </Listbox>
    </ListBoxWrapper>
  );
}
