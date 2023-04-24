"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "fire_codes",
      [
        {
          authority_id: 3,
          chapter: "8",
          clause_no: "2.4",
          content:
            "To ensure the provision of the Fire Command Centre (FCC) at the proper location and of adequate size, and its supporting equipment.",
          url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-8-emergency-lighting-voice-communicarion-systems/clause-8.2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 3,
          chapter: "3",
          clause_no: "5.3",
          content:
            "To ensure compliance with the permitted limits of the extent of unprotected openings in any external side of a building.",
          url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-3-structural-fire-precuations/clause-3.5",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 3,
          chapter: "3",
          clause_no: "5.3",
          content:
            "Extent of unprotected openings in an external wall of a building/ compartment can be doubled that of the permitted limits, if building/ compartment is fitted throughout with an automatic sprinkler system.",
          url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-3-structural-fire-precuations/clause-3.5",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 3,
          chapter: "3",
          clause_no: "5.3",
          content:
            "Distance between the external wall and the relevant boundary can be half that of the permitted limits, if building/ compartment is fitted throughout with an automatic sprinkler system.",
          url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-3-structural-fire-precuations/clause-3.5",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 3,
          chapter: "2",
          clause_no: "3.3.b",
          content:
            "No unprotected opening, or combustible material/ construction within 3m horizontally or vertically or adjacent or facing the external exit staricase.",
          url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-2-means-of-escape/clause-2.3",
          created_at: new Date(),
          updated_at: new Date(),
        },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.a",
        //   content:
        //     "A fire engine accessway shall be provided for firefighting appliances.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.a",
        //   content:
        //     "The required length of the fire engine accessway shall be calculated based on the stipulated ranges of the gross cubical extent of the building.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.a",
        //   content: "A fire engine accessway is not required.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.a",
        //   content:
        //     "A fire engine access road shall be provided to within a travel distance of 60m of every point on the projected plan area of the building.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.a",
        //   content:
        //     "A fire engine access road shall be provided to within a travel distance of 45m of every point on the projected plan area of the building.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.a",
        //   content:
        //     "A fire engine accessway shall be located directly below the fire access openings to provide direct reach to the designated fire access panels.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.a",
        //   content:
        //     "The required lenghth of fire engine accessway shall be computed based on the largest Accessible Floor Area of any aboveground floors.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.b",
        //   content:
        //     "The width of fire engine accessway shall be as stipulated in Table 4.2A, 4.2B and 4.2C.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.c",
        //   content:
        //     "The fire engine accessway shall be positioned so that the nearer edge shall be at least 2m or at most 10m from the centre position of the fire access opening, measured horizontally.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.e",
        //   content:
        //     "A dead end fire engine accessway/fire engine access road shall not exceed 46m in length. If exceeding 46m, it shall be provided with cul-de-sac turning facility.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.f",
        //   content:
        //     "The overhead clearance for passage of firefighting appliances shall be at least 4.5m.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "4",
        //   clause_no: "2.2.h",
        //   content:
        //     "Fire engine accessways/fire engine access roads shall be kept clear of obstructions at all times. Plants, trees or other fixtures shall not obstruct the path between the fire engine accessway and fire access openings.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision/clause-4.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "6",
        //   clause_no: "4.1.d",
        //   content:
        //     "All basement storeys irrespective of compartment size shall be provided with an automatic sprinkler system.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-6-firefighting-systems/clause-6.4",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "6",
        //   clause_no: "4.1.d",
        //   content:
        //     "Where the upper storeys of the building are fully compartmented from the basement storeys, the requirement for provision of an automatic sprinkler system for floors above the basement shall be considered separately and in accordance with the relevant clauses.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-6-firefighting-systems/clause-6.4",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "6",
        //   clause_no: "4.1.d",
        //   content:
        //     "Where the basement storey is effectively cross ventilated to prevent smoke logging, the basement storey can be exempted from providing an automatic sprinkler system.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-6-firefighting-systems/clause-6.4",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "6",
        //   clause_no: "4.1.e",
        //   content:
        //     "A fire sprinkler system shall be provided for an atrium space not exceeding 18m in height. For an atrium with ceiling height exceeding 18m (in whole or in part), water monitor, deluge and/or extended-throw sprinkler systems shall be provided to cover the entire atrium space.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-6-firefighting-systems/clause-6.4",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "9",
        //   clause_no: "1.1",
        //   content:
        //     "For PG I building which has four or more levels (including the basement levels and attics), the basement levels shall discharge directly to the external space at grade level.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-9-additional-requirements-for-each-purpose-group/clause-9.1",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "6",
        //   clause_no: "1.4",
        //   content:
        //     "Portable fire extinguishers provided shall be installed and conspicuously marked in accordance with requirements by SS 578.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-6-firefighting-systems/clause-6.1",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "6",
        //   clause_no: "2.8",
        //   content:
        //     "Hydraulic hose reel(s) conforming to the requirements in SS 575 shall be provided for every storey of every building regardless of building height.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-6-firefighting-systems/clause-6.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 3,
        //   chapter: "6",
        //   clause_no: "2.8.d",
        //   content:
        //     "Hose reels shall be sited in prominent and accessible locations within a distance of 5m from the exit door but not inside exit staircases. If there are parts of the floor space that are beyond the 36m coverage (30m hose path and 6m throw) of the hose reel, additional hose reels shall be provided at the common area or at a distance of not more than 5m from the exit access door of a room.",
        //   url: "https://www.scdf.gov.sg/firecode/table-of-content/chapter-6-firefighting-systems/clause-6.2",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fire_codes", null, {});
  },
};
