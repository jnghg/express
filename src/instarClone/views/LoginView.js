import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class LoginView extends React.PureComponent {

    render() {

        const { 
            getUser,        // 유저정보
            onChangeLogin,  // Input onChange
            sendLogin,      // send login
        } = this.props;

        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='https://react.semantic-ui.com/logo.png' /> Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input 
                        fluid icon='user' 
                        iconPosition='left' 
                        placeholder='E-mail address'
                        name="email"
                        value={getUser.email}
                        onChange={onChangeLogin}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name="password"
                        value={getUser.password}
                        onChange={onChangeLogin}
                    />

                    <Button color='teal' fluid size='large' onClick={sendLogin}>
                        Login
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    Sign Up
                </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default LoginView;