"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "authorities",
      [
        {
          name: "Urban Redevelopment Authority",
          acronym: "URA",
          logo_url:
            "https://firebasestorage.googleapis.com/v0/b/kaibo-capstone.appspot.com/o/Stat%20Board%20Logo%2FURA.png?alt=media&token=2038e5bb-797f-41ee-8ab7-46e6941cb48b",
          admin_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
        },
        {
          name: "Building and Construction Authority",
          acronym: "BCA",
          logo_url:
            "https://firebasestorage.googleapis.com/v0/b/kaibo-capstone.appspot.com/o/Stat%20Board%20Logo%2FBCA.png?alt=media&token=5b959cff-8c03-4757-9fa0-4084011d7117",
          admin_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
        },
        {
          name: "Singapore Civil Defence Force",
          acronym: "SCDF",
          logo_url:
            "https://firebasestorage.googleapis.com/v0/b/kaibo-capstone.appspot.com/o/Stat%20Board%20Logo%2FSCDF.png?alt=media&token=78bbce12-47be-4a86-a991-7c5e3d80da1a",
          admin_id: "80fd60d1-8fa6-4ad4-985a-832b273189b7",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("authorities", null, {});
  },
};
