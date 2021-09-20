import React from "react";
import { Card } from "@shopify/polaris";

export default class App extends React.Component {
  render() {
    return (
      <Card title="Online store dashboard" sectioned>
        <p>View a summary of your online store’s performance.</p>
      </Card>
    );
  }
}
