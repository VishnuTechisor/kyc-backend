const callModel = require("../../models/callModel");

const updateCall = async (req, res) => {
   
        let product_id = req.params.id
        // console.log(product_id)
        try {
            const update_product={
                // productName,
                // quantity,
                // dealType,
                // script,
                // position,
                // price1,
                // price2,
                // price3,
                // target,
                // stopLoss,
                pnl,
                // description,
                statusValue,
                customizeValue,
                // created_by,
                // updated_by,
              } = req.body;
              // console.log(update_product)
          let product = callModel.findById(product_id)
          if (!product) {
            return res.status(400).json({
              message: "no products found"
            })
          }
          let productOne = await callModel.findByIdAndUpdate(product_id, { $set: update_product }, { new: true })
          res.status(202).json({
            result: "updated sucessfully",
            productDetails: productOne
          })
          // console.log(productOne)
        }
        catch (err) {
      
        }
      
};

module.exports = updateCall;
