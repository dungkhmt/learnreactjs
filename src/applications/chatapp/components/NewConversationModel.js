import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

export default function NewConversationModel({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();
  function handleSubmit(e) {
    e.preventDefault();

    createConversation(selectedContactIds);

    closeModal();
  }
  function handleChangeCheckBox(contactId) {
    setSelectedContactIds((preSelectedContactIds) => {
      if (preSelectedContactIds.includes(contactId)) {
        return preSelectedContactIds.filter((prevvId) => {
          return contactId !== prevvId;
        });
      } else {
        return [...preSelectedContactIds, contactId];
      }
    });
  }
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleChangeCheckBox(contact.id)}
              ></Form.Check>
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
