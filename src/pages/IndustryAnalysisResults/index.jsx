import React from 'react';
import axios from 'axios';
import { CompanyAnalysisContainer } from './styles';

class DashboardPage extends React.Component {
    componentDidMount() {
      // this is needed, because InfiniteCalendar forces window scroll
      window.scrollTo(0, 0);
    }
  
    render() {
      const primaryColor = getColor('primary');
      const secondaryColor = getColor('secondary');
  
      return (
        <Page
          className="DashboardPage"
          title="Dashboard"
          breadcrumbs={[{ name: 'Dashboard', active: true }]}
        >
          <Row>
            <Col lg={3} md={6} sm={6} xs={12}>
              <NumberWidget
                title="Total Profit"
                subtitle="This month"
                number="9.8k"
                color="secondary"
                progress={{
                  value: 75,
                  label: 'Last month',
                }}
              />
            </Col>
  
            <Col lg={3} md={6} sm={6} xs={12}>
              <NumberWidget
                title="Monthly Visitors"
                subtitle="This month"
                number="5,400"
                color="secondary"
                progress={{
                  value: 45,
                  label: 'Last month',
                }}
              />
            </Col>
  
            <Col lg={3} md={6} sm={6} xs={12}>
              <NumberWidget
                title="New Users"
                subtitle="This month"
                number="3,400"
                color="secondary"
                progress={{
                  value: 90,
                  label: 'Last month',
                }}
              />
            </Col>
  
            <Col lg={3} md={6} sm={6} xs={12}>
              <NumberWidget
                title="Bounce Rate"
                subtitle="This month"
                number="38%"
                color="secondary"
                progress={{
                  value: 60,
                  label: 'Last month',
                }}
              />
            </Col>
          </Row>
  
          <Row>
            <Col lg="8" md="12" sm="12" xs="12">
              <Card>
                <CardHeader>
                  실시간 주가{' '}
                  <small className="text-muted text-capitalize">2022</small>
                </CardHeader>
                <CardBody>
                  <Line data={chartjs.line.data} options={chartjs.line.options} />
                </CardBody>
              </Card>
            </Col>
  
          </Row>
  
  
          <Row>
            <Col md="6" sm="12" xs="12">
              <Card>
                <CardHeader>New Products</CardHeader>
                <CardBody>
                  {productsData.map(
                    ({ id, image, title, description, right }) => (
                      <ProductMedia
                        key={id}
                        image={image}
                        title={title}
                        description={description}
                        right={right}
                      />
                    ),
                  )}
                </CardBody>
              </Card>
            </Col>
  
          </Row>
  
        </Page>
      );
    }
  }
  export default DashboardPage;