import { createStore } from "redux";
import { oneTeaReducer } from "./oneTeaReducer";

export const store = createStore(oneTeaReducer);
