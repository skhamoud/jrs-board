import { devsData } from "../dummyData";
import devsApi from "../mockDevsApi";

const _newDev = {
  picture: "http://placehold.it/32x32",
  education: [
    {
      university: "Laborum Nisi University, Delshire",
      degree: "MA in Adipisicing Cupidatat",
      year: 2014
    },
    {
      university: "Qui Aliquip University, Gibsonia",
      degree: "BS in Consequat Et",
      year: 2016
    }
  ],
  name: "Sid Amarha",
  city: "Warren",
  skills: ["css", "php", "html", "js"],
  company: "VELITY",
  title: "Backend Developer",
  experience: [
    {
      position: "Ex Excepteur",
      company: "EZENTIA",
      time: "6 months"
    },
    {
      position: "Tempor Dolore",
      company: "XYQAG",
      time: "12 months"
    }
  ],
  summary:
    " Ollamco sint anim proident occaecat. Qui culpa duis ullamco irure commodo sunt aliquip culpa dolore laborum magna sit laboris anim.\r\n Incididunt occaecat tempor aliquip voluptate culpa culpa aliquip proident. Nisi ullamco aliquip Lorem pariatur ad dolor elit eu exercitation. Nostrud sunt sint",
  email: "nolantownsend@velity.com"
};

describe("Developers Api", () => {
  let _prevLen = devsData.length;

  describe("fetchAllDevs", () =>
    it("should return Array of Developers", () =>
      devsApi.fetchAllDevs().then(d => expect(d).toMatchSnapshot())));

  describe("fetchDev", () =>
    it("should fetch a single Developer object", () => {
      return devsApi.fetchDev(devsData[1]._id).then(d => expect(d).toMatchSnapshot());
    }));

  describe("deleteDev", () =>
    it("should delete the developer ", () => {
      expect.assertions(2);
      return devsApi.deleteDev(devsData[3]._id).then(devs => {
        expect(devs).toHaveLength(_prevLen - 1);
        _prevLen = devs.length; // update expected mock data length
        expect(devs[3]).not.toEqual(devsData[3]);
      });
    }));

  describe("saveDev", () => {
    it("should update dev if already exists", () => {
      // use 3rd dev to test the update dev functionality of the api
      const _existingDev = Object.assign({}, _newDev, { _id: devsData[2]._id });
      return devsApi.saveDev(_existingDev).then(devs => {
        expect(devs).toHaveLength(_prevLen);
        expect(devs[2]).toEqual(_existingDev);
      });
    });

    it("should add an dev if new", () => {
      return devsApi.saveDev(_newDev).then(devs => {
        expect(devs).toHaveLength(_prevLen + 1);
        _prevLen = devs.length;
        expect(devs[devs.length - 1]).toEqual(_newDev);
      });
    });
  });
});
