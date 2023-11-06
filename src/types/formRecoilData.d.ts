import { formTypes } from '@/constants/formFieldConstants';

declare type FieldDataType = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  formType: formType;
  isRequired: boolean;
  listingType: string;
  index: number;
};

declare type FormDataType = {
  id: string;
  fieldList: FieldDataType[];
};

declare type formType = (typeof formTypes)[number];
