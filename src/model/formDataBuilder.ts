import { fieldDataType, formDatType } from '@/types/formRecoilData';
import { v4 as uuid } from 'uuid';

export class FormDataTypeBuilder {
  private _formData: formDatType = {
    id: 'form-' + uuid(),
    fieldList: [],
  };

  constructor() {
    const defaultHeadingField: fieldDataType = {
      id: 'field-' + uuid(),
      title: '양식',
      subtitle: '',
      description: '',
      formType: 'heading',
      isRequired: false,
      listingType: '',
    };
    this._formData.fieldList.push(defaultHeadingField);
  }

  build(): formDatType {
    return this._formData;
  }
}
