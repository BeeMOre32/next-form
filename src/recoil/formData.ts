import { atom } from 'recoil';
import { FormDataType } from '@/types/formRecoilData';
import { FormDataTypeBuilder } from '@/model/formData.model';

export const formState = atom<FormDataType>({
  key: 'formState',
  default: new FormDataTypeBuilder().build(),
});
