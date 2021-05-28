export class FieldBase<T> {
    value?: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    groupKey?: string;
    options: {key: string, value: string}[];
    validations: any[];
  
    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        groupKey?: string;
        options?: {key: string, value: string}[];
        validations?: any[];
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.groupKey = options.groupKey || '';
      this.options = options.options || [];
      this.validations = options.validations || [];
    }
  }