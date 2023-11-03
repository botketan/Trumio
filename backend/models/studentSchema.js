import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    // schema of student model 
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    email: {
        type: String
    },
    mobileNumber: {
        required:true,
        type: String
    },
    password: {
        required:true,
        type: String
    },
    //*********Onboarding page*********/
    tagline: {
        required: true,
        type: String
    },
    professionalIntroduction: {
        required: true,
        type: String
    },
    role: {
        required: true,
        type: String
    },
    workExperienceYear: {
        type: Number
    },
    workExperienceMonth: {
        type: Number
    },
    //**********Language**********/
    languageSpeak: {
        type: [String],
        validate: v => Array.isArray(v) && v.length <= 5,  //check if array has 0 to 5 languages
    },
    languageRead: {
        type: [String],
        validate: v => Array.isArray(v) && v.length <= 5, 
    },
    languageWrite: {
        type: [String],
        validate: v => Array.isArray(v) && v.length <= 5, 
    },
    //**********Location***********//
    stuentCity: {
        required: true,
        type: String
    },
    stuentState: {
        required: true,
        type: String
    },
    stuentCountry: {
        required: true,
        type: String
    },
    stuentAddress: {
        type: String
    },
    stuentHouseNo: {
        type: Number
    },
    stuentZipCode: {
        type: Number
    },
    //**********Education***********/
    educationInstitution: {
        required: true,
        type: String
    },
    educationLevel: {
        required: true,
        type: String
    },
    //***********Experience**********/
    skills: {
        type: [String],
        validate: v => Array.isArray(v) && v.length > 0 && v.length <= 5,  //check if array is not empty and has 1 to 5 languages
    },
    tools: {
        type: [String],
        validate: v => Array.isArray(v) &&v.length <= 5,
    },
    certificate: {
        type: [String],
        validate: v => Array.isArray(v) &&v.length <= 5,
    },
    completedProjects:{
        type:Number
    },
    //*********Availability**********/
    preferredWorkingTimeZone: {
        required: true,
        type: String
        //maybe an int that stores timezone offset
    },
    weekdayStartTime:{
        required: true,
        type: Date
    },
    weekdayEndTime:{
        required: true,
        type: Date
    },
    weekdayWorkingDays:{
        type: [String],
    },
    weekendStartTime:{
        required: true,
        type: Date
    },
    weekendEndTime:{
        required: true,
        type: Date
    },
    weekendWorkingDays:{
        type: [String],
    },
    //********Fees**********/
    feesCurrency:{
        required: true,
        type: String
    },
    feesHourly:{
        required: true,
        type: Number
    },
    //**********Social links***********/
    linkedin:{
        type:String
    },
    twitter:{
        type:String
    },
    github:{
        type:String
    },
    miscSocialLinks:{
        type: [String]
    },
    //********Earnings*********/
    earningsTotal:{
        type: Number, default: 0,
        required:true
    },
    earningsCompleted:{
        type: Number, default: 0,
        required:true
    },
    //*********Rewards**********/
    referralRewards:{
        type: Number, default: 0,
        required:true
    },
    workRewards:{
        type: Number, default: 0,
        required:true
    },
    //********Projects***********/
    activeProjects:{
        type: [String]
    },
    upcomingProjects:{
        type: [String]
    },
    recommendedProjects:{
        type: [String]
    },
    //********Teams***********/
    myTeams:{
        type:Object,
    },
    teamInvites:{
        type:Object,
    },
    recommendedTeams:{
        type:Object,
    },
    //********Disputes*********/
    disputes:{
        type:Object
    }
});

export const student = mongoose.model("student", studentSchema);
