/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cgsxw93ijzc92as")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rt3kviba",
    "name": "custom_cred",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gdjizpg937yepj6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cgsxw93ijzc92as")

  // remove
  collection.schema.removeField("rt3kviba")

  return dao.saveCollection(collection)
})
