import React from "react";
import { Card, CardBody, CardHeader, Container, Row, Col } from "reactstrap";
import axios from "axios";

class Backend extends React.Component {
  state = {
    // user: [],
    post: [],
  };
    // componentDidMount() {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       this.setState({ user: data });
    //     });
    // }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const post = res.data;
      console.log(res);
      this.setState({ post });
    });
  }

  render() {
    return (
      <>
        {/* <Container>
          <Row>
            {this.state.user.map((users) => (
              <Col md="4">
                <Card key={users.id}>
                  <CardHeader>
                    <h2>
                        {users.name}
                    </h2>
                  </CardHeader>
                  <CardBody>
                    <h5>
                    {users.phone}
                    </h5>
                    <p>{users.username}</p>
                    <h6>{users.email}</h6>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container> */}
        <Container>
          <Row>
            {this.state.post.map((posts) => (
              <Col md="4">
                <Card key={posts.id}>
                  <CardHeader>
                    <h2>
                        {posts.title}
                    </h2>
                  </CardHeader>
                  <CardBody>
                    <h5>
                    {posts.body}
                    </h5>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default Backend;
