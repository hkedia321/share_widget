import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { AccessItemPropsType } from "./AccessItem.types";
import { useAppDispatch } from "../../store/hooks";
import { changeAccessLevel } from "../../store/sharedPeople";
import { AccessLevelEnum } from "../../common/types";
import { ACCESS_LEVEL_LABELS } from "./AccessItem.constants";
import styles from "./styles.module.scss";

const AccessItem = (props: AccessItemPropsType) => {
  const { icon, title, subTitle, accessLevel, id } = props;
  const dispatch = useAppDispatch();

  const handleClick = (value: any) => {
    dispatch(changeAccessLevel({ id, accessLevel: value as AccessLevelEnum }));
  };

  return (
    <div className={styles.container}>
      <img src={icon} className={styles.icon} alt="" />
      <div>
        <h5 className={styles.mainHeading}>{title}</h5>
        <h6 className={styles.subHeading}>{subTitle}</h6>
      </div>
      <div className={styles.accessList}>
        <DropdownButton
          variant="outline"
          title={ACCESS_LEVEL_LABELS[accessLevel]}
          className={styles.dropdownButton}
          onSelect={handleClick}
        >
          {Object.keys(AccessLevelEnum).map((item: string) => (
            <Dropdown.Item eventKey={item} active={item === accessLevel}>
              {ACCESS_LEVEL_LABELS[item]}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
};

export default AccessItem;
