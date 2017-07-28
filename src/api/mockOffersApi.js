import { offersData, generateId } from "./dummyData";
const delay = 400; // delay for dummyData

export default {
  /**
 * Fetches all the developers 
 */
  fetchAllOffers() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve(offersData);
      }, delay);
    });
  },

  /** Fetches Particular Offer wit id */
  fetchOffer(id) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const offerToFetch = offersData.find(o => o._id === id);
        !~offerToFetch ? resolve(offerToFetch) : reject("Offer Not Found");
      }, delay);
    });
  },

  /**
   * Saves or Updates a new Offer
   */
  addOffer(offer) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        // check if already present , then just update
        if (offer._id) {
          const existingOfferIdx = offersData.findIndex(o => o._id === offer._id);
          if (~existingOfferIdx) reject("No Offer with that _id");
          offersData.splice(existingOfferIdx, 1, offer);
        } else {
          // if new generate an _id property
          generateId(offer);
          offersData.push(offer);
        }
        resolve(offersData);
      }, delay);
    });
  },

  /** Deletes offer with id*/
  deleteOffer(id) {
    return new Promise(resolve => {
      setTimeout(function() {
        offersData = offersData.filter(o => o._id !== id);
        resolve(offersData);
      }, delay);
    });
  }
};
