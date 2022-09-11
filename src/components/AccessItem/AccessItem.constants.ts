import { AccessLevelEnum } from "../../common/types";

export const ACCESS_LEVEL_LABELS = {
  [AccessLevelEnum.CAN_EDIT]: "Can edit",
  [AccessLevelEnum.CAN_VIEW]: "Can view",
  [AccessLevelEnum.FULL_ACCESS]: "Full access",
  [AccessLevelEnum.NO_ACCESS]: "No access",
} as Record<string, string>;
