import App from "../App";
import { Provider } from "react-redux";
import { store } from "../store";

const story = {
  title: "ShareWidget",
  component: App,
  decorators: [
    (Story: any) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default story;

const Template = () => <App />;

export const Primary = Template.bind({});
