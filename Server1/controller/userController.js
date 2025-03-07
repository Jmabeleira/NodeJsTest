import express from 'express';

const UserList = [
    {
        id: 1,
        name: "John Doe",
        email: "John@hotmail.com"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "Jane@hotmail.com"
    },
    {
        id: 3,
        name: "John Smith",
        email: "John@gmail.com"
    },
    {
        id: 4,
        name: "Jane Smith",
        email: "abc@gmail.com"
    }];

export const getUsers = async (req,res) => {
    try {
        console.log("Hello from Getusers");
        res.status(200).json(UserList);
    }catch (error) {
        res.status(404).json({ message: error.message });
    }   
};


export const createUser = async(req , res ) =>{
    var newUser = req.body;
    console.log(newUser.name);
    res.redirect('/');
};