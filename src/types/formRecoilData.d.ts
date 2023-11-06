import { formType } from '@/types/formFieldConstants';

declare type fieldDataType = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  formType: formType;
  isRequired: boolean;
  listingType: string;
};

declare type formDatType = {
  id: string;
  fieldList: fieldDataType[];
};
