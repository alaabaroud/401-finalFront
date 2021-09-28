import React, { Component } from 'react';
import { Button, Modal,Form} from 'react-bootstrap'


class UpdateModal extends Component {
    render() {
        return (
            <div>
                <Modal show= {this.props.show} onHide= {this.props.hideUpdate}>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>


  <Form onSubmit={(event) => this.props.updateFav(event)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>image</Form.Label>
    <Form.Control type="text" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>price</Form.Label>
    <Form.Control type="text" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal>
            </div>
        );
    }
}

export default UpdateModal;