import React from "react";

const rePassPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
const reNamePattern  =  /(^[a-zA-Z'-]+$){1,30}/i;
const reUserNamePattern  =  /[A-Za-z]{5,30}/;

export const correctName = (input) =>
reNamePattern.test(input) ? undefined : (<h5>Wrong Name</h5>)

export const correctUserName = (input) =>
reUserNamePattern.test(input) ? undefined : (<h5>Username should contain at least 5 letters</h5>)

export const correctPassword = input =>
!rePassPattern.test(input) ? (<h5>Wrond password name</h5>) : undefined;

export const matchInput = (input, allInputs) =>
(input === allInputs.password) ? undefined : (<h5> Passwords should be the same</h5>);