"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "accessibility_codes",
      [
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "3.1",
          content:
            "At least one alighting and boarding point, if provided, to be sheltered.",
          page_no: 18,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "3.2",
          content:
            "Proper provisions to be made when there is a level difference at the alighting and boarding point.",
          page_no: 18,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "2",
          clause_no: "1.2",
          content: "Accessible toilet at common area to be provided.",
          page_no: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "2",
          clause_no: "1.2",
          content: "Accessible toilet to be provided.",
          page_no: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "2",
          clause_no: "1.2",
          content:
            "Water closet compartment for the ambulant disabled, urinal for the ambulant disabled, and accessible toilet to be provided.",
          page_no: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "2",
          clause_no: "3.5",
          content:
            "At least one service and information counter must be provided for wheelchair users and persons with hearing impairment in accordance with the requirements of service and information counters and hearing enhancement systems.",
          page_no: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "2",
          clause_no: "5.1",
          content:
            "Plants, equipment rooms and machinery spaces, and loading docks are exempted.",
          page_no: 16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "2",
          clause_no: "6.1",
          content:
            "Code provisions must apply to all new areas and existing areas with extensive alteration works which require plan submission and approval from the Commissioner of Building Control.",
          page_no: 16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "1.4",
          content:
            "At least one accessible route leading to an accessible entrance of the building must be provided from the alighting and boarding point and vehicle parking lots for persons with disabilities.",
          page_no: 17,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "5.1",
          content: "Sufficient accessible parking lots must be provided.",
          page_no: 22,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "5.2",
          content:
            "An accessible vehicle parking lot must have a firm, level surface without aeration slabs.",
          page_no: 22,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "5.2",
          content:
            "An accessible vehicle parking lot must have the minimum dimensions of 4800mm by 3600mm for angled parking, and have the minimum dimensions of 5400mm by 3600mm for parallel parking.",
          page_no: 23,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "5.2",
          content:
            "For parallel parking, where vehicles cannot be parked by reversing or where there are obstructions at the ends of the parking spaces, the minimum stall length must be 7200mm.",
          page_no: 23,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "5.3",
          content:
            "Clear directional signs must be displayed at appropriate places to direct drivers with disabilities to the location of accessible parking lots before approaching the vehicle park entrance.",
          page_no: 24,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "5.4",
          content:
            "Accessible parking lots must be located as close as possible to an accessible entrance and/ or lift lobby.",
          page_no: 24,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "5.7",
          content:
            "Symbol of access of the stipulated minimum size to be painted or marked on the designated accessible parking lot.",
          page_no: 25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "5.8",
          content:
            "Vertical sign of stipulated dimensions and details must be provided immediately adjacent to the accessible parking lots.",
          page_no: 26,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "6.1",
          content:
            "Kerb ramps must not be steeper than 1:10 and must be at least 900mm wide.",
          page_no: 27,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "4",
          clause_no: "1.2",
          content:
            "For gratings located on accessible routes, gratings must have spaces/ gaps/ openings not greater than 12mm wide, and be placed so that the long dimension is perpendicular to the dominant direction of travel.",
          page_no: 34,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "4",
          clause_no: "2.1",
          content:
            "The minimum width of all accessible routes must be at least 1200mm for secondary access routes.",
          page_no: 35,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "4",
          clause_no: "2.1",
          content: "The minimum width of accessible routes shall be 1500mm.",
          page_no: 36,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "4",
          clause_no: "2.1",
          content: "The minimum width of accessible routes shall be 1800mm.",
          page_no: 36,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "4",
          clause_no: "2.2",
          content:
            "An accessible gate with a width of 850mm or more must be provided beside a turnstile.",
          page_no: 39,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "4",
          clause_no: "2.3",
          content: "The corners of walls should not have sharp edges.",
          page_no: 40,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "4",
          clause_no: "2.3",
          content:
            "The wall finish must be smooth or in the case of rough walls, have trailing bars or handrails placed at a height of 840 mm from the floor level so that persons with visual impairment can trail along them without hurting their hands.",
          page_no: 40,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "2.4",
        //   content:
        //     "Objects or obstructions, with their leading edges at any height above 580mm from the floor level must not be protrude more than 100mm into pedestrian areas.",
        //   page_no: 40,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "2.4.5",
        //   content:
        //     "There shall be a minimum clear distance of 900mm between the bollards, and the bollards shall have a minimum height of 800mm. Bollards are to have a colour which contrasts with the background or be provided with a coloured or reflective band around the neck of the bollard to further aid visibility.",
        //   page_no: 42,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "2.5",
        //   content:
        //     "Resting areas with seats must be provided along long paths of travel at stipulated maximum intervals.",
        //   page_no: 43,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "3.2",
        //   content:
        //     "A detectable guardrail or other barrier having its leading edge of between 400mm and 580mm from the floor level must be provided where the headroom of an area adjoining an accessible route is reduced to less than 2000mm.",
        //   page_no: 45,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "4.1",
        //   content:
        //     "At least one power-operated or automatic door should be provided at the main entrance to a building.",
        //   page_no: 46,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "4.2",
        //   content:
        //     "The minimum clear opening of doorways must be 850mm measured between the face of the door and the face of the doorstop with the door open at 90 degrees.",
        //   page_no: 46,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "4.5",
        //   content:
        //     "Unframed full-height glass doors must be prominently marked or highlighted with motifs to make them visible.",
        //   page_no: 48,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "4.6",
        //   content:
        //     "Except for power-operated doors, the doorway of a one-way swing door must have stipulated sufficient manoeuvering spaces on both sides for wheelchairs.",
        //   page_no: 49,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "4.8",
        //   content:
        //     "Operating devices such as handles, pulls, latches and locks must be mounted at a height of 900mm to 1100mm from the floor.",
        //   page_no: 54,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "4.10.1",
        //   content:
        //     "The force, measured at the leading edge of the door to operate hinged doors must not be more than 30N at 0 degrees, and 20N at 30 degrees.",
        //   page_no: 57,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "4.12",
        //   content: "The width of the vision panel must not be less than 100mm.",
        //   page_no: 58,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "5.1",
        //   content:
        //     "For any change in the level of the floor surface, the gradient of the slope must confirm to the stipulated gradients, depending on the change in vertical rise.",
        //   page_no: 59,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "6.5.2",
        //   content:
        //     "Landings need not be provided if the gradient of a ramp is equal or gentler than 1:25.",
        //   page_no: 64,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "9.1",
        //   content:
        //     "Where lifts are provided in a building, at least one lift must be made accessible for wheelchair users from the entrance level for vertical circulation.",
        //   page_no: 76,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "9.2",
        //   content:
        //     "The minimum internal lift car dimensions must be 1200mm wide by 1400mm deep.",
        //   page_no: 76,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "4",
        //   clause_no: "11.2",
        //   content:
        //     "All steps must be fitted with non-slip nosing strips between 50mm and 65mm in width with permanent contrasting colours.",
        //   page_no: 83,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "5",
        //   clause_no: "1.1",
        //   content:
        //     "At every level of a non-residential building where toilets are provided,, at least one accessible individual washroom must be provided.",
        //   page_no: 89,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "5",
        //   clause_no: "1.2",
        //   content:
        //     "In non-residential buildings, where two or more clusters of toilets are provided at the same level but at different locations, the corresponding number of accessible individual washrooms must be provided.",
        //   page_no: 89,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "5",
        //   clause_no: "2.1",
        //   content:
        //     "Accessible individual washrooms must have a minimum clear dimension between opposite walls of 1750mm or more.",
        //   page_no: 92,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "5",
        //   clause_no: "6.3",
        //   content:
        //     "Washroom accessories must comprise a mirror, with the bottom edge positioned at a height of 1000mm or less from the floor, and paper towel dispensers or hand dryers, soap dispensers, litter bins and other washroom accessories must contrast in colour and tone and be positioned such that the operable parts and controls are between 900mm and 1200mm from the floor.",
        //   page_no: 111,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "5",
        //   clause_no: "6.4",
        //   content:
        //     "An emergency call bell must be provided in an accessible individual washroom.",
        //   page_no: 112,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "8",
        //   clause_no: "3.1",
        //   content:
        //     "Directional signs incorporating the Symbol of Access must be displayed at main lobbies or passageways and at points where there is a change of direction in order to direct persons with disabilities to the various facilities.",
        //   page_no: 175,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "8",
        //   clause_no: "5.2",
        //   content:
        //     "The size of graphical symbols or pictographs should be based on the intended viewing distance and determined in accordance with the relevant guidelines.",
        //   page_no: 177,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "8",
        //   clause_no: "5.4",
        //   content:
        //     "Signs to toilets must be mounted on the wall next to the latch-side of the door at a distance of 50mm to 100mm from the door jamb to the side of the sign.",
        //   page_no: 179,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 2,
        //   chapter: "8",
        //   clause_no: "5.4",
        //   content:
        //     "The centre line of the sign must be at a height of 1500mm above the floor level.",
        //   page_no: 179,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("accessibility_codes", null, {});
  },
};
