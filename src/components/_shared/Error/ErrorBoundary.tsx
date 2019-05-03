import * as React from 'react';
interface OwnState {
  hasError: boolean;
}
export class ErrorBoundary extends React.Component {
  public state: OwnState = { hasError: false };
  constructor(props: any) {
    super(props);
  }

  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
