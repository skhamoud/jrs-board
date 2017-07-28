import { devsData, generateId } from "./dummyData";
const delay = 400; // delay for dummyData

export default {
  /**
 * Fetches all the developers 
 */
  fetchAllDevs(delay) {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve(devsData);
      }, delay);
    });
  },

  /** Fetches Particular Offer wit id */
  fetchDev(id) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const devToFetch = devsData.find(o => o._id === id);
        !~devToFetch ? resolve(devToFetch) : reject("dev Not Found");
      }, delay);
    });
  },
  /**
   * Saves or Updates a new Offer
   */
  addDev(dev) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        // check if already present , then just update
        if (dev._id) {
          const existingdevIdx = devsData.findIndex(o => o._id === dev._id);
          if (~existingdevIdx) reject("No Dev with that _id");
          devsData.splice(existingdevIdx, 1, dev);
        } else {
          // if new generate an _id property
          generateId(dev);
          devsData.push(dev);
        }
        resolve(devsData);
      }, delay);
    });
  },

  /** Deletes offer with id*/
  deleteDev(id) {
    return new Promise(resolve => {
      setTimeout(function() {
        devsData = devsData.filter(o => o._id !== id);
        resolve(devsData);
      }, delay);
    });
  }
};
