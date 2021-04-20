import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function aromaticasPage() {
    const [open, setOpen] = React.useState(false)
  
    return (

        <div>

    
        <Navbar2 />

        <div className='botonesAromaticas'>

        <Modal className='aromaticaFA'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Frutos Amarillos</Button>}
      >
        <Modal.Header>Selecciona Una</Modal.Header>
        <Modal.Content image>
          <Image size='mini' src='/images/cocteles.jpeg' wrapped />
          <Modal.Description>
            <Header>Frutos Amarillos</Header>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Atras
          </Button>

        </Modal.Actions>
      </Modal>

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Frutos Rojos</Button>}
      >
        <Modal.Header>Selecciona Una</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src='/images/cocteles.jpeg' wrapped />
          <Modal.Description>
            <Header>Frutos Rojos</Header>
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
        </Modal.Actions>
      </Modal>

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Genjibre y HierbaBuena</Button>}
      >
        <Modal.Header>Selecciona Una</Modal.Header>
        <Modal.Content image>
          <Image size='small' src='/images/bellaggio.jpeg' wrapped />
          <Modal.Description>
            <Header>Genjibre y HierbaBuena</Header>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Atras
          </Button>
        </Modal.Actions>
      </Modal>

        </div>

     

        </div>

      
    )
  }
  
  export default aromaticasPage;