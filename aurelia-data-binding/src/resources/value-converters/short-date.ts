export class ShortDateValueConverter {
  toView(value) {
    return (value as Date).toLocaleDateString();
  }
}
