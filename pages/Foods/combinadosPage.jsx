import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function combinadosPage() {
    const [open, setOpen] = React.useState(false)
  
    return (
      <div>

        <Navbar2 />

          <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Pollo</Button>}
      >
        <Modal.Header>Combinados</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src='/images/combinadoCañon.jpeg' wrapped />
          <Modal.Description>
            <Header>Pollo</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Atras
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Cañon</Button>}
      >
        <Modal.Header>Combinados</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src='/images/combinadoCañon.jpeg' wrapped />
          <Modal.Description>
            <Header>Cañon</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Atras
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>

      </div>
    )
  }
  
  export default combinadosPage;