const { default: mongoose } = require("mongoose");

const profileSchema = new mongoose.Schema({
    userId: String,
    role: String,
    email: String,
    isPremiumUser: Boolean,
    memberShipType: String,
    memberShipStartDate: String,
    memberShipEndDate: String,
    recruiterInfo: {
        name: String,
        companyName: String,
        companyRole: String,
    },
    candidateInfo: {
        name: String,
        currentJobLocation: String,
        prefferedJobLocation: String,
        currentSalary: String,
        noticePeriod: String,
        currentCompany: String,
        previousCompanies: String,
        totalExperience: String,
        college: String,
        collegeLocation: String,
        graduatedYear: String,
        linkedinProfile: String,
        githubProfile: String,
        resume: String,
    },
});

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);

export default Profile;
