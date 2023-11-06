import { v4 as uuid } from 'uuid';
import { FieldDataType, FormDataType } from '@/types/formRecoilData';

export class FormDataTypeBuilder {
  private _formData: FormDataType = {
    id: 'form-' + uuid(),
    fieldList: [],
  };

  constructor() {
    const defaultHeadingField: FieldDataType = {
      id: 'field-' + uuid(),
      title: '양식',
      subtitle: '',
      description: '',
      formType: 'heading',
      isRequired: false,
      listingType: '',
      index: 0,
    };
    this._formData.fieldList.push(defaultHeadingField);
  }

  build(): FormDataType {
    return this._formData;
  }
}
