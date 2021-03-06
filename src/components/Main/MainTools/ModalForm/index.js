import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import DinamicForm from '../../../Tools/Forms/DinamicForm'
import {fieldsClasif,initialValuesClasif} from '../FormsFields/FormClasificacion';

function ModalFormBox({ show , setShow , title , subtitle ,form }) {
  let ActiveForm = {
    initialValues:'',
    fields:''
  }  
  const handleSubmit = async (fields)=>{

    await submitMutation(fields)
  }
  const submitMutation = (fields)=>{
    const response = useMutation(CREATE_CLASIFICACION,{
      variables:{
        fields
      } 
    })
    console.log(response)
  }
  return (
    <Modal
      open={show.open}
    >
      <Modal.Header>Agregar</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
        <Header>{subtitle}</Header>
        <DinamicForm fields={ActiveForm.fields} initialValues={ActiveForm.initialValues} btnName='Registrar' handleSubmit={handleSubmit}/>
        </Modal.Description>
        
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={e => setShow()}>
          Atrás
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalFormBox
