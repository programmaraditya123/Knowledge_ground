const DsaModal = require("../Models/DsaModal");
const MathModal = require("../Models/MathModal");
const OperatingSystemModal = require("../Models/OperatingSystemModal");
const PythonModal = require("../Models/PythonModal");

const dsaContentController = async (req,res) => {
    try {
         const {indexTopic,parenttopic,content} = req.body;
         //const {image} = req.files;
         //validation
         switch(true){
            case !indexTopic:
                return res.status(500).send({error:"indexTopic is required"});
            case !parenttopic:
                return res.status(500).send({error:"parenttopic is required"});
            case !content:
                return res.status(500).send({error:"content is required"});
            // case image && image.size > 1000000:
            //     return res.status(500).send({error:"Image size should not exceed 100kb"});
         }
         const cont = await new DsaModal({indexTopic, parenttopic, content}).save();
         res.status(200).send({
            message:"Content posted successfully",
            cont
         })
         
         
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:"Error in pOsting COntent",
            error
        });      
    }
};




//get dsa coontent
const getDsaController = async (req,res) => {
    try {
        const dsaContent = await DsaModal.find({});
        res.status(200).send({
            message:"DSA content fetched successfully",
            dsaContent
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:"Error in getting DSA content",
            error
        });
        
    }
};


const dsaContController = async (req,res) => {
    try {
        const {id} = req.params;
        const cont = await DsaModal.findOne({_id:id});
        res.status(200).send({
            message:"Dsa content and indextopic fetched successfully",
            cont
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:"Error in getting DSA content",
            error
        });
        
    }
};




//MATH CONTROLLER
const mathContentController = async (req,res) => {
    try {
        const {indexTopic,parenttopic,content} = req.body;
        //const {image} = req.files;
        //validation
        switch(true){
           case !indexTopic:
               return res.status(500).send({error:"indexTopic is required"});
           case !parenttopic:
               return res.status(500).send({error:"parenttopic is required"});
           case !content:
               return res.status(500).send({error:"content is required"});
           // case image && image.size > 1000000:
           //     return res.status(500).send({error:"Image size should not exceed 100kb"});
        }
        const cont = await new MathModal({indexTopic, parenttopic, content}).save();
        res.status(200).send({
           message:"Content posted successfully",
           cont
        })
        
        
       
   } catch (error) {
       console.log(error);
       res.status(500).send({
           message:"Error in pOsting COntent",
           error
       });      
   }
};

const getMathController = async (req,res) => {
    try {
        const dsaContent = await MathModal.find({});
        res.status(200).send({
            message:"DSA content fetched successfully",
            dsaContent
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:"Error in getting DSA content",
            error
        });
        
    }
};

const mathContController = async (req,res) => {
    try {
        const {id} = req.params;
        const cont = await MathModal.findOne({_id:id});
        res.status(200).send({
            message:"Dsa content and indextopic fetched successfully",
            cont
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:"Error in getting DSA content",
            error
        });
        
    }
};


const operatingsystemContentController = async (req,res) => {
    try {
        const {indexTopic,parenttopic,content} = req.body;
        //const {image} = req.files;
        //validation
        switch(true){
           case !indexTopic:
               return res.status(500).send({error:"indexTopic is required"});
           case !parenttopic:
               return res.status(500).send({error:"parenttopic is required"});
           case !content:
               return res.status(500).send({error:"content is required"});
           // case image && image.size > 1000000:
           //     return res.status(500).send({error:"Image size should not exceed 100kb"});
        }
        const cont = await new OperatingSystemModal({indexTopic, parenttopic, content}).save();
        res.status(200).send({
           message:"Content posted successfully",
           cont
        })
        
        
       
   } catch (error) {
       console.log(error);
       res.status(500).send({
           message:"Error in pOsting COntent",
           error
       });      
   }
};

const getoperatingsystemController = async (req,res) => {
    try {
        const dsaContent = await OperatingSystemModal.find({});
        res.status(200).send({
            message:"DSA content fetched successfully",
            dsaContent
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:"Error in getting DSA content",
            error
        });
        
    }
};

const operatingsystemContController = async (req,res) => {
    try {
        const {id} = req.params;
        const cont = await OperatingSystemModal.findOne({_id:id});
        res.status(200).send({
            message:"Dsa content and indextopic fetched successfully",
            cont
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:"Error in getting DSA content",
            error
        });
        
    }
};





const pythonContentController = async (req, res) => {
    try {
        const {indexTopic,parenttopic,content} = req.body;
        //const {image} = req.files;
        //validation
        switch(true){
           case !indexTopic:
               return res.status(500).send({error:"indexTopic is required"});
           case !parenttopic:
               return res.status(500).send({error:"parenttopic is required"});
           case !content:
               return res.status(500).send({error:"content is required"});
           // case image && image.size > 1000000:
           //     return res.status(500).send({error:"Image size should not exceed 100kb"});
        }
        const cont = await new PythonModal({indexTopic, parenttopic, content}).save();
        res.status(200).send({
           message:"Content posted successfully",
           cont
        })
        
        
       
   } catch (error) {
       console.log(error);
       res.status(500).send({
           message:"Error in pOsting COntent",
           error
       });      
   }
};

const getpythonController = async (req, res) => {
    try {
        const dsaContent = await PythonModal.find({});
        res.status(200).send({
            message:"DSA content fetched successfully",
            dsaContent
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:"Error in getting DSA content",
            error
        });
        
    }
};

const pythonContController = async (req, res) => {
    try {
        const {id} = req.params;
        const cont = await PythonModal.findOne({_id:id});
        res.status(200).send({
            message:"Dsa content and indextopic fetched successfully",
            cont
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:"Error in getting DSA content",
            error
        });
        
    }
};

module.exports = {dsaContentController,getDsaController,dsaContController,
    mathContentController,getMathController,mathContController,operatingsystemContentController,
    getoperatingsystemController,operatingsystemContController,
    pythonContentController,getpythonController,pythonContController};