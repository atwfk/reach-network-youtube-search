declare namespace ITextInput {
  export interface IProps {
    name: string;
    id: string;
    placeholder: string;
    value: string;
    changed: (value: string) => void;
    deleteText: () => void;
  }
}

export { ITextInput };
