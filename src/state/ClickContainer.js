import { Container } from "unstated";

class ClickContainer extends Container {
 /* state = {
    windowOpen: false
  };

  handleClick() {
    this.setState({ windowOpen: !this.state.windowOpen });
  }*/

  state = {
    count: 0
  };

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
}

export default ClickContainer;