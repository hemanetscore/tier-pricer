import React from "react";
import { Card, Page } from "@shopify/polaris";

export default class App extends React.Component {
  render() {
    return (
      <Page sectioned>
        <Card title="After Installation settings" sectioned>
          <p>
            Thank you for choosing our app. After installation please set the
            app status to active. Then add your tier prices as variants named
            'Rate' or 'rate'. They will appear in the prodcut single page. For
            any help please free to contact us at 'support@netscoretech.com'
          </p>
        </Card>
      </Page>
    );
  }
}
