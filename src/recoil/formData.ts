import { atom } from 'recoil';
import { fieldDataType, formDatType } from '@/types/formRecoilData';
import { FormDataTypeBuilder } from '@/model/formDataBuilder';

export const formState = atom<formDatType>({
  key: 'formState',
  default: new FormDataTypeBuilder().build(),
});
