import { PEOPLE_LIST } from "../../common/mock";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Select from "react-select";
import { QuestionCircle } from "react-bootstrap-icons";
import { useAppDispatch } from "../../store/hooks";
import styles from "./styles.module.scss";
import { PeopleDataObjectType } from "../../common/types";
import { addPersons } from "../../store/sharedPeople";
import Button from "react-bootstrap/Button";
import "./style.scss";
import { AccessLevelEnum, PeopleType } from "../../common/types";

type AddPeopleModalProps = {
  isVisible: boolean;
  handleClose: () => void;
};

type PeopleRenderProps = {
  people: PeopleDataObjectType;
};

const PeopleRender = (props: PeopleRenderProps) => {
  const { people } = props;
  return (
    <div className={styles.people}>
      <img src={people.icon} alt="" className={styles.icon} />
      <h5 className={styles.name}>{people.label}</h5>
    </div>
  );
};

const AddPeopleModal = (props: AddPeopleModalProps) => {
  const { isVisible, handleClose } = props;
  const [selectedPeople, setSelectedPeople] = useState<PeopleDataObjectType[]>(
    []
  );
  const dispatch = useAppDispatch();

  const formatOptionLabel = (peopleItem: PeopleDataObjectType) => (
    <PeopleRender people={peopleItem} />
  );

  const handleOnSubmit = () => {
    const people = selectedPeople.map(
      (item) =>
        ({
          title: item.label,
          subTitle: item.email,
          icon: item.icon,
          id: item.value,
          accessLevel: AccessLevelEnum.CAN_VIEW,
        } as PeopleType)
    );
    dispatch(addPersons(people));
    handleClose();
    setSelectedPeople([]);
  };
  return (
    <>
      <Modal centered show={isVisible} onHide={handleClose}>
        <Modal.Body className={styles.modalBody}>
          <div className={styles.header}>
            <Select
              menuIsOpen
              classNamePrefix="select"
              className={styles.select}
              value={selectedPeople}
              isMulti
              formatOptionLabel={formatOptionLabel}
              options={PEOPLE_LIST}
              onChange={(values) =>
                setSelectedPeople(values as PeopleDataObjectType[])
              }
            />
            <Button
              variant="light"
              className={styles.inviteBtn}
              onClick={handleOnSubmit}
            >
              Invite
            </Button>
          </div>

          <div className={styles.footer}>
            <h6 className={styles.learnText}>
              <QuestionCircle className={styles.questionCircle} />
              learn about sharing
            </h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddPeopleModal;
