const mongoose = require("mongoose");
// const passwordValidator = require('password-validator')


//_________ Validations : Name  ________________

const isValidName = function (name) {
  const regexName = /^[a-zA-Z ]+$/;
  return regexName.test(name);
};

//_________ Validations : Title  ________________

const isValidString = function (value) {
    if (typeof value ==="undefined" || typeof value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    if (typeof value === "number" && value.trim().length === 0) return false  
    if (typeof value === "object") return false
  const regexTitle = /^[a-zA-Z ]+$/;
  return regexTitle.test(value);
};
const isValidString2 = function (value) {
  if (typeof value ==="undefined" || typeof value === null) return false
  if (typeof value === "string" && value.trim().length === 0) return false
  if (typeof value === "number" && value.trim().length === 0) return false  
  if (typeof value === "object") return false
  const regexTitle = /^[a-zA-Z ]+([0-9]+)?[!@#$%^&*_+=]?/;
  return regexTitle.test(value);
};
//_________ Validations : Mobile No ________________

const isValidMobileNo = function (phone) {
  const regexMob = /^[6-9]\d{9}$/
  return regexMob.test(phone);
};

const isValidPassword = (password) => {
  const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  return regPass.test(password)
}
const isValidPincode = (pincode) => {
  const regPin = /^[1-9][0-9]{5}$/
  return regPin.test(pincode)
}
//_________ Validations : Email  ________________

const isValidEmail = function (email) {
  const regexEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regexEmail.test(email);
};

//_________ Validations : ISBN solved ________________

const isValidISBN = function (ISBN) {
  const isbnRegex = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/
  return isbnRegex.test(ISBN);
};

//_________ Validations :  ObjectId ________________
 
const isValidObjectId = function (objectId) {
  return mongoose.Types.ObjectId.isValid(objectId);
};

//_________ Validations : Values ________________

  const isValid = (value) => {
    if (typeof value ==="undefined" || typeof value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    if (typeof value === "number" && value.trim().length === 0) return false  
     
     return true
}

//_________ Validations : ReleasedAt ________________

const isValidReleasedAt = (releasedAt) => {
  return /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(releasedAt);
};

//_________ Export : Modules  ________________

module.exports = {
  isValid, isValidISBN, isValidString, isValidMobileNo,
  isValidEmail, isValidName, isValidObjectId, isValidReleasedAt, isValidPassword, isValidPincode,isValidString2
};
