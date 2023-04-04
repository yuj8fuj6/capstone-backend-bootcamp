"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "threads",
      [
        {
          id: 1,
          content:
            "The URA guidelines for bungalows stipulate the following minimum plot sizes and setback requirements. The minimum plot size for a bungalow is 400 square meters (4,306 square feet). The front setback requirement is 7.5 meters (24.6 feet) from the front boundary of the plot. The side setback requirement is 3 meters (9.8 feet) for one side and 2 meters (6.6 feet) for the other side. It's important to note that these are just the minimum requirements, and that larger setbacks may be required or recommended based on factors such as the size and location of nearby buildings, the topography of the site, and other considerations. Additionally, the URA guidelines may be subject to change or revision over time, so it's always a good idea to consult the most up-to-date regulations and requirements before starting any building project.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "1",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          content:
            "Bungalow developments are required to provide a minimum of 50% of the plot area as greenery, including a minimum of 10% of the plot area as soft landscaping.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "2",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          content:
            "If a bungalow is deemed to be of historical or architectural significance, it may be subject to conservation requirements under the URA's Conservation of Built Heritage regulations. These regulations may restrict alterations to the exterior of the building, require the retention of certain original features or materials, and mandate regular maintenance and repair.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "3",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          content:
            "As of my knowledge cutoff in September 2021, the URA Residential Handbook for Bungalows had not undergone any recent updates or revisions. However, it is important to note that the URA regularly reviews and updates its planning and development guidelines in response to changing social, economic, and environmental conditions.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "4",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          content:
            "The maximum building height for bungalows is typically 2-storeys, with a maximum height of 9 meters. However, exceptions may be made for bungalows with a sloping site or other specific site constraints, subject to approval by the relevant authorities. For envelope control, bungalows should have a minimum setback of 3 meters from the front boundary, 2 meters from the side boundary, and 3 meters from the rear boundary. These setbacks are intended to ensure adequate spacing between buildings and to provide sufficient space for landscaping and other outdoor amenities.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "5",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          content:
            "The URA Non-Residential Handbook for Business 2 (Industrial) applies to a wide range of industrial properties in Singapore, including factories, warehouses, research and development facilities, data centres, and other industrial developments. The handbook covers both new developments and redevelopment of existing industrial properties.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "6",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          content:
            "The URA Non-Residential Handbook for Business 2 (Industrial) does not include guidelines and requirements related to environmental sustainability and energy efficiency for industrial properties in Singapore. Refer to BCA Greenmark guidelines.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "7",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          content:
            "The URA Non-Residential Handbook for Business 2 (Industrial) recognizes the importance of providing amenities and services for workers in industrial properties, such as canteens and recreational areas. The provision of such facilities can help to improve the well-being of workers, promote a healthy work-life balance, and enhance the attractiveness of industrial properties as places to work and do business. The handbook includes guidelines related to the provision of such facilities in industrial developments. For example, it recommends that industrial developments should provide for a range of amenities and services, such as: 1. Food and Beverage Outlets, 2. Recreational Facilities, 3. Retail and Service Outlets, 4. Childcare Facilities.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "8",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          content:
            "There are some exceptions and waivers to the setback guidelines that may be granted on a case-by-case basis. These exceptions and waivers are typically granted in situations where there are site constraints or other exceptional circumstances that make it difficult or impractical to comply with the setback guidelines. For example, the URA may grant an exception or waiver if the site has an irregular shape or is located in a corner, or if there are existing buildings or structures on the site that would make it difficult to comply with the setback guidelines. In such cases, the URA may require the developer to submit a proposal for a suitable alternative solution that would still ensure a safe and comfortable environment for workers, while also taking into account the specific site constraints and circumstances. It is important to note that any exceptions or waivers to the setback guidelines are granted on a case-by-case basis and are subject to the discretion of the URA. Developers are therefore advised to consult with the URA early in the planning stages to ensure compliance with the setback guidelines and to explore any potential exceptions or waivers.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "9",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          content:
            "The setback guidelines for industrial properties in the URA Non-Residential Handbook for Business 2 (Industrial) may vary depending on the type of industrial property and its intended use. This is because different types of industrial properties may have different requirements and considerations when it comes to setbacks and other planning guidelines. Please clarify on the building type.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "10",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 11,
          content:
            "The URA Non-Residential Handbook for Sports and Recreation provides guidelines and recommendations for the planning and development of sports and recreation facilities in Singapore. The handbook applies to a wide range of non-residential properties, including sports complexes, stadiums, indoor and outdoor sports facilities, and recreational parks.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "11",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 12,
          content:
            "In terms of plot sizes, the handbook recommends that sports complexes, stadiums, and other large sports and recreation facilities should have a minimum plot size of 0.8 hectares (8,000 square meters) to allow for adequate building and landscaping space. Regarding setback requirements, the URA guidelines specify that the setbacks should be determined based on the type and intensity of activities on the site, as well as other site-specific factors such as the location of nearby roads or residential areas. For example, the handbook recommends that sports and recreation facilities that generate high levels of noise or activity, such as stadiums or motor sports facilities, should have larger setbacks to minimize the impact on nearby residents.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "12",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 13,
          content:
            "The handbook recommends that sports and recreation facilities should provide adequate and accessible amenities such as changing rooms, lockers, showers, toilets, and equipment storage facilities. These amenities should be designed to meet the needs of different user groups, including children, women, and persons with disabilities. In addition, the handbook recommends that sports and recreation facilities should provide other essential services such as first aid stations, drinking water fountains, and seating areas for spectators. For larger facilities such as stadiums or sports complexes, the handbook recommends the provision of other amenities such as food and beverage outlets, retail shops, and recreational spaces.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "13",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("threads", null, {});
  },
};
