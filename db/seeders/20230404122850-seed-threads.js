"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "threads",
      [
        {
          // id: 1,
          content:
            "The URA guidelines for bungalows stipulate the following minimum plot sizes and setback requirements. The minimum plot size for a bungalow is 400 square meters (4,306 square feet). The front setback requirement is 7.5 meters (24.6 feet) from the front boundary of the plot. The side setback requirement is 3 meters (9.8 feet) for one side and 2 meters (6.6 feet) for the other side. It's important to note that these are just the minimum requirements, and that larger setbacks may be required or recommended based on factors such as the size and location of nearby buildings, the topography of the site, and other considerations. Additionally, the URA guidelines may be subject to change or revision over time, so it's always a good idea to consult the most up-to-date regulations and requirements before starting any building project.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "1",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 2,
          content:
            "Bungalow developments are required to provide a minimum of 50% of the plot area as greenery, including a minimum of 10% of the plot area as soft landscaping.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "2",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 3,
          content:
            "If a bungalow is deemed to be of historical or architectural significance, it may be subject to conservation requirements under the URA's Conservation of Built Heritage regulations. These regulations may restrict alterations to the exterior of the building, require the retention of certain original features or materials, and mandate regular maintenance and repair.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "3",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 4,
          content:
            "As of my knowledge cutoff in September 2021, the URA Residential Handbook for Bungalows had not undergone any recent updates or revisions. However, it is important to note that the URA regularly reviews and updates its planning and development guidelines in response to changing social, economic, and environmental conditions.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "4",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 5,
          content:
            "The maximum building height for bungalows is typically 2-storeys, with a maximum height of 9 meters. However, exceptions may be made for bungalows with a sloping site or other specific site constraints, subject to approval by the relevant authorities. For envelope control, bungalows should have a minimum setback of 3 meters from the front boundary, 2 meters from the side boundary, and 3 meters from the rear boundary. These setbacks are intended to ensure adequate spacing between buildings and to provide sufficient space for landscaping and other outdoor amenities.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "5",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 6,
          content:
            "The URA Non-Residential Handbook for Business 2 (Industrial) applies to a wide range of industrial properties in Singapore, including factories, warehouses, research and development facilities, data centres, and other industrial developments. The handbook covers both new developments and redevelopment of existing industrial properties.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "6",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 7,
          content:
            "The URA Non-Residential Handbook for Business 2 (Industrial) does not include guidelines and requirements related to environmental sustainability and energy efficiency for industrial properties in Singapore. Refer to BCA Greenmark guidelines.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "7",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 8,
          content:
            "The URA Non-Residential Handbook for Business 2 (Industrial) recognizes the importance of providing amenities and services for workers in industrial properties, such as canteens and recreational areas. The provision of such facilities can help to improve the well-being of workers, promote a healthy work-life balance, and enhance the attractiveness of industrial properties as places to work and do business. The handbook includes guidelines related to the provision of such facilities in industrial developments. For example, it recommends that industrial developments should provide for a range of amenities and services, such as: 1. Food and Beverage Outlets, 2. Recreational Facilities, 3. Retail and Service Outlets, 4. Childcare Facilities.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "8",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 9,
          content:
            "There are some exceptions and waivers to the setback guidelines that may be granted on a case-by-case basis. These exceptions and waivers are typically granted in situations where there are site constraints or other exceptional circumstances that make it difficult or impractical to comply with the setback guidelines. For example, the URA may grant an exception or waiver if the site has an irregular shape or is located in a corner, or if there are existing buildings or structures on the site that would make it difficult to comply with the setback guidelines. In such cases, the URA may require the developer to submit a proposal for a suitable alternative solution that would still ensure a safe and comfortable environment for workers, while also taking into account the specific site constraints and circumstances. It is important to note that any exceptions or waivers to the setback guidelines are granted on a case-by-case basis and are subject to the discretion of the URA. Developers are therefore advised to consult with the URA early in the planning stages to ensure compliance with the setback guidelines and to explore any potential exceptions or waivers.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "9",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 10,
          content:
            "The setback guidelines for industrial properties in the URA Non-Residential Handbook for Business 2 (Industrial) may vary depending on the type of industrial property and its intended use. This is because different types of industrial properties may have different requirements and considerations when it comes to setbacks and other planning guidelines. Please clarify on the building type.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "10",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 11,
          content:
            "The URA Non-Residential Handbook for Sports and Recreation provides guidelines and recommendations for the planning and development of sports and recreation facilities in Singapore. The handbook applies to a wide range of non-residential properties, including sports complexes, stadiums, indoor and outdoor sports facilities, and recreational parks.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "11",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 12,
          content:
            "In terms of plot sizes, the handbook recommends that sports complexes, stadiums, and other large sports and recreation facilities should have a minimum plot size of 0.8 hectares (8,000 square meters) to allow for adequate building and landscaping space. Regarding setback requirements, the URA guidelines specify that the setbacks should be determined based on the type and intensity of activities on the site, as well as other site-specific factors such as the location of nearby roads or residential areas. For example, the handbook recommends that sports and recreation facilities that generate high levels of noise or activity, such as stadiums or motor sports facilities, should have larger setbacks to minimize the impact on nearby residents.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "12",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 13,
          content:
            "The handbook recommends that sports and recreation facilities should provide adequate and accessible amenities such as changing rooms, lockers, showers, toilets, and equipment storage facilities. These amenities should be designed to meet the needs of different user groups, including children, women, and persons with disabilities. In addition, the handbook recommends that sports and recreation facilities should provide other essential services such as first aid stations, drinking water fountains, and seating areas for spectators. For larger facilities such as stadiums or sports complexes, the handbook recommends the provision of other amenities such as food and beverage outlets, retail shops, and recreational spaces.",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "13",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 14,
          content:
            "The URA Non-Residential Handbook for Sports and Recreation provides guidelines and recommendations for the design and construction of sports and recreational facilities in Singapore. These guidelines cover a range of topics, including the site planning and layout, architectural design, landscaping, and building services. In terms of site planning and layout, the handbook emphasizes the importance of designing facilities that are easily accessible and well-connected to public transport networks. The handbook recommends the provision of sufficient parking facilities and the incorporation of green spaces and landscaping features to enhance the overall user experience. ",
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "14",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 15,
          content:
            'Yes, there are specific zoning and land-use restrictions that apply to sports and recreational properties under the URA guidelines. These restrictions are intended to ensure that sports and recreational facilities are located in appropriate areas and do not have a negative impact on surrounding land uses. According to the URA guidelines, sports and recreational properties are generally zoned as "Sports and Recreation" under the Master Plan. This zoning allows for a range of sports and recreational uses, including stadiums, sports halls, swimming pools, golf courses, and other similar facilities. However, there are certain restrictions on the size and scale of these facilities, as well as their proximity to residential areas, schools, and other sensitive land uses. In addition to zoning restrictions, the URA guidelines also include setback requirements and other planning parameters that must be adhered to when designing and constructing sports and recreational facilities.',
          user_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          post_id: "15",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 16,
          content:
            "The URA GFA guidelines set out specific requirements and parameters for calculating gross floor area, including the definition of different types of space such as covered areas, balconies, and voids. The guidelines also include rules for calculating the GFA of different types of buildings, such as landed properties, apartments, and commercial buildings. In addition to these technical requirements, the URA GFA guidelines also provide guidance on how GFA can be used to promote sustainability and energy efficiency in buildings. For example, the guidelines encourage the use of green roofs, solar panels, and other sustainable design features to reduce a building's environmental footprint.",
          user_id: "b50ea9f4-07f2-4ed6-a35a-c6ccbf4089be",
          post_id: "16",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 17,
          content:
            "The different types of gross floor area as defined under the URA guidelines are:\n\n1. Gross Floor Area (GFA) - The total floor area of a building, measured to the outer face of the external walls and to the centre line of the separating walls between adjoining premises.\n\n2. Gross Plot Ratio (GPR) - The ratio of the total GFA of a development to the total area of the site.\n\n3. Net Floor Area (NFA) - The area of a building measured to the internal face of the enclosing walls and includes all enclosed covered spaces.\n\n4. Strata Floor Area (SFA) - The area of a strata unit measured to the internal face of the enclosing walls and includes all enclosed covered spaces. It is applicable to strata-titled properties.",
          user_id: "b50ea9f4-07f2-4ed6-a35a-c6ccbf4089be",
          post_id: "17",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 18,
          content:
            "The URA guidelines provide different maximum allowable Gross Floor Area Ratios (GFAR) for different types of properties, depending on factors such as the property's zoning, land use, and location. The maximum GFAR for commercial properties in the Central Area, for example, is 25.0, while the maximum GFAR for residential properties in other parts of the island is typically between 1.4 and 2.8. The maximum GFAR for industrial properties can range from 1.4 to 3.5, depending on the property's zoning and location. These GFAR limits are designed to control the overall density and intensity of development in different parts of the island, and to ensure that new buildings are in line with the surrounding environment and infrastructure.",
          user_id: "b50ea9f4-07f2-4ed6-a35a-c6ccbf4089be",
          post_id: "18",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 19,
          content:
            "Yes, there are specific requirements and restrictions related to the allocation of gross floor area (GFA) to different uses under the URA guidelines. The guidelines include regulations on the permissible uses of land and buildings, as well as rules on the mix of uses within a development. The guidelines also provide guidelines on the maximum allowable GFA for each use, such as residential, commercial, or industrial, and the allocation of GFA between these uses. The allocation of GFA to different uses is dependent on the zoning and land-use restrictions in the area, as well as other factors such as the size and type of the development.",
          user_id: "b50ea9f4-07f2-4ed6-a35a-c6ccbf4089be",
          post_id: "19",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 20,
          content:
            "The URA GFA handbook plays an important role in shaping the overall density and urban form of Singapore. By setting limits on the maximum allowable GFA for different types of properties, URA is able to control the amount of development that takes place in different parts of the city. This helps to ensure that there is a balance between the need for new development and the preservation of green spaces, heritage sites, and other important features of the urban environment.",
          user_id: "b50ea9f4-07f2-4ed6-a35a-c6ccbf4089be",
          post_id: "20",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 21,
          content:
            "Headroom clearance and ceiling height are two related but distinct measurements that are important in building design. Ceiling height refers to the distance between the finished floor and the finished ceiling, and is usually measured at the lowest point of the ceiling. Headroom clearance, on the other hand, refers to the minimum distance between the finished floor and any obstruction above, such as a beam or a duct. This measurement is important to ensure that people can move around safely within a space without hitting their head on any obstructions. While ceiling height can be a factor in determining the overall spaciousness and aesthetic appeal of a room, headroom clearance is a critical safety consideration that must be carefully considered in building design.",
          user_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
          post_id: "21",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 22,
          content:
            "When there are projections on both sides of a staircase, the minimum width of the staircase is defined as the clear width between the projections. This clear width should not be less than the minimum required width for the type of building and occupancy, as specified in the relevant building codes and regulations. The projections on either side of the staircase may include handrails, balustrades, or other architectural features, and the clear width should exclude these projections. Additionally, the clear width should be measured at a height of 2.1 meters above the nosing of each stair tread. This ensures that there is sufficient space for occupants to move up and down the stairs safely and comfortably.",
          user_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
          post_id: "22",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 23,
          content:
            "An intermediate landing is required for staircases at intervals not exceeding 18 risers in the direction of travel. This ensures that there are safe and easily accessible resting points for users of the staircase, particularly in buildings with tall floors. Additionally, the intermediate landing should have a width that is equal to or greater than 1000 mm.",
          user_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
          post_id: "23",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 24,
          content:
            "A staircase with a maximum of three (3) risers is considered a 'change in level' rather than a staircase, and does not require handrails. For staircases with more than three risers, handrails must be provided on at least one side of the staircase, and the maximum number of steps allowed without an intermediate landing is limited to 18 steps.",
          user_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
          post_id: "24",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 25,
          content:
            "Yes, perforated steel staircases are required to have nosing as all stairs must have nosing. This is to provide tactile warning and prevent tripping accidents, especially for people with visual impairments. The nosing must be slip-resistant and provide a clear contrast in color and texture to the stair tread.",
          user_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
          post_id: "25",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 26,
          content:
            "Ventilation is not required for a store room in a development that does not exceed an area of 6 square metres. However, it is always a good idea to ensure that there is some form of natural ventilation or mechanical ventilation to prevent any potential build-up of moisture or stale air in the store room.",
          user_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
          post_id: "26",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 27,
          content:
            "The maximum size of any opening or gap in a barrier for industrial buildings is 150mm. This is to prevent workers from falling through or getting trapped in the opening or gap. The barrier should also be able to withstand any foreseeable impact from machinery or equipment in the surrounding area.",
          user_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
          post_id: "27",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 28,
          content:
            "The maximum thermal transmittance limit, also known as U-value, for a roof of a non-conditioned building in Singapore is 0.80 W/m²K, for light roofs.",
          user_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
          post_id: "28",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 29,
          content:
            "It is not a requirement to install CCTV in a lift under the building codes and regulations in Singapore. However, building owners or management may choose to install CCTV for security or monitoring purposes.",
          user_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
          post_id: "29",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 30,
          content:
            "Vehicular bollards needs to be installed at the main entrance of the development to protect humans from vehicles. The PE has to submit a separate ST submission to BCA, to confirm the structural integrity of the bollards.",
          user_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
          post_id: "30",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 31,
          content:
            "No, urinals for ambulant disabled are not required for industrial developments under the BCA Code of Accessibility 2019. The BCA Code of Accessibility 2019 provides guidelines on making buildings accessible for people with disabilities, but the requirements may vary depending on the building type and usage. For industrial buildings, the guidelines mainly focus on providing accessible routes of travel, such as ramps, lifts, and level landings, for people with disabilities, as well as ensuring that toilets are accessible for wheelchair users. However, urinals for ambulant disabled are not specifically required for industrial developments.",
          user_id: "f731e60c-bd8c-48a2-bc4d-7566ccb8066f",
          post_id: "31",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 32,
          content:
            "Sub-stations are exempted from the provisions related to accessibility. However, it is recommended that developers provide an accessible path of travel to the sub-station, if possible, to facilitate maintenance and servicing.",
          user_id: "f731e60c-bd8c-48a2-bc4d-7566ccb8066f",
          post_id: "32",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 33,
          content:
            "At least one alighting and boarding points must be sheltered.",
          user_id: "f731e60c-bd8c-48a2-bc4d-7566ccb8066f",
          post_id: "33",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 34,
          content:
            "The minimum number of accessible vehicle parking lots required for any development depends on the total number of car park lots provided. For the first 50 lots, at least 1 accessible lot must be provided. For the next 50 lots, at least 1 additional accessible lot must be provided. For every subsequent 200 lots, 1 additional accessible lot must be provided.",
          user_id: "f731e60c-bd8c-48a2-bc4d-7566ccb8066f",
          post_id: "34",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 35,
          content:
            "The maximum size of any obstruction attached to a wall in pedestrian areas should not exceed 100mm in order to ensure accessibility for persons with disabilities. This is to prevent any potential hazards or obstacles that may impede the movement of persons with disabilities or cause injuries. It is important to ensure that the built environment is designed and constructed to be barrier-free and accessible to all, including persons with disabilities.",
          user_id: "f731e60c-bd8c-48a2-bc4d-7566ccb8066f",
          post_id: "35",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 36,
          content:
            "These bollards should be installed at regular intervals to prevent vehicles from entering the walkway and posing a safety risk to pedestrians. The bollards should be positioned in such a way that there is a clear and unobstructed path of travel for wheelchair users and other pedestrians with mobility impairments. The bollards should also be visible and clearly marked with contrasting colors or reflective materials to ensure that they are easily identifiable.",
          user_id: "f731e60c-bd8c-48a2-bc4d-7566ccb8066f",
          post_id: "36",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 37,
          content:
            "The minimum clear opening of doorways must be 850mm measured between the face of the door and the face of the doorstop with the door open at 90 degrees.",
          user_id: "f731e60c-bd8c-48a2-bc4d-7566ccb8066f",
          post_id: "37",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 38,
          content:
            "Compliant door hardware includes lever handles, loop handles, D-shaped handles, push plates, and electronic access control systems. These types of hardware are designed to be easily operable and require minimal physical effort to use. In addition, compliant hardware should have a non-slip surface, be easy to grip, and be positioned at a height that is accessible to a person in a wheelchair or with other mobility impairments. Other compliant features may include the ability to open doors with a low level of force, the absence of sharp edges or projections, and the provision of visual contrast between the hardware and the door surface.",
          user_id: "f731e60c-bd8c-48a2-bc4d-7566ccb8066f",
          post_id: "38",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 39,
          content:
            "The minimum dimensions for an accessible individual washroom as per the Code on Accessibility 2019 are:\n\n- Clear floor area of at least 1900mm x 1900mm\n- Clearance space of at least 1700mm in front of the washbasin, water closet and shower\n- Minimum width of the entrance door to be 900mm\n- Horizontal grab bar of at least 800mm long and located 150mm from the side wall for water closet\n- Vertical grab bar of at least 700mm long and located 150mm from the corner for shower\n- Mirror to be mounted not more than 1200mm above the floor level\n- Wheelchair accessible washbasin with knee clearance of at least 680mm and height of not more than 800mm above the floor level.",
          user_id: "f731e60c-bd8c-48a2-bc4d-7566ccb8066f",
          post_id: "39",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 40,
          content:
            "The required washroom accessories include grab bars, paper towel dispensers, waste bins, soap dispensers, coat hooks, and toilet roll holders. These accessories must be installed in accordance with the BCA Code on Accessibility 2019 and the manufacturer's instructions. Grab bars must be securely mounted to the wall and able to support a minimum load of 110kg, and located at appropriate positions near the water closet, urinal, and wash basin. The height and location of these accessories must also be compliant with the accessibility code.",
          user_id: "f731e60c-bd8c-48a2-bc4d-7566ccb8066f",
          post_id: "40",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 41,
          content:
            "Under the Fire Code 2018, there are two types of means of escape that may be required in buildings, depending on the occupancy and building features. These are:\n\n1. Exit staircases: These are enclosed staircases that provide a safe and protected means of escape from the building. The exit staircase must be located in a position that allows easy access to all parts of the building and must be designed to be fire-resistant and smoke-tight. The Fire Code 2018 sets out specific requirements for the dimensions, construction, and layout of exit staircases.\n\n2. Horizontal exits: These are protected corridors or passageways that allow occupants to move from one part of the building to another without using stairs. Horizontal exits must be designed to prevent the spread of fire and smoke and must be separated from other parts of the building by fire-resistant and smoke-tight construction. The Fire Code 2018 sets out specific requirements for the dimensions, construction, and layout of horizontal exits.\n\nIn addition to these two types of means of escape, the Fire Code 2018 may also require other measures such as exit doors, ramps, and emergency escape windows, depending on the occupancy and building features. The type of means of escape required for a specific building will depend on a range of factors such as the occupancy load, travel distance, and building height.",
          user_id: "80fd60d1-8fa6-4ad4-985a-832b273189b7",
          post_id: "41",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 42,
          content:
            "Under the Fire Code 2018, the maximum travel distance for industrial developments is 45 meters. This means that occupants in an industrial development must be able to reach a point of safety within 45 meters of any point in the building. The maximum travel distance is an important requirement for means of escape and is based on the assumption that occupants will be able to move at a reasonable walking speed of 30 meters per minute. It is important for building owners and operators to ensure that the maximum travel distance requirements are met to provide a safe means of escape for the occupants in the event of a fire.",
          user_id: "80fd60d1-8fa6-4ad4-985a-832b273189b7",
          post_id: "42",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 43,
          content:
            "The minimum width of any exit access door must be at least 1 meter. This is to ensure that occupants can quickly and safely exit the building in the event of an emergency. The minimum width requirement is also intended to ensure that the door is wide enough to accommodate people with disabilities and to prevent overcrowding and bottlenecks during an evacuation. It is important for building owners and operators to ensure that all exit access doors in their buildings meet the minimum width requirements specified in the Fire Code 2018.",
          user_id: "80fd60d1-8fa6-4ad4-985a-832b273189b7",
          post_id: "43",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 44,
          content:
            "The clear width of an exit staircase is the unobstructed width of the staircase measured between handrails or, if there are no handrails, between any walls or other obstructions. The clear width is important because it determines the maximum number of people that can safely use the staircase during an emergency evacuation. Under the Fire Code 2018, the clear width of an exit staircase must be at least 1.2 meters. The clear width should be measured at a height of 900mm above the stair nosing, which is the projecting edge of the stair tread. To measure the clear width of an exit staircase, you should first remove any obstructions such as doors, screens, or other objects that might reduce the width of the staircase. Then, measure the distance between the handrails or any walls or obstructions on either side of the staircase, taking care to measure at the correct height of 900mm above the stair nosing. The resulting measurement is the clear width of the staircase.",
          user_id: "80fd60d1-8fa6-4ad4-985a-832b273189b7",
          post_id: "44",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 45,
          content:
            "Under the Fire Code 2018, the number of exits required from rooms and spaces depends on the occupancy load and the floor area of the room or space. Generally, at least two exits must be provided from each room or space to ensure that occupants have a safe means of escape in the event of a fire. For most occupancy groups, such as offices, shops, and residential units, the minimum number of exits required is two. For high hazard occupancy groups, such as factories and laboratories, additional exits may be required depending on the size and complexity of the building and the nature of the hazard.",
          user_id: "80fd60d1-8fa6-4ad4-985a-832b273189b7",
          post_id: "45",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 46,
          content:
            "A fire escape plan is an important tool for ensuring that occupants of a building can evacuate safely in the event of a fire. Under the Fire Code 2018, the fire escape plan should contain the following information:\n\n1. Floor plan: The fire escape plan should include a detailed floor plan of the building, showing the locations of all exits, stairways, fire alarm pull stations, fire extinguishers, and other fire safety equipment.\n\n2. Evacuation routes: The fire escape plan should clearly show the primary and secondary evacuation routes from each room or space in the building. These routes should be clearly marked with arrows or other symbols indicating the direction of travel.\n\n3. Assembly points: The fire escape plan should indicate the designated assembly point(s) where occupants should gather after evacuating the building. These assembly points should be located a safe distance away from the building and should be easily accessible by emergency services.\n\n4. Emergency contacts: The fire escape plan should include a list of emergency contacts, such as the local fire department and building management, along with their phone numbers and other relevant contact information.\n\n5. Special instructions: The fire escape plan should include any special instructions or procedures that occupants should follow in the event of a fire, such as instructions for using fire extinguishers or operating fire doors.\n\nIt is important for building owners and operators to ensure that the fire escape plan is posted in a visible location in the building and that all occupants are trained on the plan and know what to do in the event of a fire.",
          user_id: "09b4d184-0025-4fdd-91e2-daceaa806e21",
          post_id: "46",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 47,
          content:
            "Unprotected openings at exit staircases can compromise the safety of occupants during a fire emergency. Therefore, the Fire Code 2018 sets out certain requirements to ensure that unprotected openings do not impede the safe evacuation of occupants. These requirements include:\n\n1. Maximum size: The total area of unprotected openings, such as windows or louvers, should not exceed 10% of the aggregate area of the exit staircase walls on any storey.\n\n2. Height: Unprotected openings should not be located more than 1.8 meters above the floor level of the exit staircase.\n\n3. Fire-resistant materials: If unprotected openings are installed, they should be constructed of fire-resistant materials with a fire resistance rating of at least 1 hour.\n\n4. Automatic fire shutters: If the unprotected openings are located on the external walls of the exit staircase, they should be equipped with automatic fire shutters that are activated by the building's fire alarm system.\n\n5. Smoke control: Adequate smoke control measures should be provided to prevent smoke from entering the exit staircase through unprotected openings.\n\nIt is important for building owners and operators to ensure that unprotected openings at exit staircases are properly designed and installed in accordance with the Fire Code 2018, to ensure the safety of occupants during a fire emergency.",
          user_id: "09b4d184-0025-4fdd-91e2-daceaa806e21",
          post_id: "47",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 48,
          content:
            "The remoteness of exits refers to the distance that occupants must travel to reach a safe means of egress during a fire emergency. The Fire Code 2018 sets out certain requirements for the remoteness of exits to ensure that occupants can evacuate the building safely. These requirements include:\n\n1. Maximum travel distance: The maximum travel distance to reach an exit should not exceed 30 meters in any direction from any point in a room or space.\n\n2. Dead-end corridors: If a room or space has only one exit, the maximum travel distance to the exit should not exceed 15 meters. In addition, dead-end corridors should be avoided wherever possible.\n\n3. Number of exits: Sufficient exits should be provided to ensure that all occupants can evacuate the building within the maximum travel distance.\n\n4. Obstructions: The path to exits should be free from obstructions, such as storage or equipment, that could impede egress.\n\n5. Illumination: Adequate illumination should be provided along the path to exits to ensure that occupants can evacuate safely, even in low-light conditions.\n\nIt is important for building owners and operators to ensure that the remoteness of exits is properly designed and maintained in accordance with the Fire Code 2018, to ensure the safety of occupants during a fire emergency.",
          user_id: "09b4d184-0025-4fdd-91e2-daceaa806e21",
          post_id: "48",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 49,
          content:
            "PWD holding points are designated areas within a building where persons with disabilities (PWDs) can wait for assistance during an emergency evacuation. The Fire Code 2018 sets out certain requirements for the siting of PWD holding points to ensure that they are safe and accessible. These requirements include:\n\n1. Location: PWD holding points should be located along the accessible route of egress, in a safe area that is free from smoke, heat, and fire.\n\n2. Size: The size of the holding point should be sufficient to accommodate at least one wheelchair-bound occupant, and additional persons who may assist the occupant.\n\n3. Access: The holding point should be easily accessible by persons with disabilities, with a clear width of at least 1200mm and no steps or other barriers.\n\n4. Signage: The holding point should be clearly identified with signage that is visible and recognizable to occupants, particularly PWDs.\n\n5. Communication: The holding point should be equipped with communication devices, such as intercoms or mobile phones, to allow occupants to contact emergency responders or building staff.\n\nIt is important for building owners and operators to ensure that PWD holding points are properly designed and maintained in accordance with the Fire Code 2018, to ensure the safety of PWDs during a fire emergency.",
          user_id: "09b4d184-0025-4fdd-91e2-daceaa806e21",
          post_id: "49",
          upvote: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 50,
          content:
            "The Fire Code 2018 sets out requirements for fire extinguisher provisions to ensure that there are adequate means of controlling small fires in the event of a fire emergency. Some of the requirements include:\n\n1. Number of extinguishers: The number of fire extinguishers required is based on the floor area, occupancy type, and fire hazard classification of the building.\n\n2. Types of extinguishers: The types of fire extinguishers required should be appropriate for the expected class of fire hazard, such as Class A, B, C, D, or F fires.\n\n3. Location: Fire extinguishers should be located in accessible and conspicuous locations, and be easily identifiable with proper signage.\n\n4. Mounting: Fire extinguishers should be mounted on brackets or in cabinets, and be easily accessible for use.\n\n5. Maintenance: Fire extinguishers should be maintained in good working condition, with regular inspections and servicing to ensure that they are fully charged and functional.\n\nIt is important for building owners and operators to comply with the fire extinguisher provisions set out in the Fire Code 2018, to ensure that there are adequate means of controlling small fires and preventing them from escalating into larger fires.",
          user_id: "09b4d184-0025-4fdd-91e2-daceaa806e21",
          post_id: "50",
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
