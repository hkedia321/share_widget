import { AccessLevelEnum, PeopleType, PeopleDataObjectType } from "./types";
import oslashIcon from "./oslash.svg";
import wadeIcon from "./wade.svg";
import arleneIcon from "./arlene.svg";

export const EVERYONE_PEOPLE_OBJ = {
  title: "Everyone at OSlash",
  subTitle: "25 workspace members",
  icon: oslashIcon,
  id: "0",
  accessLevel: AccessLevelEnum.NO_ACCESS,
} as PeopleType;

export const PEOPLE_LIST = [
  {
    label: "Wade Cooper",
    email: "wade@oslash.com",
    value: "1",
    icon: wadeIcon,
  },
  {
    label: "Arlene Mccoy",
    email: "arlene@oslash.com",
    value: "2",
    icon: arleneIcon,
  },
  {
    label: "Joffery Archer",
    email: "joffery@oslash.com",
    value: "3",
    icon: wadeIcon,
  },
] as PeopleDataObjectType[];
