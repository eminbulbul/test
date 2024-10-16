import React, { useEffect, useState } from "react";

interface DataNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  children?: DataNode[];
}

interface Props {
  closeModal: () => void;
  videoUrl?: string;
}

const VideoViewer = ({ closeModal, videoUrl }: Props) => {
  return (
    <>
      <video controls={true} src={videoUrl} />
    </>
  );
};

export default VideoViewer;
