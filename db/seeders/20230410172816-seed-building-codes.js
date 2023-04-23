"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "building_codes",
      [
        {
          authority_id: 2,
          chapter: "E",
          clause_no: "3.3.1",
          content:
            "The clear width of every staircase shall not be less than 1000 mm.",
          page_no: 23,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "E",
          clause_no: "3.4.1",
          content: "The height of a riser shall not be more than 175 mm.",
          page_no: 24,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "E",
          clause_no: "3.4.2.b",
          content:
            "The width of a tread of a staircase shall not be less than 250 mm.",
          page_no: 25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "E",
          clause_no: "3.4.2.c",
          content:
            "The width of a tread of a staircase shall not be less than 275 mm.",
          page_no: 25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "E",
          clause_no: "3.5.2",
          content:
            "Except for spiral staircases, an intermediate landing shall be provided in between floor levels at intervals of not more than 18 risers.",
          page_no: 25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "E",
          clause_no: "3.5.3",
          content:
            "The clear width of any landing shall not be less than 1000 mm.",
          page_no: 25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // {
        //   authority_id: 2,
        //   chapter: "E",
        //   clause_no: "3.6.1",
        //   content:
        //     "A handrail shall be provided on at least one side of the flight of any staircase with more than 5 steps.",
        //   page_no: 27,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "E",
        //   clause_no: "3.6.2",
        //   content:
        //     "The height of the handrail shall be between 750 mm and 1000 mm above the pitch line.",
        //   page_no: 27,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "E",
        //   clause_no: "3.7.1",
        //   content:
        //     "Stair nosing must not project beyond the face of the riser and the riser may be vertical or have a splay backwards up to a maximum 25 mm.",
        //   page_no: 29,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "E",
        //   clause_no: "3.7.2",
        //   content:
        //     "All steps must be fitted with nosing strips between 50 mm and 65 mm in width.",
        //   page_no: 29,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "E",
        //   clause_no: "3.7.3",
        //   content:
        //     "Nosing strips must be of a colour that contrasts with the steps to make the drop edge of each step clearly visible.",
        //   page_no: 29,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "N",
        //   clause_no: "3.2",
        //   content:
        //     "Float (or annealed) glass, heat strengthened glass, laminated glass or other type of glass that is not prone to spontaneous breakage shall be used as the glass material at height (2.4m or more).",
        //   page_no: 51,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "N",
        //   clause_no: "3.3",
        //   content:
        //     "If glass types that are prone to spontaneous breakage is used in the parts of the building located at a height of 2.4m or more, the design of the building portion shall have sufficient safety provisions.",
        //   page_no: 51,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "P",
        //   clause_no: "3.2",
        //   content:
        //     "Glass for building works shall not have a daylight reflectance not exceeding 20%.",
        //   page_no: 54,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "I",
        //   clause_no: "3.2.5",
        //   content:
        //     "For roofs with skylight, the roof thermal transfer value shall not exceed 50 W/m2. For roofs without skylight, the average thermal transmittance (U-value) for the gross area of the roof shall not exceed limits prescribed in the code for corresponding weight groups.",
        //   page_no: 41,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "C",
        //   clause_no: "3.2.1",
        //   content:
        //     "The headroom of every room, access route and circulation space shall not be less than 2.0 metres.",
        //   page_no: 19,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "C",
        //   clause_no: "3.3",
        //   content:
        //     "The ceiling height of rooms and spaces shall not be less than 2.4 metres.",
        //   page_no: 20,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "F",
        //   clause_no: "3.2.1",
        //   content:
        //     "Natural lighting shall be provided by means of one or more windows or other openings with an aggregate light transmitting area of not less than 10% of the floor area of the room or space required to be lighted.",
        //   page_no: 30,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "G",
        //   clause_no: "2.3",
        //   content:
        //     "Ventilation requirements do not apply to these spaces: 1. any store room not exceeding an area of 6 square metres, 2. any private lift lobby not exceeding an area of 6 square metres.",
        //   page_no: 31,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "G",
        //   clause_no: "3.2.1",
        //   content:
        //     "Natural ventilation shall be provided by means of one or more openable windows or other openings with an aggregate area of not less than (a) 5% of the floor area of the room or space required to be ventilated; and (b) in the case of an aboveground car park, comply with relevant clause in SS553 – Code of Practice for Air-Conditioning and Mechanical Ventilation in Buildings.",
        //   page_no: 32,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "G",
        //   clause_no: "3.2.3",
        //   content:
        //     "No part of any room or space (other than a room in a warehouse) that is designed for natural ventilation shall be located more than 12 metres from any window or opening that is used to ventilate the room or space.",
        //   page_no: 33,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "H",
        //   clause_no: "2.1",
        //   content:
        //     "Where there is a vertical drop in level of 1.0 m or more, appropriate measures shall be taken to prevent people from falling from a height.",
        //   page_no: 34,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "H",
        //   clause_no: "3.2.1",
        //   content:
        //     "The height of a barrier shall not be less than (a) 1.0 metre; or (b) 900 mm at the lower edge of the window and gallery or balcony with fixed seating in areas such as theatres, cinemas and assembling halls.",
        //   page_no: 35,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "H",
        //   clause_no: "3.4.1",
        //   content:
        //     "There must not be any gap, from the finished floor level to a height no less than 75 mm, at the lowest part of a barrier.",
        //   page_no: 36,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "H",
        //   clause_no: "3.4.3",
        //   content:
        //     "The size of any opening or gap in a barrier must not be large enough as to permit the passage of (a) in the case of non-industrial buildings, a 100 mm diameter sphere; (b) in the case of industrial buildings, a 150 mm diameter sphere, or (c) in the case of maintenance areas, including plants, equipment rooms, catwalks or maintenance platforms that are accessible only by authorised personnel, a 500 mm diameter sphere.",
        //   page_no: 36,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "H",
        //   clause_no: "3.4.4",
        //   content:
        //     "For any flight of staircase (a) the gap size between any two consecutive steps in a flight of staircases shall not be large enough as to permit the passage of: (i) in the case of industrial buildings, a 150 mm diameter sphere, or (ii) in the case of all other buildings, a 100 mm diameter sphere; (b) the size of any triangular opening, gap or void formed around a tread, riser and bottom edge of the barrier at a staircase in any building other than an industrial building shall not be large enough as to permit the passage of a 150 mm diameter sphere.",
        //   page_no: 36,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "I",
        //   clause_no: "3.2.1",
        //   content:
        //     "For all residential buildings with a gross floor area of 2000m2 or more, the Residential Envelope Transmittance Value (RETV) of the building, as determined in accordance with the formula set out in the “Code on Envelope Thermal Performance for Buildings” issued by the Commissioner of Building Control, shall not exceed 25 W/m2.",
        //   page_no: 41,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "I",
        //   clause_no: "3.2.3",
        //   content:
        //     "For all non-residential buildings with an aggregate air-conditioned area of more than 500m2, the Envelope Thermal Transfer Value (ETTV) of the building, as determined in accordance with the formula set out in the “Code on Envelope Thermal Performance for Buildings” issued by the Commissioner of Building Control, shall not exceed 50 W/m2.",
        //   page_no: 41,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "J",
        //   clause_no: "3.1",
        //   content:
        //     "The party wall shall extended above the level of the roof so that each roof is separate and independent of the roof of the adjoining house.",
        //   page_no: 44,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "K",
        //   clause_no: "2.2",
        //   content:
        //     "A building comprising 5 or more storeys (including the ground level) shall be provided with one or more passenger lifts.",
        //   page_no: 45,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "L",
        //   clause_no: "2.1",
        //   content:
        //     "The lightning protection system shall be designed and installed in accordance with SS 555 - Code of Practice for Protection Against Lightning.",
        //   page_no: 49,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "O",
        //   clause_no: "2.1",
        //   content:
        //     "Where the whole or part of a floor of a building allows vehicular access, such as a vehicle park or a ramp or route for vehicular access, appropriate barriers shall be installed to prevent vehicles from breaching the perimeter of the floor of the building.",
        //   page_no: 53,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("building_codes", null, {});
  },
};
