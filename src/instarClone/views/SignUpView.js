import React, { Fragment } from 'react';
import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    Input,
    Form,
    Button,
  } from 'semantic-ui-react'

class SignUpView extends React.PureComponent {

    render() {

        return (
            <Fragment>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                        <Image size='mini' src='https://react.semantic-ui.com/logo.png' style={{ marginRight: '1.5em' }} />
                            Portfolio
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>
                    </Container>
                    </Menu>

                    <Container text style={{ marginTop: '7em' }}>
                        <Header as='h1'>회원가입</Header>
                        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <Input 
                                    placeholder="이름"
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <Input 
                                    placeholder="example@gmail.com"
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <Input 
                                    placeholder="Password"
                                />
                            </Form.Field>
                            <Form.Field>
                            </Form.Field>
                            <Button primary>가입</Button>
                        </Form>
                    </Container>

                <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                    <Container text textAlign='center'>
                        Welcome
                    </Container>
                </Segment>
            </Fragment>
        )
    }
}

export default SignUpView;