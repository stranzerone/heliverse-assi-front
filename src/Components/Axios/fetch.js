import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchedData = async () => {
 
 
  try {
    const response = await axios.get("http://localhost:5000", {
      headers: {
        "Content-Type": "application/json",
        // You can add more headers as needed
      },
    });

    if (response && response.data) {
      return response.data
    } else {
      console.log("No data found");
    }
  } catch (error) {
    console.error(error);
  }
};



export const addUsers = async (firstName,lastName,gender,email,domain,availability) => {
  try {
    const id = nanoid()
    console.log(firstName,lastName,gender,email,domain,availability)
    const response = await axios.post("http://localhost:5000/createUser",{id,firstName,lastName,gender,email,domain,availability}, {
      headers: {
        "Content-Type": "application/json",
        // You can add more headers as needed
      },
    });

    if (response) {
      return response.data.staus
    } else {
      console.log("user not added");
    }
  } catch (error) {
    console.error(error);
  }
};




export const delUser = async (id) => {
  try {
    console.log(id);

    const response = await axios.delete(`http://localhost:5000/deleteUser/${id}`, {
      headers: {
        "Content-Type": "application/json",
        // You can add more headers as needed
      },
    });

    if (response) {
      return response.data.status;
    } else {
      console.log("User not deleted");
    }
  } catch (error) {
    console.error(error);
  }
};
