import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PeopleType, AccessLevelEnum } from "../common/types";
import { EVERYONE_PEOPLE_OBJ } from "../common/mock";
import { RootState } from "./index";

export interface SharedPeopleState {
  people: PeopleType[];
}

const initialState: SharedPeopleState = {
  people: [EVERYONE_PEOPLE_OBJ],
};

export const sharePeopleSlice = createSlice({
  name: "sharePeople",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addPersons: (state, action: PayloadAction<PeopleType[]>) => {
      state.people = [...state.people, ...action.payload];
    },
    changeAccessLevel: (
      state,
      action: PayloadAction<{ id: string; accessLevel: AccessLevelEnum }>
    ) => {
      state.people = state.people.map((item) => {
        if (item.id === action.payload.id) {
          item.accessLevel = action.payload.accessLevel;
        }
        return item;
      });
    },
  },
});

export const selectPeople = (state: RootState) => state.peopleReducer.people;

export const { addPersons, changeAccessLevel } = sharePeopleSlice.actions;

export default sharePeopleSlice.reducer;
