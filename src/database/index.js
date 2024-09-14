const { default: mongoose } = require("mongoose")

const connectToDB = async () => {
    const connectionURL = "mongodb+srv://dbuser:snadeema@cluster0.intzdzn.mongodb.net/"
    mongoose.connect(connectionURL)
        .then(() => console.log("jobportal connection successfully"))
        .catch((error) => console.log(error));
}

export default connectToDB