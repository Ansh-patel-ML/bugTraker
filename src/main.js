import store from "./store/store";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { addUser } from "./store/users";

store.dispatch(addUser({ name: "Ansh" }));
store.dispatch(addUser({ name: "Nil" }));
store.dispatch(projectAdded({ description: "News Scrape" }));
store.dispatch(bugAdded({ description: "Ansh" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 1 }));
store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));
console.log(getUnresolvedBugs(store.getState()));
console.log(getBugsByUser(1)(store.getState()));
