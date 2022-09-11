import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { QuestionCircle, Link45deg } from "react-bootstrap-icons";
import { useAppSelector } from "../../store/hooks";
import { selectPeople } from "../../store/sharedPeople";
import styles from "./styles.module.scss";
import worldIcon from "./worldIcon.svg";
import AccessItem from "../AccessItem";
import AddPeopleModal from "../AddPeopleModal";

const SharePopup = () => {
  const people = useAppSelector(selectPeople);
  const [isAddPeopleModalVisible, setIsAddPeopleModalVisible] = useState(false);

  const handleAddPeopleClick = () => {
    setIsAddPeopleModalVisible(true);
  };

  const handleAddPeopleModalClose = () => {
    setIsAddPeopleModalVisible(false);
  };

  return (
    <>
      <div className={styles.sharePopup}>
        <div className={styles.header}>
          <img src={worldIcon} className={styles.headerIcon} alt="" />
          <div>
            <h5 className={styles.mainHeading}>Share to web</h5>
            <h6 className={styles.subHeading}>
              Publish and share link with anyone
            </h6>
          </div>
          <div className={styles.switchContainer}>
            <Form>
              <Form.Check
                className={styles.checkbox}
                type="switch"
                id="custom-switch"
              />
            </Form>
          </div>
        </div>
        <div className={styles.body}>
          <InputGroup className="mb-3" onClick={handleAddPeopleClick}>
            <Form.Control placeholder="People, emails, groups" />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              className={styles.inviteBtn}
            >
              Invite
            </Button>
          </InputGroup>
          <div className={styles.accessListContainer}>
            {people.map((item) => (
              <AccessItem {...item} />
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <h6 className={styles.learnText}>
            <QuestionCircle className={styles.questionCircle} />
            learn about sharing
          </h6>
          <Button variant="light" className={styles.copyLinkBtn}>
            <Link45deg />
            Copy Link
          </Button>
        </div>
      </div>
      <AddPeopleModal
        isVisible={isAddPeopleModalVisible}
        handleClose={handleAddPeopleModalClose}
      />
    </>
  );
};

export default SharePopup;
