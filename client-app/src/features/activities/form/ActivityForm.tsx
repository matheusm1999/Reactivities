import { Button, Form, Segment } from "semantic-ui-react";


function ActivityForm(){
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title'></Form.Input>
                <Form.Input placeholder='Description'></Form.Input>
                <Form.Input placeholder='Category'></Form.Input>
                <Form.Input placeholder='Date'></Form.Input>
                <Form.Input placeholder='City'></Form.Input>
                <Form.Input placeholder='Venue'></Form.Input>
                <Button floated='right' positive type='submit' content = 'Submit'></Button>
                <Button floated='right' type='submit' content = 'Cancel'></Button>
            </Form>
        </Segment>
    )
}

export default ActivityForm;