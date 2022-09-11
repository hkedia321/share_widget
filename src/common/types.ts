export enum AccessLevelEnum {
  FULL_ACCESS = "FULL_ACCESS",
  CAN_EDIT = "CAN_EDIT",
  CAN_VIEW = "CAN_VIEW",
  NO_ACCESS = "NO_ACCESS",
}
export type PeopleType = {
  title: string;
  subTitle: string;
  icon: string;
  id: string;
  accessLevel: AccessLevelEnum;
};

export type PeopleDataObjectType = {
  label: string;
  value: string;
  email: string;
  icon: string;
};
