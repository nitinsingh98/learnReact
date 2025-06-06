import { useState, useCallback } from "react";



  const passwordGenerator = () => {
      let length = 8
      let string = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789!@#$%^&*";
      let numbers = "123456789";
      let characters = "!@#$%^&*";
      let genpassword = "";


      for (let index = 1; index <= length; index++) {
        let random = Math.floor(Math.random() * string.length + 1);
        genpassword += string[random];
      }
      
      
      console.log(genpassword)
    };

passwordGenerator()
    
