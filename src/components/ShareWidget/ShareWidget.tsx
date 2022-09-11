import react, { useState } from "react";
import Button from "react-bootstrap/Button";
import { ShareFill } from "react-bootstrap-icons";
import SharePopup from "../SharePopup";

const ShareWidget = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  return (
    <>
      <Button variant="dark" onClick={() => setIsShareOpen((prev) => !prev)}>
        Share <ShareFill />
      </Button>
      {isShareOpen && <SharePopup />}
    </>
  );
};

export default ShareWidget;
