/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8t04lr16neextl8",
    "created": "2023-11-15 19:51:59.091Z",
    "updated": "2023-11-15 19:51:59.091Z",
    "name": "Uniquely",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3ja0qzk6",
        "name": "product_id",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "cutzttnj",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8t04lr16neextl8");

  return dao.deleteCollection(collection);
})
