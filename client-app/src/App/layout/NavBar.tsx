import { Button, Container, Menu } from 'semantic-ui-react';

function NavBar(){
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}></img>
                    Reactivities
                </Menu.Item>
                <Menu.Item name = 'Activities'></Menu.Item>
                <Menu.Item>
                    <Button positive content='Create Activity'></Button>
                </Menu.Item>
            </Container>

        </Menu>
    )
}

export default NavBar;