import { offersData, generateId } from "./dummyData";
const delay = 400; // delay for dummyData

let offers = Object.assign([], offersData);
export default {
  /**
 * Fetches all the developers 
 */
  fetchAllOffers() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve(offers);
      }, delay);
    });
  },

  /** Fetches Particular Offer wit id */
  fetchOffer(id) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const offerToFetch = offers.find(o => o._id === id);
        offerToFetch ? resolve(offerToFetch) : reject(`Offer with id ${id} not found`);
      }, delay);
    });
  },

  /**
   * Saves or Updates a new Offer
   */
  saveOffer(offer) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        // check if already present , then just update
        if (offer._id) {
          const existingOfferIdx = offers.findIndex(o => o._id === offer._id);
          if (!~existingOfferIdx) reject(`Offer with id ${offer._id} not found`);
          offers.splice(existingOfferIdx, 1, offer);
        } else {
          // if new generate an _id property
          generateId(offer);
          offers.push(offer);
        }
        resolve(offers);
      }, delay);
    });
  },

  /** Deletes offer with id*/
  deleteOffer(id) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const offerToDelete = offers.findIndex(offer => offer._id === id);
        if (!~offerToDelete) reject(`Offer with id ${id} not found`);
        offers.splice(offerToDelete, 1);
        resolve(offers);
      }, delay);
    });
  }
};
