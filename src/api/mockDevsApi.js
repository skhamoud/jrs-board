import { devsData, generateId } from "./dummyData";
const delay = 400; // delay for dummyData

let devs = Object.assign([], devsData);

export default {
  /**
 * Fetches all the developers 
 */
  fetchAllDevs() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve(devs);
      }, delay);
    });
  },

  /** Fetches Particular Developer with id */
  fetchDev(id) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const devToFetch = devs.find(dev => dev._id === id);
        devToFetch ? resolve(devToFetch) : reject(`Developer with id ${id} not found`);
      }, delay);
    });
  },

  /**
   * Saves or Updates a new Developer
   */
  saveDev(dev) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        // check if already present , then just update
        if (dev._id) {
          const existingDevIdx = devs.findIndex(d => d._id === dev._id);
          if (!~existingDevIdx) reject(`Developer with id ${dev._id} not found`);
          devs.splice(existingDevIdx, 1, dev);
        } else {
          // if new generate an _id property
          generateId(dev);
          devs.push(dev);
        }
        resolve(devs);
      }, delay);
    });
  },

  /** Deletes Developer with id*/
  deleteDev(id) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const devToDelete = devs.findIndex(dev => dev._id === id);
        if (!~devToDelete) reject(`Developer with id ${id} not found`);
        devs.splice(devToDelete, 1);
        resolve(devs);
      }, delay);
    });
  }
};
