/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cgsxw93ijzc92as")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kkg1a5qu",
    "name": "credential_type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "university",
        "license",
        "membership",
        "exam",
        "other"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cgsxw93ijzc92as")

  // remove
  collection.schema.removeField("kkg1a5qu")

  return dao.saveCollection(collection)
})
