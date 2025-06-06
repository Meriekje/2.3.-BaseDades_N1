db.glasses.aggregate([
  {
    $match: { _id: ObjectId("68075499a1a5295de9b71238") } // ID de les ulleres que volem consultar
  },
  {
    $lookup: {
      from: "suppliers",
      localField: "supplier_id",
      foreignField: "_id",
      as: "supplier"
    }
  },
  {
    $lookup: {
      from: "sales",
      localField: "_id",
      foreignField: "glasses_id",
      as: "sales"
    }
  },
  {
    $unwind: {
      path: "$sales",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $lookup: {
      from: "clients",
      localField: "sales.client_id",
      foreignField: "_id",
      as: "sales.client"
    }
  },
  {
    $group: {
      _id: "$_id",
      brand: { $first: "$brand" },
      frame_type: { $first: "$frame_type" },
      price: { $first: "$price" },
      supplier: { $first: { $arrayElemAt: ["$supplier", 0] } },
      clients: { $push: { $arrayElemAt: ["$sales.client", 0] } }
    }
  }
])
