import { offersData } from "../dummyData";
import offersApi from "../mockOffersApi";
const _newOffer = {
  city: "MBOUD",
  description:
    "Ipsum magna commodo est et veniam qui nisi  irure sint incididunt minim aliqua. Officia ad voluptate pariatur id cillum dolor duis nostrud amet nostrud aute occaecat velit consequat. Nulla veniam aute ut esse mollit pariatur nostrud cupidatat adipisicing. Elit sit mollit adipisicing sint eu aliqua id aliqua laborum officia tempor fugiat cupidatat.\r\nOfficia ex quis nostrud eu in adipisicing minim nostrud sit labore. Occaecat laborum Lorem ea incididunt in enim aliqua incididunt est sunt irure.",
  title: "Fullstack Developer",
  url: "https://Muriaxo.io",
  company: "COASH",
  summary:
    "Sunt cupidatat occaecat amet quis. Esse quis id excepteur laboris. Amet veniam dolor excepteur ad Lorem minim sit ullamco voluptate laborum incididunt. Consectetur aliquip exercitation commodo occaecat tempor quis elit. Officia non labore ex excepteur ipsum Lorem commodo id minim est eu cillum esse. Culpa ut dolor deserunt incididunt.\r\n",
  skills: ["css", "js", "Node"],
  location: "Nema",
  logo: "http://placehold.it/32x32",
  email: "benahi@coash.com"
};

describe("Offers Api", () => {
  let _prevlen = offersData.length;

  describe("fetchAllOffers", () => {
    it("should fetch array of Data", () => {
      return offersApi.fetchAllOffers().then(d => expect(d).toMatchSnapshot());
    });
  });

  describe("fetchOffer", () => {
    it("should fetch a single offer object", () => {
      return offersApi
        .fetchOffer(offersData[1]._id)
        .then(d => expect(d).toMatchSnapshot());
    });
  });

  describe("deleteOffer", () => {
    it("should delete offer ", () => {
      expect.assertions(2);
      return offersApi.deleteOffer(offersData[3]._id).then(offers => {
        expect(offers).toHaveLength(_prevlen - 1);
        _prevlen = offers.length; // update expected mock data length
        expect(offers[3]).not.toEqual(offersData[3]);
      });
    });
  });

  describe("saveOffer", () => {
    it("should update offer if it already exists", () => {
      // use 3rd offer to test the update offer functionality of the api
      const _existingOffer = Object.assign({}, _newOffer, { _id: offersData[2]._id });
      return offersApi.saveOffer(_existingOffer).then(offers => {
        expect(offers).toHaveLength(_prevlen);
        expect(offers[2]).toEqual(_existingOffer);
      });
    });

    it("should add an offer if new", () => {
      return offersApi.saveOffer(_newOffer).then(offers => {
        expect(offers).toHaveLength(_prevlen + 1);
        _prevlen = offers.length;
        expect(offers[offers.length - 1]).toEqual(_newOffer);
      });
    });
  });
});
