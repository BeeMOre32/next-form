import { v4 as uuid } from 'uuid';
import { FieldDataType, formType } from '@/types/formRecoilData';

/** BaseFieldModel */
class BaseFieldModel implements FieldDataType {
  id: string = 'field-' + uuid();
  title: string = '';
  subtitle: string = '';
  description: string = '';
  formType: formType = 'heading';
  isRequired: boolean = false;
  listingType: string = '';
  index: number = 0;
}

/** FieldModelBuilder */
export class FieldModelBuilder extends BaseFieldModel {
  constructor(props: Partial<FieldDataType>) {
    super();
    Object.assign(this, props); // 'this' refers to the FieldModelBuilder instance
  }
}
