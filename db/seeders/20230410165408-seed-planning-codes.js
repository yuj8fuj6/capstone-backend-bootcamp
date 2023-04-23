"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "planning_codes",
      [
        {
          authority_id: 1,
          header: "Boundary Setback Req.",
          content:
            "To ensure adequate Road Buffer (inclusive of Green Buffer) depending on the public road category.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Setback",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Boundary Setback Req.",
          content:
            "To ensure adequate common boundary setback with non-industrial development.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Setback",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Gross Plot Ratio",
          content:
            "Gross Plot Ratio is guided by the GPR specified in the Master Plan.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/GPR",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Gross Plot Ratio",
          content:
            "The area of the land required to be set aside for Drainage Reserve and/ or Road Reserve to be vested in the State may be included in the site area to compute the gross floor area (GFA) for a GPR.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/GPR",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Building Height",
          content:
            "The overall building height based on Singapore Height Datum (SHD) is subject to compliance with the technical height controls of the relevant agencies such as Civil Aviation Authority of Singapore (CAAS) and the Defence Science and Technology Agency (DSTA).",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Building-Height",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Building Height",
          content:
            "The minimum floor-to-floor height of industrial buildings is 4.0m.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Building-Height",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Basements",
          content:
            "Basement storeys that protrude more than 1.0m above ground level on any side shall be counted as a storey.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Basements",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Basements",
          content:
            "Basement with protrusion can be up to the road buffer, and up to the building setback from other boundaries.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Basements",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Basements",
          content:
            "Fully submerged basement can be up to the road reserve line, and up to the site lot boundary, subject to certain provisions.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Basements",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Developments Involving Waterbodies",
          content:
            "Developments at major waterbodies shall observe certain design and development application submission guidelines.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Waterbodies",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Ancillary Structures",
          content:
            "Ancillary strutures are generally not allowed within the green buffer, but some types are allowed if in compliance with certain restrictions and subject to NParks' approval.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Ancillary-Structures",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Minimum Unit Size",
          content:
            "The minimum size of an industrial unit is 150sqm. This is deemed a meaningful space to meet the operational needs of industrial uses.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Unit-Size",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Use Quantum",
          content:
            "At least 60% of the total B2 industrial GFA (ie minimum 60%) shall be used for industrial purpose. The remaining 40% may be used for ancillary (or supporting) uses.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Use-Quantum",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Goods Lifts and Loading Bays",
          content:
            "Industrial developments (excluding full ramp-up developments) shall have a minimum provision of goods lifts and loading bays to support the needs and operations of industries.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Goods-Lift-Loading-Bays",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Diesel and Petrol Pump Points",
          content:
            "Transport-related companies or industries requiring diesel/petrol to serve their own fleet of vehicles or industrial operations may set up pump points within B2 industrial developments subject to certain conditions.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Diesel-PPP",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "RC Flat Roofs",
          content:
            "RC flat roofs shall remain inaccessible except for maintenance purposes only.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/RC-Flat-Roofs",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "RC Flat Roofs",
          content:
            "The installation of solar panels on RC flat roofs may be considered if they meet certain criteria.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/RC-Flat-Roofs",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Walking and Cycling Plan",
          content:
            "B2 Industrial developments with expected high pedestrian and cyclist traffic are required to provide a Walking and Cycling Plan as part of the Development Application.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/WCP",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Earthworks, Retaining Walls, and Boundary Walls",
          content: "The maximum allowable height for boundary walls is 1.8m.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Earthworks",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Earthworks, Retaining Walls, and Boundary Walls",
          content:
            "Guidelines for earthworks and retaining walls will apply differently depending on the type of development on the neighbouring parcels of land.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/B2/Earthworks",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Retaining and Boundary Walls",
          content: "Boundary walls shall not exceed 1.8m high.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Retaining-Walls",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Building Setback from Boundary",
          content:
            "Depending on the public road category, to comply with the road buffer and green buffer. For Category 5 roads, width of road buffer (no need for green buffer) to be 7.5m.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Setbacks-from-boundaries",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Envelope Control Guidelines",
          content:
            "All landed housing shall follow the envelope control guidelines which define an allowable building envelope based on storey height and building setbacks.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/EC",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Envelope Control Guidelines",
          content:
            "Building shall not exceed the 2-storey or 3-storey height control, or the prescribed storey height as shown in the designated landed housing plan in the Master Plan, whichever is lower.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/EC",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Envelope Control Guidelines",
          content:
            "Allowable building height to be measured from the external platform level.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/EC",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Envelope Control Guidelines",
          content:
            "Overall building height shall not exceed 12m - i.e. max. height of 8.5m for the main building portion, and max. height of 3.5m for the top building portion with 45 degree inclinations on both ends.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/EC",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Envelope Control Guidelines",
          content:
            "Basement with protrusion can be up to the road buffer, and up to the building setback from other boundaries.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/EC",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Envelope Control Guidelines",
          content:
            "Fully submerged basement can be up to the road reserve line, and up to the site lot boundary (for plots outside GCBA), subject to certain provisions.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/EC",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Building Setback from Boundary",
          content:
            "Set back for roof eaves (including car porch roof eaves) to be 1.6 m for GCBA, and 1 m for outside GCBA, unless the plot abuts a GCBA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Setbacks-from-boundaries",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Locational Criteria",
          content: "To check locational criteria for development plot.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Locational-Criteria",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Plot Size and Width for Bungalows",
          content:
            "To check the guidelines for plot size and width for bungalows.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Plot-Size-Width",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Access Points",
          content:
            "Only one vehicular access point shall be allowed per bungalow plot.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Access-Points",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Access Points",
          content:
            "Only one main entrance door for a single residential unit for family dwelling purposes shall be allowed in a landed house.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Access-Points",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Site Coverage",
          content:
            "Site coverage is computed based on the footprint of the building and coverage of all building features (raised 1m or more above ground level) when viewed from above. Maximum site coverage of 40% for locations within GCBA, while maximum site coverage of 50% for locations outside GCBA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Site-Coverage",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Building Setback from Boundary",
          content:
            "No setback from road reserve line for Category 5 road and common boundaries for sunken swimming pool.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Setbacks-from-boundaries",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Building Setback from Boundary",
          content:
            "Letter boxes, meter compartments and bin points which are not more than 1.8m in height, and guardhouses which are not more than 2.6m in height, are exempted from setback requirements.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Setbacks-from-boundaries",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "RC Flat Roofs",
          content:
            "RC flat roofs shall remain inaccessible except for maintenance purposes only.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/RC-Flat-Roofs",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "RC Flat Roofs",
          content:
            "The installation of solar panels on RC flat roofs may be considered if they meet certain criteria.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/RC-Flat-Roofs",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Earthworks",
          content:
            "Earthworks to raise the existing platform level of the entire development site are generally not allowed.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Earthworks",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Earthworks",
          content:
            "Earthworks are generally not allowed within the road buffer/building setbacks. Any proposed earthworks shall be assessed based on site context. Where allowed, they shall not exceed 1m.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Residential/Bungalows/Earthworks",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Building Height",
          content:
            "The overall building height based on Singapore Height Datum (SHD) is subject to compliance with the technical height controls of the relevant agencies such as Civil Aviation Authority of Singapore (CAAS) and the Defence Science and Technology Agency (DSTA).",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/Height",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Gross Plot Ratio",
          content:
            "The allowable Gross Plot Ratio (GPR) is subject to evaluation, taking into consideration the location, site context, topography, traffic situation, impact of the S&R development on the surroundings and other agencies’ requirements.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/GPR",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Gross Plot Ratio",
          content:
            "The area of the land required to be set aside for Drainage Reserve and/ or Road Reserve to be vested in the State may be included in the site area to compute the gross floor area (GFA) for a GPR.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/GPR",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Building Setback from Boundary",
          content:
            "All S&R developments fronting a public road shall provide a road buffer, the width of which depends on the hierarchy of the road. A green buffer shall be set aside in the road buffer depending on the width of the road buffer.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/Setback",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Building Setback from Boundary",
          content:
            "For common boundaries with other developments, minimum 4.5m (including 2m planting strip) for building setback requirement.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/Setback",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Basements",
          content:
            "Basement storeys that protrude more than 1.0m above ground level on any side shall be counted as a storey.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/Basement",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Basements",
          content:
            "Basement with protrusion can be up to the road buffer, and up to the building setback from other boundaries.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/Basement",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Basements",
          content:
            "Fully submerged basement can be up to the road reserve line, and up to the site lot boundary, subject to certain provisions.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/Basement",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Developments Involving Waterbodies",
          content:
            "Developments at major waterbodies shall observe certain design and development application submission guidelines.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/Waterbodies",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Ancillary Structures",
          content:
            "Ancillary strutures are generally not allowed within the green buffer, but some types are allowed if in compliance with certain restrictions and subject to NParks' approval.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/Ancillary-Structures",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "RC Flat Roofs",
          content:
            "RC flat roofs shall remain inaccessible except for maintenance purposes only.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/RC-Flat-Roofs",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "RC Flat Roofs",
          content:
            "The installation of solar panels on RC flat roofs may be considered if they meet certain criteria.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/RC-Flat-Roofs",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Walking and Cycling Plan",
          content:
            "S&R Industrial developments with expected high pedestrian and cyclist traffic are required to provide a Walking and Cycling Plan as part of the Development Application.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/WCP",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Earthworks, Retaining Walls, Boundary Walls",
          content:
            "Extensive earthworks are discouraged as it may change the existing terrain.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/Earthworks",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Earthworks, Retaining Walls, Boundary Walls",
          content:
            "Planning permission is required if earthworks involve more than 2,000sqm of land or change in the level of the land of more than 1.5m anywhere in the development site or relative to the neighbouring land.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/Earthworks",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Earthworks, Retaining Walls, Boundary Walls",
          content: "The maximum allowable height for boundary walls is 1.8m.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/Non-Residential/SR/Earthworks",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("planning_codes", null, {});
  },
};
