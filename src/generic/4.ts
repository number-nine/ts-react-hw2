/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

type Props = {
  title: string;
}

interface IPage {
  pageInfo(): void;
}

class Component<T> {
  constructor(public props:T) {}
}

class Page extends Component<Props> implements IPage {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};