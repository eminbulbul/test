import React, { useState } from "react";
import { Button, Modal } from "antd";

interface prop {
  title?: string;
  content?: string;
}

const ModalComponent: React.FC<prop> = ({ title, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        className="bg-white text-black font-bold p-0 border-none shadow-none hover:bg-white hover:text-black"
        onClick={showModal}
      >
        {title}
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          className="mb-2.5 child:text-heading"
          dangerouslySetInnerHTML={{
            __html: content || "",
          }}
        />
      </Modal>
    </>
  );
};

export default ModalComponent;
