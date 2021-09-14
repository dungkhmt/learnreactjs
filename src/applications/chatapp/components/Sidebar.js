import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import NewContactModel from "./NewContactModel";
import NewConversationModel from "./NewConversationModel";

const CONVERSATION_KEY = "conversations";
const CONTACT_KEY = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  const conversationOpen = activeKey === CONVERSATION_KEY;
  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}> Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACT_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>

          <Tab.Pane eventKey={CONTACT_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your id is: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)}>
          New {conversationOpen ? "Conversation" : " Contact"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationOpen ? (
          <NewConversationModel closeModal={closeModal} />
        ) : (
          <NewContactModel closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
