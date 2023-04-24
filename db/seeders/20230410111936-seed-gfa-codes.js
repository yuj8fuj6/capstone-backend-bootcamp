"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "gfa_codes",
      [
        {
          authority_id: 1,
          header: "Balconies",
          content: "Balconies are included as GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Balconies",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Entrance Canopy",
          content:
            "For every development, only one entrance canopy is excluded from GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/EntranceCanopy",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Bicycle Parking Spaces",
          content:
            "Bicycle parking spaces provided in accordance with LTA’s prevailing parking provision standards are excluded from GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/BicycleParkingSpacesandEnd-of-TripFacilities",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Cable Chambers",
          content:
            "Cable chambers integrated within the main building are excluded from GFA if it does not exceed 2.5m in height.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/CableChambers",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Cable Chambers",
          content:
            "Standalone cable chambers that fulfil certain criteria are excluded from GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/CableChambers",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Car Parking Lots",
          content:
            "Car parking lots are excluded from GFA except under certain circumstances.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/CarParkMotorcycleParksandRelatedFacilities",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Car Parking Lots",
          content:
            "Car parking space within a car porch or garage of landed housing is excluded from GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/CarParkMotorcycleParksandRelatedFacilities",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Pick-up/ Drop-off Points",
          content: "Pick-up/drop-off points are excluded from GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/CarParkMotorcycleParksandRelatedFacilities",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Driveways",
          content:
            "Driveways are part of the vehicular circulation area. These are excluded from GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/CarParkMotorcycleParksandRelatedFacilities",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Catwalks",
          content:
            "Unenclosed metal perforated catwalks meant for maintenance purposes and not exceeding 1.0m in width are excluded from GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Catwalks",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Covered Enclosed Space",
          content:
            "Covered enclosed spaces regardless of accessibility, use or height are included as GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/CoveredEnclosedSpace",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Curtain Wall and Wall Cladding Systems",
          content:
            "For buildings with curtain walls or wall cladding systems fixed onto the main structure, the GFA is measured up to the edge of the main structural floor slab.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/CurtainWallandWallCladdingSystems",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Floor",
          content:
            "If the height of the roof measured from the springing line to the ridge is equal to or greater than 1.5m, the floor under the roof is included as GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Floors",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Floor",
          content:
            "If the height of the raised platform measured from the floor to the underside of the raised platform is greater than 1.5m, the area under such raised platform is included as GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Floors",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Floor",
          content: "Intermediate load-bearing floors are included as GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Floors",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Floor",
          content:
            "Covered perforated floors are included as GFA regardless of the type of material used for the floor.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Floors",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Guardhouse",
          content: "Guardhouse, regardless of size, are included as GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/GuardhouseandSentryPosts",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Household Shelters",
          content:
            "Household shelters are included as GFA. Specific areas created as a result of a household shelter may be excluded from GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/HouseholdShelters",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Ledges",
          content:
            "Air-conditioner (A/C) ledges not exceeding 1.0m in width, as measured perpendicularly from the external wall are excluded from GFA. For AC ledges exceeding 1.0m in width, the entire ledge is included as GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Ledges",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Ledges",
          content:
            "Reinforced Concrete (RC) ledges meant for sun-shading purposes are excluded from GFA if they comply with certain requirements.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Ledges",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Lift Motor Room",
          content:
            "Lift motor rooms with headroom exceeding 1.8m are included as GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/LiftMotorRoom",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Lift Shaft",
          content:
            "Lift shafts, including the thickness of the walls, are included as GFA at the lowest floor.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/LiftShaft",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Loading and Unloading Bays",
          content:
            "Loading and unloading bays on the same level as a driveway are excluded from GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/LoadingandUnloadingBays",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Loading and Unloading Platforms",
          content:
            "Raised loading and unloading platforms, which are not on the same level as a driveway, are included as GFA.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/LoadingandUnloadingPlatforms",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Mechanical and Electrical (M&E) Spaces",
          content:
            "M&E floors with headroom of up to 1.8m are excluded from GFA. The height of the M&E floor is measured from the floor to the underside of the upper floor.",
          url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/MechanicalandElectricalMESpaces",
          created_at: new Date(),
          updated_at: new Date(),
        },
        // {
        //   authority_id: 1,
        //   header: "Mechanical and Electrical (M&E) Spaces",
        //   content:
        //     "For M&E floors with varying headroom (i.e. the height of the headroom varies from below 1.8m to exceeding 1.8m), the entire floor is included as GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/MechanicalandElectricalMESpaces",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Mechanical and Electrical (M&E) Spaces",
        //   content:
        //     "M&E rooms (including bin centres and substations) within fully sunken common basement carparks are excluded from GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/MechanicalandElectricalMESpaces",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Metal Ceiling Grids within Indoor Performance Venue",
        //   content:
        //     "Ceiling grids located directly above a stage area within an indoor performance venue are excluded from GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/MetalCeilingGridswithinIndoorPerformanceVenue",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Meter Compartments",
        //   content:
        //     "Meter compartments incorporated inside gateposts are excluded from GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/MeterCompartments",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Planter Boxes",
        //   content:
        //     "Communal planter boxes are excluded from GFA if they comply with certain requirements.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/PlanterBoxes",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Planter Boxes",
        //   content:
        //     "Private planter boxes located within strata units of both residential and non-residential developments are included as GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/PlanterBoxes",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Racking Systems for Storage Purposes",
        //   content:
        //     "Racking systems are excluded from GFA if they are standalone modular racking systems that do not form an integral component of the building (e.g. not of reinforced concrete construction), and are used for storage purposes in industrial developments.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/RackingSystemsforStoragePurposes",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Recessed Windows",
        //   content:
        //     "Area under a recessed window, regardless of height of the window, is included as GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/RecessedWindows",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Refuse Chambers and Refuse Chutes",
        //   content: "Refuse chutes are excluded from GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/RefuseChambersandRefuseChutes",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Refuse Chambers and Refuse Chutes",
        //   content:
        //     "Refuse chambers and Discharge Valve (DV) chambers (part of a pneumatic system) located within fully sunken basement carparks are excluded from GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/RefuseChambersandRefuseChutes",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Reinforced Concrete (RC) Slabs within Voids",
        //   content:
        //     "Covered RC slabs within voids (including service riser voids and voids beside storey shelter) are included as GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/ReinforcedConcreteRCSlabswithinVoids",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Service Ducts",
        //   content:
        //     "Service ducts, including the thickness of the walls, are included as GFA once at the lowest floor, if the vertical shaft is entirely a void space.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/ServiceDucts",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Solar Panels",
        //   content:
        //     "Area shadowed by solar panel is excluded from GFA unless the shadowed area is enclosed, used for commercial uses (e.g. outdoor refreshment area) or storage purpose.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/SolarPanels",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Staircases",
        //   content:
        //     "Staircases are included as GFA. The flight of the staircase is to be projected upwards and be included as GFA on that particular floor.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Staircases",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Staircases",
        //   content:
        //     "Staircases at intermediate levels not connected to any floor are not included as GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Staircases",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Staircases",
        //   content:
        //     "All uncovered external perforated staircases, regardless of materials, are included as GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Staircases",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Staircases",
        //   content:
        //     "For pure industrial/warehouse developments, uncovered external mild steel perforated staircases are excluded from GFA provided the development already provides a covered internal staircase to serve users of the building. If the width of the uncovered external mild steel perforated staircase (including the staircase landing) is more than 1.0m, the developer shall provide an undertaking not to cover up the external staircase subsequently.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Staircases",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Staircases",
        //   content: "Uncovered staircase to ESS are excluded from GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Staircases",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Swimming Pool",
        //   content: "Covered swimming pool is included as GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/SwimmingPool",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Walls and Columns",
        //   content: "Walls and columns are included as GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/WallsandColumns",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   authority_id: 1,
        //   header: "Water Tanks",
        //   content:
        //     "Water tanks, including sprinkler tanks, balancing tanks and storm water detention tanks, are excluded from GFA. Rooms that house water tanks are included as GFA.",
        //   url: "www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/WaterTanks",
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("gfa_codes", null, {});
  },
};
