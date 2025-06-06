import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  // without useCallback
  // const copyPassword = () => {
  //   passwordRef.current?.select();
  //   passwordRef.current?.setSelectionRange(0, 999); 
  //   window.navigator.clipboard.writeText(password)
  // }

  // with useCallback
  const copyPassword = useCallback(() => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);  // play with it 
    window.navigator.clipboard.writeText(password)

  },[password])

  const passwordGenerator = useCallback(() => {
      let string = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
      let numbers = "123456789";
      let characters = "!@#$%^&*";
      let genpassword = "";

      if (numAllowed) string += numbers;
      if (charAllowed) string += characters;

      for (let index = 1; index <= length; index++) {
        let random = Math.floor(Math.random() * string.length + 1);
        genpassword += string[random];
      }
      setPassword(genpassword)
      console.log(genpassword)
    }, [length, numAllowed, charAllowed, setPassword]); //this dependency is mainly for better optimizatin, and not equal to useEffect's dependency list

    useEffect(() => {passwordGenerator()}, [length, numAllowed, charAllowed, setPassword, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="cursor-pointer outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0" onClick={copyPassword}>
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label> Length: {length}</label>
          </div>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Number</label>

          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
