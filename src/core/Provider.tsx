import * as React from "react";
import { ThemeProvider } from "./theming";

export default class Provider extends React.Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
