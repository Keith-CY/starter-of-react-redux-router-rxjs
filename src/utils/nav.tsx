export function goTo(url: string) {
  return () => {
    this.props.history.push(url)
  }
}
